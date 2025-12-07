import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateHomeDataMutation } from "../redux/features/forms/formsApi";

const HomeInfoUpdate = ({ nextStep, prevStep, existingData }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: {} });
  const [updateStep4, { isLoading }] = useUpdateHomeDataMutation();

  useEffect(() => {
    if (existingData) reset(existingData);
  }, [existingData, reset]);

  const onSubmit = async (data) => {
    const res = await updateStep4(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("Home Info Updated");
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Home & Auto Info</h2>

      <input {...register("vehicleOwnership")} placeholder="Vehicle Ownership" className="input" />
      <input {...register("vehicleMakeModel")} placeholder="Vehicle Make & Model" className="input" />
      <input {...register("carInsurance")} placeholder="Car Insurance" className="input" />
      <input {...register("homeOwnership")} placeholder="Home Ownership" className="input" />
      <input {...register("homeownerInsurance")} placeholder="Homeowner Insurance" className="input" />

      <div className="flex justify-between mt-6">
        <button type="button" onClick={prevStep} className="btn-secondary">Back</button>
        <button type="submit" disabled={isLoading} className="btn-primary">{isLoading ? "Saving..." : "Next"}</button>
      </div>
    </form>
  );
};

export default HomeInfoUpdate;
