"use client";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";

// Interface definitions
interface DirectorData {
  name: string;
  title: string;
  image: string;
}

interface ManagementMemberData {
  name: string;
  title: string;
  image: string;
}

interface DirectorCardProps {
  director: DirectorData;
}

interface ManagementCardProps {
  member: ManagementMemberData;
}

// DirectorCard component
function DirectorCard({ director }: DirectorCardProps) {
  return (
    <div className="bg-brand-light-blue rounded-2xl p-6 lg:p-8 flex items-center gap-6 lg:gap-8">
      {/* Director Photo */}
      <div className="flex-shrink-0">
        <img 
          src={director.image}
          alt={director.name}
          className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover"
        />
      </div>

      {/* Director Info */}
      <div className="flex-1 min-w-0">
        <div className="space-y-2 lg:space-y-3">
          {director.title && (
            <p className="text-lg lg:text-xl font-normal text-white font-inter leading-tight">
              {director.title}
            </p>
          )}
          <h3 className="text-lg lg:text-xl font-bold text-white font-poppins leading-tight">
            {director.name}
          </h3>
        </div>
      </div>
    </div>
  );
}

// ManagementCard component
function ManagementCard({ member }: ManagementCardProps) {
  return (
    <div className="bg-brand-light-blue rounded-2xl p-6 lg:p-8 flex items-center gap-6 lg:gap-8">
      {/* Member Photo */}
      <div className="flex-shrink-0">
        <img 
          src={member.image}
          alt={member.name}
          className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover"
        />
      </div>

      {/* Member Info */}
      <div className="flex-1 min-w-0">
        <div className="space-y-2 lg:space-y-3">
          <p className="text-lg lg:text-xl font-normal text-white font-inter leading-tight">
            {member.title}
          </p>
          {member.name !== member.title && (
            <h3 className="text-lg lg:text-xl font-bold text-white font-poppins leading-tight">
              {member.name}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

// Main page component
export default function TRSLogiparkPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Associates", href: "/associates" },
    { label: "TransNepal TRS Logipark Pvt. Ltd." }
  ];

  const directors: DirectorData[] = [
    {
      name: "Mukesh Kumar Rathi",
      title: "Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0c0764397fcaf8f7ff0eb937bc52ae5cea5a084f?placeholderIfAbsent=true"
    },
    {
      name: "Debangshu Mukherjee", 
      title: "Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/179a3389b0ca1be418b6ebbdafe49da868d217d6?placeholderIfAbsent=true"
    },
    {
      name: "Raghvendra Pratap Singh",
      title: "Director", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/05f1082ba9dc51a7dedfa0af156a6b8e37765f4f?placeholderIfAbsent=true"
    },
    {
      name: "Director",
      title: "Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0fe57b6baa3eb002c5ec0a54f2061dba15e07599?placeholderIfAbsent=true"
    },
    {
      name: "Bhimraj Joshi",
      title: "Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1df5218a3baa12ec5d353d0851a82d99cd12f09b?placeholderIfAbsent=true"
    },
    {
      name: "Dipendra Pratap Singh",
      title: "Director",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/df24db103fe8ef1d0f350ace0ba97f1d92ae97a5?placeholderIfAbsent=true"
    }
  ];

  const managementMembers: ManagementMemberData[] = [
    {
      name: "Management Committee Member",
      title: "Management Committee Member",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/be2dfa47d67ca2acf4a17dde1a01fd44957cc8fb?placeholderIfAbsent=true"
    },
    {
      name: "Management Committee Member",
      title: "Management Committee Member", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b7cd8b503ae6956f86f9eedaa37577927ed55f57?placeholderIfAbsent=true"
    },
    {
      name: "Chief Executive Officer",
      title: "Chief Executive Officer",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/df24db103fe8ef1d0f350ace0ba97f1d92ae97a5?placeholderIfAbsent=true"
    },
    {
      name: "Chief Financial Officer",
      title: "Chief Financial Officer",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/05f1082ba9dc51a7dedfa0af156a6b8e37765f4f?placeholderIfAbsent=true"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-96 bg-brand-blue overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 h-full flex items-center justify-between relative z-10">
          {/* Left Content */}
          <div className="flex-1 max-w-4xl">
            <h1 className="text-white text-center font-poppins text-3xl md:text-5xl lg:text-6xl font-bold leading-normal">
              TransNepal TRS Logipark
              <br />
              Pvt. Ltd.
            </h1>
          </div>

          {/* Right Images Grid */}
          <div className="hidden lg:flex flex-wrap gap-5 max-w-2xl">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/b065a4bcf9cdd5047c312704198b22338cb19561?placeholderIfAbsent=true"
              alt="TransNepal facility"
              className="w-64 h-56 rounded-3xl object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7cb0f6fd076e1f2b61bb49b8bb457f9cdac88f10?placeholderIfAbsent=true"
              alt="TransNepal operations"
              className="w-64 h-28 rounded-b-3xl object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7831143af6948187717b963c2331c5fa64f74ed7?placeholderIfAbsent=true"
              alt="Logistics operations"
              className="w-64 h-56 rounded-b-3xl object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/136faaad0399f5fe471c459bb32d882f1a3b80e7?placeholderIfAbsent=true"
              alt="Terminal facilities"
              className="w-64 h-32 rounded-tl-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Breadcrumb */}
        <div className="py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Company Overview */}
        <section className="mb-20">
          <h2 className="text-brand-red font-poppins text-3xl font-bold leading-normal mb-5">
            Company overview
          </h2>
          <div className="w-[156px] h-[2px] bg-brand-red mb-10"></div>
          <p className="text-brand-text-blue text-justify font-inter text-xl font-normal leading-relaxed max-w-none">
            TransNepal TRS Logipark Pvt. Ltd. a 50:50 Joint Venture company 
            incorporated in the year 2023 with the objective of operating and 
            managing terminals in Nepal. The company has signed the contract of 
            operation and management of Chobhar ICD with Nepal Intermodel 
            Transport Development Board and commenced its operation from December 
            2023.
          </p>
        </section>

        {/* Board of Directors */}
        <section className="mb-20">
          <h2 className="text-brand-text-blue font-poppins text-3xl font-bold leading-normal mb-5">
            Board of Directors
          </h2>
          <div className="w-[156px] h-[2px] bg-brand-text-blue mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directors.map((director, index) => (
              <DirectorCard key={index} director={director} />
            ))}
          </div>
        </section>

        {/* Management Team */}
        <section className="mb-20">
          <h2 className="text-brand-text-blue font-poppins text-3xl font-bold leading-normal mb-5">
            Management Team
          </h2>
          <div className="w-[156px] h-[2px] bg-brand-text-blue mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {managementMembers.map((member, index) => (
              <ManagementCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Back to Top */}
        <div className="flex justify-end mb-8">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-brand-blue hover:text-brand-text-blue transition-colors font-inter"
          >
            <span className="text-lg font-normal">Back to top</span>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="transform rotate-180">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M7.71065 0.843063L13.3676 6.50006L11.9536 7.91406L7.00365 2.96406L2.05365 7.91406L0.639648 6.50006L6.29665 0.843063C6.48418 0.655592 6.73848 0.550276 7.00365 0.550276C7.26881 0.550276 7.52312 0.655592 7.71065 0.843063Z" 
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
