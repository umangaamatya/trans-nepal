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
    <section className="w-full bg-company-dark-blue relative">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Main Title */}
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transik Treminals<br />
            Pvt. Ltd.
          </h1>
        </div>
        
        {/* Breadcrumb */}
        <div className="flex items-center justify-center text-white text-xs space-x-2 mt-8">
          <span>Home</span>
          <ChevronRight className="w-3 h-3" />
          <span>Associates</span>
          <ChevronRight className="w-3 h-3" />
          <span>Transik Terminals Pvt. Ltd.</span>
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
          <p className="text-lg leading-relaxed text-company-blue font-medium text-justify">
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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Suresh Kumar R",
      position: "Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ramesh Sherpa",
      position: "Joint Managing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mukesh Kumar Rathi",
      position: "Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Bhimraj Joshi",
      position: "Joint Managing Director",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Bijay Sherpa",
      position: "Director",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
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
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anand Kumar Singh",
      position: "Management Committee Member",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anirudra Thapa",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Raj Sapkota",
      position: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1549068106-b024baf5062d?w=150&h=150&fit=crop&crop=face"
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
