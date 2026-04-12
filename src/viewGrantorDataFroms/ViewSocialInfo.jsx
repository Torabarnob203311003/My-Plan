const SocialInfoView = ({ existingData }) => {
  const data = existingData || {};

  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="streamingService" className="block text-sm font-medium mb-1">
            Streaming Service
          </label>
          <input
            id="streamingService"
            disabled
            value={data.streamingService ?? ""}
            placeholder="Subscribed to a streaming service?"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium mb-1">
            Website
          </label>
          <input
            id="website"
            disabled
            value={data.website ?? ""}
            placeholder="Have a website?"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="socialMedia" className="block text-sm font-medium mb-1">
            Social Media
          </label>
          <input
            id="socialMedia"
            disabled
            value={data.socialMedia ?? ""}
            placeholder="Have social media?"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
      </div>

      {(data.streamingServiceDuplicate || data.websiteDuplicate) && (
        <details className="rounded-lg border border-gray-200 bg-white p-3">
          <summary className="cursor-pointer text-sm font-medium text-gray-700">
            Extra fields
          </summary>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="streamingServiceDuplicate"
                className="block text-sm font-medium mb-1"
              >
                Streaming Service (2)
              </label>
              <input
                id="streamingServiceDuplicate"
                disabled
                value={data.streamingServiceDuplicate ?? ""}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="websiteDuplicate"
                className="block text-sm font-medium mb-1"
              >
                Website (2)
              </label>
              <input
                id="websiteDuplicate"
                disabled
                value={data.websiteDuplicate ?? ""}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
              />
            </div>
          </div>
        </details>
      )}
    </form>
  );
};

export default SocialInfoView;
