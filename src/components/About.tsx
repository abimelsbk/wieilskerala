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
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-90 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Women in leadership"
                className="relative rounded-2xl shadow-xl transform -rotate-3 transition-transform duration-500 hover:rotate-0 w-full"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 flex items-center gap-3">
              <Sparkles className="text-purple-600" size={28} />
              <span>Welcome to WIE ILS 2025</span>
            </h2>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-5 rounded-lg mb-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                Our Theme
              </h3>
              <p className="italic text-gray-700">
                "Lead with Purpose: Nurturing &amp; Growing together towards a
                Sustainable tomorrow"
              </p>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Join us for two unforgettable days of learning, connection, and
              celebration of women in leadership. The IEEE Women in Engineering
              International Leadership Summit (WIE ILS) is coming to Kozhikode,
              and it's all about inclusive leadership, innovation, and equity in
              action.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    The Raviz Kadavu
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Nestled by the serene Chaliyar River in Kozhikode, Kerala,
                    our venue offers the perfect blend of natural beauty and
                    world-class facilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Attendee"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Attendee"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Attendee"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              <p className="text-sm text-gray-600 italic">
                Join <span className="text-purple-600 font-medium">500+</span>{" "}
                leaders and innovators
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
