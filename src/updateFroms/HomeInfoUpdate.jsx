import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateHomeDataMutation } from "../redux/features/forms/formsApi";

const HomeInfoUpdate = ({ nextStep, prevStep, existingData }) => {
  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const [updateStep4, { isLoading }] = useUpdateHomeDataMutation();

  const onSubmit = async (data) => {
    const res = await updateStep4(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("Home Info Updated");
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Home & Auto Info</h2>

      <input
        {...register("vehicleOwnership")}
        defaultValue={existingData.data.vehicleOwnership}
        placeholder="Vehicle Ownership"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        {...register("vehicleMakeModel")}
        defaultValue={existingData.data.vehicleMakeModel}
        placeholder="Vehicle Make & Model"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        {...register("carInsuranceProvider")}
        defaultValue={existingData.data.carInsuranceProvider}
        placeholder="Car Insurance"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        {...register("homeOccupancy")}
        defaultValue={existingData.data.homeOccupancy}
        placeholder="Home Ownership"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        {...register("homeInsuranceType")}
        defaultValue={existingData.data.homeInsuranceType}
        placeholder="Homeowner Insurance"
        className="w-full px-4 py-3 border rounded-lg"
      />

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
