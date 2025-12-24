import { useNavigate } from "react-router-dom";
import { useGetUserGrantorsQuery } from "../redux/features/user/userApi";

const GrantorSuggestionsPage = () => {
  const { data, isLoading } = useGetUserGrantorsQuery(undefined);
  const navigate = useNavigate();
  if (isLoading) {
  return (
      <div className="w-full mx-auto h-96 mt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }
  console.log(data)
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
          {data?.data?.map((grantor, i) => (
            <div
            onClick={()=>navigate(`/grantor/${grantor._id}`)}
              key={i}
              className="bg-white rounded-2xl border-2 border-gray-300 p-6 flex items-start space-x-4 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold">👤</span>
              </div>
              <div>
                <p className="text-gray-800 font-medium">{grantor?.email}</p>
                <p className="text-gray-800 font-medium">
                  {grantor?.phoneNumber}
                </p>
              </div>
            </div>
          ))}
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
