import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useGetHomeQuery } from "../redux/features/forms/formsApi";
import HomeInfoUpdate from "./HomeInfoUpdate";

const HomeInfoUpdatePage = () => {
  const navigate = useNavigate();
  const { data: home } = useGetHomeQuery();

  const handleNext = () => navigate("/");
  const handleBack = () => navigate(-1);

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
        <h1 className="text-2xl font-bold text-[#2E6AA7]">Update Home & Auto Info</h1>
      </div>

      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <HomeInfoUpdate
          nextStep={handleNext}
          prevStep={handleBack}
          existingData={home}
        />
      </div>
    </div>
  );
};

export default HomeInfoUpdatePage;
