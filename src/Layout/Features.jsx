import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Organize your life, simplify your future
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Secure your life and legacy for your family's future
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Feature 1: Peace of mind */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <svg width="180" height="140" viewBox="0 0 180 140" className="w-full h-auto">
                {/* Checkboxes */}
                <rect x="20" y="20" width="30" height="30" rx="4" fill="#D1F4E0" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M 26 35 L 32 41 L 44 29" stroke="#4CAF50" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                
                <rect x="60" y="20" width="30" height="30" rx="4" fill="#D1F4E0" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M 66 35 L 72 41 L 84 29" stroke="#4CAF50" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                
                <rect x="100" y="20" width="30" height="30" rx="4" fill="#D1F4E0" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M 106 35 L 112 41 L 124 29" stroke="#4CAF50" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                
                <rect x="140" y="20" width="30" height="30" rx="4" fill="#E8E8E8" stroke="#CCCCCC" strokeWidth="2"/>
                
                {/* Pencil */}
                <g transform="translate(130, 60) rotate(-25)">
                  <rect x="0" y="0" width="8" height="50" fill="#FFB74D" rx="1"/>
                  <polygon points="0,50 4,58 8,50" fill="#8B4513"/>
                  <rect x="0" y="0" width="8" height="12" fill="#E57373"/>
                  <circle cx="4" cy="6" r="2" fill="#FFF"/>
                </g>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Peace of mind
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Organize your medical, financial, personal, home & auto information
            </p>
          </div>

          {/* Feature 2: Effortless sharing */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <svg width="180" height="140" viewBox="0 0 180 140" className="w-full h-auto">
                {/* Laptop */}
                <rect x="40" y="40" width="100" height="65" rx="4" fill="#E3F2FD" stroke="#64B5F6" strokeWidth="2"/>
                <rect x="45" y="45" width="90" height="50" fill="#BBDEFB"/>
                <rect x="30" y="105" width="120" height="8" rx="2" fill="#90CAF9"/>
                
                {/* People */}
                {/* Person 1 - Left */}
                <g transform="translate(15, 25)">
                  <circle cx="15" cy="15" r="12" fill="#FFB74D"/>
                  <circle cx="15" cy="12" r="6" fill="#FFF9C4"/>
                  <path d="M 8 25 Q 8 18 15 18 Q 22 18 22 25" fill="#FFB74D"/>
                </g>
                
                {/* Person 2 - Right */}
                <g transform="translate(135, 25)">
                  <circle cx="15" cy="15" r="12" fill="#9575CD"/>
                  <circle cx="15" cy="12" r="6" fill="#E1BEE7"/>
                  <path d="M 8 25 Q 8 18 15 18 Q 22 18 22 25" fill="#9575CD"/>
                </g>
                
                {/* Connection dots */}
                <circle cx="80" cy="72" r="3" fill="#4CAF50"/>
                <circle cx="95" cy="72" r="3" fill="#4CAF50"/>
                <circle cx="110" cy="72" r="3" fill="#4CAF50"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Effortless sharing
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Securely share your information with your loved ones
            </p>
          </div>

          {/* Feature 3: Personalized guidance */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <svg width="180" height="140" viewBox="0 0 180 140" className="w-full h-auto">
                {/* Mountain/Graph */}
                <path d="M 20 110 L 60 70 L 100 50 L 140 20 L 160 35" 
                      stroke="#E57373" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
                
                {/* Person climbing */}
                <g transform="translate(125, 25)">
                  <circle cx="0" cy="0" r="10" fill="#64B5F6"/>
                  <circle cx="0" cy="-3" r="5" fill="#BBDEFB"/>
                  <line x1="-5" y1="5" x2="-12" y2="15" stroke="#64B5F6" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="5" y1="5" x2="12" y2="15" stroke="#64B5F6" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="-3" y1="8" x2="-8" y2="20" stroke="#64B5F6" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="3" y1="8" x2="10" y2="18" stroke="#64B5F6" strokeWidth="3" strokeLinecap="round"/>
                </g>
                
                {/* Flag */}
                <line x1="155" y1="20" x2="155" y2="50" stroke="#FFB74D" strokeWidth="2"/>
                <path d="M 155 20 L 175 25 L 155 30 Z" fill="#FF6B35"/>
                
                {/* Steps/Path markers */}
                <circle cx="60" cy="70" r="4" fill="#4CAF50" opacity="0.6"/>
                <circle cx="100" cy="50" r="4" fill="#4CAF50" opacity="0.6"/>
                <circle cx="140" cy="20" r="4" fill="#4CAF50" opacity="0.6"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Personalized guidance
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Receive reminders, alerts, updates and personalized suggestions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;