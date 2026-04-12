const MedicalViewFrom = ({ existingData }) => {
  const data = existingData || {};
  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="healthInsurance" className="block text-sm font-medium mb-1">
            Health Insurance
          </label>
          <input
            id="healthInsurance"
            disabled
            value={data.healthInsurance ?? ""}
            placeholder="Health Insurance"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="supplementalInsurance"
            className="block text-sm font-medium mb-1"
          >
            Supplemental Insurance
          </label>
          <input
            id="supplementalInsurance"
            disabled
            value={data.supplementalInsurance ?? ""}
            placeholder="Supplemental Insurance"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="medications" className="block text-sm font-medium mb-1">
            Medications
          </label>
          <input
            id="medications"
            disabled
            value={data.medications ?? ""}
            placeholder="Medications"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="knownAilments" className="block text-sm font-medium mb-1">
            Ailments
          </label>
          <input
            id="knownAilments"
            disabled
            value={data.knownAilments ?? ""}
            placeholder="Ailments"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
      </div>
    </form>
  );
};

export default MedicalViewFrom;
