/* eslint-disable no-unused-vars */
import { useGetAllQuery } from "../redux/features/forms/formsApi";
import { useDispatch, useSelector } from "react-redux";
import { useGetProxyQuery } from "../redux/features/user/userApi";
import { useNavigate } from "react-router-dom";
import { setStep } from "../redux/features/user/userSlice";
import { useUpdateUserMutation } from "../redux/features/user/userApi";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useState } from "react";

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
const ProfileCard = ({ data, isLoading, onEdit }) => {
  if (isLoading)
    return <div className="bg-gray-200 rounded-lg p-8 h-96 animate-pulse" />;

  return (
    <div className="bg-gray-200 rounded-lg p-8 flex flex-col items-center group relative">
      {/* Edit Icon */}
      <button
        onClick={onEdit}
        className="absolute top-4 right-4 hidden group-hover:flex bg-white p-2 rounded-full shadow-md"
      >
        ✏️
      </button>

      <div className="relative w-48 h-48">
        <svg className="w-48 h-48 transform -rotate-90 absolute">
          <circle
            cx="96"
            cy="96"
            r="88"
            stroke="#d1d5db"
            strokeWidth="16"
            fill="none"
          />
          <circle
            cx="96"
            cy="96"
            r="88"
            stroke="#10b981"
            strokeWidth="16"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 88}`}
            strokeDashoffset={`${
              2 *
              Math.PI *
              88 *
              (1 - (data?.data?.percentages?.totalPercentage || 75) / 100)
            }`}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>

        <div className="absolute inset-2 rounded-full overflow-hidden bg-white flex items-center justify-center">
          {data?.data?.user?.imgUrl ? (
            <img
              src={data.data.user.imgUrl}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-4xl font-semibold">👤</span>
          )}
        </div>
      </div>
      <div className=" pb-4">
        <p className="text-gray-800 text-xl font-semibold mt-4">
          {data?.data?.user?.firstName || "No"} {data?.data?.user?.lastName || "data provided"}
        </p>
      </div>
    </div>
  );
};

// Profile Info Component
const ProfileInfo = ({ data, isLoading, onEdit }) => {
  if (isLoading)
    return <div className="bg-gray-200 rounded-lg p-8 h-96 animate-pulse" />;

  return (
    <div className="bg-gray-200 rounded-lg p-8 group relative">
      {/* Edit Icon */}
      <button
        onClick={onEdit}
        className="absolute top-4 right-4 hidden group-hover:flex bg-white p-2 rounded-full shadow-md"
      >
        ✏️
      </button>

      <h3 className="text-gray-700 font-semibold mb-6">Profile info</h3>

      <div className="space-y-6">
        <div className="border-b border-gray-300 pb-4">
          <p className="text-gray-600 text-sm mb-1">City, State</p>
          <p className="text-gray-800">
            {data?.data?.user?.city && data?.data?.user?.state
              ? `${data?.data?.user?.city}. ${data?.data?.user?.state}`
              : "No data provided"}
          </p>
        </div>

        <div className="border-b border-gray-300 pb-4">
          <p className="text-gray-600 text-sm mb-1">Phone</p>
          <p className="text-gray-800">
            {data?.data?.user?.phoneNumber || "No data provided"}
          </p>
        </div>

        <div className="border-b border-gray-300 pb-4">
          <p className="text-gray-600 text-sm mb-1">Date Of Birth</p>
          <p className="text-gray-800">
            {data?.data?.user?.dateOfBirth
              ? new Date(data?.data?.user?.dateOfBirth).toLocaleDateString()
              : "No data provided"}
          </p>
        </div>
      </div>
    </div>
  );
};

const EditProfileModal = ({ isOpen, onClose, user }) => {
  const [updateProfile] = useUpdateUserMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      city: user?.city,
      state: user?.state,
      phoneNumber: user?.phoneNumber,
      dateOfBirth: user?.dateOfBirth?.split("T")[0],
    },
  });

  const onSubmit = async (formData) => {
    try {
      let base64Image = user?.imgUrl;

      if (formData.image && formData.image[0]) {
        base64Image = await getBase64(formData.image[0]);
      }

      const res = await updateProfile({
        city: formData.city,
        phoneNumber: formData.phoneNumber,
        dateOfBirth: formData.dateOfBirth,
        imgUrl: base64Image,
      });

      if (res.error) return toast.error(res.error.data?.message);

      toast.success("Profile Updated");
      onClose();
    } catch (error) {
      toast.error("Update failed");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-6">Edit Profile</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("firstName")}
            className="w-full border p-2 rounded"
          />
          <input
            {...register("lastName")}
            className="w-full border p-2 rounded"
          />
          <input {...register("city")} className="w-full border p-2 rounded" />
          <input {...register("state")} className="w-full border p-2 rounded" />
          <input
            {...register("phoneNumber")}
            className="w-full border p-2 rounded"
          />
          <input
            type="date"
            {...register("dateOfBirth")}
            className="w-full border p-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Tabs Component
const Tabs = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 rounded-lg flex">
      <button
        onClick={() => {
          dispatch(setStep(2));
          navigate(
            `${data.medical[0]?._id ? "/update/medical" : "/signup/form"}`,
          );
        }}
        className={`flex-1 py-4 text-center font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-300`}
      >
        Medical
      </button>
      <button
        onClick={() => {
          dispatch(setStep(1));
          navigate(
            `${data.financial[0]?._id ? "/update/profile" : "/signup/form"}`,
          );
        }}
        className={`flex-1 py-4 text-center font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-300`}
      >
        Personal Items &Effects
      </button>
      <button
        onClick={() => {
          dispatch(setStep(3));
          navigate(
            `${data.financial[0]?._id ? "/update/financial" : "/signup/form"}`,
          );
        }}
        className={`flex-1 py-4 text-center font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-300`}
      >
        Financial
      </button>
      <button
        onClick={() => {
          dispatch(setStep(4));
          navigate(
            `${data.homeauto[0]?._id ? "/update/home" : "/signup/form"}`,
          );
        }}
        className={`flex-1 py-4 text-center font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-300`}
      >
        Home & Auto
      </button>
      <button
        onClick={() => {
          dispatch(setStep(5));
          navigate(
            `${data.socialInfo[0]?._id ? "/update/social" : "/signup/form"}`,
          );
        }}
        className={`flex-1 py-4 text-center font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-300`}
      >
        Social Media & Online
      </button>
    </div>
  );
};

// Suggestions Component
const Suggestions = ({ suggestions }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-8">
      <h3 className="text-gray-700 font-semibold mb-6">Suggestions</h3>
      <div className="space-y-4">
        {suggestions && suggestions.length > 0 ? (
          suggestions.map((suggestion, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 border border-gray-300"
            >
              <p className="text-gray-700">{suggestion || "No data provided"}</p>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-lg p-4 border border-gray-300">
            <p className="text-gray-700">No data provided</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Proxy Component
const Proxy = () => {
  const userid = useSelector((state) => state.auth.user.userId);
  const { data, isLoading } = useGetProxyQuery(userid);
  if (isLoading) {
    return (
      <div className="w-full mx-auto h-96 mt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }
  const proxies = data?.data.proxysetDetails || [];
  return (
    <div className="bg-gray-200 rounded-lg p-8">
      <h3 className="text-gray-700 font-semibold mb-6">Proxy</h3>
      <div className="space-y-6">
        {proxies.map((proxy) => (
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              {proxy.imgUrl ? (
                <img
                  src={proxy.imgUrl}
                  alt="Proxy"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-sm font-semibold">👤</span>
              )}
            </div>
            <div>
              <p className="text-gray-800 font-medium">
                {proxy?.email || "No data provided"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Component
const ProfilePage = () => {
  const { data: profileData, isLoading } = useGetAllQuery();
  const [openModal, setOpenModal] = useState(false);

  if (isLoading) {
    return (
      <div className="w-full mx-auto h-96 mt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <ProfileCard data={profileData} onEdit={() => setOpenModal(true)} />
          <ProfileInfo data={profileData} onEdit={() => setOpenModal(true)} />
        </div>

        <Tabs data={profileData?.data} />

        <div className="grid grid-cols-2 gap-6 mt-6">
          <Suggestions suggestions={profileData?.data?.suggestions} />
          <Proxy />
        </div>
      </div>

      <EditProfileModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        user={profileData?.data?.user}
      />
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="p-6">
        <ProfilePage />
      </div>
    </>
  );
};

export default Home;
