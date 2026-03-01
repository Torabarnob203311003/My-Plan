import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateMedicalDataMutation } from "../redux/features/forms/formsApi";

const MedicalUpdateFrom = ({ nextStep, prevStep, existingData }) => {
  const { register, handleSubmit } = useForm({ defaultValues: {} });
  const [updateStep2, { isLoading }] = useUpdateMedicalDataMutation();

  const onSubmit = async (data) => {
    const res = await updateStep2(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("Medical Info Updated");
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Medical Information</h2>

      <div>
        <label htmlFor="healthInsurance" className="block text-sm font-medium mb-2">Health Insurance</label>
        <input
          id="healthInsurance"
          {...register("healthInsurance")}
          defaultValue={existingData.data.healthInsurance}
          placeholder="Health Insurance"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="supplementalInsurance" className="block text-sm font-medium mb-2">Supplemental Insurance</label>
        <input
          id="supplementalInsurance"
          {...register("supplementalInsurance")}
          defaultValue={existingData.data.supplementalInsurance}
          placeholder="Supplemental Insurance"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="medications" className="block text-sm font-medium mb-2">Medications</label>
        <input
          id="medications"
          {...register("medications")}
          defaultValue={existingData.data.medications}
          placeholder="Medications"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="knownAilments" className="block text-sm font-medium mb-2">Ailments</label>
        <input
          id="knownAilments"
          {...register("knownAilments")}
          defaultValue={existingData.data.knownAilments}
          placeholder="Ailments"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

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

export default MedicalUpdateFrom;
