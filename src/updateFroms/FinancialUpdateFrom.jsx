import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateFinancialDataMutation } from "../redux/features/forms/formsApi";

const FinancialUpdateFrom = ({ nextStep, prevStep, existingData }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: {} });
  const [updateStep3, { isLoading }] = useUpdateFinancialDataMutation();

  useEffect(() => {
    if (existingData) reset(existingData);
  }, [existingData, reset]);

  const onSubmit = async (data) => {
    const res = await updateStep3(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("Financial Info Updated");
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Financial Information</h2>

      <input {...register("bankAccount")} placeholder="Bank Account" className="input" />
      <input {...register("retirementAccount")} placeholder="Retirement Account" className="input" />
      <input {...register("assets")} placeholder="Assets" className="input" />
      <input {...register("debt")} placeholder="Debt" className="input" />

      <div className="flex justify-between mt-6">
        <button type="button" onClick={prevStep} className="btn-secondary">Back</button>
        <button type="submit" disabled={isLoading} className="btn-primary">{isLoading ? "Saving..." : "Next"}</button>
      </div>
    </form>
  );
};

export default FinancialUpdateFrom;
