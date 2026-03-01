const ProfileViewFrom = ({ existingData }) => {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6"> Your Profile</h2>

      <div>
        <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
        <input
          id="firstName"
          disabled
          defaultValue={existingData.firstName}
          placeholder="First Name"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
        <input
          id="lastName"
          disabled
          defaultValue={existingData.lastName}
          placeholder="Last Name"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-2">Date of Birth</label>
        <input
          id="dateOfBirth"
          disabled
          type="date"
          defaultValue={existingData.dateOfBirth}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium mb-2">City</label>
        <input
          id="city"
          disabled
          defaultValue={existingData.city}
          placeholder="City"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="state" className="block text-sm font-medium mb-2">State</label>
        <input
          id="state"
          disabled
          defaultValue={existingData.state}
          placeholder="State"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
    </form>
  );
};

export default ProfileViewFrom;
