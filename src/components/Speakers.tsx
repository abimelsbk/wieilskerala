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
      name: "Bincy Baby",
      designation: "Founder, Itzserene",
      imageUrl: "/assets/speakers/Bincy.jpg",
    },
    {
      name: "Pooja Ramesh",
      designation: "Musician",
      imageUrl: "/assets/speakers/Pooja.jpg",
    },
    {
      name: "Sabiha Marikar",
      designation: "Senior Commander, Air India",
      imageUrl: "/assets/speakers/Sabiha.jpg",
    },
    {
      name: "Uthara Ramakrishnan",
      designation: "Certified Financial Planner",
      imageUrl: "/assets/speakers/Uthara.png",
    },
    {
      name: "Santhi Priya",
      designation: "Baul Musician",
      imageUrl: "/assets/speakers/Santhi.jpg",
    },
    {
      name: "Merin Joseph, IPS",
      designation: "Superintendent of Police",
      imageUrl: "/assets/speakers/Merin.jpg",
    },
    {
      name: "Adv. Sujaya Sudhakaran",
      designation: "Assistant Public Prosecutor",
      imageUrl: "/assets/speakers/Sujaya.jpg",
    },
    {
      name: "Geetha Saleesh",
      designation: "Entrepreneur",
      imageUrl: "/assets/speakers/Geetha.jpg",
    },
    {
      name: "Anjali Menon",
      designation: "Film Director",
      imageUrl: "/assets/speakers/Anjali.jpg",
    },
    {
      name: "Wg Cdr Ragashree D Nair",
      designation: "Co-Chair & Group CEO, Medicaid Ethos Private Limited",
      imageUrl: "/assets/speakers/Raghasree.jpg",
    },
    {
      name: "Dr. Muhammed Hasil M",
      designation: "Orthopedic and Robotics Surgeon",
      imageUrl: "/assets/speakers/Hasil.jpg",
    },
    {
      name: "Divya Thaikkoottathil",
      designation: "CoFounder & Ex CTO - Zwayam; Founder Wynd Technologies",
      imageUrl: "/assets/speakers/Divya.jpg",
    },
    {
      name: "Shakshi Dhanekar",
      designation: "Associate Professor, Dept of Electrical Engg, IIT Jodhpur and Director, Co-Founder, Sensekriti Tech Sol Pvt Ltd.", 
      imageUrl: "/assets/speakers/Shakshi.webp",
    },
    {
      name: "Dr. A Seema",
      designation: "Scientist",
      imageUrl: "/assets/speakers/Seema.png"
    },
    {
      name: "Anju J D",
      designation: "Cyber Security Manager, EY",
      imageUrl: "/assets/speakers/Anju.jpg"
    },
    {
      name: "Smitha Balakrishnan",
      designation: "Assistant General Manager, TCS",
      imageUrl: "/assets/speakers/Smitha.jpg"
    },
    {
      name: "Sangeeta Singh",
      designation: "Member, Women in Sensors (WiSe) Committee, IEEE Sensors Council",
      imageUrl: "/assets/speakers/sangeetha.jpeg"
    },
    {
      name: "Shankar J",
      designation: "PhD Scholar, NIT Calicut",
      imageUrl: "/assets/speakers/sankar.png"
    },
    {
      name: "Meena Nair",
      designation: "VP Operations and Head, Learning & Development, Director Webyfy IOT Pvt Ltd",
      imageUrl: "/assets/speakers/Meena.jpg"
    },
    {
      name: "Dr. Meena Dasan",
      designation: "Scientist G, Electronics and Radar Development Establishment, LRDE, DRDO",
      imageUrl: "/assets/speakers/Meena_dasan.jpg"
    },
    {
      name: "Vidhu Vincent",
      designation: "Film Director and Writer",
      imageUrl: "/assets/speakers/Vidhu.jpg"
    }, 
    {
      name: "Ramalatha Marimuthu", 
      designation: "Director, iExplore Foundation, Past Global IEEE WiE Chair", 
      imageUrl: "/assets/speakers/Ramalatha.jpg"
    },
    {
      name: "Arundhathi Krishna",
      designation: "Head of Community and Partnerships, TinkerHub",
      imageUrl: "/assets/speakers/Arundhathi.jpg"
    },
    {
      name: "Dr. Harivardhagini Subhadra",
      designation: "Events Coordinator - IEEE PES WiP, Voting member - 2025 WIE Committee",
      imageUrl: "/assets/speakers/Harivardhagini.jpg"
    },
    {
      name: "Fajeena Kareem",
      designation: "CoFounder and CEO Kiora Amorez",
      imageUrl: "/assets/speakers/Fajeena.jpg"
    }
  ];

  // Custom sort: 'Dr. Divya S Iyer IAS' first, rest alphabetically
  const sortedSpeakers = [
    ...speakers.filter((s) => s.name === "Dr. Divya S Iyer IAS"),
    ...speakers
      .filter((s) => s.name !== "Dr. Divya S Iyer IAS")
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      ),
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
            Learn from Industry Leaders and Innovators
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Get inspired by our distinguished speakers who bring diverse
            expertise and perspectives to the WIE ILS Kerala 2025.
          </p>
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {sortedSpeakers.map((speaker, index) => (
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
