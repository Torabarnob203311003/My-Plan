const FinancialViewForm = ({ existingData }) => {
  return (
    <form className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">
        Update Financial Information
      </h2>

      {/* Bank Account */}
      <div>
        <label htmlFor="bankAccount" className="block text-sm font-medium mb-2">Bank Account</label>
        <input
          id="bankAccount"
          disabled
          defaultValue={existingData.bankAccount}
          placeholder="Have a Bank account?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Retirement Account */}
      <div>
        <label htmlFor="retirementAccount" className="block text-sm font-medium mb-2">Retirement Account</label>
        <input
          id="retirementAccount"
          disabled
          defaultValue={existingData.retirementAccount}
          placeholder="Have a Retirement account?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Assets */}
      <div>
        <label htmlFor="assets" className="block text-sm font-medium mb-2">Current Assets</label>
        <input
          id="assets"
          disabled
          defaultValue={existingData.assets}
          placeholder="What are your current Assets?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Debt */}
      <div>
        <label htmlFor="debt" className="block text-sm font-medium mb-2">Debt</label>
        <input
          id="debt"
          disabled
          defaultValue={existingData.debt}
          placeholder="Have any Debt?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Home Value */}
      <div>
        <label htmlFor="homeValue" className="block text-sm font-medium mb-2">Home Value</label>
        <input
          id="homeValue"
          disabled
          defaultValue={existingData.homeValue}
          placeholder="Home Value (e.g., <$5,000)"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Auto Value */}
      <div>
        <label htmlFor="autoValue" className="block text-sm font-medium mb-2">Auto Value</label>
        <input
          id="autoValue"
          disabled
          defaultValue={existingData.autoValue}
          placeholder="Auto Value (e.g., Car Make/Model)"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Business Ownership */}
      <div>
        <label htmlFor="businessOwnership" className="block text-sm font-medium mb-2">Business Ownership</label>
        <input
          id="businessOwnership"
          disabled
          defaultValue={existingData.businessOwnership}
          placeholder="Own a business?"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Retirement Plan Type */}
      <div>
        <label htmlFor="retirementPlan" className="block text-sm font-medium mb-2">Retirement Plan</label>
        <input
          id="retirementPlan"
          disabled
          defaultValue={existingData.retirementPlan}
          placeholder="Retirement Plan (e.g., 401K plan)"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>
    </form>
  );
};

export default FinancialViewForm;
