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
      <div>
        <label htmlFor="vehicleOwnership" className="block text-sm font-medium mb-2">Vehicle Ownership</label>
        <input
          id="vehicleOwnership"
          {...register("vehicleOwnership")}
          defaultValue={data.vehicleOwnership}
          placeholder="Do you Own or Lease your vehicle?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="vehicleMakeModel" className="block text-sm font-medium mb-2">Vehicle Make & Model</label>
        <input
          id="vehicleMakeModel"
          {...register("vehicleMakeModel")}
          defaultValue={data.vehicleMakeModel}
          placeholder="What Make & Model?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="carInsurance" className="block text-sm font-medium mb-2">Car Insurance</label>
        <input
          id="carInsurance"
          {...register("carInsurance")}
          defaultValue={data.carInsurance}
          placeholder="Car Insurance?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="addAnotherVehicle" className="block text-sm font-medium mb-2">Add Another Vehicle</label>
        <input
          id="addAnotherVehicle"
          {...register("addAnotherVehicle")}
          defaultValue={data.addAnotherVehicle}
          placeholder="Add another vehicle?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="hasAtvBoatMotorcycle" className="block text-sm font-medium mb-2">ATV/Boat/Motorcycle</label>
        <input
          id="hasAtvBoatMotorcycle"
          {...register("hasAtvBoatMotorcycle")}
          defaultValue={data.hasAtvBoatMotorcycle}
          placeholder="Have an ATV/Boat/Motorcycle?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Duplicate fields from UI */}
      <div>
        <label htmlFor="vehicleOwnershipDuplicate" className="block text-sm font-medium mb-2">Vehicle Ownership (2)</label>
        <input
          id="vehicleOwnershipDuplicate"
          {...register("vehicleOwnershipDuplicate")}
          defaultValue={data.vehicleOwnershipDuplicate}
          placeholder="Own or Lease your vehicle?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="vehicleMakeModelDuplicate" className="block text-sm font-medium mb-2">Vehicle Make & Model (2)</label>
        <input
          id="vehicleMakeModelDuplicate"
          {...register("vehicleMakeModelDuplicate")}
          defaultValue={data.vehicleMakeModelDuplicate}
          placeholder="Make & Model?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="atvBoatMotorcycleDetails" className="block text-sm font-medium mb-2">ATV/Boat/Motorcycle Details</label>
        <input
          id="atvBoatMotorcycleDetails"
          {...register("atvBoatMotorcycleDetails")}
          defaultValue={data.atvBoatMotorcycleDetails}
          placeholder="ATV/Boat/Motorcycle?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Home Section */}
      <div>
        <label htmlFor="homeOwnership" className="block text-sm font-medium mb-2">Home Ownership</label>
        <input
          id="homeOwnership"
          {...register("homeOwnership")}
          defaultValue={data.homeOwnership}
          placeholder="Do you Own or Rent your home?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="homeInsurance" className="block text-sm font-medium mb-2">Home Insurance</label>
        <input
          id="homeInsurance"
          {...register("homeInsurance")}
          defaultValue={data.homeInsurance}
          placeholder="Have Homeowner/Renter Insurance?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Duplicate home fields from UI */}
      <div>
        <label htmlFor="homeOwnershipDuplicate" className="block text-sm font-medium mb-2">Home Ownership (2)</label>
        <input
          id="homeOwnershipDuplicate"
          {...register("homeOwnershipDuplicate")}
          defaultValue={data.homeOwnershipDuplicate}
          placeholder="Own or Rent your home?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="homeInsuranceDuplicate" className="block text-sm font-medium mb-2">Home Insurance (2)</label>
        <input
          id="homeInsuranceDuplicate"
          {...register("homeInsuranceDuplicate")}
          defaultValue={data.homeInsuranceDuplicate}
          placeholder="Homeowner/Renter Insurance?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

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
