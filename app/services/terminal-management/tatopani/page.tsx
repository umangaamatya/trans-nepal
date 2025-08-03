'use client';

import Navigation from "../../../../components/Navigation";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import { useState } from "react";
import { ChevronDown, Search, Filter, Grid3X3, List, ChevronUp } from "lucide-react";

// Facilities Interface
interface Facility {
  id: string;
  title: string;
  category: string;
  status: string;
  area: string;
  areaUnit: string;
  type: string;
  typeValue: string;
  icon: React.ReactNode;
  statusColor: string;
  textColor?: string;
}

const facilities: Facility[] = [
  {
    id: "1",
    title: "Administrative Building",
    category: "Administrative Building",
    status: "operational",
    area: "Area",
    areaUnit: "3011 sqm",
    type: "Storey",
    typeValue: "Two Storey",
    icon: (
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.35108H13C13.2652 5.35108 13.5196 5.25711 13.7071 5.08986C13.8946 4.92261 14 4.69576 14 4.45923C14 4.2227 13.8946 3.99585 13.7071 3.8286C13.5196 3.66135 13.2652 3.56738 13 3.56738H12C11.7348 3.56738 11.4804 3.66135 11.2929 3.8286C11.1054 3.99585 11 4.2227 11 4.45923C11 4.69576 11.1054 4.92261 11.2929 5.08986C11.4804 5.25711 11.7348 5.35108 12 5.35108ZM12 8.91846H13C13.2652 8.91846 13.5196 8.8245 13.7071 8.65724C13.8946 8.48999 14 8.26315 14 8.02661C14 7.79008 13.8946 7.56324 13.7071 7.39598C13.5196 7.22873 13.2652 7.13477 13 7.13477H12C11.7348 7.13477 11.4804 7.22873 11.2929 7.39598C11.1054 7.56324 11 7.79008 11 8.02661C11 8.26315 11.1054 8.48999 11.2929 8.65724C11.4804 8.8245 11.7348 8.91846 12 8.91846ZM7 5.35108H8C8.26522 5.35108 8.51957 5.25711 8.70711 5.08986C8.89464 4.92261 9 4.69576 9 4.45923C9 4.2227 8.89464 3.99585 8.70711 3.8286C8.51957 3.66135 8.26522 3.56738 8 3.56738H7C6.73478 3.56738 6.48043 3.66135 6.29289 3.8286C6.10536 3.99585 6 4.2227 6 4.45923C6 4.69576 6.10536 4.92261 6.29289 5.08986C6.48043 5.25711 6.73478 5.35108 7 5.35108ZM7 8.91846H8C8.26522 8.91846 8.51957 8.8245 8.70711 8.65724C8.89464 8.48999 9 8.26315 9 8.02661C9 7.79008 8.89464 7.56324 8.70711 7.39598C8.51957 7.22873 8.26522 7.13477 8 7.13477H7C6.73478 7.13477 6.48043 7.22873 6.29289 7.39598C6.10536 7.56324 6 7.79008 6 8.02661C6 8.26315 6.10536 8.48999 6.29289 8.65724C6.48043 8.8245 6.73478 8.91846 7 8.91846ZM19 16.0532H18V0.891846C18 0.655314 17.8946 0.428469 17.7071 0.261216C17.5196 0.093962 17.2652 0 17 0H3C2.73478 0 2.48043 0.093962 2.29289 0.261216C2.10536 0.428469 2 0.655314 2 0.891846V16.0532H1C0.734784 16.0532 0.48043 16.1472 0.292893 16.3144C0.105357 16.4817 0 16.7085 0 16.9451C0 17.1816 0.105357 17.4085 0.292893 17.5757C0.48043 17.743 0.734784 17.8369 1 17.8369H19C19.2652 17.8369 19.5196 17.743 19.7071 17.5757C19.8946 17.4085 20 17.1816 20 16.9451C20 16.7085 19.8946 16.4817 19.7071 16.3144C19.5196 16.1472 19.2652 16.0532 19 16.0532ZM11 16.0532H9V12.4858H11V16.0532ZM16 16.0532H13V11.594C13 11.3575 12.8946 11.1306 12.7071 10.9634C12.5196 10.7961 12.2652 10.7022 12 10.7022H8C7.73478 10.7022 7.48043 10.7961 7.29289 10.9634C7.10536 11.1306 7 11.3575 7 11.594V16.0532H4V1.78369H16V16.0532Z" fill="white"/>
      </svg>
    ),
    statusColor: "green-500",
    textColor: "text-brand-text-blue"
  },
  {
    id: "2",
    title: "Warehouse",
    category: "Warehouse & Storage",
    status: "operational",
    area: "Area",
    areaUnit: "1129 sqm",
    type: "Type",
    typeValue: "Storage",
    icon: (
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.34717 0.801874C7.54975 0.706109 7.77316 0.65625 7.99967 0.65625C8.22619 0.65625 8.4496 0.706109 8.65217 0.801874L14.4855 3.5578C14.9788 3.79088 15.2913 4.26805 15.2913 4.7901V13.7524C15.2913 13.909 15.2255 14.0592 15.1083 14.17C14.9911 14.2807 14.8321 14.3429 14.6663 14.3429C14.5006 14.3429 14.3416 14.2807 14.2244 14.17C14.1072 14.0592 14.0413 13.909 14.0413 13.7524V4.7901C14.0414 4.7535 14.0307 4.71762 14.0104 4.68646C13.9901 4.6553 13.961 4.63011 13.9263 4.61372L8.09301 1.85779C8.06404 1.84407 8.03208 1.83693 7.99967 1.83693C7.96727 1.83693 7.93531 1.84407 7.90634 1.85779L2.07301 4.61372C2.03838 4.63011 2.00928 4.6553 1.98897 4.68646C1.96865 4.71762 1.95793 4.7535 1.95801 4.7901V13.7524C1.95801 13.909 1.89216 14.0592 1.77495 14.17C1.65774 14.2807 1.49877 14.3429 1.33301 14.3429C1.16725 14.3429 1.00828 14.2807 0.891066 14.17C0.773856 14.0592 0.708008 13.909 0.708008 13.7524V4.7901C0.708008 4.26805 1.02051 3.79088 1.51384 3.5578L7.34717 0.801874ZM3.20801 7.45311C3.20801 6.69248 3.86134 6.07515 4.66634 6.07515H11.333C12.138 6.07515 12.7913 6.69248 12.7913 7.45311V12.965C12.7913 13.3304 12.6377 13.6809 12.3642 13.9393C12.0907 14.1978 11.7198 14.3429 11.333 14.3429H4.66634C4.27957 14.3429 3.90863 14.1978 3.63514 13.9393C3.36165 13.6809 3.20801 13.3304 3.20801 12.965V7.45311ZM4.66634 7.25626C4.61109 7.25626 4.5581 7.277 4.51903 7.31392C4.47996 7.35084 4.45801 7.40091 4.45801 7.45311V8.43738H11.5413V7.45311C11.5413 7.40091 11.5194 7.35084 11.4803 7.31392C11.4413 7.277 11.3883 7.25626 11.333 7.25626H4.66634ZM11.5413 9.61849H4.45801V10.7996H11.5413V9.61849ZM11.5413 11.9807H4.45801V12.965C4.45801 13.0736 4.55134 13.1618 4.66634 13.1618H11.333C11.3883 13.1618 11.4413 13.1411 11.4803 13.1042C11.5194 13.0673 11.5413 13.0172 11.5413 12.965V11.9807Z" fill="white"/>
      </svg>
    ),
    statusColor: "green-500",
    textColor: "text-brand-text-blue"
  },
  {
    id: "3",
    title: "Good Shed",
    category: "Warehouse & Storage",
    status: "operational",
    area: "Area",
    areaUnit: "837 sqm",
    type: "Storeys",
    typeValue: "Double Storeys",
    icon: null,
    statusColor: "green-500",
    textColor: "text-brand-text-blue"
  },
  {
    id: "4",
    title: "Inspection Shed",
    category: "Processing Areas",
    status: "operational",
    area: "Area",
    areaUnit: "290 sqm",
    type: "Type",
    typeValue: "Facility",
    icon: null,
    statusColor: "green-500",
    textColor: "text-brand-text-blue"
  },
  {
    id: "5",
    title: "Parking Yard",
    category: "Vehicle Management", 
    status: "operational",
    area: "Vehicle",
    areaUnit: "175 approx",
    type: "Type",
    typeValue: "Land",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16667 9.16699L5.41667 5.41699H14.5833L15.8333 9.16699M14.5833 13.3337C14.2518 13.3337 13.9339 13.202 13.6995 12.9675C13.465 12.7331 13.3333 12.4152 13.3333 12.0837C13.3333 11.7521 13.465 11.4342 13.6995 11.1998C13.9339 10.9654 14.2518 10.8337 14.5833 10.8337C14.9149 10.8337 15.2328 10.9654 15.4672 11.1998C15.7016 11.4342 15.8333 11.7521 15.8333 12.0837C15.8333 12.4152 15.7016 12.7331 15.4672 12.9675C15.2328 13.202 14.9149 13.3337 14.5833 13.3337ZM5.41667 13.3337C5.08515 13.3337 4.7672 13.202 4.53278 12.9675C4.29836 12.7331 4.16667 12.4152 4.16667 12.0837C4.16667 11.7521 4.29836 11.4342 4.53278 11.1998C4.7672 10.9654 5.08515 10.8337 5.41667 10.8337C5.74819 10.8337 6.06613 10.9654 6.30055 11.1998C6.53497 11.4342 6.66667 11.7521 6.66667 12.0837C6.66667 12.4152 6.53497 12.7331 6.30055 12.9675C6.06613 13.202 5.74819 13.3337 5.41667 13.3337ZM15.7667 5.00033C15.6 4.51699 15.1333 4.16699 14.5833 4.16699H5.41667C4.86667 4.16699 4.4 4.51699 4.23333 5.00033L2.5 10.0003V16.667C2.5 16.888 2.5878 17.1 2.74408 17.2562C2.90036 17.4125 3.11232 17.5003 3.33333 17.5003H4.16667C4.38768 17.5003 4.59964 17.4125 4.75592 17.2562C4.9122 17.1 5 16.888 5 16.667V15.8337H15V16.667C15 16.888 15.0878 17.1 15.2441 17.2562C15.4004 17.4125 15.6123 17.5003 15.8333 17.5003H16.6667C16.8877 17.5003 17.0996 17.4125 17.2559 17.2562C17.4122 17.1 17.5 16.888 17.5 16.667V10.0003L15.7667 5.00033Z" fill="white"/>
      </svg>
    ),
    statusColor: "green-500",
    textColor: "text-brand-red"
  },
  {
    id: "6",
    title: "Custom Litigation Shed",
    category: "Administrative Building",
    status: "operational",
    area: "Area",
    areaUnit: "207 sqm",
    type: "For :",
    typeValue: "Legal processing",
    icon: null,
    statusColor: "green-500",
    textColor: "text-brand-red"
  },
  {
    id: "7",
    title: "Dispensary Building",
    category: "Support Facilities",
    status: "operational",
    area: "Area",
    areaUnit: "161 sqm",
    type: "Storeys :",
    typeValue: "Single Storeys",
    icon: null,
    statusColor: "green-500",
    textColor: "text-brand-red"
  },
  {
    id: "8",
    title: "Animal Shed (Import)",
    category: "Infrastructure",
    status: "operational",
    area: "Area",
    areaUnit: "250 sqm",
    type: "Type",
    typeValue: "Import",
    icon: null,
    statusColor: "green-500",
    textColor: "text-brand-red"
  },
  {
    id: "9",
    title: "Process Shed",
    category: "Operations",
    status: "operational",
    area: "Area",
    areaUnit: "161 sqm",
    type: "For :",
    typeValue: "Import",
    icon: null,
    statusColor: "green-500",
    textColor: "text-brand-red"
  }
];

