const MedicalViewFrom = ({ existingData }) => {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Medical Information</h2>

      <input
        disabled
        defaultValue={existingData.healthInsurance}
        placeholder="Health Insurance"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.supplementalInsurance}
        placeholder="Supplemental Insurance"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.medications}
        placeholder="Medications"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.knownAilments}
        placeholder="Ailments"
        className="w-full px-4 py-3 border rounded-lg"
      />
    </form>
  );
};

export default MedicalViewFrom;
