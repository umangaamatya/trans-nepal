"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

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
      <Navigation />

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

      <Footer />
    </div>
  );
}
