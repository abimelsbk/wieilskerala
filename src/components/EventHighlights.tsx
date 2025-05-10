import React from 'react';
import { Globe, Sunrise, Music, Lightbulb, Users, School } from 'lucide-react';

const HighlightCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-purple-50 p-6 transition-all duration-300 hover:shadow-lg hover:border-purple-200 group">
      <div className="p-3 bg-purple-100 rounded-full inline-block mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const EventHighlights = () => {
  const highlights = [
    {
      icon: Globe,
      title: 'Global Speakers',
      description: 'Engage with thought leaders from tech, policy, entrepreneurship & arts from around the world.'
    },
    {
      icon: Sunrise,
      title: 'Morning Yoga',
      description: 'Begin each day with peaceful yoga sessions by the serene Chaliyar River.'
    },
    {
      icon: Music,
      title: 'Cultural Performances',
      description: 'Experience breathtaking cultural performances under the stars.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Workshops',
      description: 'Participate in hands-on, tech-driven workshops to boost your skills.'
    },
    {
      icon: Users,
      title: 'Entrepreneurs\' Challenge',
      description: 'A special challenge designed for women entrepreneurs to showcase their innovative ideas.'
    },
    {
      icon: School,
      title: 'STEM Outreach',
      description: 'Connect with school students through our dedicated STEM outreach program.'
    }
  ];

  return (
    <section id="highlights" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">What's Happening?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            Event Highlights
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Whether you're a student, professional, artist, or changemaker — WiE ILS is designed to spark new ideas, collaborations, and inner clarity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <HighlightCard 
              key={index} 
              icon={highlight.icon} 
              title={highlight.title} 
              description={highlight.description} 
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#register" 
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-purple-400/25"
          >
            Join the Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;