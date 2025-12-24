import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateFinancialDataMutation } from "../redux/features/forms/formsApi";

const FinancialUpdateFrom = ({ nextStep, prevStep, existingData }) => {
  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const [updateStep3, { isLoading }] = useUpdateFinancialDataMutation();

  const onSubmit = async (data) => {
    const res = await updateStep3(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("Financial Info Updated");
    nextStep();
  };
  console.log(existingData);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Update Financial Information
      </h2>

      <input
        {...register("bankAccount")}
        defaultValue={existingData.data.bankAccount}
        placeholder="Bank Account"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        {...register("retirementAccount")}
        defaultValue={existingData.data.retirementAccount}
        placeholder="Retirement Account"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        {...register("assets")}
        defaultValue={existingData.data.assets}
        placeholder="Assets"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        {...register("debt")}
        defaultValue={existingData.data.debt}
        placeholder="Debt"
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

export default FinancialUpdateFrom;
