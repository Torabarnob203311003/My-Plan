import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateMedicalDataMutation } from "../redux/features/forms/formsApi";

const Step2 = ({ nextStep, prevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitStep2, { isLoading }] = useCreateMedicalDataMutation();

  const onSubmit = async (data) => {
    try {
      const res = await submitStep2(data);
      if (res.error) return toast.error(res.error.data?.message);
      toast.success(res.data?.message || "Step 2 saved");
      nextStep();
    } catch {
      toast.error("Step 2 failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Medical Information</h2>

      <input
        type="text"
        placeholder="Health Insurance"
        {...register("healthInsurance", {
          required: "Health Insurance is required",
        })}
        className="w-full px-4 py-3 border rounded-lg"
      />
      {errors.healthInsurance && (
        <p className="text-red-500">{errors.healthInsurance.message}</p>
      )}

      <input
        type="text"
        placeholder="Supplemental Insurance"
        {...register("supplementalInsurance")}
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        type="text"
        placeholder="Medications"
        {...register("medications")}
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        type="text"
        placeholder="Ailments"
        {...register("knownAilments")}
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

export default Step2;
