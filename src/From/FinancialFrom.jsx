import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateFinancialDataMutation } from "../redux/features/forms/formsApi";

const Step3 = ({ nextStep, prevStep }) => {
  const { register, handleSubmit } = useForm();
  const [submitStep3, { isLoading }] = useCreateFinancialDataMutation();

  const onSubmit = async (data) => {
    try {
      const res = await submitStep3(data);
      if (res.error) return toast.error(res.error.data?.message);
      toast.success(res.data?.message || "Step 3 saved");
      nextStep();
    } catch {
      toast.error("Step 3 failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Financial Information
      </h2>

      <div>
        <label htmlFor="bankAccount" className="block text-sm font-medium mb-2">Bank Account</label>
        <input
          id="bankAccount"
          type="text"
          placeholder="Have a Bank account? (ex: Capital One)"
          {...register("bankAccount")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="retirementAccount" className="block text-sm font-medium mb-2">Retirement Account</label>
        <input
          id="retirementAccount"
          type="text"
          placeholder="Have a Retirement account? (ex: 401K plan)"
          {...register("retirementAccount")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="assets" className="block text-sm font-medium mb-2">Current Assets</label>
        <input
          id="assets"
          type="text"
          placeholder="What are your current Assets?"
          {...register("assets")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="assetsValue" className="block text-sm font-medium mb-2">Assets Value</label>
        <input
          id="assetsValue"
          type="text"
          placeholder="Assets value (ex: <$5,000)"
          {...register("assetsValue")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="hasDebt" className="block text-sm font-medium mb-2">Have Any Debt?</label>
        <input
          id="hasDebt"
          type="text"
          placeholder="Have any Debt?"
          {...register("hasDebt")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="debt" className="block text-sm font-medium mb-2">Debt Details</label>
        <input
          id="debt"
          type="text"
          placeholder="Debt details"
          {...register("debt")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="businessOwnership" className="block text-sm font-medium mb-2">Business Ownership</label>
        <input
          id="businessOwnership"
          type="text"
          placeholder="Business ownership (ex: Own a business)"
          {...register("businessOwnership")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="otherFinancialInfo" className="block text-sm font-medium mb-2">Other Financial Notes</label>
        <input
          id="otherFinancialInfo"
          type="text"
          placeholder="Other financial notes"
          {...register("otherFinancialInfo")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="w-1/2 mr-2 bg-gray-400 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="w-1/2 ml-2 bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          {isLoading ? "Saving..." : "Next"}
        </button>
      </div>
    </form>
  );
};

export default Step3;
