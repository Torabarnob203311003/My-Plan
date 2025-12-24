import React from "react";
import { useNavigate, Link } from "react-router-dom";

import ProfileUpdateFrom from "./ProfileUpdateFrom";
import { useGetProfileQuery } from "../redux/features/forms/formsApi";

const ProfileUpdatePage = () => {
  const navigate = useNavigate();
  const { data: profile,isLoading } = useGetProfileQuery();

  const handleNext = () => navigate("/");
  if (isLoading) {
    return (
      <div className="w-full mx-auto h-96 mt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      {/* Header */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-6">
        <Link
          to="/"
          className="text-[#4A90E2] hover:text-[#2E6AA7] font-semibold flex items-center"
        >
          <span className="mr-2">←</span> Back Home
        </Link>
        <h1 className="text-2xl font-bold text-[#2E6AA7]">Update Profile</h1>
      </div>

      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <ProfileUpdateFrom nextStep={handleNext} existingData={profile} />
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
