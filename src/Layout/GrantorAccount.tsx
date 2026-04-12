/* eslint-disable no-unused-vars */

import { useEffect, useMemo, useState } from "react";
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

  const titleByType = useMemo(() => {
    switch (isModalType) {
      case "financial":
        return "Financial";
      case "profile":
        return "Personal Items & Effects";
      case "medical":
        return "Medical";
      case "home":
        return "Home & Auto";
      case "social":
        return "Social Media & Online";
      default:
        return "Details";
    }
  }, [isModalType]);

  const openModal = (type: string) => {
    setIsOpen(true);
    setIsModalType(type);
  };

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (isLoading) {
    return (
      <div className="w-full mx-auto h-96 mt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }

  const grantorData = data?.data || {};
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
        <div
          className="fixed inset-0 z-50 bg-black/50 px-4 py-6 sm:px-6"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex min-h-full items-center justify-center">
            <div
              className="w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={titleByType}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-h-[90vh] overflow-y-auto p-5 sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                    {titleByType}
                  </h2>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    aria-label="Close"
                  >
                    X
                  </button>
                </div>
            {isModalType === "social" && (
              <SocialInfoView
                existingData={grantorData?.socialInfo?.[0]}
              ></SocialInfoView>
            )}
            {isModalType === "financial" && (
              <FinancialViewFrom
                existingData={grantorData?.financial?.[0]}
              ></FinancialViewFrom>
            )}
            {isModalType === "profile" && (
              <ProfileViewFrom
                existingData={
                  grantorData?.user ??
                  grantorData?.profile?.[0] ??
                  grantorData?.profileDetails?.[0] ??
                  grantorData?.ProfileDetails?.[0] ??
                  grantorData?.profileInfo?.[0] ??
                  grantorData?.personal?.[0] ??
                  grantorData?.user?.[0] ??
                  {}
                }
              ></ProfileViewFrom>
            )}
            {isModalType === "medical" && (
              <MedicalViewFrom
                existingData={grantorData?.medical?.[0]}
              ></MedicalViewFrom>
            )}
            {isModalType === "home" && (
              <HomeInfoView existingData={grantorData?.homeauto?.[0]}></HomeInfoView>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Close
            </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrantorAccount;
