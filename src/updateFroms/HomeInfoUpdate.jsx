import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateHomeDataMutation } from "../redux/features/forms/formsApi";

const HomeInfoUpdate = ({ nextStep, prevStep, existingData }) => {
  const { register, handleSubmit } = useForm();
  const [updateStep4, { isLoading }] = useUpdateHomeDataMutation();

  const onSubmit = async (data) => {
    const res = await updateStep4(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("Home Info Updated");
    nextStep();
  };

  const data = existingData?.data || {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Update Home & Auto Info
      </h2>

      {/* Vehicle Section */}
      <input
        {...register("vehicleOwnership")}
        defaultValue={data.vehicleOwnership}
        placeholder="Do you Own or Lease your vehicle?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("vehicleMakeModel")}
        defaultValue={data.vehicleMakeModel}
        placeholder="What Make & Model?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("carInsurance")}
        defaultValue={data.carInsurance}
        placeholder="Car Insurance?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("addAnotherVehicle")}
        defaultValue={data.addAnotherVehicle}
        placeholder="Add another vehicle?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("hasAtvBoatMotorcycle")}
        defaultValue={data.hasAtvBoatMotorcycle}
        placeholder="Have an ATV/Boat/Motorcycle?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Duplicate fields from UI */}
      <input
        {...register("vehicleOwnershipDuplicate")}
        defaultValue={data.vehicleOwnershipDuplicate}
        placeholder="Own or Lease your vehicle?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("vehicleMakeModelDuplicate")}
        defaultValue={data.vehicleMakeModelDuplicate}
        placeholder="Make & Model?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("atvBoatMotorcycleDetails")}
        defaultValue={data.atvBoatMotorcycleDetails}
        placeholder="ATV/Boat/Motorcycle?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Home Section */}
      <input
        {...register("homeOwnership")}
        defaultValue={data.homeOwnership}
        placeholder="Do you Own or Rent your home?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("homeInsurance")}
        defaultValue={data.homeInsurance}
        placeholder="Have Homeowner/Renter Insurance?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Duplicate home fields from UI */}
      <input
        {...register("homeOwnershipDuplicate")}
        defaultValue={data.homeOwnershipDuplicate}
        placeholder="Own or Rent your home?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("homeInsuranceDuplicate")}
        defaultValue={data.homeInsuranceDuplicate}
        placeholder="Homeowner/Renter Insurance?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button type="button" onClick={prevStep} className="btn-secondary">
          Back
        </button>
        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? "Saving..." : "Next"}
        </button>
      </div>
    </form>
  );
};

export default HomeInfoUpdate;
