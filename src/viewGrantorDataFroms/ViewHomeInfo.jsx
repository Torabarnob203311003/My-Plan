const HomeInfoView = ({ existingData }) => {
  const data = existingData || {};

  return (
    <form className="space-y-5">
      <div>
        <h3 className="mb-2 text-sm font-semibold text-gray-900">Vehicle</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="vehicleOwnership" className="block text-sm font-medium mb-1">
              Vehicle Ownership
            </label>
            <input
              id="vehicleOwnership"
              disabled
              value={data.vehicleOwnership ?? ""}
              placeholder="Own or lease your vehicle?"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="vehicleMakeModel" className="block text-sm font-medium mb-1">
              Vehicle Make & Model
            </label>
            <input
              id="vehicleMakeModel"
              disabled
              value={data.vehicleMakeModel ?? ""}
              placeholder="Make & model"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="carInsurance" className="block text-sm font-medium mb-1">
              Car Insurance
            </label>
            <input
              id="carInsurance"
              disabled
              value={data.carInsurance ?? ""}
              placeholder="Car insurance?"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="addAnotherVehicle" className="block text-sm font-medium mb-1">
              Add Another Vehicle
            </label>
            <input
              id="addAnotherVehicle"
              disabled
              value={data.addAnotherVehicle ?? ""}
              placeholder="Add another vehicle?"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="hasAtvBoatMotorcycle"
              className="block text-sm font-medium mb-1"
            >
              ATV/Boat/Motorcycle
            </label>
            <input
              id="hasAtvBoatMotorcycle"
              disabled
              value={data.hasAtvBoatMotorcycle ?? ""}
              placeholder="Have an ATV/Boat/Motorcycle?"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="atvBoatMotorcycleDetails"
              className="block text-sm font-medium mb-1"
            >
              ATV/Boat/Motorcycle Details
            </label>
            <input
              id="atvBoatMotorcycleDetails"
              disabled
              value={data.atvBoatMotorcycleDetails ?? ""}
              placeholder="Details"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="mb-2 text-sm font-semibold text-gray-900">Home</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="homeOwnership" className="block text-sm font-medium mb-1">
              Home Ownership
            </label>
            <input
              id="homeOwnership"
              disabled
              value={data.homeOwnership ?? ""}
              placeholder="Own or rent your home?"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="homeInsurance" className="block text-sm font-medium mb-1">
              Home Insurance
            </label>
            <input
              id="homeInsurance"
              disabled
              value={data.homeInsurance ?? ""}
              placeholder="Homeowner/Renter insurance?"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      {(data.vehicleOwnershipDuplicate ||
        data.vehicleMakeModelDuplicate ||
        data.homeOwnershipDuplicate ||
        data.homeInsuranceDuplicate) && (
        <details className="rounded-lg border border-gray-200 bg-white p-3">
          <summary className="cursor-pointer text-sm font-medium text-gray-700">
            Extra fields
          </summary>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="vehicleOwnershipDuplicate"
                className="block text-sm font-medium mb-1"
              >
                Vehicle Ownership (2)
              </label>
              <input
                id="vehicleOwnershipDuplicate"
                disabled
                value={data.vehicleOwnershipDuplicate ?? ""}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="vehicleMakeModelDuplicate"
                className="block text-sm font-medium mb-1"
              >
                Vehicle Make & Model (2)
              </label>
              <input
                id="vehicleMakeModelDuplicate"
                disabled
                value={data.vehicleMakeModelDuplicate ?? ""}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="homeOwnershipDuplicate"
                className="block text-sm font-medium mb-1"
              >
                Home Ownership (2)
              </label>
              <input
                id="homeOwnershipDuplicate"
                disabled
                value={data.homeOwnershipDuplicate ?? ""}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="homeInsuranceDuplicate"
                className="block text-sm font-medium mb-1"
              >
                Home Insurance (2)
              </label>
              <input
                id="homeInsuranceDuplicate"
                disabled
                value={data.homeInsuranceDuplicate ?? ""}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
              />
            </div>
          </div>
        </details>
      )}
    </form>
  );
};

export default HomeInfoView;
