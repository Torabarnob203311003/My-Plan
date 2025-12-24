const SocialInfoView = ({ existingData }) => {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6"> Social Information</h2>

      <input
        disabled
        defaultValue={existingData.socialMedia}
        placeholder="Social Media"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.website}
        placeholder="Website"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.streamingService}
        placeholder="Streaming Service"
        className="w-full px-4 py-3 border rounded-lg"
      />
    </form>
  );
};

export default SocialInfoView;
