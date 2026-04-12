const ProfileViewFrom = ({ existingData }) => {
  const data = existingData || {};

  const toDateInputValue = (value) => {
    if (!value) return "";
    if (typeof value === "string") return value.split("T")[0] || "";
    try {
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return "";
      return d.toISOString().split("T")[0];
    } catch {
      return "";
    }
  };

  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name
          </label>
          <input
            id="firstName"
            disabled
            value={data.firstName ?? ""}
            placeholder="First Name"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            disabled
            value={data.lastName ?? ""}
            placeholder="Last Name"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-1">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            disabled
            type="date"
            value={toDateInputValue(data.dateOfBirth)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-1">
            City
          </label>
          <input
            id="city"
            disabled
            value={data.city ?? ""}
            placeholder="City"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium mb-1">
            State
          </label>
          <input
            id="state"
            disabled
            value={data.state ?? ""}
            placeholder="State"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
      </div>
    </form>
  );
};

export default ProfileViewFrom;
