"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const ICPTabs = [
  "ICP Biratnagar",
  "ICP Kakarbhitta", 
  "ICP Tatopani",
  "ICP Biratnagar"
];

const VehicleEntryChargesData = [
  {
    activity: "Truck/Tanker/Tractor/Trailor per entry per trip",
    vehicle: "259.31",
    teu: "",
    feu: ""
  },
  {
    activity: "Rickshaw / Hand Trolley per entry per trip", 
    vehicle: "129.69",
    teu: "",
    feu: ""
  },
  {
    activity: "Light Vehicles/Bullock Cart with capacity up to 5 Ton per entry",
    vehicle: "38.94",
    teu: "",
    feu: ""
  },
  {
    activity: "Trailor / Flat Truck / Artriculated Vehicles with or without container per entry trip.",
    vehicle: "389.06",
    teu: "778.13",
    feu: ""
  }
];

const CargoHandlingData = [
  {
    activity: "All handling activities",
    vehicle: "",
    teu: "2593.75",
    feu: "4668.74"
  },
  {
    activity: "Containerized cargo",
    vehicle: "181.57", 
    teu: "",
    feu: ""
  },
  {
    activity: "Non containerized break bulk/Packaged/ Bagged cargo",
    vehicle: "181.57",
    teu: "",
    feu: ""
  },
  {
    activity: "Non containerized bulk/ loose cargo",
    vehicle: "129.69",
    teu: "",
    feu: ""
  }
];

const TerminalHandlingData = [
  {
    activity: "Loaded container",
    vehicle: "",
    teu: "2593.75",
    feu: "4668.74"
  },
  {
    activity: "Rickshaw / Hand Trolley per entry per trip",
    vehicle: "",
    teu: "129.890",
    feu: "2075.01"
  },
  {
    activity: "LCL Cargo including container handling / loading / unloading and stuffing and destuffing",
    vehicle: "518.74",
    teu: "",
    feu: ""
  }
];

const WeighmentData = [
  {
    activity: "Loaded container",
    vehicle: "",
    teu: "2593.75",
    feu: "4668.74"
  }
];

const ImportTerminalData = [
  {
    activity: "Factory Destuffing",
    vehicle: "259.31",
    teu: "",
    feu: ""
  },
  {
    activity: "ICP Destufiing",
    vehicle: "129.69",
    teu: "",
    feu: ""
  },
  {
    activity: "Warehouse Delivery",
    vehicle: "38.94",
    teu: "",
    feu: ""
  }
];

const ExportTerminalData = [
  {
    activity: "Factory Destuffing",
    vehicle: "259.31", 
    teu: "",
    feu: ""
  },
  {
    activity: "ICP Destufiing",
    vehicle: "129.69",
    teu: "",
    feu: ""
  },
  {
    activity: "Warehouse Delivery",
    vehicle: "38.94",
    teu: "",
    feu: ""
  }
];

