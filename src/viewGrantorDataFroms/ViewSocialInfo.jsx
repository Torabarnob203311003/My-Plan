const SocialInfoView = ({ existingData }) => {
  const data = existingData || {};

  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Social Information
      </h2>

      <input
        disabled
        defaultValue={data.streamingService}
        placeholder="Subscribed to a Streaming service?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.website}
        placeholder="Have a Website?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.socialMedia}
        placeholder="Have Social media?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Duplicate UI fields */}
      <input
        disabled
        defaultValue={data.streamingServiceDuplicate}
        placeholder="Subscribed to a Streaming service?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.websiteDuplicate}
        placeholder="Have a Website?"
        className="w-full px-4 py-3 border rounded-lg"
      />
    </form>
  );
};

export default SocialInfoView;
