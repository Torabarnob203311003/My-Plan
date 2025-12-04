import { ChevronDown } from "lucide-react";

const GrantorSuggestionsPage = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Grantor Card 1 */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 flex items-start space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-gray-800 font-medium">Name and Last name</p>
              <p className="text-gray-600 text-sm">City, State</p>
              <p className="text-gray-600 text-sm">Grantor</p>
            </div>
          </div>

          {/* Grantor Card 2 */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 flex items-start space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-gray-800 font-medium">Name and Last name</p>
              <p className="text-gray-600 text-sm">City, State</p>
              <p className="text-gray-600 text-sm">Grantor</p>
            </div>
          </div>
        </div>

        {/* Second Row of Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Grantor Card 3 */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 flex items-start space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-gray-800 font-medium">Name and Last name</p>
              <p className="text-gray-600 text-sm">City, State</p>
              <p className="text-gray-600 text-sm">Grantor</p>
            </div>
          </div>

          {/* Grantor Card 4 */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 flex items-start space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
            <div>
              <p className="text-gray-800 font-medium">Name and Last name</p>
              <p className="text-gray-600 text-sm">City, State</p>
              <p className="text-gray-600 text-sm">Grantor</p>
            </div>
          </div>
        </div>

        {/* Suggestions Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">Suggestions</h2>

          <div className="max-w-lg space-y-6">
            {/* Stay prepared */}
            <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-28">
              <h3 className="text-lg font-medium text-gray-700">
                Stay prepared
              </h3>
            </div>

            {/* Become a Grantor */}
            <div className="bg-white rounded-2xl border-2 border-gray-300 p-6 h-28">
              <h3 className="text-lg font-medium text-gray-700">
                Become a Grantor for your loved ones
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GrantorSuggestionsPage;
