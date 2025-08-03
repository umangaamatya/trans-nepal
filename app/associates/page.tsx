'use client';

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AssociatesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Associates" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-96 bg-brand-blue overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-white font-poppins text-4xl md:text-6xl font-bold leading-normal">
              Our Associates
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Breadcrumb */}
        <div className="py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Associates Grid */}
        <section className="mb-20">
          <h2 className="text-brand-text-blue font-poppins text-3xl font-bold leading-normal mb-5">
            Our Associate Companies
          </h2>
          <div className="w-[156px] h-[2px] bg-brand-text-blue mb-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Transik Terminals */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-brand-blue to-brand-light-blue relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue bg-opacity-40"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-brand-text-blue px-3 py-1 rounded-full text-sm font-medium">
                    Terminal Operations
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-brand-text-blue font-poppins text-xl font-bold leading-tight mb-4">
                  Transik Terminals Pvt. Ltd.
                </h3>
                <p className="text-brand-text-blue font-inter text-base leading-relaxed mb-6">
                  A leading terminal operations company providing comprehensive logistics and cargo handling services across Nepal's key trade corridors.
                </p>
                <Link 
                  href="/associates/transik-terminals"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-medium hover:bg-brand-text-blue transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* TRS Logipark */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-brand-blue to-brand-light-blue relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue bg-opacity-40"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-brand-text-blue px-3 py-1 rounded-full text-sm font-medium">
                    Joint Venture
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-brand-text-blue font-poppins text-xl font-bold leading-tight mb-4">
                  TransNepal TRS Logipark Pvt. Ltd.
                </h3>
                <p className="text-brand-text-blue font-inter text-base leading-relaxed mb-6">
                  A 50:50 Joint Venture company incorporated in 2023 with the objective of operating and managing terminals in Nepal.
                </p>
                <Link 
                  href="/associates/transnepal-trs-logipark"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-medium hover:bg-brand-text-blue transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
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
