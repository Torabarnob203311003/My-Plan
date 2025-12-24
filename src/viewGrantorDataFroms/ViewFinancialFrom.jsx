const FinancialViewFrom = ({ existingData }) => {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Update Financial Information
      </h2>

      <input
        disabled
        defaultValue={existingData.bankAccount}
        placeholder="Bank Account"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.retirementAccount}
        placeholder="Retirement Account"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.assets}
        placeholder="Assets"
        className="w-full px-4 py-3 border rounded-lg"
      />
      <input
        disabled
        defaultValue={existingData.debt}
        placeholder="Debt"
        className="w-full px-4 py-3 border rounded-lg"
      />
    </form>
  );
};

export default FinancialViewFrom;
