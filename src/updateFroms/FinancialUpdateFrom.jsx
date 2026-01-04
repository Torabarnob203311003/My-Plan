import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateFinancialDataMutation } from "../redux/features/forms/formsApi";

const FinancialUpdateFrom = ({ nextStep, prevStep, existingData }) => {
  const { register, handleSubmit } = useForm();
  const [updateStep3, { isLoading }] = useUpdateFinancialDataMutation();

  const onSubmit = async (data) => {
    const res = await updateStep3(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("Financial Info Updated");
    nextStep();
  };

  const data = existingData?.data || {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Update Financial Information
      </h2>

      <input
        {...register("bankAccount")}
        defaultValue={data.bankAccount}
        placeholder="Have a Bank account? (ex: Capital One)"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("retirementAccount")}
        defaultValue={data.retirementAccount}
        placeholder="Have a Retirement account? (ex: 401K plan)"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("assets")}
        defaultValue={data.assets}
        placeholder="What are your current Assets?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("assetsValue")}
        defaultValue={data.assetsValue}
        placeholder="Assets value (ex: <$5,000)"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("hasDebt")}
        defaultValue={data.hasDebt}
        placeholder="Have any Debt?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("debt")}
        defaultValue={data.debt}
        placeholder="Debt details"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("businessOwnership")}
        defaultValue={data.businessOwnership}
        placeholder="Business ownership (ex: Own a business)"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        {...register("otherFinancialInfo")}
        defaultValue={data.otherFinancialInfo}
        placeholder="Other financial notes"
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
