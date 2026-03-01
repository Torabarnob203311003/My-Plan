import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateProfileDataMutation } from "../redux/features/forms/formsApi";

const ProfileUpdateFrom = ({ nextStep, existingData }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: {} });
  const [updateStep1, { isLoading }] = useUpdateProfileDataMutation();

  // Reset form when existingData arrives
  useEffect(() => {
    if (existingData.data) reset(existingData.data);
  }, [existingData.data, reset]);

  const onSubmit = async (data) => {
    const res = await updateStep1(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("Profile Updated");
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Your Profile</h2>

      <div>
        <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
        <input
          id="firstName"
          {...register("firstName")}
          defaultValue={existingData.data.firstName}
          placeholder="First Name"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
        <input
          id="lastName"
          {...register("lastName")}
          defaultValue={existingData.data.lastName}
          placeholder="Last Name"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-2">Date of Birth</label>
        <input
          id="dateOfBirth"
          type="date"
          {...register("dateOfBirth")}
          defaultValue={existingData.data.dateOfBirth}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium mb-2">City</label>
        <input
          id="city"
          {...register("city")}
          defaultValue={existingData.data.city}
          placeholder="City"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="state" className="block text-sm font-medium mb-2">State</label>
        <input
          id="state"
          {...register("state")}
          defaultValue={existingData.data.state}
          placeholder="State"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <button type="submit" disabled={isLoading} className="btn-primary">
        {isLoading ? "Saving..." : "Next"}
      </button>
    </form>
  );
};

export default ProfileUpdateFrom;
