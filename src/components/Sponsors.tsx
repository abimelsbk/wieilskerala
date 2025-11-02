import React from "react";
import { Heart, X } from "lucide-react";

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
      name: "KMCT Group of Institutions",
      imageUrl: "/assets/sponsors/kmct.png",
    },
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
    },
    {
      name: "Industrial Applications Society",
      imageUrl: "/assets/sponsors/ias.webp",
    },
    {
      name: "Kerala State IT Mission",
      imageUrl: "/assets/sponsors/ksit.png",
    },
    {
      name: "IEEE Kerala Section Strategic Initiatives on Industry Management",
      imageUrl: "/assets/sponsors/siee.jpg",
    },
    {
      name: "IEEE Robotics and Automation Society",
      imageUrl: "/assets/sponsors/RAS.png",
    },
    {
      name: "IEEE Young Professionals",
      imageUrl: "/assets/sponsors/yp.jpg",
    },
    {
      name: "IEEE Microwave Theory & Technology Society",
      imageUrl: "/assets/sponsors/mtts.jpg",
    },
  ];

  // Event Resource Partner data
  const resourcePartners: SponsorProps[] = [
    {
      name: "Event Resource Partner: CMA",
      imageUrl: "/assets/sponsors/cma.jpg",
    },
  ];

  // Event Support Partners data
  const supportPartners: SponsorProps[] = [
    {
      name: "Kiora Amorez",
      imageUrl: "/assets/sponsors/kiora.png",
    },
    
  ];


    // Event publicity Partners data
  const publicityPartners: SponsorProps[] = [
    {
      name: "Red FM",
      imageUrl: "/assets/sponsors/redfm.jpg",
    },
    
  ];

  // Advertisements from sponsors (images only)
  // To add more ads, drop images into `public/assets/advertisement/` and add the filenames here
  const advertisements: string[] = ["/assets/advertisement/ad1.jpg"];

  // Show placeholder content if no sponsors are added yet
  const hasSponsors = sponsors.length > 0;

  // Lightbox for advertisements
  const [lightboxSrc, setLightboxSrc] = React.useState<string | null>(null);
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    if (lightboxSrc) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxSrc]);

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

        {/* Event Support Partners Section */}
        <div className="my-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Event Support Partners
            </h3>
            <p className="text-gray-600">
              We appreciate the support of our event support partners.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 mx-auto">
            {supportPartners.map((partner, idx) => (
              <SponsorCard
                key={idx}
                name={partner.name}
                imageUrl={partner.imageUrl}
                website={partner.website}
              />
            ))}
          </div>
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

        {/* A Word from our sponsors - Advertisements (images only) */}
        {advertisements.length > 0 && (
          <div className="mt-8 md:mt-12">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl font-bold text-gray-800">
                A Word from our sponsors
              </h3>
              <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded mx-auto"></div>
            </div>
            <div className="flex justify-center items-center gap-8">
              {advertisements.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setLightboxSrc(src)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxSrc(src);
                    }
                  }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <div className="w-full h-72 md:h-96 flex items-center justify-center bg-gray-50 cursor-zoom-in">
                    <img
                      src={src}
                      alt="Sponsor advertisement"
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {lightboxSrc && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxSrc(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxSrc(null);
              }}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <div
              className="max-w-[95vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxSrc}
                alt="Sponsor advertisement full size"
                className="w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain cursor-zoom-out"
              />
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



         {/* Event Publicity Partner Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Publicity Partner
            </h3>
            <p className="text-gray-600">
              Special thanks to our event resource partner for their support.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 mx-auto">
            {publicityPartners.map((partner, idx) => (
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
