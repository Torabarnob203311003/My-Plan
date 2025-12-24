const HomeInfoView = ({ existingData }) => {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Update Home & Auto Info</h2>

      <input
        disabled
        defaultValue={existingData.vehicleOwnership}
        placeholder="Vehicle Ownership"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.vehicleMakeModel}
        placeholder="Vehicle Make & Model"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.carInsuranceProvider}
        placeholder="Car Insurance"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.homeOccupancy}
        placeholder="Home Ownership"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.homeInsuranceType}
        placeholder="Homeowner Insurance"
        className="w-full px-4 py-3 border rounded-lg"
      />
    </form>
  );
};

export default HomeInfoView;
