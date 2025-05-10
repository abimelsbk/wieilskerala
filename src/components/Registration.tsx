import React from 'react';
import { Check, X } from 'lucide-react';

const PricingTier = ({ title, price, features, recommended = false }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${recommended ? 'border-purple-400' : 'border-gray-200'}`}>
      {recommended && (
        <div className="bg-purple-600 text-white text-center py-2 font-medium text-sm">
          Recommended
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        
        <div className="mb-8">
          <p className="text-3xl font-bold text-gray-800">
            ₹{price}
            <span className="text-sm font-normal text-gray-500">+ GST</span>
          </p>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1 text-green-500">
                <Check size={16} />
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a
          href="#"
          className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
            recommended 
              ? 'bg-purple-600 hover:bg-purple-700 text-white' 
              : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
          }`}
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

const Registration = () => {
  const commonFeatures = [
    'Access to all sessions',
    'Summit welcome kit',
    'Lunch and refreshments',
    'Networking events',
    'Certificate of participation',
  ];

  const pricingTiers = [
    {
      title: 'IEEE WIE Member',
      price: '10,000',
      features: [
        ...commonFeatures,
        '2 days accommodation',
        'Priority workshop registration',
        'Exclusive WIE networking event',
      ],
      recommended: true,
    },
    {
      title: 'IEEE Member',
      price: '12,500',
      features: [
        ...commonFeatures,
        '2 days accommodation',
        'Workshop registration',
      ],
      recommended: false,
    },
    {
      title: 'Non-IEEE Member',
      price: '15,000',
      features: [
        ...commonFeatures,
        '2 days accommodation',
        'Option to join IEEE & WIE',
      ],
      recommended: false,
    },
  ];

  return (
    <section id="register" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">Registration</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            Secure Your Spot
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Join us for this transformative experience. Early registration is recommended as spaces are limited.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              features={tier.features}
              recommended={tier.recommended}
            />
          ))}
        </div>
        
        <div className="bg-purple-50 rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-3/5">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Group Discounts Available</h3>
              <p className="text-gray-600 mb-6">
                Bringing your team or student group? Get special rates for groups of 5 or more from the same organization or institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300 text-center"
                >
                  Contact for Group Rates
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 bg-white border border-purple-200 hover:bg-purple-50 text-purple-700 rounded-lg font-medium transition-colors duration-300 text-center"
                >
                  Download Brochure
                </a>
              </div>
            </div>
            
            <div className="md:w-2/5">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-gray-800 mb-4">Registration Includes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-600">Full access to summit program (Oct 24-25)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-600">2 days of accommodation at The Raviz Kadavu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-600">All meals and refreshments during the summit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-600">Summit kit with exclusive merchandise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-600">Access to all special experiences and activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;