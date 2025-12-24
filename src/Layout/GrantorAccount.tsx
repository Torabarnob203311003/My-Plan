/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useParams } from "react-router-dom";
import SocialInfoView from "../viewGrantorDataFroms/ViewSocialInfo";
import FinancialViewFrom from "../viewGrantorDataFroms/ViewFinancialFrom";
import MedicalViewFrom from "../viewGrantorDataFroms/ViewMedicalFrom";
import HomeInfoView from "../viewGrantorDataFroms/ViewHomeInfo";
import ProfileViewFrom from "../viewGrantorDataFroms/ViewProfileFrom";
import { useGetUserGrantorDataQuery } from "../redux/features/user/userApi";

const GrantorAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalType, setIsModalType] = useState("");
  const { id } = useParams();
  const { data, isLoading } = useGetUserGrantorDataQuery(id);
  const openModal = (type: string) => {
    setIsOpen(!isOpen);
    setIsModalType(type);
  };
  if (isLoading) {
    return (
      <div className="w-full mx-auto h-96 mt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }
  console.log(data.data);
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
        {/* Account Summary Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">
            Account Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Financial */}
            <div
              onClick={() => openModal("financial")}
              className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-gray-700">Financial</h3>
            </div>

            {/* Personal Items & Effects */}
            <div
              onClick={() => openModal("profile")}
              className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-gray-700">
                Personal Items &Effects
              </h3>
            </div>

            {/* Medical */}
            <div
              onClick={() => openModal("medical")}
              className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-gray-700">Medical</h3>
            </div>

            {/* Home & Auto */}
            <div
              onClick={() => openModal("home")}
              className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-gray-700">Home & Auto</h3>
            </div>

            {/* Social Media & Online */}
            <div
              onClick={() => openModal("social")}
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
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-3"></h2>
            {isModalType === "social" && (
              <SocialInfoView
                existingData={data.data.socialInfo[0]}
              ></SocialInfoView>
            )}
            {isModalType === "financial" && (
              <FinancialViewFrom
                existingData={data.data.financial[0]}
              ></FinancialViewFrom>
            )}
            {isModalType === "medical" && (
              <MedicalViewFrom
                existingData={data.data.medical[0]}
              ></MedicalViewFrom>
            )}
            {isModalType === "home" && (
              <HomeInfoView existingData={data.data.homeauto[0]}></HomeInfoView>
            )}
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

export default GrantorAccount;
