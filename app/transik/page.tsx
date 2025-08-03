"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

export default function Associates() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Associates", href: "/associates" },
    { label: "Transik Terminals Pvt.Ltd." }
  ];

  const boardMembers = [
    { name: 'Mukesh Kumar Rathi', position: 'Chairman' },
    { name: 'Suresh Kumar R', position: 'Director' },
    { name: 'Ramesh Sherpa', position: 'Joint Managing Director' },
    { name: 'Mukesh Kumar Rathi', position: 'Director' },
    { name: 'Bhimraj Joshi', position: 'Joint Managing Director' },
    { name: 'Bijay Sherpa', position: 'Director' },
  ];

  const managementTeam = [
    { name: 'Capt. Mayur Paralkar', position: 'Management Committee Member' },
    { name: 'Anand Kumar Singh', position: 'Management Committee Member' },
    { name: 'Anirudra Thapa', position: 'Chief Executive Officer' },
    { name: 'Raj Sapkota', position: 'Chief Financial Officer' },
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
            <h1 className="text-white text-center font-poppins text-4xl md:text-6xl font-bold leading-normal">
              Transik Terminals Pvt. Ltd.
            </h1>
          </div>

          {/* Right Images Grid */}
          <div className="hidden lg:flex flex-wrap gap-5 max-w-2xl">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/29bfb599f7f50477d23c9a35bd14693d7b76f75a?width=520" 
              alt="Terminal facility" 
              className="w-64 h-56 rounded-3xl object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/cca701db9d02370008e4374a0a2f594a8cfcbf6a?width=520" 
              alt="Terminal operations" 
              className="w-64 h-28 rounded-b-3xl object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d41628429364438805acd611b8a6fa10e2a91fba?width=520" 
              alt="Container handling" 
              className="w-64 h-56 rounded-b-3xl object-cover"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d4406479fa7fd6ff0a206dfb5b0f3dc726410c57?width=520" 
              alt="Logistics operations" 
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
            TranSilk Terminals Pvt. Ltd. a 60:40 Joint Venture company incorporated in the year 2022 with the objective of operating and managing terminals in Nepal. The company has signed the contract of operation and management of Tatopani ICD with Nepal Intermodel Transport Development Board and commenced its operation from September 2022.
          </p>
        </section>

        {/* Board of Directors */}
        <section className="mb-20">
          <h2 className="text-brand-text-blue font-poppins text-3xl font-bold leading-normal mb-5">
            Board of Directors
          </h2>
          <div className="w-[156px] h-[2px] bg-brand-text-blue mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-brand-text-blue font-poppins text-xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-light-blue font-inter text-lg">
                  {member.position}
                </p>
              </div>
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
            {managementTeam.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-brand-text-blue font-poppins text-xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-light-blue font-inter text-lg">
                  {member.position}
                </p>
              </div>
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
