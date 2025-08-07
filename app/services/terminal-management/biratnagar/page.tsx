'use client';

import Navigation from "../../../../components/Navigation";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import Image from "next/image";
import { Search, Filter, ChevronDown, Building2, Warehouse, Shield, Truck, Wrench } from "lucide-react";

interface ServiceCard {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  status: "operational";
  area?: string;
  storeys?: string;
  vehicles?: string;
  type?: string;
  icon: React.ReactNode;
}

const serviceCards: ServiceCard[] = [
  {
    id: "1",
    category: "Administrative Building",
    categoryColor: "bg-brand-blue",
    title: "Administrative Building",
    status: "operational",
    area: "1320 sqm",
    storeys: "Double Storeys",
    icon: <Building2 className="w-5 h-5" />
  },
  {
    id: "2",
    category: "Warehouse & Sheds",
    categoryColor: "bg-brand-light-blue",
    title: "Customer Service",
    status: "operational",
    area: "658 sqm",
    storeys: "Single Storeys",
    icon: <Warehouse className="w-4 h-4" />
  },
  {
    id: "3",
    category: "Administrative Building",
    categoryColor: "bg-brand-light-blue",
    title: "Security Barrack",
    status: "operational",
    area: "837 sqm",
    storeys: "Double Storeys",
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: "4",
    category: "Support Facilities",
    categoryColor: "bg-brand-light-blue",
    title: "Dispensary Building",
    status: "operational",
    area: "161 sqm",
    storeys: "Single Storeys",
    icon: <Building2 className="w-5 h-5" />
  },
  {
    id: "5",
    category: "Cargo Handling",
    categoryColor: "bg-brand-light-blue",
    title: "Parking Yard",
    status: "operational",
    vehicles: "250",
    icon: <Truck className="w-4 h-4" />
  },
  {
    id: "6",
    category: "Processing Area",
    categoryColor: "bg-brand-light-blue",
    title: "Process Shed",
    status: "operational",
    area: "161 sqm",
    type: "Import processing",
    icon: <Wrench className="w-4 h-4" />
  },
  {
    id: "7",
    category: "Support Facilities",
    categoryColor: "bg-brand-light-blue",
    title: "Dispensary Building",
    status: "operational",
    area: "161 sqm",
    storeys: "Single Storeys",
    icon: <Building2 className="w-5 h-5" />
  },
  {
    id: "8",
    category: "Cargo Handling",
    categoryColor: "bg-brand-light-blue",
    title: "Parking Yard",
    status: "operational",
    vehicles: "250",
    icon: <Truck className="w-4 h-4" />
  },
  {
    id: "9",
    category: "Processing Area",
    categoryColor: "bg-brand-light-blue",
    title: "Process Shed",
    status: "operational",
    area: "161 sqm",
    type: "Import",
    icon: <Wrench className="w-4 h-4" />
  }
];

const additionalFacilities = [
  "CCTV, PA Fire Alarm Detection System",
  "4 Watch Towers (Four Storey each)",
  "Railway Yard NCY Connection",
  "Sewage Treatment Plant - 50 KLD Capacity",
  "Custom Examination Shed",
  "Diesel Generator Additional Cargo Storage"
];

const galleryImages = [
  "https://api.builder.io/api/v1/image/assets/TEMP/3aa661c4f090618210f5a40c9d67ee3dbfd06a21?placeholderIfAbsent=true",
  "https://api.builder.io/api/v1/image/assets/TEMP/8e4b974fb2e8f6e990db29d9dc333691ba57a96c?placeholderIfAbsent=true",
  "https://api.builder.io/api/v1/image/assets/TEMP/f6274d8e37ab64c330077e7e455efb9e2338dd07?placeholderIfAbsent=true",
  "https://api.builder.io/api/v1/image/assets/TEMP/b916ce5c62a2a5f1777c812638e78c8531782d06?placeholderIfAbsent=true",
  "https://api.builder.io/api/v1/image/assets/TEMP/987f89375bc8947a94d5bedc7edc2d57007f6c6a?placeholderIfAbsent=true",
  "https://api.builder.io/api/v1/image/assets/TEMP/1744c993fe8c42876e1e03cb8879838ab9b281eb?placeholderIfAbsent=true",
  "https://api.builder.io/api/v1/image/assets/TEMP/3d7ed7365e638cbd5399e2685af47cf88a57ca5b?placeholderIfAbsent=true"
];

