import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/90 via-purple-800/80 to-indigo-900/90"></div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div
            className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm mb-8 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-center space-x-2 text-sm md:text-base">
              <Calendar size={16} className="text-purple-300" />
              <span>October 24-25, 2025</span>
              <span className="h-4 w-px bg-purple-300/50"></span>
              <MapPin size={16} className="text-purple-300" />
              <span>Kozhikode, Kerala</span>
            </div>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            IEEE <span className="text-purple-300">WIE</span> International
            Leadership Summit
          </h1>

          <div
            className="inline-block py-2 px-6 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="text-xl md:text-2xl text-purple-200 font-medium">
              Lead with Purpose: Nurturing &amp; Growing together towards a
              Sustainable tomorrow
            </h2>
          </div>

          <p
            className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            "A woman is the full circle. Within her is the power to create,
            nurture and transform."
            <span className="block mt-2 text-sm md:text-base italic">
              — Diane Mariechild
            </span>
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#register"
              className="px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-transparent border border-white/30 hover:bg-white/10 rounded-full font-medium transition-all duration-300 w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="block">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
