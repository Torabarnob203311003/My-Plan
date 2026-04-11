import React from 'react';
import { Target, Clock } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { number: "1k+", label: "Users" },
    { number: "24/7", label: "Support Available" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="w-full bg-white">
      {/* Hero Section */}
      <div className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#4B98D2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Planeer
            </h1>
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed">
              Our goal is to help families organize their life information and preserve their stories,
              assets, and wishes for generations to come because we know what it's like to lose
              someone without knowing where to find their most important information. Planeer exists
              so your family never has to make that same painful search
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4B98D2' }}>
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Planeer transforms the paralyzing burden of death and legacy planning into empowering
              household preparedness. Born from personal tragedy — watching loved ones leave families
              scrambling in confusion — we equip every household with simple, complete clarity. We turn
              whispered taboos into confident kitchen-table conversations, replacing crisis chaos with
              strength and certainty. Every family deserves to face tomorrow prepared, not panicked.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#4B98D2' }}>
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              We envision a future where every family stands ready with complete clarity, not caught
              scrambling in crisis. Death and legacy planning will transform from taboo whispers to
              confident conversations held around kitchen tables. We envision leading this cultural
              shift - making the once unspoken hardship into preparedness. That preparation will
              empower every household to face tomorrow with strength and certainty knowing they are ready.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Planeer was founded by Aaron LaRoc. Aaron's personal experience with unexpected loss of
              loved ones and close friends inspired him to create a solution that would help families
              avoid the same confusion and struggle he faced.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-14 sm:py-16" style={{ backgroundColor: '#4B98D2' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/25">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20" style={{ backgroundColor: '#F0F7FB' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            A few moments today = peace of mind tomorrow
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Join families who sleep better knowing their loved ones will never have to search
            for what matters most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#4B98D2' }}
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border-2 hover:bg-gray-50"
              style={{ borderColor: '#4B98D2', color: '#4B98D2' }}
            >
              See Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}