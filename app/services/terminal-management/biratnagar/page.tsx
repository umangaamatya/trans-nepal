import React from "react";
import Image from "next/image";
import Navigation from "../../../../components/Navigation";
import Footer from "../../../../components/Footer";

// Import images
import brt61 from "/biratnagar/brt-6-1.png";
import brt7 from "/biratnagar/brt-7.png";
import image from "./image.svg";
import rectangle333 from "/biratnagar/rectangle-333.png";
import rectangle334 from "/biratnagar/rectangle-334.png";
import rectangle335 from "/biratnagar/rectangle-335.png";
import rectangle336 from "/biratnagar/rectangle-336.png";
import rectangle337 from "/biratnagar/rectangle-337.png";
import rectangle339 from "/biratnagar/rectangle-339.png";
import vector from "/biratnagar/vector.svg";
import vector3 from "/biratnagar/vector-3.png";
import vector4 from "/biratnagar/vector-4.png";
import vector6 from "/biratnagar/vector-6.png";
import vector7 from "/biratnagar/vector-7.png";
import vector9 from "/biratnagar/vector-9.png";
import vector10 from "/biratnagar/vector-10.svg";

const facilityCards = [
  {
    id: 1,
    title: "Administrative Building",
    category: "Administrative Building",
    categoryColor: "#283b9ac4",
    icon: vector3,
    details: [
      { label: "Area", value: "1320 sqm" },
      { label: "Storeys", value: "Double Storeys" }
    ],
    textColor: "#283b9a",
    detailsColor: "#4b4b4b"
  },
  {
    id: 2,
    title: "Customer Service",
    category: "Warehouse & Sheds",
    categoryColor: "#5664b2",
    icon: vector9,
    details: [
      { label: "Area", value: "658 sqm" },
      { label: "Storeys", value: "Single Storeys" }
    ],
    textColor: "#5664b2",
    detailsColor: "#ac3a37"
  },
  {
    id: 3,
    title: "Security Barrack",
    category: "Administrative Building",
    categoryColor: "#5664b2",
    icon: vector3,
    details: [
      { label: "Area", value: "837 sqm" },
      { label: "Storeys", value: "Double Storeys" }
    ],
    textColor: "#5664b2",
    detailsColor: "#a03633"
  },
  {
    id: 4,
    title: "Dispensary Building",
    category: "Support Facilities",
    categoryColor: "#5664b2",
    icon: vector4,
    details: [
      { label: "Area", value: "161 sqm" },
      { label: "Storeys", value: "Single Storeys" }
    ],
    textColor: "#283b9a",
    detailsColor: "#4b4b4b"
  },
  {
    id: 5,
    title: "Parking Yard",
    category: "Cargo Handling",
    categoryColor: "#5664b2",
    details: [
      { label: "Vehicles", value: "250" },
      { label: "Type", value: "Commercial" }
    ],
    textColor: "#5664b2",
    detailsColor: "#ab3937"
  },
  {
    id: 6,
    title: "Process Shed",
    category: "Processing Area",
    categoryColor: "#5664b2",
    details: [
      { label: "Area", value: "161 sqm" },
      { label: "Type", value: "Import processing" }
    ],
    textColor: "#5664b2",
    detailsColor: "#ab3937"
  },
  {
    id: 7,
    title: "Warehouse Building",
    category: "Storage Facilities",
    categoryColor: "#5664b2",
    icon: vector7,
    details: [
      { label: "Area", value: "2500 sqm" },
      { label: "Capacity", value: "High Volume" }
    ],
    textColor: "#5664b2",
    detailsColor: "#4b4b4b"
  },
  {
    id: 8,
    title: "Container Yard",
    category: "Cargo Handling",
    categoryColor: "#5664b2",
    icon: vector6,
    details: [
      { label: "Containers", value: "500" },
      { label: "Type", value: "TEU" }
    ],
    textColor: "#5664b2",
    detailsColor: "#ab3937"
  },
  {
    id: 9,
    title: "Inspection Shed",
    category: "Processing Area",
    categoryColor: "#5664b2",
    details: [
      { label: "Area", value: "300 sqm" },
      { label: "Type", value: "Customs" }
    ],
    textColor: "#5664b2",
    detailsColor: "#ab3937"
  }
];

