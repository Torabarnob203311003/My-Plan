import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateProfileDataMutation } from "../redux/features/forms/formsApi";

const ProfileUpdateFrom = ({ nextStep, existingData }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: {} });
  const [updateStep1, { isLoading }] = useUpdateProfileDataMutation();

  // Reset form when existingData arrives
  useEffect(() => {
    if (existingData) reset(existingData);
  }, [existingData, reset]);

  const onSubmit = async (data) => {
    const res = await updateStep1(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("Profile Updated");
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Your Profile</h2>

      <input {...register("firstName")} placeholder="First Name" className="input" />
      <input {...register("lastName")} placeholder="Last Name" className="input" />
      <input type="date" {...register("dob")} className="input" />
      <input {...register("city")} placeholder="City" className="input" />
      <input {...register("state")} placeholder="State" className="input" />

      <button type="submit" disabled={isLoading} className="btn-primary">
        {isLoading ? "Saving..." : "Next"}
      </button>
    </form>
  );
};

export default ProfileUpdateFrom;
