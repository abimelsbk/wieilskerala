import React from 'react';
import { Rocket, TrendingUp, Users, Award } from 'lucide-react';

const EntrepreneursChallenge = () => {
  return (
    <section 
      id="challenge" 
      className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <Rocket className="h-6 w-6 text-purple-300" />
              </div>
              <span className="text-purple-300 font-semibold tracking-wider uppercase text-sm">Spotlight</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Entrepreneurs' Challenge
            </h2>
            
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Do you have a big idea that could change the world? Our Entrepreneurs' Challenge gives early-stage, women-led startups the spotlight they deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Pitch your idea</h3>
                  <p className="text-white/70 text-sm">Present your startup to industry experts and investors</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Gain mentorship</h3>
                  <p className="text-white/70 text-sm">Connect with experienced entrepreneurs and mentors</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Inspire others</h3>
                  <p className="text-white/70 text-sm">Become a role model for aspiring women entrepreneurs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
                <div>
                  <h4 className="font-semibold">Apply by</h4>
                  <p className="text-purple-300">October 1, 2025</p>
                </div>
                
                <a 
                  href="#register" 
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-75 blur"></div>
              <div className="relative bg-purple-900 p-6 sm:p-10 rounded-2xl border border-purple-700/50">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="text-purple-300" />
                  <span>Success Stories</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white/5 p-5 rounded-xl">
                    <div className="flex items-center gap-4 mb-3">
                      <img 
                        src="https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Entrepreneur" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-400" 
                      />
                      <div>
                        <h4 className="font-semibold">Aisha Thomas</h4>
                        <p className="text-purple-300 text-sm">EcoTech Solutions</p>
                      </div>
                    </div>
                    <p className="text-white/80 italic">
                      "The mentorship and connections I gained through the WiE challenge propelled my startup to secure our first major funding round."
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-5 rounded-xl">
                    <div className="flex items-center gap-4 mb-3">
                      <img 
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Entrepreneur" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-400" 
                      />
                      <div>
                        <h4 className="font-semibold">Maya Patel</h4>
                        <p className="text-purple-300 text-sm">HealthAI Innovations</p>
                      </div>
                    </div>
                    <p className="text-white/80 italic">
                      "Participating in the challenge gave me the confidence and visibility needed to transform my research into a thriving health tech company."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneursChallenge;