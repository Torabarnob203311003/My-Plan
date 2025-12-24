import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateSocialDataMutation } from "../redux/features/forms/formsApi";

const SocialInfoUpdate = ({ prevStep, handleSaveAll, existingData }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: {} });
  const [updateStep5, { isLoading }] = useUpdateSocialDataMutation();

  useEffect(() => {
    if (existingData.data) reset(existingData.data);
  }, [existingData.data, reset]);

  const onSubmit = async (data) => {
    const res = await updateStep5(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("All Data Updated Successfully");
    handleSaveAll();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Social Information</h2>

      <input
        {...register("socialMedia")}
        defaultValue={existingData.data.socialMedia}
        placeholder="Social Media"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        {...register("website")}
        defaultValue={existingData.data.website}
        placeholder="Website"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        {...register("streamingService")}
        defaultValue={existingData.data.streamingService}
        placeholder="Streaming Service"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <div className="flex justify-between mt-6">
        <button type="button" onClick={prevStep} className="btn-secondary">
          Back
        </button>
        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default SocialInfoUpdate;
