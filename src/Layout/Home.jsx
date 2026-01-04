import { useGetAllQuery } from "../redux/features/forms/formsApi";
import { useDispatch, useSelector } from "react-redux";
import { useGetProxyQuery } from "../redux/features/user/userApi";
import { useNavigate } from "react-router-dom";
import { setStep } from "../redux/features/user/userSlice";

const ProfileCard = ({ data, isLoading }) => {
  if (isLoading)
    return <div className="bg-gray-200 rounded-lg p-8 h-96 animate-pulse" />;

  return (
    <div className="bg-gray-200 rounded-lg p-8 flex flex-col items-center">
      <h3 className="text-gray-600 text-sm mb-1">
        {/* {data.firstName} {data.lastName} */}
      </h3>
      {/* <p className="text-blue-500 font-semibold mb-6">{data.role}</p> */}
      <div className="relative w-48 h-48">
        {/* Progress circle background */}
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
              (1 - (data?.percentages?.completionPercentage || 75) / 100)
            }`}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        {/* Profile image */}
        <div className="absolute inset-2 rounded-full overflow-hidden bg-white flex items-center justify-center">
          {data?.user?.imgUrl ? (
            <img
              src={data.user.imgUrl}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-4xl font-semibold">👤</span>
          )}
        </div>
      </div>
    </div>
  );
};

// Profile Info Component
const ProfileInfo = ({ data, isLoading }) => {
  if (isLoading)
    return <div className="bg-gray-200 rounded-lg p-8 h-96 animate-pulse" />;

  return (
    <div className="bg-gray-200 rounded-lg p-8">
      <h3 className="text-gray-700 font-semibold mb-6">Profile info</h3>

      <div className="space-y-6">
        <div className="border-b border-gray-300 pb-4">
          <p className="text-gray-600 text-sm mb-1">City, State</p>
          <p className="text-gray-800">
            {data?.data?.user?.city}. {data?.data?.user?.state}
          </p>
        </div>

        <div className="border-b border-gray-300 pb-4">
          <p className="text-gray-600 text-sm mb-1">Phone</p>
          <p className="text-gray-800">{data?.data?.user?.phoneNumber}</p>
        </div>

        <div className="border-b border-gray-300 pb-4">
          <p className="text-gray-600 text-sm mb-1">Date Of Birth</p>
          <p className="text-gray-800">
            {new Date(data?.data?.user?.dateOfBirth).toLocaleDateString()}
          </p>
        </div>

        <div>
          <p className="text-gray-600 text-sm mb-1">Member since</p>
          <p className="text-gray-800">
            {new Date(data?.data?.user?.createdAt).toLocaleDateString()}
          </p>
        </div>
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
            `${data.medical[0]._id ? "/update/medical" : "/signup/form"}`
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
            `${data.financial[0]._id ? "/update/profile" : "/signup/form"}`
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
            `${data.financial[0]._id ? "/update/financial" : "/signup/form"}`
          );
        }}
        className={`flex-1 py-4 text-center font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-300`}
      >
        Financial
      </button>
      <button
        onClick={() => {
          dispatch(setStep(4));
          navigate(`${data.homeauto[0]._id ? "/update/home" : "/signup/form"}`);
        }}
        className={`flex-1 py-4 text-center font-medium transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-300`}
      >
        Home & Auto
      </button>
      <button
        onClick={() => {
          dispatch(setStep(5));
          console.log(data.socialInfo[0]._id);
          navigate(
            `${data.socialInfo[0]._id ? "/update/social" : "/signup/form"}`
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
        {suggestions?.map((suggestion, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-4 border border-gray-300"
          >
            <p className="text-gray-700">{suggestion}</p>
          </div>
        ))}
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
              <p className="text-gray-800 font-medium">{proxy?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Component
const ProfilePage = () => {
  const { data: profileData, isLoading: profileLoading } = useGetAllQuery();
  if (profileLoading) {
    return (
      <div className="w-full mx-auto h-96 mt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }
  console.log(profileData);
  return (
    <div className="min-h-screen  p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <ProfileCard data={profileData} />
          <ProfileInfo data={profileData} isLoading={profileLoading} />
        </div>

        <Tabs data={profileData?.data} />

        <div className="grid grid-cols-2 gap-6 mt-6">
          <Suggestions suggestions={profileData?.data?.suggestions} />
          <Proxy />
        </div>
      </div>
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
