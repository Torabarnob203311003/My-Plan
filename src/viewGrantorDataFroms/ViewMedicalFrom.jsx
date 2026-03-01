const MedicalViewFrom = ({ existingData }) => {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Medical Information</h2>

      <div>
        <label htmlFor="healthInsurance" className="block text-sm font-medium mb-2">Health Insurance</label>
        <input
          id="healthInsurance"
          disabled
          defaultValue={existingData.healthInsurance}
          placeholder="Health Insurance"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="supplementalInsurance" className="block text-sm font-medium mb-2">Supplemental Insurance</label>
        <input
          id="supplementalInsurance"
          disabled
          defaultValue={existingData.supplementalInsurance}
          placeholder="Supplemental Insurance"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="medications" className="block text-sm font-medium mb-2">Medications</label>
        <input
          id="medications"
          disabled
          defaultValue={existingData.medications}
          placeholder="Medications"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="knownAilments" className="block text-sm font-medium mb-2">Ailments</label>
        <input
          id="knownAilments"
          disabled
          defaultValue={existingData.knownAilments}
          placeholder="Ailments"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
    </form>
  );
};

export default MedicalViewFrom;
