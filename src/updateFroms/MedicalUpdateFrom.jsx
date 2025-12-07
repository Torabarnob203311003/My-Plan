import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateMedicalDataMutation } from "../redux/features/forms/formsApi";

const MedicalUpdateFrom = ({ nextStep, prevStep, existingData }) => {
  const { register, handleSubmit, reset } = useForm({ defaultValues: {} });
  const [updateStep2, { isLoading }] = useUpdateMedicalDataMutation();

  useEffect(() => {
    if (existingData) reset(existingData);
  }, [existingData, reset]);

  const onSubmit = async (data) => {
    const res = await updateStep2(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("Medical Info Updated");
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Medical Information</h2>

      <input {...register("healthInsurance")} placeholder="Health Insurance" className="input" />
      <input {...register("supplementalInsurance")} placeholder="Supplemental Insurance" className="input" />
      <input {...register("medications")} placeholder="Medications" className="input" />
      <input {...register("ailments")} placeholder="Ailments" className="input" />

      <div className="flex justify-between mt-6">
        <button type="button" onClick={prevStep} className="btn-secondary">Back</button>
        <button type="submit" disabled={isLoading} className="btn-primary">{isLoading ? "Saving..." : "Next"}</button>
      </div>
    </form>
  );
};

export default MedicalUpdateFrom;