const additionalFacilities = [
  "CCTV, PA\nFire Alarm Detection System",
  "Sewage Treatment Plant\n50 KLD Capacity", 
  "4 Watch Towers\n(Four Storey each)",
  "Custom Examination Shed",
  "Railway Yard\nNCY Connection",
  "Diesel Generator\nAdditional Cargo Storage"
];

export default function TatopaniTerminalPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Terminal Management", href: "/services/terminal-management" },
    { label: "Tatopani" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const FacilityCard = ({ facility }: { facility: Facility }) => (
    <div className="bg-white/60 rounded-2xl p-5 shadow-lg backdrop-blur-sm">
      {/* Tags */}
      <div className="flex gap-2.5 mb-4">
        <div className="flex items-center gap-2 bg-brand-blue rounded-full px-4 py-1">
          {facility.icon && <div className="text-white w-5 h-5">{facility.icon}</div>}
          <span className="text-white text-sm font-inter">
            {facility.category}
          </span>
        </div>
        <div className={`bg-${facility.statusColor} rounded-full px-4 py-1`}>
          <span className="text-white text-sm font-inter">
            {facility.status}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className={`text-xl font-inter mb-4 ${facility.textColor || 'text-brand-text-blue'}`}>
        {facility.title}
      </h3>

      {/* Details */}
      <div className="flex gap-8">
        <div className={`font-inter text-sm leading-5 ${facility.textColor || 'text-brand-text-blue'}`}>
          <div>{facility.area}</div>
          <div>{facility.areaUnit}</div>
        </div>
        <div className={`font-inter text-sm leading-5 ${facility.textColor || 'text-brand-text-blue'}`}>
          <div>{facility.type}</div>
          <div>{facility.typeValue}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[455px] bg-brand-blue overflow-hidden">
        {/* Background gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#616FB3] via-[#36427C] to-[#171F45] opacity-80"
          style={{
            background: 'linear-gradient(90deg, #616FB3 1%, #171F45 100%)',
            opacity: 0.8
          }}
        />
        
        {/* Background image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/825eab97ef65ff6b862e540837050b848fd1fb3c?width=2880"
          alt="Tatopani Dry Port"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="font-poppins font-bold text-white mb-2">
            <div className="text-4xl sm:text-5xl lg:text-[55px] leading-tight mb-2">
              Terminal Management
            </div>
            <div className="text-5xl sm:text-6xl lg:text-[65px] leading-tight">
              Tatopani
            </div>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Breadcrumb */}
        <div className="py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Salient Features */}
        <section className="py-12">
          <h2 className="text-brand-blue font-poppins text-3xl font-bold leading-normal mb-5">
            Salient Features
          </h2>
          <div className="w-[156px] h-[2px] bg-brand-blue mb-10"></div>
          <p className="text-brand-text-blue font-inter text-xl leading-relaxed text-justify">
            Tatopani ICD is located in Sidhupachowk, Bagmati Province 114 Km
            north east of Kathmandu. Tatopani and Rasua are two important cross
            border points of Nepal to China. But Tatopani point provides better
            better services and facilitates trade and transit efficiently than
            Rasua because of this ICD and better road connectivity. With the
            development of North-South Road Corridors along Koshi, Gandaki and
            Karnali rivers, trade between India and China can happen via Nepal
            and Tatopani ICD will play a crucial role in facilitating the
            north-south trade between India and China.
          </p>
        </section>

        {/* Facilities Section */}
        <section className="relative py-16">
          {/* Background Map Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/32741a733ec45562e86fc1fc217ec0bf6d90dbaa?width=2928"
              alt="Terminal facilities map"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative z-10">
            {/* Search and Filter Bar */}
            <div className="flex flex-col lg:flex-row gap-5 mb-8 items-start lg:items-center">
              {/* Search Bar */}
              <div className="flex-1 max-w-[616px]">
                <div className="h-16 bg-gray-100 rounded-[50px] flex items-center px-5 gap-4">
                  <Search className="w-9 h-9 text-brand-blue" />
                  <span className="text-brand-blue text-xl font-inter">
                    Search facilities
                  </span>
                </div>
              </div>

              {/* Filter Dropdown */}
              <div className="w-[230px] h-[61px] bg-gray-100 rounded-2xl flex items-center justify-center gap-2.5 px-4">
                <Filter className="w-8 h-8 text-brand-blue" />
                <span className="text-brand-blue text-sm font-inter flex-1">
                  All categories
                </span>
                <ChevronDown className="w-4 h-4 text-brand-blue" />
              </div>

              {/* View Mode Toggle */}
              <div className="w-[141px] h-[61px] bg-gray-100 rounded-2xl flex">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 rounded-l-2xl flex items-center justify-center ${
                    viewMode === 'grid' ? 'bg-brand-text-blue' : ''
                  }`}
                >
                  <Grid3X3 className={`w-6 h-5 ${viewMode === 'grid' ? 'text-white' : 'text-brand-blue'}`} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 rounded-r-2xl flex items-center justify-center ${
                    viewMode === 'list' ? 'bg-brand-text-blue' : ''
                  }`}
                >
                  <List className={`w-6 h-6 ${viewMode === 'list' ? 'text-white' : 'text-brand-blue'}`} />
                </button>
              </div>
            </div>

            {/* Facilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {facilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>

            {/* View More */}
            <div className="text-center mb-10">
              <button className="text-brand-blue text-xl font-inter cursor-pointer hover:underline">
                View more
              </button>
            </div>
          </div>
        </section>

        {/* Additional Facilities Section */}
        <section className="py-16">
          <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-between mb-8">
            <h3 className="text-brand-text-blue font-poppins text-3xl font-bold leading-normal">
              Additional facilities
            </h3>
            <div className="w-[156px] h-[2px] bg-brand-text-blue"></div>
            <div className="flex items-center gap-4">
              <span className="text-brand-text-blue text-xl font-inter">
                Show all
              </span>
              <ChevronDown className="w-4 h-4 text-brand-blue" />
            </div>
          </div>

          {/* Additional Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFacilities.map((text, index) => (
              <div key={index} className="bg-blue-50 border-l-8 border-brand-blue rounded-2xl p-6 text-center">
                <div className="text-brand-text-blue font-inter text-sm leading-7 whitespace-pre-line">
                  {text}
                </div>
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
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
