import { useNavigate } from "react-router-dom";
import { useGetAllQuery } from "../redux/features/forms/formsApi";
import { useSelector } from "react-redux";

const Cards = () => {
  const userId = useSelector((state) => state.auth.user.userId);
  const { data, isLoading } = useGetAllQuery(userId ? userId : undefined);
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="w-full mx-auto h-96 mt-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }
  const cards = [
    {
      title: "Medical & Emergency contacts",
      percent: data?.data?.medicalsInfo ? data?.data?.medicalsInfo : 0,
      url: "/update/medical",
    },
    {
      title: "Financial",
      percent: data?.data?.financialPercentage
        ? data?.data?.financialPercentage
        : 0,
      url: "/update/financial",
    },
    {
      title: "Personal Items & effects",
      percent: 0,
      // percent: data?.data?.financialPercentage
      //   ? data?.data?.financialPercentage
      //   : 0,
      url: "/update/profile",
    },
    {
      title: "Home & Auto",
      percent: data?.data?.homeAutoInfo ? data?.data?.homeAutoInfo : 0,
      url: "/update/home",
    },
    {
      title: "Social media & Online presence",
      percent: data?.data?.socialInfo ? data?.data?.socialInfo : 0,
      url: "/update/social",
    },
  ];
  return (
    <div className=" p-4">
      <div className="max-w-8xl text-center mx-auto">
        <h1 className="text-2xl font-semibold mb-1 ">Planner Summary</h1>
        <p className="text-gray-600 mb-6">
          Secure your family in case of emergency
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-4 flex flex-col justify-between min-h-[120px] items-center text-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => navigate(`${card.url}`)}
            >
              <div className="flex-1 flex items-center justify-center">
                <h2 className="text-base font-medium text-gray-700 mb-2 leading-tight">
                  {card.title}
                </h2>
              </div>
              <div className="flex items-center justify-center mt-2 space-x-4">
                <span className="text-2xl font-semibold text-gray-700">
                  {card.percent}%
                </span>
                <span className="bg-gray-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
