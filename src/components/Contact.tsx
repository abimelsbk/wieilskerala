import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactCard = ({
  icon: Icon,
  title,
  line1,
  line2 = null,
  link = null,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-purple-50 hover:border-purple-200">
      <div className="p-3 bg-purple-100 rounded-full inline-block mb-4 text-purple-600">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-1">{line1}</p>
      {line2 && <p className="text-gray-600">{line2}</p>}
      {link && (
        <a
          href={link.href}
          className="inline-flex items-center gap-1 text-purple-600 font-medium mt-3 hover:text-purple-800 transition-colors duration-300"
        >
          {link.text}
          <Send size={14} />
        </a>
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
            Reach Out
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gray-800">
            Have Questions? Get in Touch
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We're here to help with any questions about the summit, sponsorship
            opportunities, or how to get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactCard
            icon={Mail}
            title="Email Us"
            line1="Prof. Deepa A K: deepaaksctce@ieee.org"
            line2="Dr. Bindima T: bindima@ieee.org"
            link={{ text: "Send Email", href: "mailto:deepaaksctce@ieee.org" }}
          />

          <ContactCard
            icon={Phone}
            title="Call Us"
            line1="Prof. Deepa A K: +91 94973 36411"
            line2="Dr. Bindima T: +91 94956 63242"
          />

          <ContactCard
            icon={MapPin}
            title="Venue Location"
            line1="The Raviz Kadavu"
            line2="Kozhikode, Kerala, India"
            link={{ text: "View on Map", href: "#" }}
          />
        </div>

        {/* <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-full p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="md:w-1/2 bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-6 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Join Our Community</h3>
                <p className="mb-6 opacity-90">
                  Stay updated with the latest news, announcements, and
                  opportunities from WIE ILS Kerala and the broader IEEE WIE
                  community.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Get early access to summit updates</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Connect with fellow women in engineering</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p>Learn about mentorship opportunities</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
