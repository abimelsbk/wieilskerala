import React from "react";
import { Mic } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  designation: string;
  imageUrl: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  designation,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 md:w-56 md:h-56 relative overflow-hidden rounded-full mb-4 border-4 border-purple-100 shadow-lg">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className="font-bold text-xl text-gray-800">{name}</h3>
      <p className="text-purple-600">{designation}</p>
    </div>
  );
};

const Speakers: React.FC = () => {
  // Speaker data
  const speakers = [
    {
      name: "Pooja Ramesh",
      designation: "Carnatic Musician",
      imageUrl:
        "/assets/speakers/WhatsApp Image 2025-06-22 at 06.50.12_9e115bca.jpg",
    },
    /* Commented out until photos are available
    {
      name: "Sabiha Marikar",
      designation: "Tech Leader",
      imageUrl:
        "/assets/speakers/WhatsApp Image 2025-06-22 at 06.50.12_9e115bca.jpg",
    },
    {
      name: "Uthara Ramakrishnan",
      designation: "Innovation Expert",
      imageUrl:
        "/assets/speakers/WhatsApp Image 2025-06-22 at 06.50.12_9e115bca.jpg",
    },
    */
  ];

  return (
    <section id="speakers" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Mic className="h-5 w-5 text-purple-600" />
            <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
              Our Speakers
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Learn from industry leaders and innovators
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Get inspired by our distinguished speakers who bring diverse
            expertise and perspectives to the WIE ILS Kerala 2025.
          </p>
        </div>{" "}
        <div className="flex justify-center">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              designation={speaker.designation}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
