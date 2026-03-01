const SocialInfoView = ({ existingData }) => {
  const data = existingData || {};

  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Social Information
      </h2>

      <div>
        <label htmlFor="streamingService" className="block text-sm font-medium mb-2">Streaming Service</label>
        <input
          id="streamingService"
          disabled
          defaultValue={data.streamingService}
          placeholder="Subscribed to a Streaming service?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium mb-2">Website</label>
        <input
          id="website"
          disabled
          defaultValue={data.website}
          placeholder="Have a Website?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="socialMedia" className="block text-sm font-medium mb-2">Social Media</label>
        <input
          id="socialMedia"
          disabled
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
          disabled
          defaultValue={data.streamingServiceDuplicate}
          placeholder="Subscribed to a Streaming service?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="websiteDuplicate" className="block text-sm font-medium mb-2">Website (2)</label>
        <input
          id="websiteDuplicate"
          disabled
          defaultValue={data.websiteDuplicate}
          placeholder="Have a Website?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
    </form>
  );
};

export default SocialInfoView;
