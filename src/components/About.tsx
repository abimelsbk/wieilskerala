import { Sparkles, MapPin, Globe, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white to-purple-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-indigo-900/10 to-transparent"></div>
      <div className="absolute top-40 right-0 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 flex items-center justify-center gap-3">
            <Sparkles className="text-purple-600" size={28} />
            <span>About Us</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Learn more about the organizations behind WIE ILS 2025 and our
            mission to empower women in engineering and leadership.
          </p>
        </div>

        {/* Organization blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* IEEE Block */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 shrink-0">
                  <Globe className="text-blue-600" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  IEEE
                </h3>
              </div>

              <div className="flex-grow mt-4 flex flex-col">
                <div className="bg-blue-50 p-3 rounded-lg mb-4 flex-grow">
                  <h4 className="font-medium text-sm text-blue-800 mb-2">
                    About IEEE
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    The Institute of Electrical and Electronics Engineers (IEEE)
                    is the world's largest technical professional organization
                    dedicated to advancing technology for the benefit of
                    humanity.
                  </p>
                  <div className="mt-3 border-t border-blue-100 pt-3">
                    <div className="flex items-center mb-1.5">
                      <div className="min-w-[26px] h-[26px] rounded-full bg-blue-100 flex items-center justify-center mr-2 px-2">
                        <span className="text-blue-600 text-xs font-bold">
                          400K+
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Members worldwide</p>
                    </div>
                    <div className="flex items-center">
                      <div className="min-w-[26px] h-[26px] rounded-full bg-blue-100 flex items-center justify-center mr-2 px-2">
                        <span className="text-blue-600 text-xs font-bold">
                          160+
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Countries represented
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* IEEE Kerala Section Block */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 shrink-0">
                  <Users className="text-purple-600" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  IEEE Kerala Section
                </h3>
              </div>

              <div className="flex-grow mt-4 flex flex-col">
                <div className="bg-purple-50 p-3 rounded-lg mb-4 flex-grow">
                  <h4 className="font-medium text-sm text-purple-800 mb-2">
                    About Kerala Section
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Established in 1983, IEEE Kerala Section is one of the most
                    active sections in the IEEE India Council, at the forefront
                    of technological advancements and professional development.
                  </p>

                  <div className="mt-3 border-t border-purple-100 pt-3">
                    <div className="flex items-center mb-1.5">
                      <div className="min-w-[26px] h-[26px] rounded-full bg-purple-100 flex items-center justify-center mr-2 px-2">
                        <span className="text-purple-600 text-xs font-bold">
                          15K+
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Active members</p>
                    </div>
                    <div className="flex items-center">
                      <div className="min-w-[26px] h-[26px] rounded-full bg-purple-100 flex items-center justify-center mr-2 px-2">
                        <span className="text-purple-600 text-xs font-bold">
                          40+
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">
                        Years of excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IEEE WIE Block */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
            <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-600"></div>
            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3 shrink-0">
                  <Award className="text-pink-600" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                  IEEE WIE & IEEE WIE Kerala Section
                </h3>
              </div>

              <div className="flex-grow mt-4 flex flex-col">
                <div className="bg-pink-50 p-3 rounded-lg mb-4 flex-grow">
                  <h4 className="font-medium text-sm text-pink-800 mb-2">
                    About IEEE WIE
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    IEEE Women in Engineering (WIE) is one of the world's
                    largest professional organizations dedicated to advancing
                    women in engineering and science with 1,000+ affinity groups
                    across 100+ countries.
                  </p>

                  <div className="mt-3 border-t border-pink-100 pt-3">
                    <div className="mb-3">
                      <h5 className="font-medium text-xs text-pink-800 mb-1.5">
                        IEEE WIE Kerala Section
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center">
                          <div className="min-w-[26px] h-[26px] rounded-full bg-pink-100 flex items-center justify-center mr-2 px-2">
                            <span className="text-pink-600 text-xs font-bold">
                              5.6K+
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">Members</p>
                        </div>
                        <div className="flex items-center">
                          <div className="min-w-[26px] h-[26px] rounded-full bg-pink-100 flex items-center justify-center mr-2 px-2">
                            <span className="text-pink-600 text-xs font-bold">
                              1st
                            </span>
                          </div>
                          <p className="text-xs text-gray-600">
                            In Asia Pacific
                          </p>
                        </div>
                      </div>
                    </div>

                    <h5 className="font-medium text-xs text-pink-800 mb-1.5">
                      Awards & Recognition
                    </h5>
                    <ul className="list-disc list-inside text-xs text-gray-700 pl-0.5 space-y-0.5">
                      <li>
                        Honorable Mention – IEEE WIE AG of the Year Award (2023)
                      </li>
                      <li>MGA WIE Affinity Group of the Year Award (2019)</li>
                      <li>
                        Region 10 WIE Section Affinity Group Award (2013 & 2019)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event information section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="relative">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-purple-600 to-indigo-600 clip-diagonal"></div>
            <div className="absolute top-12 left-12 w-16 h-16 rounded-full bg-pink-400 opacity-20"></div>
            <div className="absolute top-20 right-20 w-24 h-24 rounded-full border-4 border-indigo-300 opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-purple-200 opacity-10"></div>

            <div className="p-10 pt-20 relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-4 mb-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600">
                  <Sparkles className="text-white" size={32} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                  Welcome to WIE ILS{" "}
                  <span className="text-purple-600">2025</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto mb-4"></div>
              </div>

              {/* Theme Card */}
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-xl mb-12 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4 relative z-10">
                  Our Theme
                </h3>
                <p className="text-xl italic text-gray-700 font-medium relative z-10">
                  "Lead with Purpose: Nurturing &amp; Growing together towards a
                  Sustainable tomorrow"
                </p>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Left Column */}
                <div className="bg-purple-50 rounded-2xl p-6 shadow-md border border-purple-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                    </div>
                    About the Summit
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Join us for two unforgettable days of learning, connection,
                    and celebration of women in leadership. The IEEE Women in
                    Engineering International Leadership Summit (WIE ILS) is
                    coming to Kozhikode, and it's all about inclusive
                    leadership, innovation, and equity in action.
                  </p>

                  <div className="flex items-center mt-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-200 text-purple-700 font-bold mr-4">
                      500+
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        Expected Attendees
                      </h4>
                      <p className="text-sm text-gray-600">
                        Leaders and innovators from across the globe
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Venue */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-md border border-purple-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    Event Venue
                  </h3>

                  {/* Venue Image Gallery */}
                  <div className="grid grid-cols-3 gap-2 mb-4 rounded-xl overflow-hidden">
                    <div className="col-span-3">
                      <img
                        src="/assets/venue/pic1.webp"
                        alt="The Raviz Kadavu"
                        className="w-full h-40 object-cover rounded-t-xl"
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/venue/pic2.webp"
                        alt="Venue facilities"
                        className="w-full h-24 object-cover"
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/venue/pic3.webp"
                        alt="Venue surroundings"
                        className="w-full h-24 object-cover"
                      />
                    </div>
                    <div>
                      <img
                        src="/assets/venue/2023-09-02.webp"
                        alt="Venue view"
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-lg font-bold text-purple-700 mb-2">
                      The Raviz Kadavu
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Nestled by the serene Chaliyar River in Kozhikode, Kerala,
                      our venue offers the perfect blend of natural beauty and
                      world-class facilities.
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Centrally located in Kozhikode</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>State-of-the-art conference facilities</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <a
                  href="#register"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold tracking-wide shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Reserve Your Spot Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CSS for diagonal clip path */}
        <style>
          {`
            .clip-diagonal {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default About;
