import { Check } from "lucide-react";

interface PricingTierProps {
  title: string;
  priceINR: string;
  priceUSD: string;
  features: string[];
  recommended?: boolean;
  onRegister: () => void;
}

const PricingTier = ({
  title,
  priceINR,
  priceUSD,
  features,
  recommended = false,
  onRegister,
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
            <span className="text-sm font-normal text-gray-500"> + GST</span>
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

        <button
          onClick={onRegister}
          className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
            recommended
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-purple-100 hover:bg-purple-200 text-purple-700"
          }`}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

interface RegistrationProps {
  onRegister: () => void;
}

const Registration = ({ onRegister }: RegistrationProps) => {
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
      priceINR: "10,000",
      priceUSD: "140",
      features: [
        ...commonFeatures,
        "Accomodation provided",
        "Priority workshop registration",
        "Exclusive WIE networking event",
      ],
      recommended: true,
    },
    {
      title: "IEEE Member",
      priceINR: "12,500",
      priceUSD: "175",
      features: [
        ...commonFeatures,
        "Accomodation provided",
        "Workshop registration",
      ],
      recommended: false,
    },
    {
      title: "Non-IEEE Member",
      priceINR: "15,000",
      priceUSD: "210",
      features: [
        ...commonFeatures,
        "Accomodation provided",
        "Option to join IEEE & WIE",
      ],
      recommended: false,
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
              onRegister={onRegister}
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
                      Accommodation at The Raviz Kadavu
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
      </div>
    </section>
  );
};

export default Registration;
