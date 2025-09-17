import { Calendar, Clock, MapPin, Shield } from "lucide-react";

const PreEvents = () => {
  return (
    <section
      id="pre-events"
      className="py-24 bg-gradient-to-b from-purple-50/40 via-white to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
            Curtain Raiser
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            Pre-Events
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Ahead of the summit, join our awareness & engagement initiatives
            designed to inform, inspire and build momentum.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-10 flex flex-col">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 bg-purple-100/60 px-4 py-1 rounded-full w-fit mb-6">
              <Shield size={16} /> Digital Safety Awareness
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🌐 Digital Rakshak: Orientation Session on Cyber Wellness
            </h3>

            <blockquote className="text-purple-700 font-medium italic border-l-4 border-purple-400 pl-4 mb-6">
              🔐 “The more we connect, the more we need to protect.”
            </blockquote>

            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                In today’s digital world, every click matters. Cybersecurity is
                no longer optional—it’s a responsibility we all share. Let’s
                come together to learn, spread awareness, and protect ourselves
                and our communities online.
              </p>
              <p>
                As the curtain raiser of the WiE International Leadership
                Summit, IEEE WIE Kerala Section, in collaboration with
                Responsible Netism, presents this orientation session on Cyber
                Wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Date
                  </p>
                  <p className="font-semibold text-gray-800">30 Aug 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Time
                  </p>
                  <p className="font-semibold text-gray-800">
                    1:00 PM – 4:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Venue
                  </p>
                  <p className="font-semibold text-gray-800">
                    IEEE Section Office, Kochi
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <a
                href="https://da.gd/digitalrak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-8 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors duration-300 shadow-sm"
              >
                Register Here
              </a>
              <a
                href="#register"
                className="flex-1 text-center px-8 py-3 rounded-full border border-purple-300 text-purple-700 font-medium hover:bg-purple-50 transition-colors duration-300"
              >
                Summit Registration
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500 italic">
              🚀 Become a Digital Rakshak and take the first step towards a
              safer digital world!
            </p>
          </div>

          <div className="lg:w-1/2 relative h-80 lg:h-auto group overflow-hidden">
            <img
              src="/preevents/P1.jpg"
              alt="Digital Rakshak Pre-Event Poster"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreEvents;
