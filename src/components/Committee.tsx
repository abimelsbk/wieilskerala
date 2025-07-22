import React from "react";
import { Users } from "lucide-react";

interface CommitteeMemberProps {
  name: string;
  position: string;
  imageUrl?: string;
}

const CommitteeMember: React.FC<CommitteeMemberProps> = ({
  name,
  position,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center">
      {imageUrl ? (
        <div className="w-32 h-32 md:w-40 md:h-40 relative overflow-hidden rounded-full mb-4 border-4 border-purple-100 shadow-lg">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ) : (
        <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mb-4 border-4 border-purple-100 shadow-lg flex items-center justify-center">
          <Users className="h-12 w-12 text-purple-600" />
        </div>
      )}
      <h3 className="font-bold text-lg text-gray-800 text-center">{name}</h3>
      <p className="text-purple-600 text-center text-sm">{position}</p>
    </div>
  );
};

interface CommitteeGroupProps {
  title: string;
  members: CommitteeMemberProps[];
  showPhotos?: boolean;
}

const CommitteeGroup: React.FC<CommitteeGroupProps> = ({
  title,
  members,
  showPhotos = false,
}) => {
  if (showPhotos) {
    return (
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{title}</h3>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <CommitteeMember
              key={index}
              name={member.name}
              position={member.position}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800 text-lg">
                    Name
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-800 text-lg">
                    Position
                  </th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 hover:bg-purple-50 transition-colors duration-200 ${
                      index === members.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">
                      {member.name}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {member.position}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Committee: React.FC = () => {
  // Advisory Committee data
  const advisoryCommittee = [
    {
      name: "Dr Winnie Ye",
      position: "Chair, IEEE Women in Engineering",
      imageUrl: "/assets/Advisory Committee/Winnie.jpg",
    },
    {
      name: "Dr K R Suresh Nair",
      position: "Past Chair, IEEE India Council",
      imageUrl: "/assets/Advisory Committee/Suresh.jpg",
    },
    {
      name: "Dr Sameer S M",
      position: "Director Elect Region 10 (Asia Pacific)",
      imageUrl: "/assets/Advisory Committee/Sameer.jpg",
    },
    {
      name: "Prof Muhammed Kasim",
      position: "Past Chair, IEEE Kerala Section",
      imageUrl: "/assets/Advisory Committee/Kasim.jpeg",
    },
    {
      name: "Dr B S Manoj",
      position: "Chair, IEEE Kerala Section",
      imageUrl: "/assets/Advisory Committee/Manoj.jpg",
    },
    {
      name: "Dr Lillykutty Jacob",
      position: "Past Chair WIE AG, IEEE Kerala Section",
      imageUrl: "/assets/Advisory Committee/Lillykutty.png",
    },
    {
      name: "Prof Prerna Gaur",
      position: "Chair, IEEE India Council",
      imageUrl: "/assets/Advisory Committee/Prerna.jpg",
    },
    {
      name: "Dr Agnes Irwanti",
      position: "Chair, IEEE R10 WIE Committee (2024)",
      imageUrl: "/assets/Advisory Committee/Agnes.png",
    },
    {
      name: "Sadhana Attavar",
      position: "Chair, IEEE WIE ILS Sub Committee",
      imageUrl: "/assets/Advisory Committee/Sadhana.jpg",
    },
    {
      name: "Warunika Hippola",
      position: "Region 10 Coordinator, IEEE WIE",
      imageUrl: "/assets/Advisory Committee/Warunika.jpg",
    },
  ];

  // General Chair
  const generalChair = [
    {
      name: "Ms Sarada Jayakrishnan",
      position: "Past Chair IEEE Kerala Section",
    },
  ];

  // Organising Chairs
  const organisingChairs = [
    {
      name: "Prof Deepa A K",
      position: "Chair, WIE AG, IEEE Kerala Section",
    },
    {
      name: "Dr Bindima T",
      position: "Chair, Malabar Sub Section, IEEE Kerala Section",
    },
    {
      name: "Dr. Gilesh M P",
      position: "Vice Chair, IEEE Kerala Section",
    },
  ];

  // Steering Committee
  const steeringCommittee = [
    {
      name: "Dr Mini Ulanat",
      position: "Past Chair IEEE Kerala Section",
    },
  ];

  // Programme Committee
  const programmeCommittee = [
    {
      name: "Dr. Bijuna Kunju",
      position: "WiE Kerala Section Advisor",
    },
    {
      name: "Dr. K. Meenakshy",
      position: "Past WiE AG Chair, IEEE Kerala Section",
    },
  ];

  // Publicity Committee
  const publicityCommittee = [
    {
      name: "Prof. Sunitha Beevi",
      position: "Member of the IEEE SIGHT Committee 2025",
    },
  ];

  // Sponsorship Committee
  const sponsorshipCommittee = [
    {
      name: "Mr. Varghese Cherian",
      position: "Technology Services Head at UST Global",
    },
    {
      name: "Dr. Bijoy A Jose",
      position: "Vice Chair Kochi Subsection",
    },
    {
      name: "Mr. Shone Jose",
      position: "Chair IEEE Sensors Council Kerala Section",
    },
    {
      name: "Prof. Nandan S.",
      position: "Secretary, IEEE Kerala Section",
    },
  ];

  // Finance Committee
  const financeCommittee = [
    {
      name: "Ms. Jyothi Ramaswamy",
      position: "Vice Chair, WIE AG, IEEE Kerala Section",
    },
    {
      name: "Prof. Sabiq P V",
      position: "Treasurer, IEEE Kerala Section",
    },
  ];

  // Organising Secretary
  const organisingSecretary = [
    {
      name: "Dr Elizabeth Rita Samuel",
      position: "Secretary, WIE AG, IEEE Kerala",
    },
  ];

  // Website Committee
  const websiteCommittee = [
    {
      name: "Ms. Aisha Nazia",
      position: "Past Secretary of WIE AG Kerala Section",
    },
  ];

  return (
    <section
      id="committee"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
              Our Committee
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Meet the Team Behind WIE ILS Kerala 2025
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Our dedicated committee members work tirelessly to make this event a
            success, bringing together expertise from across the IEEE community.
          </p>
        </div>

        {/* Advisory Committee */}
        <CommitteeGroup
          title="Advisory Committee"
          members={advisoryCommittee}
          showPhotos={true}
        />

        {/* General Chair */}
        <CommitteeGroup title="General Chair" members={generalChair} />

        {/* Organising Chairs */}
        <CommitteeGroup title="Organising Chairs" members={organisingChairs} />

        {/* Steering Committee */}
        <CommitteeGroup
          title="Steering Committee"
          members={steeringCommittee}
        />

        {/* Programme Committee */}
        <CommitteeGroup
          title="Programme Committee"
          members={programmeCommittee}
        />

        {/* Publicity Committee */}
        <CommitteeGroup
          title="Publicity Committee"
          members={publicityCommittee}
        />

        {/* Sponsorship Committee */}
        <CommitteeGroup
          title="Sponsorship Committee"
          members={sponsorshipCommittee}
        />

        {/* Finance Committee */}
        <CommitteeGroup title="Finance Committee" members={financeCommittee} />

        {/* Organising Secretary */}
        <CommitteeGroup
          title="Organising Secretary"
          members={organisingSecretary}
        />

        {/* Website Committee */}
        <CommitteeGroup title="Website Committee" members={websiteCommittee} />
      </div>
    </section>
  );
};

export default Committee;
