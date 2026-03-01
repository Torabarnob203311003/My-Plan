import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateSocialDataMutation } from "../redux/features/forms/formsApi";

const SocialInfoUpdate = ({ prevStep, handleSaveAll, existingData }) => {
  const { register, handleSubmit, reset } = useForm();
  const [updateStep5, { isLoading }] = useUpdateSocialDataMutation();

  useEffect(() => {
    if (existingData?.data) {
      reset(existingData.data);
    }
  }, [existingData, reset]);

  const onSubmit = async (data) => {
    const res = await updateStep5(data);
    if (res.error) return toast.error(res.error.data?.message);
    toast.success("All Data Updated Successfully");
    handleSaveAll();
  };

  const data = existingData?.data || {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Update Social Information
      </h2>

      <div>
        <label htmlFor="streamingService" className="block text-sm font-medium mb-2">Streaming Service</label>
        <input
          id="streamingService"
          {...register("streamingService")}
          defaultValue={data.streamingService}
          placeholder="Subscribed to a Streaming service?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium mb-2">Website</label>
        <input
          id="website"
          {...register("website")}
          defaultValue={data.website}
          placeholder="Have a Website?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="socialMedia" className="block text-sm font-medium mb-2">Social Media</label>
        <input
          id="socialMedia"
          {...register("socialMedia")}
          defaultValue={data.socialMedia}
          placeholder="Have Social media?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Duplicate UI fields */}
      <div>
        <label htmlFor="streamingServiceDuplicate" className="block text-sm font-medium mb-2">Streaming Service (2)</label>
        <input
          id="streamingServiceDuplicate"
          {...register("streamingServiceDuplicate")}
          defaultValue={data.streamingServiceDuplicate}
          placeholder="Subscribed to a Streaming service?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="websiteDuplicate" className="block text-sm font-medium mb-2">Website (2)</label>
        <input
          id="websiteDuplicate"
          {...register("websiteDuplicate")}
          defaultValue={data.websiteDuplicate}
          placeholder="Have a Website?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button type="button" onClick={prevStep} className="btn-secondary">
          Back
        </button>
        <button type="submit" disabled={isLoading} className="btn-primary">
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default SocialInfoUpdate;
