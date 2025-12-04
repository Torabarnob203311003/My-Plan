import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Step1 from "./From/ProfileFrom";
import Step2 from "./From/MedicalFrom";
import Step3 from "./From/FinancialFrom";
import Step4 from "./From/HomeInfoFrom";
import Step5 from "./From/SocialFrom";


const Forms = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSaveAll = (allData) => {
    console.log("All form data:", allData);
    navigate("/"); // Navigate after last step
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl mb-6 flex justify-between">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className={`flex-1 h-2 mx-1 rounded-full ${step >= item ? "bg-blue-600" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>

      {/* Header */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-4">
        <Link to="/" className="text-[#4A90E2] hover:text-[#2E6AA7] font-semibold flex items-center">
          <span className="mr-2">←</span> Back Home
        </Link>
        <h1 className="text-2xl font-bold text-[#2E6AA7]">Your Plans</h1>
      </div>

      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Step5 prevStep={prevStep} handleSaveAll={handleSaveAll} />}
      </div>
    </div>
  );
};

export default Forms;
