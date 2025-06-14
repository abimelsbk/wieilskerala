import { Sparkles, MapPin } from "lucide-react";

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

            <p className="text-gray-700 mb-8 leading-relaxed">
              This summit brings together leaders committed to sustainable
              growth, purposeful innovation, and nurturing communities that
              thrive together. We believe in leadership that creates lasting
              positive impact through collaboration, empathy, and
              forward-thinking approaches.
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
