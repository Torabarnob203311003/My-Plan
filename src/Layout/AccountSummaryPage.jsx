import { ChevronDown } from "lucide-react";

const AccountSummaryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
 
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg">Welcome back, Shayla</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Primary Proxy Card */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 flex items-start space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-gray-800 font-medium">Name and Last name</p>
              <p className="text-gray-600 text-sm">City, State</p>
              <p className="text-gray-600 text-sm">Primary Proxy</p>
            </div>
          </div>

          {/* Secondary Proxy Card */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 flex items-start space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-gray-800 font-medium">Name and Last name</p>
              <p className="text-gray-600 text-sm">City, State</p>
              <p className="text-gray-600 text-sm">Secondary Proxy</p>
            </div>
          </div>
        </div>

        {/* Account Summary Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">
            Account Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Financial */}
            <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32">
              <h3 className="text-lg font-medium text-gray-700">Financial</h3>
            </div>

            {/* Personal Items & Effects */}
            <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32">
              <h3 className="text-lg font-medium text-gray-700">
                Personal Items &Effects
              </h3>
            </div>

            {/* Medical */}
            <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32">
              <h3 className="text-lg font-medium text-gray-700">Medical</h3>
            </div>

            {/* Subscriptions */}
            <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32">
              <h3 className="text-lg font-medium text-gray-700">
                Subscriptions
              </h3>
            </div>

            {/* Home & Auto */}
            <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32">
              <h3 className="text-lg font-medium text-gray-700">Hom & Auto</h3>
            </div>

            {/* Social Media & Online */}
            <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-32">
              <h3 className="text-lg font-medium text-gray-700">
                Social Media & Online
              </h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AccountSummaryPage;
