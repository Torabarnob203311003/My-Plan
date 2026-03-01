import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateProfileDataMutation } from "../redux/features/forms/formsApi";

const Step1 = ({ nextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitStep1, { isLoading }] = useCreateProfileDataMutation();

  const onSubmit = async (data) => {
    try {
      const res = await submitStep1(data);
      if (res.error) return toast.error(res.error.data?.message);
      toast.success(res.data?.message || "Step 1 saved");
      nextStep();
    } catch {
      toast.error("Step 1 failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Create your profile</h2>

      <div>
        <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: "First name is required" })}
          className="w-full px-4 py-3 border rounded-lg"
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: "Last name is required" })}
          className="w-full px-4 py-3 border rounded-lg"
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-2">Date of Birth</label>
        <input
          id="dateOfBirth"
          type="date"
          {...register("dateOfBirth", { required: "Date of Birth is required" })}
          className="w-full px-4 py-3 border rounded-lg"
        />
        {errors.dateOfBirth && (
          <p className="text-red-500">{errors.dateOfBirth.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium mb-2">City</label>
        <input
          id="city"
          type="text"
          placeholder="City"
          {...register("city", { required: "City is required" })}
          className="w-full px-4 py-3 border rounded-lg"
        />
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
      </div>

      <div>
        <label htmlFor="state" className="block text-sm font-medium mb-2">State</label>
        <input
          id="state"
          type="text"
          placeholder="State"
          {...register("state", { required: "State is required" })}
          className="w-full px-4 py-3 border rounded-lg"
        />
        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
      >
        {isLoading ? "Saving..." : "Next"}
      </button>
    </form>
  );
};

export default Step1;
