const FinancialViewForm = ({ existingData }) => {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Update Financial Information
      </h2>

      {/* Bank Account */}
      <input
        disabled
        defaultValue={existingData.bankAccount}
        placeholder="Have a Bank account?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Retirement Account */}
      <input
        disabled
        defaultValue={existingData.retirementAccount}
        placeholder="Have a Retirement account?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Assets */}
      <input
        disabled
        defaultValue={existingData.assets}
        placeholder="What are your current Assets?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Debt */}
      <input
        disabled
        defaultValue={existingData.debt}
        placeholder="Have any Debt?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Home Value */}
      <input
        disabled
        defaultValue={existingData.homeValue}
        placeholder="Home Value (e.g., <$5,000)"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Auto Value */}
      <input
        disabled
        defaultValue={existingData.autoValue}
        placeholder="Auto Value (e.g., Car Make/Model)"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Business Ownership */}
      <input
        disabled
        defaultValue={existingData.businessOwnership}
        placeholder="Own a business?"
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Retirement Plan Type */}
      <input
        disabled
        defaultValue={existingData.retirementPlan}
        placeholder="Retirement Plan (e.g., 401K plan)"
        className="w-full px-4 py-3 border rounded-lg"
      />
    </form>
  );
};

export default FinancialViewForm;
