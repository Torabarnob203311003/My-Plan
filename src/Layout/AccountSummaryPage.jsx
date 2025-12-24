/* eslint-disable no-unused-vars */
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  useGetProxyQuery,
  useGetUserQuery,
  useSetProxyMutation,
} from "../redux/features/user/userApi";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "sonner";

const AccountSummaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const userid = useSelector((state) => state.auth.user.userId);
  const { data, isLoading } = useGetProxyQuery(userid);
  const { data: userData, isLoading: userLoading } = useGetUserQuery(search);
  const [setProxy, { isLoading: setProxyLoading }] = useSetProxyMutation();
  if (isLoading || setProxyLoading) {

    return (
      <div className="w-full mx-auto h-96 mt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  
  }

  const setProxyFunction = async (id) => {
    try {
      const res = await setProxy(id);

      // If login failed
      if (res?.error && !res?.error?.data?.success) {
        return toast.error(res.error.data.message);
      }

      // If login successful
      if (res.data.success) {
        toast.success(res.data.message);
        setIsOpen(false);
      }
    } catch (err) {
      toast.error("Process Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg">Welcome back, Shayla</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {/* Profile Cards */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 flex items-center space-x-4">
            <div className="w-10 h-10  rounded-full flex items-center justify-center">
              <span className="text-4xl font-semibold">+</span>
            </div>
            <div>
              <p className="text-gray-800  font-bold">Add a proxy</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Primary Proxy Card */}
          {data?.data?.proxysetDetails.map((proxy) => (
            <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 flex items-start space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">👤</span>
              </div>
              <div>
                <p className="text-gray-800 font-medium">{proxy?.email}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Account Summary Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">
            Account Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Financial */}
            <div
              onClick={() => navigate("/update/financial")}
              className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-gray-700">Financial</h3>
            </div>

            {/* Personal Items & Effects */}
            <div
              onClick={() => navigate("/update/profile")}
              className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-gray-700">
                Personal Items &Effects
              </h3>
            </div>

            {/* Medical */}
            <div
              onClick={() => navigate("/update/medical")}
              className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-gray-700">Medical</h3>
            </div>

            {/* Home & Auto */}
            <div
              onClick={() => navigate("/update/home")}
              className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-gray-700">Home & Auto</h3>
            </div>

            {/* Social Media & Online */}
            <div
              onClick={() => navigate("/update/social")}
              className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-gray-700">
                Social Media & Online
              </h3>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-lg font-semibold mb-3">Search User</h2>

            <input
              type="text"
              placeholder="Type user email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            <ul className="space-y-2">
              {userData?.data?.map((user, index) => (
                <li
                  key={index}
                  className="border p-2 rounded cursor-pointer"
                  onClick={() => setProxyFunction(user._id)}
                >
                  <p className="text-sm text-gray-600">{user.email}</p>
                </li>
              ))}

              {!userData?.data?.length && (
                <p className="text-sm text-gray-500">No user found</p>
              )}
            </ul>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full px-4 py-2 bg-gray-300 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSummaryPage;
