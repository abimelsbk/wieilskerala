import React from "react";
import { Heart } from "lucide-react";

interface SponsorProps {
  name: string;
  imageUrl: string;
  website?: string;
}

const SponsorCard: React.FC<SponsorProps> = ({ name, imageUrl, website }) => {
  const content = (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border-2 border-gray-100 hover:border-purple-200">
      <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600"></div>

      <div className="p-6 flex flex-col items-center">
        <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-lg text-gray-800 text-center">
          {name}
        </h3>
      </div>
    </div>
  );

  if (website) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};

const Sponsors: React.FC = () => {
  // Sponsor data in specified order
  const sponsors: SponsorProps[] = [
    {
      name: "Women in Power",
      imageUrl: "/assets/sponsors/logo_pes-wip.webp",
    },
    {
      name: "Indian Women Network",
      imageUrl: "/assets/sponsors/iwn_logo.jpg",
    },
    {
      name: "WiSe - IEEE Sensors Council",
      imageUrl: "/assets/sponsors/wise.png",
    },
    {
      name: "IEEE Professional Communication Society",
      imageUrl: "/assets/sponsors/procomm.webp",
    }
  ];

  // Event Resource Partner data
  const resourcePartners: SponsorProps[] = [
    {
      name: "Event Resource Partner: CMA",
      imageUrl: "/assets/sponsors/cma.jpg",
    },
  ];

  // Show placeholder content if no sponsors are added yet
  const hasSponsors = sponsors.length > 0;

  return (
    <section
      id="sponsors"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-purple-600" />
            <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
              Our Supporters
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Meet Our Sponsors & Partners
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            We're grateful to our sponsors and partners who help make WIE ILS
            Kerala 2025 possible, supporting women in engineering and fostering
            innovation in technology.
          </p>
        </div>

        {hasSponsors ? (
          <div className="mb-16">
            <div className="flex flex-wrap justify-center items-center gap-8 mx-auto">
              {sponsors.map((sponsor, index) => (
                <SponsorCard
                  key={index}
                  name={sponsor.name}
                  imageUrl={sponsor.imageUrl}
                  website={sponsor.website}
                />
              ))}
            </div>
          </div>
        ) : (
          // Placeholder content when no sponsors are added
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-2xl mx-auto border-2 border-dashed border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Sponsorship Opportunities Available
              </h3>
              <p className="text-gray-600 mb-8">
                Join us as a sponsor and support women in engineering! Your
                partnership helps us create an inspiring and empowering
                experience for attendees from around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-400/25"
                >
                  Become a Sponsor
                </a>
                <a
                  href="/assets/brochure.pdf"
                  download
                  className="px-8 py-3 bg-white border border-purple-200 hover:bg-purple-50 text-purple-700 rounded-full font-medium transition-colors duration-300"
                >
                  Download Sponsorship Info
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Event Resource Partner Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Event Resource Partner
            </h3>
            <p className="text-gray-600">
              Special thanks to our event resource partner for their support.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 mx-auto">
            {resourcePartners.map((partner, idx) => (
              <SponsorCard
                key={idx}
                name={partner.name}
                imageUrl={partner.imageUrl}
                website={partner.website}
              />
            ))}
          </div>
        </div>

        {/* Call to Action for Potential Sponsors */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Sponsoring WIE ILS 2025?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Partner with us to empower the next generation of women leaders in
              engineering. Various sponsorship packages are available to suit
              your organization's goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
