'use client';

import Navigation from "../../../../components/Navigation";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import Image from "next/image";
import { useState } from "react";
import { Search, Filter, Grid3X3, List, ChevronDown } from "lucide-react";

const facilityCards = [
  {
    id: 1,
    title: "Freight Forwarding",
    category: "Terminal Building",
    status: "operational",
    area: "658 sqm",
    floor: "Ground floor",
    categoryIcon: (
      <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.73556H13C13.2652 6.73556 13.5196 6.61729 13.7071 6.40676C13.8946 6.19623 14 5.9107 14 5.61297C14 5.31524 13.8946 5.0297 13.7071 4.81917C13.5196 4.60865 13.2652 4.49037 13 4.49037H12C11.7348 4.49037 11.4804 4.60865 11.2929 4.81917C11.1054 5.0297 11 5.31524 11 5.61297C11 5.9107 11.1054 6.19623 11.2929 6.40676C11.4804 6.61729 11.7348 6.73556 12 6.73556ZM12 11.2259H13C13.2652 11.2259 13.5196 11.1077 13.7071 10.8971C13.8946 10.6866 14 10.4011 14 10.1033C14 9.80561 13.8946 9.52007 13.7071 9.30955C13.5196 9.09902 13.2652 8.98075 13 8.98075H12C11.7348 8.98075 11.4804 9.09902 11.2929 9.30955C11.1054 9.52007 11 9.80561 11 10.1033C11 10.4011 11.1054 10.6866 11.2929 10.8971C11.4804 11.1077 11.7348 11.2259 12 11.2259ZM7 6.73556H8C8.26522 6.73556 8.51957 6.61729 8.70711 6.40676C8.89464 6.19623 9 5.9107 9 5.61297C9 5.31524 8.89464 5.0297 8.70711 4.81917C8.51957 4.60865 8.26522 4.49037 8 4.49037H7C6.73478 4.49037 6.48043 4.60865 6.29289 4.81917C6.10536 5.0297 6 5.31524 6 5.61297C6 5.9107 6.10536 6.19623 6.29289 6.40676C6.48043 6.61729 6.73478 6.73556 7 6.73556ZM7 11.2259H8C8.26522 11.2259 8.51957 11.1077 8.70711 10.8971C8.89464 10.6866 9 10.4011 9 10.1033C9 9.80561 8.89464 9.52007 8.70711 9.30955C8.51957 9.09902 8.26522 8.98075 8 8.98075H7C6.73478 8.98075 6.48043 9.09902 6.29289 9.30955C6.10536 9.52007 6 9.80561 6 10.1033C6 10.4011 6.10536 10.6866 6.29289 10.8971C6.48043 11.1077 6.73478 11.2259 7 11.2259ZM19 20.2067H18V1.12259C18 0.824863 17.8946 0.539327 17.7071 0.3288C17.5196 0.118273 17.2652 0 17 0H3C2.73478 0 2.48043 0.118273 2.29289 0.3288C2.10536 0.539327 2 0.824863 2 1.12259V20.2067H1C0.734784 20.2067 0.48043 20.325 0.292893 20.5355C0.105357 20.746 0 21.0315 0 21.3293C0 21.627 0.105357 21.9125 0.292893 22.1231C0.48043 22.3336 0.734784 22.4519 1 22.4519H19C19.2652 22.4519 19.5196 22.3336 19.7071 22.1231C19.8946 21.9125 20 21.627 20 21.3293C20 21.0315 19.8946 20.746 19.7071 20.5355C19.5196 20.325 19.2652 20.2067 19 20.2067ZM11 20.2067H9V15.7163H11V20.2067ZM16 20.2067H13V14.5937C13 14.296 12.8946 14.0104 12.7071 13.7999C12.5196 13.5894 12.2652 13.4711 12 13.4711H8C7.73478 13.4711 7.48043 13.5894 7.29289 13.7999C7.10536 14.0104 7 14.296 7 14.5937V20.2067H4V2.24519H16V20.2067Z" fill="white"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Process Shed",
    category: "Power & Utilities",
    status: "operational",
    area: "658 sqm",
    floor: "Single Storeys",
    categoryIcon: (
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.87 7.69084L7 0.581595C8.95185 -0.193865 11.0482 -0.193865 13 0.581595L12.13 7.69084C12.06 8.30306 11.63 8.75286 11.13 8.75286H8.86C8.62055 8.75325 8.38894 8.64628 8.20726 8.45139C8.02559 8.2565 7.90592 7.98663 7.87 7.69084ZM20 12.5011C20 11.5141 19.53 10.627 18.8 10.2147C18.3189 7.32566 16.9559 4.7845 15 3.13043L13.24 9.17766C13.1 9.67743 12.72 10.0023 12.3 10.0023H7.7C7.28 10.0023 6.9 9.67743 6.76 9.17766L5 3.13043C3.04779 4.78343 1.68542 7.31879 1.2 10.2022C0.47 10.627 0 11.5016 0 12.5011L6.45 14.8001C6.81 14.925 7.18 15 7.55 15H12.43C12.8 15 13.17 14.925 13.53 14.8001L20 12.5011Z" fill="white"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Security Barrack",
    category: "Administrative Building",
    status: "operational",
    area: "837 sqm",
    floor: "Double Storeys",
    categoryIcon: (
      <svg width="10" height="24" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.25897 15.0777L4.33493 14.103L2.92404 23.0855L0.0620721 8.98257L4.98611 9.95725L6.397 0.974748L9.25897 15.0777Z" fill="white"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Laboratory for Customer",
    category: "Terminal Building",
    status: "operational",
    area: "290 sqm",
    floor: "First Floor",
    categoryIcon: (
      <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.73556H13C13.2652 6.73556 13.5196 6.61729 13.7071 6.40676C13.8946 6.19623 14 5.9107 14 5.61297C14 5.31524 13.8946 5.0297 13.7071 4.81917C13.5196 4.60865 13.2652 4.49037 13 4.49037H12C11.7348 4.49037 11.4804 4.60865 11.2929 4.81917C11.1054 5.0297 11 5.31524 11 5.61297C11 5.9107 11.1054 6.19623 11.2929 6.40676C11.4804 6.61729 11.7348 6.73556 12 6.73556ZM12 11.2259H13C13.2652 11.2259 13.5196 11.1077 13.7071 10.8971C13.8946 10.6866 14 10.4011 14 10.1033C14 9.80561 13.8946 9.52007 13.7071 9.30955C13.5196 9.09902 13.2652 8.98075 13 8.98075H12C11.7348 8.98075 11.4804 9.09902 11.2929 9.30955C11.1054 9.52007 11 9.80561 11 10.1033C11 10.4011 11.1054 10.6866 11.2929 10.8971C11.4804 11.1077 11.7348 11.2259 12 11.2259ZM7 6.73556H8C8.26522 6.73556 8.51957 6.61729 8.70711 6.40676C8.89464 6.19623 9 5.9107 9 5.61297C9 5.31524 8.89464 5.0297 8.70711 4.81917C8.51957 4.60865 8.26522 4.49037 8 4.49037H7C6.73478 4.49037 6.48043 4.60865 6.29289 4.81917C6.10536 5.0297 6 5.31524 6 5.61297C6 5.9107 6.10536 6.19623 6.29289 6.40676C6.48043 6.61729 6.73478 6.73556 7 6.73556ZM7 11.2259H8C8.26522 11.2259 8.51957 11.1077 8.70711 10.8971C8.89464 10.6866 9 10.4011 9 10.1033C9 9.80561 8.89464 9.52007 8.70711 9.30955C8.51957 9.09902 8.26522 8.98075 8 8.98075H7C6.73478 8.98075 6.48043 9.09902 6.29289 9.30955C6.10536 9.52007 6 9.80561 6 10.1033C6 10.4011 6.10536 10.6866 6.29289 10.8971C6.48043 11.1077 6.73478 11.2259 7 11.2259ZM19 20.2067H18V1.12259C18 0.824863 17.8946 0.539327 17.7071 0.3288C17.5196 0.118273 17.2652 0 17 0H3C2.73478 0 2.48043 0.118273 2.29289 0.3288C2.10536 0.539327 2 0.824863 2 1.12259V20.2067H1C0.734784 20.2067 0.48043 20.325 0.292893 20.5355C0.105357 20.746 0 21.0315 0 21.3293C0 21.627 0.105357 21.9125 0.292893 22.1231C0.48043 22.3336 0.734784 22.4519 1 22.4519H19C19.2652 22.4519 19.5196 22.3336 19.7071 22.1231C19.8946 21.9125 20 21.627 20 21.3293C20 21.0315 19.8946 20.746 19.7071 20.5355C19.5196 20.325 19.2652 20.2067 19 20.2067ZM11 20.2067H9V15.7163H11V20.2067ZM16 20.2067H13V14.5937C13 14.296 12.8946 14.0104 12.7071 13.7999C12.5196 13.5894 12.2652 13.4711 12 13.4711H8C7.73478 13.4711 7.48043 13.5894 7.29289 13.7999C7.10536 14.0104 7 14.296 7 14.5937V20.2067H4V2.24519H16V20.2067Z" fill="white"/>
      </svg>
    )
  },
  {
    id: 5,
    title: "Weigh Bridge",
    category: "Operations",
    status: "operational",
    area: "35 sqm",
    floor: "100 MT",
    categoryIcon: (
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.87 7.69084L7 0.581595C8.95185 -0.193865 11.0482 -0.193865 13 0.581595L12.13 7.69084C12.06 8.30306 11.63 8.75286 11.13 8.75286H8.86C8.62055 8.75325 8.38894 8.64628 8.20726 8.45139C8.02559 8.2565 7.90592 7.98663 7.87 7.69084ZM20 12.5011C20 11.5141 19.53 10.627 18.8 10.2147C18.3189 7.32566 16.9559 4.7845 15 3.13043L13.24 9.17766C13.1 9.67743 12.72 10.0023 12.3 10.0023H7.7C7.28 10.0023 6.9 9.67743 6.76 9.17766L5 3.13043C3.04779 4.78343 1.68542 7.31879 1.2 10.2022C0.47 10.627 0 11.5016 0 12.5011L6.45 14.8001C6.81 14.925 7.18 15 7.55 15H12.43C12.8 15 13.17 14.925 13.53 14.8001L20 12.5011Z" fill="white"/>
      </svg>
    )
  },
  {
    id: 6,
    title: "Process Shed",
    category: "Power & Utilities",
    status: "operational",
    area: "161 sqm",
    floor: "Import processing",
    categoryIcon: (
      <svg width="10" height="23" viewBox="0 0 10 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.49432 14.4503L4.57028 13.4756L3.15939 22.4581L0.297424 8.35513L5.22146 9.32981L6.63235 0.347307L9.49432 14.4503Z" fill="white"/>
      </svg>
    )
  },
  {
    id: 7,
    title: "Dispensary Building",
    category: "Support Facilities",
    status: "operational",
    area: "161 sqm",
    floor: "Single Storeys",
    categoryIcon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.449 2.2002L18.7002 9.70993L17.6471 10.9227L16.7889 10.1415V18.7002H4.11065V10.1464L3.24378 10.9227L2.2002 9.70182L4.37848 7.74914L10.449 2.2002ZM5.69465 8.72102V17.0785H8.07262V13.0223H12.827V17.0785H15.2042V8.6983L10.4498 4.37434L5.69465 8.72102ZM11.2422 17.0785V14.6448H9.65741V17.0785H11.2422ZM11.2422 6.53227V8.15477H12.827V9.77726H11.2422V11.3998H9.65741V9.77726H8.07262V8.15477H9.65741V6.53227H11.2422Z" fill="white"/>
      </svg>
    )
  },
  {
    id: 8,
    title: "Animal Shed (Import)",
    category: "Infrastructure",
    status: "operational",
    area: "250 sqm",
    floor: "Import",
    categoryIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10.111V1L21 7V21H3V7L10 10.111ZM12 4.369V13.189L5 10.078V19H19V8.187L12 4.369Z" fill="white"/>
      </svg>
    )
  },
  {
    id: 9,
    title: "Process Shed",
    category: "Operations",
    status: "operational",
    area: "161 sqm",
    floor: "Import",
    categoryIcon: (
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.87 7.69084L7 0.581595C8.95185 -0.193865 11.0482 -0.193865 13 0.581595L12.13 7.69084C12.06 8.30306 11.63 8.75286 11.13 8.75286H8.86C8.62055 8.75325 8.38894 8.64628 8.20726 8.45139C8.02559 8.2565 7.90592 7.98663 7.87 7.69084ZM20 12.5011C20 11.5141 19.53 10.627 18.8 10.2147C18.3189 7.32566 16.9559 4.7845 15 3.13043L13.24 9.17766C13.1 9.67743 12.72 10.0023 12.3 10.0023H7.7C7.28 10.0023 6.9 9.67743 6.76 9.17766L5 3.13043C3.04779 4.78343 1.68542 7.31879 1.2 10.2022C0.47 10.627 0 11.5016 0 12.5011L6.45 14.8001C6.81 14.925 7.18 15 7.55 15H12.43C12.8 15 13.17 14.925 13.53 14.8001L20 12.5011Z" fill="white"/>
      </svg>
    )
  }
];

const galleryImages = [
  "https://api.builder.io/api/v1/image/assets/TEMP/bd56c58969bd2639409f656efdd991b2179f395a?width=788",
  "https://api.builder.io/api/v1/image/assets/TEMP/a4dea02eade18fc5b2b5786d416262be406e1657?width=788",
  "https://api.builder.io/api/v1/image/assets/TEMP/5f7bcbaed628f0c3c287fa0dd58ad54a27809278?width=788",
  "https://api.builder.io/api/v1/image/assets/TEMP/58e3ed79efcaa819ec25ffc5e68df32e6f2b937c?width=788",
  "https://api.builder.io/api/v1/image/assets/TEMP/c35a9c3059c0e3e862ca8a3e0d25bebfc11dbaec?width=788",
  "https://api.builder.io/api/v1/image/assets/TEMP/1be9264d03827b8de64c92581edc25878a9625be?width=788",
  "https://api.builder.io/api/v1/image/assets/TEMP/9cd21d49cf4802dd3c3a4e8f806a58083f060f3a?width=788",
  "https://api.builder.io/api/v1/image/assets/TEMP/9339769fa788007117e71b9dd941478f9c95afc0?width=788",
  "https://api.builder.io/api/v1/image/assets/TEMP/307079c3ae47c41d52d1243e196415c7176bdb5d?width=788"
];

export default function KakarbittaTerminalPage() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [viewMode, setViewMode] = useState("grid");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Terminal Management", href: "/services/terminal-management" },
    { label: "Kakarbitta" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-96 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://api.builder.io/api/v1/image/assets/TEMP/59a5f479f6efea36e6222138131b123577f94775?width=2890" 
            alt="Terminal Management" 
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-brand-blue bg-opacity-70"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white">
            <h1 className="text-white font-poppins text-4xl md:text-6xl font-bold leading-normal mb-4">
              Terminal Management
            </h1>
            <h2 className="text-white font-poppins text-3xl md:text-5xl font-semibold leading-normal mb-4">
              Kakarbitta
            </h2>
            <p className="text-white font-poppins text-lg">
              Clean • Secure • Service Management • Education
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Breadcrumb */}
        <div className="py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Feature Highlight Cards */}
        <section className="flex flex-col lg:flex-row justify-center items-center gap-9 mb-10">
          <div className="w-full lg:w-[388px] h-16 bg-brand-red rounded-2xl flex items-center justify-center px-5">
            <span className="text-white text-center font-inter text-xl font-bold">
              Operational since February 1, 2020
            </span>
          </div>
          <div className="w-full lg:w-[388px] h-16 bg-brand-red rounded-2xl flex items-center justify-center px-5">
            <span className="text-white text-center font-inter text-xl font-bold">
              Spread over 129 bighas
            </span>
          </div>
          <div className="w-full lg:w-[388px] h-16 bg-brand-red rounded-2xl flex items-center justify-center px-5">
            <span className="text-white text-center font-inter text-xl font-bold">
              Strategic Border Location
            </span>
          </div>
        </section>

        {/* Features Description */}
        <section className="mb-16">
          <h2 className="text-brand-blue font-poppins text-3xl font-bold leading-normal mb-5">
            Features
          </h2>
          <div className="w-[156px] h-[2px] bg-brand-blue mb-10"></div>
          <p className="text-brand-text-blue text-justify font-inter text-xl leading-relaxed">
            Kakarbhitta ICD spread over 7.5 hectares of land is located in 
            Mechinagar Municipality of Jhapa district and has been developed to 
            boost trade with Bangladesh and Bhutan through India. This ICD is 
            linked to East-West highway that connects this facility with other 
            terminals such as Biratnagar ICP, Biragunj ICD/ICP, Bhairahawa ICD 
            and Nepalgung ICD.
          </p>
        </section>

        {/* Search and Filter */}
        <section className="flex flex-col lg:flex-row items-center gap-5 mb-10">
          <div className="flex-1 h-16 bg-gray-100 rounded-full flex items-center px-6 gap-4">
            <Search className="w-8 h-8 text-brand-blue" />
            <span className="text-brand-blue font-inter text-xl">Search facilities</span>
          </div>
          
          <div className="flex items-center gap-3 h-16 bg-gray-100 rounded-2xl px-5">
            <Filter className="w-8 h-8 text-brand-blue" />
            <span className="text-brand-blue font-inter text-base">{selectedCategory}</span>
            <ChevronDown className="w-4 h-4 text-brand-blue" />
          </div>
          
          <div className="flex items-center h-16 bg-gray-100 rounded-2xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-2xl ${viewMode === 'grid' ? 'bg-brand-blue' : 'bg-transparent'}`}
            >
              <Grid3X3 className={`w-6 h-6 ${viewMode === 'grid' ? 'text-white' : 'text-brand-blue'}`} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-2xl ${viewMode === 'list' ? 'bg-brand-blue' : 'bg-transparent'}`}
            >
              <List className={`w-6 h-6 ${viewMode === 'list' ? 'text-white' : 'text-brand-blue'}`} />
            </button>
          </div>
        </section>

        {/* Facility Cards Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityCards.map((card) => (
              <div key={card.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2 flex-wrap">
                    <div className="flex items-center gap-2 bg-brand-blue px-3 py-1 rounded-full">
                      <div className="w-5 h-5 text-white">
                        {card.categoryIcon}
                      </div>
                      <span className="text-white font-inter text-xs">
                        {card.category}
                      </span>
                    </div>
                    <div className="bg-green-500 px-3 py-1 rounded-full">
                      <span className="text-white font-inter text-xs">
                        {card.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-brand-text-blue font-poppins text-xl font-medium mb-4">
                  {card.title}
                </h3>
                
                <div className="flex gap-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-red font-inter text-sm">
                      Area
                    </span>
                    <span className="text-brand-red font-inter text-sm">
                      {card.area}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-red font-inter text-sm">
                      Floor
                    </span>
                    <span className="text-brand-red font-inter text-sm">
                      {card.floor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* View More */}
        <div className="flex justify-center items-center gap-2 mb-20">
          <span className="text-brand-blue text-center font-inter text-xl">
            View more
          </span>
          <ChevronDown className="w-4 h-4 text-brand-blue" />
        </div>

        {/* Gallery */}
        <section className="mb-20">
          <h2 className="text-brand-red font-poppins text-3xl font-bold leading-normal mb-5">
            Gallery
          </h2>
          <div className="w-[156px] h-[2px] bg-brand-red mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Image 
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                width={394}
                height={196}
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
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
