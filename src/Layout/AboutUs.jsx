import React from 'react';
import { Heart, Shield, Users, Award, Clock, Target } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your health and wellbeing are at the heart of everything we do"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Certified medications and rigorous quality control standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Licensed pharmacists and healthcare professionals at your service"
    },
    {
      icon: Award,
      title: "Trusted Excellence",
      description: "Years of experience delivering pharmaceutical care you can trust"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="w-full bg-white">
      {/* Hero Section */}
      <div className="w-full py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#4B98D2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About PharmClite
            </h1>
            <p className="text-lg sm:text-xl text-white/95 leading-relaxed">
              Your trusted partner in pharmaceutical care, committed to delivering quality medications and exceptional healthcare services to communities nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4B98D2' }}>
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide accessible, affordable, and high-quality pharmaceutical products and services while prioritizing patient safety and satisfaction. We strive to be more than just a pharmacy – we're your healthcare partner dedicated to improving lives through comprehensive pharmaceutical care.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4B98D2' }}>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become the leading pharmaceutical provider recognized for innovation, reliability, and unwavering commitment to patient care. We envision a future where quality healthcare is accessible to all, supported by cutting-edge technology and compassionate service.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 sm:py-20" style={{ backgroundColor: '#F0F7FB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our commitment to excellence in pharmaceutical care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4"
                style={{ borderColor: '#4B98D2' }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#4B98D2' }}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 sm:py-20" style={{ backgroundColor: '#4B98D2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Founded over 15 years ago, PharmClite began with a simple yet powerful vision: to make quality pharmaceutical care accessible to everyone. What started as a single pharmacy has grown into a trusted healthcare provider serving thousands of customers across the nation.
            </p>
            
            <p>
              Our journey has been driven by innovation, dedication, and an unwavering commitment to patient care. We've embraced modern technology while maintaining the personal touch that makes healthcare truly effective. From medication management to health consultations, we've expanded our services to meet the evolving needs of our community.
            </p>
            
            <p>
              Today, PharmClite stands as a beacon of reliability in pharmaceutical care. Our team of licensed pharmacists and healthcare professionals work tirelessly to ensure every customer receives not just medications, but comprehensive care and support. We're proud of how far we've come, but we're even more excited about where we're going.
            </p>
            
            <p>
              As we continue to grow, our commitment remains unchanged: to be your trusted partner in health, providing quality medications, expert advice, and compassionate care every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20" style={{ backgroundColor: '#F0F7FB' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience Quality Care?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust PharmClite for their pharmaceutical needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#4B98D2' }}
            >
              Contact Us Today
            </a>
            <a
              href="#services"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border-2 hover:bg-gray-50"
              style={{ borderColor: '#4B98D2', color: '#4B98D2' }}
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}