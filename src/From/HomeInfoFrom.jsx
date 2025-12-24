import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateHomeDataMutation } from "../redux/features/forms/formsApi";

const Step4 = ({ nextStep, prevStep }) => {
  const { register, handleSubmit } = useForm();
  const [submitStep4, { isLoading }] = useCreateHomeDataMutation();

  const onSubmit = async (data) => {
    try {
      const res = await submitStep4(data);
      if (res.error) return toast.error(res.error.data?.message);
      toast.success(res.data?.message || "Step 4 saved");
      nextStep();
    } catch {
      toast.error("Step 4 failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Home & Auto Information</h2>

      <input
        type="text"
        placeholder="Vehicle Ownership"
        {...register("vehicleOwnership")}
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Vehicle Make & Model"
        {...register("vehicleMakeModel")}
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Car Insurance"
        {...register("carInsuranceProvider")}
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Home Ownership"
        {...register("homeOccupancy")}
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        type="text"
        placeholder="Homeowner Insurance"
        {...register("homeInsuranceType")}
        className="w-full px-4 py-3 border rounded-lg"
      />

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

export default Step4;