const galleryImages = [
  { src: rectangle337, alt: "Administrative Building" },
  { src: rectangle333, alt: "Container Yard" },
  { src: rectangle334, alt: "Warehouse Facility" },
  { src: rectangle335, alt: "Processing Area" },
  { src: rectangle336, alt: "Security Gates" },
  { src: brt7, alt: "Terminal Overview" },
  { src: rectangle339, alt: "Parking Area" }
];

export default function ServicesBiratnagar() {
  return (
    <div className="min-h-screen bg-[#f6f8ff] font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-[#36427C] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#36427C]/90 to-[#283B9A]/90"></div>
        
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 h-full flex flex-col justify-center relative z-10">
          
          {/* Header text */}
          <div className="text-center text-white mb-12">
            <h1 className="text-white font-poppins text-4xl md:text-6xl font-bold leading-normal">
              Terminal Management
            </h1>
            <h2 className="text-white font-poppins text-3xl md:text-5xl font-bold leading-normal mt-4">
              Biratnagar
            </h2>
          </div>

          {/* Breadcrumb */}
          <div className="mt-8">
            <div className="flex items-center gap-3 justify-center">
              <a href="/" className="text-white text-base font-normal hover:underline font-inter">Home</a>
              <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="white"/>
              </svg>
              <a href="/services" className="text-white text-base font-normal hover:underline font-inter">Services</a>
              <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="white"/>
              </svg>
              <span className="text-white text-base font-normal font-inter">Terminal Management</span>
              <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="white"/>
              </svg>
              <span className="text-white text-base font-normal font-inter">Biratnagar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Category Filter */}
        <div className="mb-12">
          <div className="bg-white/75 rounded-2xl p-4 inline-flex items-center gap-4 shadow-sm">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image src={vector} alt="Category icon" width={24} height={24} />
            </div>
            <span className="text-[#283b9a] font-inter text-lg font-medium">All categories</span>
            <div className="w-4 h-4 flex items-center justify-center">
              <Image src={image} alt="Dropdown" width={16} height={16} />
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilityCards.map((card) => (
            <div key={card.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Category Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                style={{ backgroundColor: card.categoryColor }}
              >
                {card.icon && (
                  <Image src={card.icon} alt="Category icon" width={15} height={15} />
                )}
                <span className="text-white text-sm font-medium">{card.category}</span>
              </div>

              {/* Title */}
              <h3 
                className="text-lg font-medium mb-6"
                style={{ color: card.textColor }}
              >
                {card.title}
              </h3>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4">
                {card.details.map((detail, index) => (
                  <div key={index}>
                    <p 
                      className="text-sm font-medium mb-1"
                      style={{ color: card.detailsColor }}
                    >
                      {detail.label}
                    </p>
                    <p 
                      className="text-sm"
                      style={{ color: card.detailsColor }}
                    >
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-[#36427C] font-poppins text-3xl font-bold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl group">
                <Image 
                  src={img.src} 
                  alt={img.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Information */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <h2 className="text-[#36427C] font-poppins text-2xl font-bold mb-6">Terminal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-[#283b9a] font-medium text-lg mb-4">Location</h3>
              <p className="text-gray-600">
                Biratnagar, Nepal<br />
                Nepal-India Border
              </p>
            </div>
            <div>
              <h3 className="text-[#283b9a] font-medium text-lg mb-4">Operating Hours</h3>
              <p className="text-gray-600">
                24/7 Operations<br />
                All days of the week
              </p>
            </div>
            <div>
              <h3 className="text-[#283b9a] font-medium text-lg mb-4">Services</h3>
              <p className="text-gray-600">
                Import/Export Processing<br />
                Customs Clearance<br />
                Cargo Handling
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-[#36427C] to-[#283B9A] rounded-2xl p-8 text-white">
          <h2 className="font-poppins text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Strategic Location</h3>
                <p className="text-white/80">Located at the Nepal-India border for efficient cross-border trade</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Modern Infrastructure</h3>
                <p className="text-white/80">State-of-the-art facilities with advanced cargo handling equipment</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">24/7 Operations</h3>
                <p className="text-white/80">Round-the-clock services for uninterrupted trade operations</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Comprehensive Services</h3>
                <p className="text-white/80">Complete range of logistics and customs clearance services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}