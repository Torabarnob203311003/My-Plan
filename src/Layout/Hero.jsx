import React from 'react';

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: '#8fc4fa'}} className="w-full -mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row mt-10 items-center justify-between gap-8">
          {/* Text Content */}
          <div className="flex-1 text-white max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              All of your life plans, always in reach
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-90">
              Planeer helps people stay organized and confident by keeping life plans accessible anywhere — whether online or offline.
            </p>
          </div>
          
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="bg-white rounded-3xl p-4 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                alt="Woman using tablet"
                className="rounded-2xl w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;