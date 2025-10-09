import React from 'react';

export default function LifePlansHero() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
              All of your life plans,
              <br />
              always in reach
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Planner helps people stay organized and confident
              <br className="hidden sm:block" />
              by keeping life plans accessible anywhere — whether online or offline.
            </p>
          </div>

          {/* Right Image with Card Style */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Outer card background - positioned behind */}
              <div className="absolute -top-10 left-40 -right-20 bottom-40 bg-teal-50 rounded-3xl shadow-xl"></div>
              
              {/* Inner image card */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white z-10">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
                  alt="Woman using mobile device"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}