export default function BiratngarTerminalPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Terminal Management", href: "/services/terminal-management" },
    { label: "Biratnagar" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-96 bg-brand-blue bg-opacity-100 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/biratnagar/biratnagar.png" 
            alt="Terminal Management" 
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-brand-blue bg-opacity-10"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 h-full flex flex-col justify-center relative z-10">
        {/* Header text */}
        <div className="text-center text-white mb-0.5">
          <h1 className="text-white font-poppins text-4xl md:text-6xl font-bold leading-normal mb-4">
            Terminal Management
          </h1>
          <h2 className="text-white font-poppins text-3xl md:text-5xl font-semibold leading-normal">
            Biratnagar
          </h2>
        </div>

        {/* Breadcrumb - Now with increased spacing from header */}
        <div className="mt-3">
          <div className="flex items-center gap-3 justify-center">
            <a href="/" className="text-white text-base font-normal hover:underline">Home</a>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="white"/>
            </svg>
            <a href="/services" className="text-white text-base font-normal hover:underline">Services</a>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="white"/>
            </svg>
            <a href="/services/terminal-management" className="text-white text-base font-normal hover:underline">Terminal Management</a>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="white"/>
            </svg>
            <span className="text-white text-base font-normal">Biratnagar</span>
          </div>
        </div>
      </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Services Section */}
        <section className="py-16">
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-sm border p-6 mb-8 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="bg-gray-100 rounded-full p-4">
              <Search className="w-8 h-8 text-gray-600" />
            </div>
            
            <div className="flex items-center bg-gray-100 rounded-2xl px-6 py-3 gap-4">
              <Filter className="w-8 h-8 text-brand-blue" />
              <span className="text-brand-blue font-medium text-lg">All categories</span>
              <ChevronDown className="w-4 h-4 text-brand-blue" />
            </div>
            
            <Image 
              src="https://api.builder.io/api/v1/image/assets/TEMP/a7178ad7314c5ef1cda2f62ec27bdfbbc86a6c64?placeholderIfAbsent=true" 
              alt="Filter" 
              width={141}
              height={60}
              className="w-32 h-auto rounded-2xl"
            />
          </div>

          {/* Services Grid */}
          <div 
            className="relative min-h-[700px] bg-cover bg-center rounded-2xl p-8"
            style={{
              backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/6469e683639553055b6b8a7950ce52e0bbd402a0?placeholderIfAbsent=true')"
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCards.map((card) => (
                <div key={card.id} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className={`${card.categoryColor} text-white rounded-full px-3 py-1 text-sm font-medium flex items-center gap-2 mb-3 w-fit`}>
                        {card.icon}
                        {card.category}
                      </div>
                      <h3 className="text-brand-text-blue font-medium text-lg">{card.title}</h3>
                    </div>
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      operational
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-brand-red">
                    {card.area && (
                      <div>
                        <div className="font-medium">Area</div>
                        <div className="font-normal">{card.area}</div>
                      </div>
                    )}
                    {card.storeys && (
                      <div>
                        <div className="font-medium">Storeys</div>
                        <div className="font-normal">{card.storeys}</div>
                      </div>
                    )}
                    {card.vehicles && (
                      <div>
                        <div className="font-medium">Vehicles</div>
                        <div className="font-normal">{card.vehicles}</div>
                      </div>
                    )}
                    {card.type && (
                      <div>
                        <div className="font-medium">Type</div>
                        <div className="font-normal">{card.type}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="text-brand-blue font-medium text-lg">View more</button>
              <ChevronDown className="w-4 h-4 text-brand-blue mx-auto mt-2" />
            </div>
          </div>
        </section>

        {/* Additional Facilities */}
        <section className="py-16">
          <div className="bg-gray-100 rounded-2xl p-6 flex justify-between items-center mb-8">
            <h2 className="text-brand-text-blue font-poppins text-3xl font-bold leading-normal">
              Additional facilities
            </h2>
            <div className="w-[156px] h-[2px] bg-brand-text-blue"></div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Show all</span>
              <ChevronDown className="w-4 h-4 text-gray-700" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFacilities.map((facility, index) => (
              <div key={index} className="bg-blue-50 border-l-8 border-brand-blue rounded-2xl p-6 text-center">
                <p className="text-brand-text-blue font-normal text-sm leading-7">{facility}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <h2 className="text-brand-red font-poppins text-3xl font-bold leading-normal mb-5">
            Gallery
          </h2>
          <div className="w-[156px] h-[2px] bg-brand-red mb-16"></div>
          
          <div className="grid grid-cols-12 gap-6">
            {/* First large image */}
            <div className="col-span-12 md:col-span-3">
              <Image 
                src={galleryImages[0]} 
                alt="Gallery 1" 
                width={218}
                height={200}
                className="w-full h-48 md:h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Middle section with 4 images */}
            <div className="col-span-12 md:col-span-6">
              <div className="grid grid-cols-2 gap-6 h-full">
                <Image 
                  src={galleryImages[1]} 
                  alt="Gallery 2" 
                  width={300}
                  height={160}
                  className="w-full h-40 md:h-32 object-cover rounded-2xl shadow-lg"
                />
                <Image 
                  src={galleryImages[2]} 
                  alt="Gallery 3" 
                  width={300}
                  height={160}
                  className="w-full h-40 md:h-32 object-cover rounded-2xl shadow-lg"
                />
                <Image 
                  src={galleryImages[3]} 
                  alt="Gallery 4" 
                  width={300}
                  height={160}
                  className="w-full h-40 md:h-32 object-cover rounded-2xl shadow-lg"
                />
                <Image 
                  src={galleryImages[4]} 
                  alt="Gallery 5" 
                  width={300}
                  height={160}
                  className="w-full h-40 md:h-32 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Right section with 2 images */}
            <div className="col-span-12 md:col-span-3 space-y-6">
              <Image 
                src={galleryImages[5]} 
                alt="Gallery 6" 
                width={185}
                height={100}
                className="w-full h-24 object-cover rounded-2xl shadow-lg"
              />
              <Image 
                src={galleryImages[6]} 
                alt="Gallery 7" 
                width={183}
                height={130}
                className="w-full h-32 object-cover rounded-2xl shadow-lg"
              />
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
