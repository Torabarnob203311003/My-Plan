import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateSocialDataMutation } from "../redux/features/forms/formsApi";

const SocialInfoUpdate = ({ prevStep, handleSaveAll, existingData }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: {} });
  const [updateStep5, { isLoading }] = useUpdateSocialDataMutation();

  useEffect(() => {
    if (existingData) reset(existingData);
  }, [existingData, reset]);

  const onSubmit = async (data) => {
    const res = await updateStep5(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("All Data Updated Successfully");
    handleSaveAll();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Social Information</h2>

      <input {...register("socialMedia")} placeholder="Social Media" className="input" />
      <input {...register("website")} placeholder="Website" className="input" />
      <input {...register("streamingService")} placeholder="Streaming Service" className="input" />

      <div className="flex justify-between mt-6">
        <button type="button" onClick={prevStep} className="btn-secondary">Back</button>
        <button type="submit" disabled={isLoading} className="btn-primary">{isLoading ? "Saving..." : "Save"}</button>
      </div>
    </form>
  );
};

export default SocialInfoUpdate;
