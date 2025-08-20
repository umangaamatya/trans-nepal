import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CompanyOverview />
      <BoardOfDirectors />
      <ManagementTeam />
      <Footer />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="bg-transnepal-dark">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-20 py-12 md:py-16">
        <div className="text-center">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Transik Terminals <br />
            Pvt. Ltd.
          </h1>

          {/* Breadcrumbs */}
          <div className="flex items-center justify-center space-x-2 text-white text-xs font-inter">
            <a href="/" className="hover:underline">Home</a>
            <ChevronRight className="h-2 w-2" />
            <span>Associates</span>
            <ChevronRight className="h-2 w-2" />
            <span>Transik Terminals Pvt. Ltd.</span>
          </div>
        </div>
      </div>
    </section>  
  );
};

const CompanyOverview = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-company-blue mb-6">
            Company overview
          </h2>
          {/* Decorative Line */}
          <div className="w-40 h-0.5 bg-company-blue mb-8"></div>
          {/* Company Description */}
          <p className="text-lg leading-relaxed text-black text-justify">
            TranSilk Terminals Pvt. Ltd. a 60:40 Joint Venture company incorporated in the year 2022 with the objective of operating and managing terminals in Nepal. The company has signed the contract of operation and management of Tatopani ICD with Nepal Intermodel Transport Development Board and commenced its operation from September 2022.
          </p>
        </div>
      </div>
    </section>
  );
};

interface DirectorProps {
  name: string;
  position: string;
  image: string;
}

const DirectorCard = ({ name, position, image }: DirectorProps) => {
  return (
    <div className="bg-company-light rounded-2xl p-6 flex items-center space-x-6 h-36">
      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-lg text-company-blue mb-1">{position}</p>
        <h3 className="text-xl font-normal text-company-blue">{name}</h3>
      </div>
    </div>
  );
};

const BoardOfDirectors = () => {
  const directors = [
    {
      name: "Mukesh Kumar Rathi",
      position: "Chairman",
      image: "/associates/mukesh.png"
    },
    {
      name: "Suresh Kumar R",
      position: "Director",
      image: "/associates/random.png"
    },
    {
      name: "Ramesh Sherpa",
      position: "Joint Managing Director",
      image: "/associates/random.png"
    },
    {
      name: "Bijay Sherpa",
      position: "Director",
      image: "/associates/random.png"
    },
    {
      name: "Bhimraj Joshi",
      position: "Joint Managing Director",
      image: "/associates/bhimraj.png"
    }
    
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-company-blue mb-6">
            Board of Directors
          </h2>
          {/* Decorative Line */}
          <div className="w-40 h-0.5 bg-black mb-12"></div>
          {/* Directors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {directors.map((director, index) => (
              <DirectorCard
                key={index}
                name={director.name}
                position={director.position}
                image={director.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMemberCard = ({ name, position, image }: TeamMemberProps) => {
  return (
    <div className="bg-company-light rounded-2xl p-6 flex items-center space-x-6 h-36">
      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-lg text-company-blue mb-1">{position}</p>
        <h3 className="text-xl font-normal text-company-blue">{name}</h3>
      </div>
    </div>
  );
};

const ManagementTeam = () => {
  const teamMembers = [
    {
      name: "Capt. Mayur Paralkar",
      position: "Management Committee Member",
      image: "/associates/mayur.png"
    },
    {
      name: "Anand Kumar Singh",
      position: "Management Committee Member",
      image: "/associates/anand.png"
    },
    {
      name: "Anirudra Thapa",
      position: "Chief Executive Officer",
      image: "/associates/random.png"
    },
    {
      name: "Raj Sapkota",
      position: "Chief Financial Officer",
      image: "/associates/random.png"
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-company-blue mb-6">
            Management Team
          </h2>
          {/* Decorative Line */}
          <div className="w-40 h-0.5 bg-company-blue mb-12"></div>
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
