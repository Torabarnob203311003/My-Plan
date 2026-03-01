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
      <h2 className="text-xl font-semibold mb-6">
        Edit Home & Auto Information
      </h2>

      {/* Vehicle Section */}
      <div>
        <label htmlFor="vehicleOwnership" className="block text-sm font-medium mb-2">Vehicle Ownership</label>
        <input
          id="vehicleOwnership"
          type="text"
          placeholder="Do you Own or Lease your vehicle?"
          {...register("vehicleOwnership")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="vehicleMakeModel" className="block text-sm font-medium mb-2">Vehicle Make & Model</label>
        <input
          id="vehicleMakeModel"
          type="text"
          placeholder="What Make & Model?"
          {...register("vehicleMakeModel")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="carInsurance" className="block text-sm font-medium mb-2">Car Insurance</label>
        <input
          id="carInsurance"
          type="text"
          placeholder="Car Insurance?"
          {...register("carInsurance")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="addAnotherVehicle" className="block text-sm font-medium mb-2">Add Another Vehicle</label>
        <input
          id="addAnotherVehicle"
          type="text"
          placeholder="Add another vehicle?"
          {...register("addAnotherVehicle")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="hasAtvBoatMotorcycle" className="block text-sm font-medium mb-2">ATV/Boat/Motorcycle</label>
        <input
          id="hasAtvBoatMotorcycle"
          type="text"
          placeholder="Have an ATV/Boat/Motorcycle?"
          {...register("hasAtvBoatMotorcycle")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Duplicate UI fields shown in design */}
      <div>
        <label htmlFor="vehicleOwnershipDuplicate" className="block text-sm font-medium mb-2">Vehicle Ownership (2)</label>
        <input
          id="vehicleOwnershipDuplicate"
          type="text"
          placeholder="Own or Lease your vehicle?"
          {...register("vehicleOwnershipDuplicate")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="vehicleMakeModelDuplicate" className="block text-sm font-medium mb-2">Vehicle Make & Model (2)</label>
        <input
          id="vehicleMakeModelDuplicate"
          type="text"
          placeholder="Make & Model?"
          {...register("vehicleMakeModelDuplicate")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="atvBoatMotorcycleDetails" className="block text-sm font-medium mb-2">ATV/Boat/Motorcycle Details</label>
        <input
          id="atvBoatMotorcycleDetails"
          type="text"
          placeholder="ATV/Boat/Motorcycle?"
          {...register("atvBoatMotorcycleDetails")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Home Section */}
      <div>
        <label htmlFor="homeOwnership" className="block text-sm font-medium mb-2">Home Ownership</label>
        <input
          id="homeOwnership"
          type="text"
          placeholder="Do you Own or Rent your home?"
          {...register("homeOwnership")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="homeInsurance" className="block text-sm font-medium mb-2">Home Insurance</label>
        <input
          id="homeInsurance"
          type="text"
          placeholder="Have Homeowner/Renter Insurance?"
          {...register("homeInsurance")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Duplicate UI fields shown in design */}
      <div>
        <label htmlFor="homeOwnershipDuplicate" className="block text-sm font-medium mb-2">Home Ownership (2)</label>
        <input
          id="homeOwnershipDuplicate"
          type="text"
          placeholder="Own or Rent your home?"
          {...register("homeOwnershipDuplicate")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="homeInsuranceDuplicate" className="block text-sm font-medium mb-2">Home Insurance (2)</label>
        <input
          id="homeInsuranceDuplicate"
          type="text"
          placeholder="Homeowner/Renter Insurance?"
          {...register("homeInsuranceDuplicate")}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Navigation */}
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
