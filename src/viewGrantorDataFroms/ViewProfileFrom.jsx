const ProfileViewFrom = ({ existingData }) => {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6"> Your Profile</h2>

      <input
        disabled
        defaultValue={existingData.firstName}
        placeholder="First Name"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.lastName}
        placeholder="Last Name"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        type="date"
        defaultValue={existingData.dob}
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.city}
        placeholder="City"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.state}
        placeholder="State"
        className="w-full px-4 py-3 border rounded-lg"
      />
    </form>
  );
};

export default ProfileViewFrom;
