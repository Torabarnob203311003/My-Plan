const HomeInfoView = ({ existingData }) => {
  const data = existingData || {};

  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Update Home & Auto Info
      </h2>

      {/* Vehicle Section */}
      <input
        disabled
        defaultValue={data.vehicleOwnership}
        placeholder="Do you Own or Lease your vehicle?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.vehicleMakeModel}
        placeholder="What Make & Model?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.carInsurance}
        placeholder="Car Insurance?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.addAnotherVehicle}
        placeholder="Add another vehicle?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.hasAtvBoatMotorcycle}
        placeholder="Have an ATV/Boat/Motorcycle?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Duplicate fields from UI */}
      <input
        disabled
        defaultValue={data.vehicleOwnershipDuplicate}
        placeholder="Own or Lease your vehicle?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.vehicleMakeModelDuplicate}
        placeholder="Make & Model?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.atvBoatMotorcycleDetails}
        placeholder="ATV/Boat/Motorcycle?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Home Section */}
      <input
        disabled
        defaultValue={data.homeOwnership}
        placeholder="Do you Own or Rent your home?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.homeInsurance}
        placeholder="Have Homeowner/Renter Insurance?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Duplicate home fields from UI */}
      <input
        disabled
        defaultValue={data.homeOwnershipDuplicate}
        placeholder="Own or Rent your home?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      <input
        disabled
        defaultValue={data.homeInsuranceDuplicate}
        placeholder="Homeowner/Renter Insurance?"
        className="w-full px-4 py-3 border rounded-lg"
      />
    </form>
  );
};

export default HomeInfoView;
