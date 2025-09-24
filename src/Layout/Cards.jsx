import React from 'react';

const cards = [
  {
    title: 'Medical & Emergency contacts',
    percent: 72,
  },
  {
    title: 'Financials',
    percent: 72,
  },
  {
    title: 'Personal Items & effects',
    percent: 45,
  },
  {
    title: 'Home & Auto',
    percent: 100,
  },
  {
    title: 'Social media & Online presence',
    percent: 30,
  },
  {
    title: 'Subscriptions',
    percent: 50,
  },
];

const Cards = () => {
  return (
    <div className=" min-h-screen p-4">
      <div className="max-w-8xl text-center mx-auto">
        <h1 className="text-2xl font-semibold mb-1 ">Planner Summary</h1>
        <p className="text-gray-600 mb-6">Secure your family in case of emergency</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-4 flex flex-col justify-between min-h-[120px] items-center text-center"
            >
              <div className="flex-1 flex items-center justify-center">
                <h2 className="text-base font-medium text-gray-700 mb-2 leading-tight">{card.title}</h2>
              </div>
              <div className="flex items-center justify-center mt-2 space-x-4">
                <span className="text-2xl font-semibold text-gray-700">{card.percent}%</span>
                <span className="bg-gray-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
