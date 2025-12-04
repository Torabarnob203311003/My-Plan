import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useSubmitStep5Mutation } from "../../redux/features/forms/formsApi";

const Step5 = ({ prevStep, handleSaveAll }) => {
  const { register, handleSubmit } = useForm();
  const [submitStep5, { isLoading }] = useSubmitStep5Mutation();

  const onSubmit = async (data) => {
    try {
      const res = await submitStep5(data);
      if (res.error) return toast.error(res.error.data?.message);
      toast.success(res.data?.message || "All steps saved");
      handleSaveAll(data);
    } catch {
      toast.error("Step 5 failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Social Information</h2>

      <input type="text" placeholder="Social Media" {...register("socialMedia")} className="w-full px-4 py-3 border rounded-lg" />
      <input type="text" placeholder="Website" {...register("website")} className="w-full px-4 py-3 border rounded-lg" />
      <input type="text" placeholder="Streaming Service" {...register("streamingService")} className="w-full px-4 py-3 border rounded-lg" />

      <div className="flex justify-between mt-6">
        <button type="button" onClick={prevStep} className="w-1/2 mr-2 bg-gray-400 text-white py-3 rounded-lg hover:opacity-90 transition">Back</button>
        <button type="submit" disabled={isLoading} className="w-1/2 ml-2 bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition">
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default Step5;
