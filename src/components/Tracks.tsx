import { useState } from "react";
import {
  TrendingUp,
  Volume2,
  HeartPulse,
  Flame,
  Rocket,
  Palette,
  Heart,
  User,
} from "lucide-react";

const trackIcons = {
  startup: TrendingUp,
  voices: Volume2,
  wellness: HeartPulse,
  passion: Flame,
  tech: Rocket,
  creativity: Palette,
  inclusion: Heart,
  career: User,
};

const Tracks = () => {
  const [activeTrack, setActiveTrack] = useState(0);

  const tracks = [
    {
      id: "startup",
      title: "Start-Up Strong",
      subtitle: "Entrepreneurship and Financial Independence",
      description:
        "Navigate the journey from idea to successful venture. Learn about funding, scaling, and building sustainable businesses with purpose.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "voices",
      title: "Voices of Change",
      subtitle: "Policy, Law & Advocacy",
      description:
        "Discover how to leverage policy and legal frameworks to create meaningful change and advocate for equity in technology and beyond.",
      color: "from-orange-500 to-pink-600",
    },
    {
      id: "wellness",
      title: "Rejuvenate & Reflect",
      subtitle: "Wellness, Yoga & Balance",
      description:
        "Find harmony between professional success and personal wellbeing through mindfulness practices, yoga, and holistic approaches.",
      color: "from-green-500 to-teal-600",
    },
    {
      id: "passion",
      title: "Ignite Your Passion",
      subtitle: "Expression through Art & Culture",
      description:
        "Explore the intersection of engineering and artistic expression, and how cultural perspectives enrich innovation.",
      color: "from-red-500 to-orange-600",
    },
    {
      id: "tech",
      title: "Edge of Tomorrow",
      subtitle: "Innovation & Emerging Technologies",
      description:
        "Stay ahead of the curve with insights into AI, quantum computing, biotech, and other frontier technologies shaping our future.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: "creativity",
      title: "Craft the Future",
      subtitle: "Creativity Meets Engineering",
      description:
        "Break down silos between creative thinking and technical execution to solve complex problems in unprecedented ways.",
      color: "from-yellow-500 to-amber-600",
    },
    {
      id: "inclusion",
      title: "Neurodiverse by Design",
      subtitle: "Inclusion, Accessibility & Tech for Good",
      description:
        "Learn how to build technologies that serve all people and leverage diverse perspectives for more innovative solutions.",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: "career",
      title: "Discover Yourself",
      subtitle: "Career Growth & Personal Branding",
      description:
        "Define your unique professional identity and chart a career path aligned with your values, strengths, and aspirations.",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const TrackIcon = ({ id, isActive }) => {
    const Icon = trackIcons[id];
    return (
      <Icon size={isActive ? 22 : 20} className="transition-all duration-300" />
    );
  };

  return (
    <section id="tracks" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-purple-50 to-white"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-purple-100 opacity-60 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Summit Tracks
          </h2>
          <p className="text-gray-600">
            Aligned with our theme{" "}
            <span className="font-medium text-purple-700">
              "Lead with Purpose: Nurturing & Growing together towards a
              Sustainable tomorrow"
            </span>
            , our carefully curated tracks provide pathways to purposeful
            leadership and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {tracks.map((track, index) => (
            <button
              key={track.id}
              onClick={() => setActiveTrack(index)}
              className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                activeTrack === index
                  ? `bg-gradient-to-r ${track.color} text-white shadow-md`
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className={`${activeTrack !== index && "text-purple-600"}`}>
                <TrackIcon id={track.id} isActive={activeTrack === index} />
              </div>
              <span className="font-medium text-sm md:text-base">
                {track.title}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 overflow-hidden">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`transition-opacity duration-500 ${
                activeTrack === index ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/3">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r ${track.color} text-white mb-4`}
                  >
                    <TrackIcon id={track.id} isActive={true} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {track.title}
                  </h3>
                  <p className="text-purple-600 font-medium">
                    {track.subtitle}
                  </p>
                </div>

                <div className="md:w-2/3">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {track.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                      Keynotes
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                      Workshops
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                      Panel Discussions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
