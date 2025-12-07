import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  useGetProfileQuery,
  useGetMedicalQuery,
  useGetFinancialQuery,
  useGetHomeQuery,
  useGetSocialQuery
} from "../redux/features/forms/formsApi";
import ProfileUpdateFrom from "./ProfileUpdateFrom";
import MedicalUpdateFrom from "./MedicalUpdateFrom";
import FinancialUpdateFrom from "./FinancialUpdateFrom";
import HomeInfoUpdate from "./HomeInfoUpdate";
import SocialInfoUpdate from "./SocialInfoUpdate";

const UpdatedFrom = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Fetch existing data
  const { data: profile } = useGetProfileQuery();
  const { data: medical } = useGetMedicalQuery();
  const { data: financial } = useGetFinancialQuery();
  const { data: home } = useGetHomeQuery();
  const { data: social } = useGetSocialQuery();

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSaveAll = () => navigate("/"); // after last step

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl mb-6 flex justify-between">
        {[1,2,3,4,5].map(item => (
          <div key={item} className={`flex-1 h-2 mx-1 rounded-full ${step >= item ? "bg-blue-600" : "bg-gray-300"}`}></div>
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
        {step === 1 && <ProfileUpdateFrom nextStep={nextStep} existingData={profile} />}
        {step === 2 && <MedicalUpdateFrom nextStep={nextStep} prevStep={prevStep} existingData={medical} />}
        {step === 3 && <FinancialUpdateFrom nextStep={nextStep} prevStep={prevStep} existingData={financial} />}
        {step === 4 && <HomeInfoUpdate nextStep={nextStep} prevStep={prevStep} existingData={home} />}
        {step === 5 && <SocialInfoUpdate prevStep={prevStep} handleSaveAll={handleSaveAll} existingData={social} />}
      </div>
    </div>
  );
};

export default UpdatedFrom;
