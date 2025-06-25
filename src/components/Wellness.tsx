import React from 'react';
import { Sunrise, Wind, Waves } from 'lucide-react';

const Wellness = () => {
  return (
    <section 
      id="wellness" 
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-100 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-blue-100 opacity-60 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Sunrise className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">Wellness</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Find Your Flow with Morning Yoga
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Begin each day in peace and presence. Our sunrise yoga sessions, set against the lush backwaters, are here to help you reset, recharge, and reconnect with yourself.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white p-2 rounded-lg">
                    <Wind className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Mindful Breathing</h3>
                </div>
                <p className="text-gray-600">
                  Learn breathing techniques that center your mind and enhance focus throughout the day.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white p-2 rounded-lg">
                    <Waves className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">River Flow Yoga</h3>
                </div>
                <p className="text-gray-600">
                  Experience gentle movements inspired by the flowing waters of the Chaliyar River.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span>6:00 AM - 7:00 AM</span>
              </div>
              
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700">
                <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                <span>All experience levels welcome</span>
              </div>
              
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Mats provided</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-75 rounded-2xl transform rotate-3"></div>
              <img 
                src="/assets/2022/Pic 2.jpeg" 
                alt="Yoga by the river" 
                className="relative rounded-2xl shadow-xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <p className="text-gray-800 font-medium">
                  "The morning yoga sessions were the perfect way to start each summit day. Truly transformative."
                </p>
                <p className="text-purple-600 text-sm mt-2">
                  — Previous Summit Attendee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wellness;