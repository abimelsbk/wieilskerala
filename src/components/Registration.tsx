import { Check } from "lucide-react";

interface PricingTierProps {
  title: string;
  priceINR: string;
  priceUSD: string;
  features: string[];
  recommended?: boolean;
  registrationLink: string;
}

const PricingTier = ({
  title,
  priceINR,
  priceUSD,
  features,
  recommended = false,
  registrationLink,
}: PricingTierProps) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${
        recommended ? "border-purple-400" : "border-gray-200"
      }`}
    >
      {recommended && (
        <div className="bg-purple-600 text-white text-center py-2 font-medium text-sm">
          Recommended
        </div>
      )}

      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>

        <div className="mb-8">
          <p className="text-3xl font-bold text-gray-800 mb-1">
            ₹{priceINR}
            <span className="text-sm font-normal text-gray-500">
              {" "}
              (incl. GST)
            </span>
          </p>
          <p className="text-lg font-medium text-gray-700">
            ${priceUSD}
            <span className="text-sm font-normal text-gray-500">
              {" "}
              USD (incl. GST)
            </span>
          </p>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1 text-green-500">
                <Check size={16} />
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
            recommended
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-purple-100 hover:bg-purple-200 text-purple-700"
          }`}
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

const Registration = () => {
  const commonFeatures = [
    "Access to all sessions",
    "Summit welcome kit",
    "Lunch and refreshments",
    "Networking events",
    "Certificate of participation",
  ];

  const pricingTiers = [
    {
      title: "IEEE WIE Member",
      priceINR: "11,800",
      priceUSD: "140",
      features: [
        ...commonFeatures,
        "Priority workshop registration",
        "Exclusive WIE networking event",
        "Accomodation on shared basis",
      ],
      recommended: false,
      registrationLink: "https://forms.gle/Wu9BGXEEcrNoxq28A",
    },
    {
      title: "IEEE Member",
      priceINR: "14,750",
      priceUSD: "175",
      features: [
        ...commonFeatures,
        "Workshop registration",
        "Accomodation on shared basis",
      ],
      recommended: false,
      registrationLink: "https://forms.gle/sqR58Y7tBpwrP2Te8",
    },
    {
      title: "Non-IEEE Member",
      priceINR: "17,700",
      priceUSD: "210",
      features: [
        ...commonFeatures,
        "Option to join IEEE & WIE",
        "Accomodation on shared basis",
      ],
      recommended: false,
      registrationLink: "https://forms.gle/hVqa3D59qPiUtFjj6",
    },
  ];

  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Join the Movement
          </h2>
          <p className="text-gray-600 mb-6">
            Be part of a community that leads with purpose and nurtures growth
            towards a sustainable tomorrow. Register now to secure your place at
            the IEEE WIE International Leadership Summit 2025.
          </p>
          <div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 px-6 py-3 rounded-full border-l-4 border-purple-500">
            <p className="text-sm md:text-base text-purple-800 font-medium italic">
              "Lead with Purpose: Nurturing &amp; Growing together towards a
              Sustainable tomorrow"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              priceINR={tier.priceINR}
              priceUSD={tier.priceUSD}
              features={tier.features}
              recommended={tier.recommended}
              registrationLink={tier.registrationLink}
            />
          ))}
        </div>

        <div className="bg-purple-50 rounded-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-3/5">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Group Discounts Available
              </h3>
              <p className="text-gray-600 mb-6">
                Bringing your team or student group? Get special rates for
                groups of 5 or more from the same organization or institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300 text-center"
                >
                  Contact for Group Rates
                </a>
                <a
                  href="/assets/brochure.pdf"
                  download
                  className="px-6 py-3 bg-white border border-purple-200 hover:bg-purple-50 text-purple-700 rounded-lg font-medium transition-colors duration-300 text-center"
                >
                  Download Brochure
                </a>
              </div>
            </div>

            <div className="md:w-2/5">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-gray-800 mb-4">
                  Registration Includes:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-600">
                      Full access to summit program (Oct 24-25)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-600">
                      Accommodation Provided at The Raviz Kadavu
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-600">
                      All meals and refreshments during the summit
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-600">
                      Summit kit with exclusive merchandise
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 text-green-500">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-600">
                      Access to all special experiences and activities
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl shadow-lg p-6 md:p-10 mt-8 border-l-4 border-purple-500">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Special Accommodation Options
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300">
                <div className="text-purple-600 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Single Occupancy Room
                </h4>
                <p className="text-gray-600 text-sm">
                  Prefer your own private room? Get exclusive single occupancy
                  accommodation at The Raviz Kadavu.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300">
                <div className="text-purple-600 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  No Accommodation Required
                </h4>
                <p className="text-gray-600 text-sm">
                  Local participant or have your own arrangements? Get
                  summit-only pricing without accommodation.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:deepaaksctce@ieee.org?subject=Special Accommodation Request - IEEE WIE ILS 2025&body=Hello,%0A%0AI would like to inquire about:%0A%0A☐ Single occupancy room%0A☐ No accommodation required%0A%0APlease provide me with the pricing details and availability.%0A%0AThank you!"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-lg transition-colors duration-300 text-center inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Us for Custom Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
