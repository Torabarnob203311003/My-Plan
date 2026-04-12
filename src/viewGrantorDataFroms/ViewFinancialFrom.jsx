const FinancialViewForm = ({ existingData }) => {
  const data = existingData || {};
  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bankAccount" className="block text-sm font-medium mb-1">
            Bank Account
          </label>
          <input
            id="bankAccount"
            disabled
            value={data.bankAccount ?? ""}
            placeholder="Have a bank account?"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="retirementAccount"
            className="block text-sm font-medium mb-1"
          >
            Retirement Account
          </label>
          <input
            id="retirementAccount"
            disabled
            value={data.retirementAccount ?? ""}
            placeholder="Have a retirement account?"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="assets" className="block text-sm font-medium mb-1">
            Current Assets
          </label>
          <input
            id="assets"
            disabled
            value={data.assets ?? ""}
            placeholder="Current assets"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="assetsValue" className="block text-sm font-medium mb-1">
            Assets Value
          </label>
          <input
            id="assetsValue"
            disabled
            value={data.assetsValue ?? ""}
            placeholder="Assets value"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="debt" className="block text-sm font-medium mb-1">
            Debt
          </label>
          <input
            id="debt"
            disabled
            value={data.debt ?? ""}
            placeholder="Any debt?"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="hasDebt" className="block text-sm font-medium mb-1">
            Has Debt
          </label>
          <input
            id="hasDebt"
            disabled
            value={data.hasDebt ?? ""}
            placeholder="Has debt?"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="homeValue" className="block text-sm font-medium mb-1">
            Home Value
          </label>
          <input
            id="homeValue"
            disabled
            value={data.homeValue ?? ""}
            placeholder="Home value"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="autoValue" className="block text-sm font-medium mb-1">
            Auto Value
          </label>
          <input
            id="autoValue"
            disabled
            value={data.autoValue ?? ""}
            placeholder="Auto value"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="businessOwnership"
            className="block text-sm font-medium mb-1"
          >
            Business Ownership
          </label>
          <input
            id="businessOwnership"
            disabled
            value={data.businessOwnership ?? ""}
            placeholder="Own a business?"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="retirementPlan" className="block text-sm font-medium mb-1">
            Retirement Plan
          </label>
          <input
            id="retirementPlan"
            disabled
            value={data.retirementPlan ?? ""}
            placeholder="Retirement plan"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="otherFinancialInfo"
            className="block text-sm font-medium mb-1"
          >
            Other Financial Info
          </label>
          <input
            id="otherFinancialInfo"
            disabled
            value={data.otherFinancialInfo ?? ""}
            placeholder="Other info"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm"
          />
        </div>
      </div>
    </form>
  );
};

export default FinancialViewForm;