const DataTable = ({ title, data, className = "" }: { title: string; data: any[]; className?: string }) => (
  <div className={`w-full max-w-[1336px] mx-auto mb-16 bg-white rounded-[50px] shadow-[1px_1px_2px_0_rgba(255,255,255,0.30)_inset,-1px_-1px_2px_0_rgba(227,227,227,0.50)_inset,-8px_8px_16px_0_rgba(0,0,0,0.20),0_0_20px_0_rgba(0,0,0,0.90)] overflow-hidden ${className}`}>
    <div className="text-white font-inter text-[28px] md:text-[32px] font-bold bg-brand-tertiary rounded-t-[50px] text-center py-8 px-8">
      {title}
    </div>
    <div className="w-full">
      <div className="grid grid-cols-4 bg-brand-light border-b border-brand-secondary py-5 px-8">
        <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">Activity</div>
        <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">Vehicle</div>
        <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">TEU</div>
        <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">FEU</div>
      </div>
      {data.map((row, index) => (
        <div key={index} className="grid grid-cols-4 border-b border-brand-secondary/50 py-5 px-8 items-center">
          <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-left">{row.activity}</div>
          <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.vehicle}</div>
          <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.teu}</div>
          <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.feu}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState("Select city");
  const [searchTerm, setSearchTerm] = useState("Find in page");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-[65px] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] z-50">
        <div className="max-w-[1440px] mx-auto px-20 h-full flex items-center justify-between">
          <Image 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7308b7c1ed2e9dab51754b94b898b565697ff230" 
            alt="Logo" 
            width={165}
            height={52}
            className="object-contain"
          />
          
          <nav className="hidden lg:flex items-center gap-6">
            <div className="px-3 py-1 text-[15px] font-normal text-black rounded-full cursor-pointer transition-all hover:bg-gray-100">
              Home
            </div>
            <div className="px-3 py-1 flex items-center gap-1 rounded-full cursor-pointer transition-all hover:bg-gray-100">
              <span className="text-[15px] font-normal text-black">About Us</span>
              <ChevronDown className="w-2 h-2 text-black" />
            </div>
            <div className="px-3 py-1 flex items-center gap-1 rounded-full cursor-pointer transition-all bg-brand-secondary">
              <span className="text-[15px] font-normal text-white">Services</span>
              <ChevronDown className="w-2 h-2 text-white" />
            </div>
            <div className="px-3 py-1 text-[15px] font-normal text-black rounded-full cursor-pointer transition-all hover:bg-gray-100">
              Resources
            </div>
            <div className="px-3 py-1 text-[15px] font-normal text-black rounded-full cursor-pointer transition-all hover:bg-gray-100">
              Contact Us
            </div>
            <div className="px-3 py-1 text-[15px] font-normal text-black rounded-full cursor-pointer transition-all hover:bg-gray-100">
              Gallery
            </div>
            <div className="px-3 py-1 text-[15px] font-normal text-black rounded-full cursor-pointer transition-all hover:bg-gray-100">
              News & Events
            </div>
            <div className="px-3 py-1 text-[15px] font-normal text-black rounded-full cursor-pointer transition-all hover:bg-gray-100">
              Jobs
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden text-2xl cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full h-[518px] bg-brand-primary relative mt-[65px] flex items-center justify-between px-6 md:px-24 overflow-hidden">
        <div className="flex-1 max-w-[550px] z-10">
          <h1 className="text-white font-inter text-3xl md:text-[50px] font-extrabold leading-normal mb-6">
            Tariff Information
          </h1>
          <p className="text-white font-inter text-lg md:text-[20px] font-medium leading-normal mb-10">
            Transparent pricing for each of our dry port locations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="flex items-center bg-white rounded-[18px] px-4 py-2 relative min-w-[200px]">
              <span className="text-black/50 font-inter text-lg md:text-[20px] font-normal flex-1">
                {selectedCity}
              </span>
              <ChevronDown className="w-6 h-6 text-black absolute right-3" />
            </div>
            
            <div className="flex items-center bg-white rounded-[18px] px-4 py-2 relative min-w-[200px]">
              <span className="text-black/50 font-inter text-lg md:text-[20px] font-normal flex-1">
                {searchTerm}
              </span>
              <svg className="w-6 h-6 text-black absolute right-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hero background image */}
        <div className="hidden lg:block absolute right-0 top-0 w-[662px] h-[498px] bg-cover bg-center" 
             style={{
               backgroundImage: 'url("https://cdn.builder.io/api/v1/assets/36b81f40e8314a76bb9d588bf23840f5/figma-screenshot-4e8136?format=webp&width=800")',
               clipPath: 'polygon(23% 0%, 100% 0%, 100% 100%, 0% 100%, 13% 71%, 4% 57%, 8% 43%, 17% 29%)'
             }}>
        </div>
      </section>

      {/* ICP Tabs */}
      <section className="w-full bg-brand-secondary py-3">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex flex-wrap justify-center gap-8">
          {ICPTabs.map((tab, index) => (
            <div 
              key={index}
              className="text-black/80 text-center font-inter text-xl md:text-[25px] font-bold px-5 py-2 cursor-pointer rounded-lg transition-all hover:bg-white/10"
            >
              {tab}
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full bg-[#f9f9f9] min-h-screen py-16 px-6 md:px-16">
        <DataTable title="Vehicle Entry Charges" data={VehicleEntryChargesData} />
        
        <div className="w-full max-w-[1336px] mx-auto mb-16 bg-white rounded-[50px] shadow-[1px_1px_2px_0_rgba(255,255,255,0.30)_inset,-1px_-1px_2px_0_rgba(227,227,227,0.50)_inset,-8px_8px_16px_0_rgba(0,0,0,0.20),0_0_20px_0_rgba(0,0,0,0.90)] overflow-hidden">
          <div className="text-white font-inter text-[28px] md:text-[32px] font-bold bg-brand-tertiary rounded-t-[50px] text-center py-8 px-8">
            Cargo Handling Charges
          </div>
          
          <div className="text-brand-secondary font-inter text-2xl md:text-[30px] font-bold bg-brand-tertiary text-center py-5 px-8 border-b border-brand-secondary">
            Loading/ Unloading/ Handling of Cargo
          </div>
          
          <div className="w-full">
            <div className="grid grid-cols-4 bg-brand-light border-b border-brand-secondary py-5 px-8">
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">Activity</div>
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">Vehicle</div>
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">TEU</div>
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">FEU</div>
            </div>
            {CargoHandlingData.map((row, index) => (
              <div key={index} className="grid grid-cols-4 border-b border-brand-secondary/50 py-5 px-8 items-center">
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-left">{row.activity}</div>
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.vehicle}</div>
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.teu}</div>
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.feu}</div>
              </div>
            ))}
          </div>

          <div className="text-brand-secondary font-inter text-2xl md:text-[30px] font-bold bg-brand-tertiary text-center py-5 px-8 border-b border-brand-secondary">
            Terminal Handling Charger
          </div>
          
          <div className="w-full">
            <div className="grid grid-cols-4 bg-brand-light border-b border-brand-secondary py-5 px-8">
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">Activity</div>
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">Vehicle</div>
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">TEU</div>
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">FEU</div>
            </div>
            {TerminalHandlingData.map((row, index) => (
              <div key={index} className="grid grid-cols-4 border-b border-brand-secondary/50 py-5 px-8 items-center">
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-left">{row.activity}</div>
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.vehicle}</div>
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.teu}</div>
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.feu}</div>
              </div>
            ))}
          </div>

          <div className="text-brand-secondary font-inter text-2xl md:text-[30px] font-bold bg-brand-tertiary text-center py-5 px-8 border-b border-brand-secondary">
            Weighment Charges
          </div>
          
          <div className="w-full">
            <div className="grid grid-cols-4 bg-brand-light border-b border-brand-secondary py-5 px-8">
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">Activity</div>
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">Vehicle</div>
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">TEU</div>
              <div className="text-brand-secondary font-poppins text-xl md:text-[25px] font-medium text-center">FEU</div>
            </div>
            {WeighmentData.map((row, index) => (
              <div key={index} className="grid grid-cols-4 border-b border-brand-secondary/50 py-5 px-8 items-center">
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-left">{row.activity}</div>
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.vehicle}</div>
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.teu}</div>
                <div className="text-brand-secondary font-inter text-lg md:text-[20px] font-medium text-center">{row.feu}</div>
              </div>
            ))}
          </div>
        </div>

        <DataTable title="Vehicle Entry Charges" data={VehicleEntryChargesData} />

        <h2 className="text-brand-secondary font-poppins text-2xl md:text-[30px] font-medium text-center my-10">
          Rail Handling Charges at ICP Biratnagar
        </h2>

        <DataTable title="Import-Terminal Handlings Charges" data={ImportTerminalData} />
        <DataTable title="Export Terminal Handling Charges" data={ExportTerminalData} />
        <DataTable title="Export Terminal Handling Charges" data={ExportTerminalData} />
      </main>

      {/* Footer */}
      <footer className="w-full h-[418px] bg-gradient-to-r from-[rgba(97,111,179,0.80)] via-[rgba(40,59,154,0.98)] to-[#171f45] relative overflow-hidden">
        {/* Background decorative shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          {/* Multiple decorative circles and shapes - simplified for brevity */}
          <div className="absolute w-[217px] h-[234px] bg-white/10 rounded-full top-0 left-0"></div>
          <div className="absolute w-[125px] h-[124px] bg-white/10 rounded-full top-0 right-1/3"></div>
          <div className="absolute w-[198px] h-[198px] bg-white/10 rounded-full bottom-0 right-1/4"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 pt-12 h-full flex flex-col">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Connect with us */}
            <div>
              <h3 className="text-white font-inter text-[25px] font-bold uppercase border-b-2 border-white pb-3 mb-6 inline-block">
                Connect with us
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 28 23">
                    <path d="M2.77543 22.1532C2.01971 22.1532 1.37299 21.8843 0.835282 21.3466C0.297573 20.8089 0.0282598 20.1617 0.0273438 19.4051V2.91655C0.0273438 2.16082 0.296657 1.51411 0.835282 0.976395C1.37391 0.438686 2.02063 0.169373 2.77543 0.168457H24.7602C25.5159 0.168457 26.1631 0.43777 26.7017 0.976395C27.2403 1.51502 27.5092 2.16174 27.5082 2.91655V19.4051C27.5082 20.1608 27.2394 20.808 26.7017 21.3466C26.164 21.8852 25.5168 22.1541 24.7602 22.1532H2.77543ZM13.7678 12.5349L24.7602 5.66464V2.91655L13.7678 9.78677L2.77543 2.91655V5.66464L13.7678 12.5349Z"/>
                  </svg>
                  <span className="text-white font-inter text-[20px] font-normal">info@transnepaldryport.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 19 19">
                    <path d="M16.9617 18.1218C14.8798 18.1218 12.8229 17.6681 10.791 16.7607C8.75903 15.8534 6.91032 14.5666 5.24481 12.9004C3.5793 11.2342 2.29286 9.38552 1.38549 7.35426C0.478121 5.32301 0.0241037 3.2661 0.0234375 1.18355C0.0234375 0.883757 0.123368 0.63393 0.323229 0.434069C0.52309 0.234208 0.772917 0.134277 1.07271 0.134277H5.1199C5.35307 0.134277 5.56126 0.213556 5.74446 0.372112C5.92767 0.530669 6.03593 0.717872 6.06924 0.933722L6.71878 4.43129C6.75209 4.69777 6.74377 4.92262 6.6938 5.10582C6.64384 5.28903 6.55223 5.44725 6.41899 5.58049L3.99568 8.02879C4.32878 8.64503 4.72417 9.24028 5.18185 9.81455C5.63953 10.3888 6.14352 10.9428 6.6938 11.4764C7.21011 11.9927 7.7514 12.4717 8.31767 12.9134C8.88395 13.3551 9.48353 13.7588 10.1164 14.1246L12.4648 11.7762C12.6147 11.6263 12.8106 11.514 13.0524 11.4394C13.2942 11.3648 13.5314 11.3438 13.7639 11.3765L17.2115 12.076C17.4447 12.1426 17.6362 12.2635 17.7861 12.4387C17.936 12.6139 18.0109 12.8095 18.0109 13.0253V17.0725C18.0109 17.3723 17.911 17.6221 17.7111 17.822C17.5113 18.0219 17.2615 18.1218 16.9617 18.1218Z"/>
                  </svg>
                  <span className="text-white font-inter text-[20px] font-normal">+977 21 501470</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-6 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 23 20">
                    <path d="M6.76875 18.0881V0.100586H18.0109V5.72168H19.1352C20.072 5.72168 20.8683 6.04958 21.5241 6.70537C22.1799 7.36117 22.5078 8.15749 22.5078 9.09434V18.0881H6.76875ZM2.83398 19.2123C3.62094 19.2123 4.2861 18.9406 4.82947 18.3972C5.37284 17.8539 5.64453 17.1887 5.64453 16.4018V7.40801C5.64453 6.62106 5.37284 5.95589 4.82947 5.41252C4.2861 4.86915 3.62094 4.59746 2.83398 4.59746C2.04703 4.59746 1.38187 4.86915 0.838496 5.41252C0.295124 5.95589 0.0234375 6.62106 0.0234375 7.40801V16.4018C0.0234375 17.1887 0.295124 17.8539 0.838496 18.3972C1.38187 18.9406 2.04703 19.2123 2.83398 19.2123Z"/>
                  </svg>
                  <span className="text-white font-inter text-[20px] font-normal">+977 21 501441</span>
                </div>
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.219 1.037 1.219 0 .759-.48 1.898-.719 2.957-.199.839.419 1.517 1.277 1.517 1.542 0 2.719-1.681 2.719-4.102 0-2.142-1.542-3.641-3.74-3.641-2.543 0-4.042 1.898-4.042 3.861 0 .759.299 1.578.659 2.027.079.099.079.179.059.279-.06.259-.179.699-.239.899-.059.179-.179.219-.399.119-1.099-.519-1.798-2.142-1.798-3.461 0-2.821 2.042-5.401 5.881-5.401 3.099 0 5.502 2.202 5.502 5.162 0 3.081-1.942 5.563-4.662 5.563-.918 0-1.777-.48-2.062-1.057l-.559 2.142c-.199.778-.739 1.738-1.099 2.337.839.259 1.738.399 2.658.399 6.622 0 11.99-5.367 11.99-11.987C24.007 5.367 18.639.001 12.017.001z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-white font-inter text-[25px] font-bold uppercase border-b-2 border-white pb-3 mb-6 inline-block">
                Useful Links
              </h3>
              <div className="space-y-4">
                {[
                  "Department Of Customs",
                  "NITDB Board", 
                  "FNCCI",
                  "Indian Embassy Nepal",
                  "Check Email"
                ].map((link, index) => (
                  <div key={index} className="flex items-center justify-between cursor-pointer hover:bg-white/10 px-2 py-1 rounded transition-all">
                    <span className="text-white font-inter text-[18px] font-normal">{link}</span>
                    <ChevronDown className="w-4 h-7 text-white/80 rotate-[-90deg]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-inter text-[25px] font-bold uppercase border-b-2 border-white pb-3 mb-6 inline-block">
                Quick Links
              </h3>
              <div className="space-y-4">
                {[
                  "Management Team",
                  "Biratnagar ICP",
                  "Kakarbhitta ICD", 
                  "Tariff",
                  "News & Events"
                ].map((link, index) => (
                  <div key={index} className="flex items-center justify-between cursor-pointer hover:bg-white/10 px-2 py-1 rounded transition-all">
                    <span className="text-white font-inter text-[18px] font-normal">{link}</span>
                    <ChevronDown className="w-4 h-7 text-white/80 rotate-[-90deg]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/30 pt-5 mt-8">
            <p className="text-white/80 font-inter text-[18px] font-normal text-center">
              All rights Reserved | Copyright © 2024 Trans Nepal Freight Services Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Back to top button */}
        <div className="fixed bottom-8 right-8 z-50 cursor-pointer flex flex-col items-center gap-3">
          <div className="relative w-[232px] h-[232px] flex items-center justify-center">
            <div className="absolute inset-0 bg-white/8 rounded-full"></div>
            <div className="absolute top-12 left-12 w-[102px] h-[101px] bg-white/8 rounded-full"></div>
            <div className="absolute top-0 left-0 w-[228px] h-[228px] bg-white rounded-full"></div>
            <Image 
              src="https://api.builder.io/api/v1/image/assets/TEMP/4c416fb04b7a3f08017cdd7d02b7161c2ea4b651" 
              alt="Logo"
              width={228}
              height={130}
              className="object-contain z-10"
            />
          </div>
          <div className="text-white font-inter text-[15px] font-normal bg-black/50 border border-white px-4 py-2 rounded">
            Back to top
          </div>
          <ChevronDown className="w-2 h-3 text-white rotate-180" />
        </div>
      </footer>
    </div>
  );
}
