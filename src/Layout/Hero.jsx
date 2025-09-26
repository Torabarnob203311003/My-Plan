import React from 'react';

function Hero() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 bg-white">
      <div className="container flex flex-col justify-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 mx-auto py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 lg:flex-row lg:justify-between">
        {/* Left Content */}
        <div className="flex flex-col justify-center p-2 sm:p-4 md:p-6 text-center rounded-sm lg:max-w-sm xl:max-w-md 2xl:max-w-lg lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
            Connect{' '}
            <span className="text-[#0066cc] dark:text-[#6366f1]">Healthcare</span>
            <br />
            Professionals
          </h1>
          <p className="mt-4 sm:mt-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-600 leading-relaxed">
            Build meaningful connections in the pharmaceutical industry.
            <br className="hidden md:inline lg:hidden" />
            Network with researchers, doctors, and industry experts worldwide.
          </p>
          <div className="flex flex-col space-y-3 sm:space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-3 md:space-x-4 lg:justify-start">
            <a
              href='/signup'
              className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-md sm:rounded-lg bg-[#0066cc] text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 dark:bg-[#6366f1] dark:hover:bg-indigo-600 shadow-lg hover:shadow-xl"
            >
              Join Network
            </a>
            <a
              href="#"
              className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold border-2 rounded-md sm:rounded-lg border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 dark:border-[#6366f1] dark:text-[#6366f1] dark:hover:bg-[#6366f1] dark:hover:text-white shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Right Visualization */}
        <div className="flex items-center justify-center p-2 sm:p-4 md:p-6 mt-6 sm:mt-8 lg:mt-0 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-112 order-1 lg:order-2">
          {/* Pharma Network Visualization */}
          <div className="relative w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-[#0066cc] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 z-10 animate-pulse">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H8z"/>
              </svg>
            </div>
            
            {/* Connection Nodes */}
            <div className="absolute top-4 sm:top-6 md:top-8 left-1/4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-[#00a86b] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 animate-pulse cursor-pointer transform hover:scale-110">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            
            <div className="absolute top-8 sm:top-12 md:top-16 right-4 sm:right-6 md:right-8 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-[#6366f1] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 animate-pulse delay-150 cursor-pointer transform hover:scale-110">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            
            <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-6 md:left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-13 lg:h-13 xl:w-15 xl:h-15 bg-blue-500 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 animate-pulse delay-300 cursor-pointer transform hover:scale-110">
              <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 xl:w-13 xl:h-13 bg-green-500 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 animate-pulse delay-500 cursor-pointer transform hover:scale-110">
              <svg className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"/>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
              </svg>
            </div>
            
            {/* Additional nodes for larger screens */}
            <div className="hidden lg:block absolute top-1/3 right-1/3 w-7 h-7 lg:w-9 lg:h-9 xl:w-11 xl:h-11 bg-purple-500 rounded-full flex items-center justify-center shadow-md animate-pulse delay-700 cursor-pointer transform hover:scale-110 transition-all duration-300">
              <svg className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
              </svg>
            </div>
            
            <div className="hidden xl:block absolute bottom-1/3 left-1/3 w-8 h-8 xl:w-10 xl:h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-md animate-pulse delay-900 cursor-pointer transform hover:scale-110 transition-all duration-300">
              <svg className="w-4 h-4 xl:w-5 xl:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            
            {/* Connection Lines - Responsive */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {/* Primary connections */}
              <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#0066cc" strokeWidth="1.5" className="sm:stroke-2 md:stroke-3" opacity="0.6" strokeDasharray="3,3" className="sm:stroke-dasharray-5-5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
              </line>
              <line x1="50%" y1="50%" x2="80%" y2="35%" stroke="#6366f1" strokeWidth="1.5" className="sm:stroke-2 md:stroke-3" opacity="0.6" strokeDasharray="3,3" className="sm:stroke-dasharray-5-5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2.5s" repeatCount="indefinite"/>
              </line>
              <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#3b82f6" strokeWidth="1.5" className="sm:stroke-2 md:stroke-3" opacity="0.6" strokeDasharray="3,3" className="sm:stroke-dasharray-5-5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="3s" repeatCount="indefinite"/>
              </line>
              <line x1="50%" y1="50%" x2="75%" y2="85%" stroke="#10b981" strokeWidth="1.5" className="sm:stroke-2 md:stroke-3" opacity="0.6" strokeDasharray="3,3" className="sm:stroke-dasharray-5-5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="1.8s" repeatCount="indefinite"/>
              </line>
              
              {/* Additional connections for larger screens */}
              <g className="hidden lg:block">
                <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="#8b5cf6" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2.2s" repeatCount="indefinite"/>
                </line>
              </g>
              
              <g className="hidden xl:block">
                <line x1="50%" y1="50%" x2="35%" y2="70%" stroke="#ec4899" strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="2.8s" repeatCount="indefinite"/>
                </line>
              </g>
            </svg>
            
            {/* Floating particles - Responsive sizes */}
            <div className="absolute top-1/4 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 bg-[#0066cc] rounded-full animate-bounce delay-100"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 bg-[#6366f1] rounded-full animate-bounce delay-300"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-[#00a86b] rounded-full animate-bounce delay-700"></div>
            
            {/* Additional floating particles for larger screens */}
            <div className="hidden md:block absolute top-1/3 right-1/4 w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
            <div className="hidden lg:block absolute bottom-1/3 left-1/4 w-1.5 h-1.5 lg:w-2 lg:h-2 xl:w-2.5 xl:h-2.5 bg-pink-400 rounded-full animate-bounce delay-1200"></div>
            <div className="hidden xl:block absolute top-2/3 left-2/3 w-1 h-1 xl:w-1.5 xl:h-1.5 bg-yellow-400 rounded-full animate-bounce delay-1400"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;