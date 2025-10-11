import React from 'react';
import { ArrowRight } from 'lucide-react';

const PlansCard = ({ tier, price, period, priceNote, description, storage, ram, vcpu, buttonText, buttonStyle, recommended, viewPricingText }) => (
  <div className="relative bg-white rounded-lg border border-gray-200 p-6 md:p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
    {recommended && (
      <div className="absolute -top-3 right-6">
        <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-200">
          RECOMMENDED
        </span>
      </div>
    )}
    
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{tier}</h3>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-4xl md:text-5xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 text-sm">{period}</span>
      </div>
      {priceNote && (
        <p className="text-sm text-gray-600 mt-1">{priceNote}</p>
      )}
    </div>

    <p className="text-gray-600 text-sm mb-8 flex-grow">{description}</p>

    <div className="mb-6">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-xs text-gray-500 uppercase mb-2 font-medium">Storage</div>
          <div className="text-sm font-semibold text-gray-900">{storage}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 uppercase mb-2 font-medium">RAM</div>
          <div className="text-sm font-semibold text-gray-900">{ram}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 uppercase mb-2 font-medium">vCPU</div>
          <div className="text-sm font-semibold text-gray-900">{vcpu}</div>
        </div>
      </div>
    </div>

    <div className="space-y-3">
      <button className={`w-full py-3 px-6 rounded font-semibold transition-all ${buttonStyle}`}>
        {buttonText}
      </button>
      
      {viewPricingText && (
        <button className="w-full text-gray-900 font-medium text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all group">
          {viewPricingText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  </div>
);

const Plans = () => {
  const pricingData = [
    {
      tier: 'Free',
      price: '$0',
      period: '/hour',
      priceNote: 'Free forever',
      description: 'For learning and exploring MongoDB in a cloud environment.',
      storage: '512 MB',
      ram: 'Shared',
      vcpu: 'Shared',
      buttonText: 'Try Free',
      buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
      recommended: false,
      viewPricingText: null
    },
    {
      tier: 'Flex',
      price: '$0.011',
      period: '/hour',
      priceNote: 'Up to $30/month',
      description: 'For application development and testing; resources and costs scale to your needs.',
      storage: 'Up to 5GB',
      ram: 'Shared',
      vcpu: 'Shared',
      buttonText: 'Get Started',
      buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
      recommended: false,
      viewPricingText: 'View flex pricing'
    },
    {
      tier: 'Dedicated',
      price: '$0.08',
      period: '/hour',
      priceNote: 'Pay as you go',
      description: 'For production applications with sophisticated workload requirements.',
      storage: '10 GB',
      ram: '2 GB',
      vcpu: '2vCPUs',
      buttonText: 'Get Started',
      buttonStyle: 'bg-green-500 text-white hover:bg-green-600',
      recommended: true,
      viewPricingText: 'View dedicated pricing'
    }
  ];

  return (
    <div className="min-h-screen  md:pt-64 lg:pt-72 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingData.map((plan, index) => (
            <PlansCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;