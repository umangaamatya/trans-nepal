"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
// ...existing code...
import Footer from "@/components/Footer";

export default function BiratnagarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* --- HeroSection code inlined --- */}
        {(() => {
          return (
            <section className="relative h-[300px] md:h-[400px] lg:h-[455px] w-full overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/34a2f742813cfc17f08fec59a6677a22c4f0501a?width=2904" 
                  alt="Terminal Management Biratnagar" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-terminal-blue-light/80 to-terminal-blue-dark/80"
                style={{
                  background: 'linear-gradient(270deg, rgba(97, 111, 179, 0.80) 1.08%, rgba(23, 31, 69, 0.80) 99.89%), #36427C'
                }}
              />
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                <div className="text-white">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-inter mb-2 md:mb-4">
                    Terminal Management
                  </h1>
                  <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-inter mb-4 md:mb-6">
                    Biratnagar
                  </h2>
                  <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 text-white/90 font-inter text-sm md:text-lg">
                    <span>Home</span>
                    <span>&gt;</span>
                    <span>Services</span>
                    <span>&gt;</span>
                    <span className="hidden sm:inline">Terminal Management</span>
                    <span className="hidden sm:inline">&gt;</span>
                    <span>Biratnagar</span>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* --- ServicesSection code inlined --- */}
        {(() => {
          const services = [
            {
              id: 1,
              title: "Administrative Building",
              area: "1320 sqm",
              storeys: "Double Storeys",
              category: "Administrative Building",
              icon: require("lucide-react").Building
            },
            {
              id: 2,
              title: "Customs Service Building",
              area: "658 sqm", 
              storeys: "Double Storeys",
              category: "Administrative Building",
              icon: require("lucide-react").Building
            },
            {
              id: 3,
              title: "Entrance Gate",
              area: "133 sqm",
              storeys: "Double Storeys", 
              category: "Administrative Building",
              icon: require("lucide-react").Building
            },
            {
              id: 4,
              title: "Warehouse Arrival",
              area: "1,520 sqm",
              zone: "Import Side",
              category: "Warehouse & Sheds",
              icon: require("lucide-react").Warehouse
            },
            {
              id: 5,
              title: "Warehouse Departure", 
              area: "740 sqm",
              zone: "Export Side",
              category: "Warehouse & Sheds",
              icon: require("lucide-react").Warehouse
            },
            {
              id: 6,
              title: "Animal Shed",
              area: "100 sqm",
              zone: "Import Side", 
              category: "Warehouse & Sheds",
              icon: require("lucide-react").Warehouse
            },
            {
              id: 7,
              title: "Dispensary Building",
              area: "161 sqm",
              storeys: "Single Storey",
              category: "Support Facilities",
              icon: require("lucide-react").Building
            },
            {
              id: 8,
              title: "Dormitory Building",
              area: "647 sqm", 
              storeys: "Single Storey",
              category: "Support Facilities",
              icon: require("lucide-react").Building
            },
            {
              id: 9,
              title: "Security Barrack Building",
              area: "837 sqm",
              storeys: "Double Storey",
              category: "Support Facilities", 
              icon: require("lucide-react").Building
            }
          ];

          const categories = Array.from(new Set(services.map(s => s.category)));

          const [dropdownOpen, setDropdownOpen] = useState(false);
          const [selectedCategory, setSelectedCategory] = useState("All categories");
          
          const filteredServices = selectedCategory === "All categories"
            ? services
            : services.filter(s => s.category === selectedCategory);

          const { ChevronDown, Filter } = require("lucide-react");
          return (
            <section className="bg-terminal-bg py-8 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
              {/* Filter Section */}
              <div className="mb-8 md:mb-12 relative">
                <div className="bg-white rounded-2xl p-3 md:p-4 w-fit shadow-sm">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Filter className="w-5 h-5 md:w-6 md:h-6 text-terminal-blue" />
                    <button
                      className="flex items-center gap-2 text-terminal-blue font-inter text-base md:text-lg font-medium focus:outline-none"
                      onClick={() => setDropdownOpen((open) => !open)}
                    >
                      {selectedCategory}
                      <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                  </div>
                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 z-10 w-48">
                      <ul>
                        <li>
                          <button
                            className={`w-full text-left px-4 py-2 hover:bg-terminal-bg text-terminal-blue font-inter text-base ${
                              selectedCategory === "All categories" ? "font-bold" : ""
                            }`}
                            onClick={() => {
                              setSelectedCategory("All categories");
                              setDropdownOpen(false);
                            }}
                          >
                            All categories
                          </button>
                        </li>
                        {categories.map((cat) => (
                          <li key={cat}>
                            <button
                              className={`w-full text-left px-4 py-2 hover:bg-terminal-bg text-terminal-blue font-inter text-base ${
                                selectedCategory === cat ? "font-bold" : ""
                              }`}
                              onClick={() => {
                                setSelectedCategory(cat);
                                setDropdownOpen(false);
                              }}
                            >
                              {cat}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                {filteredServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.id} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 bg-terminal-blue/80 text-white px-4 py-1.5 rounded-full text-xs font-medium">
                          <Icon className="w-3 h-3" />
                          {service.category}
                        </div>
                      </div>
                      {/* Title */}
                      <h3 className="text-terminal-blue font-poppins text-lg md:text-xl font-medium mb-3 md:mb-4 leading-tight">
                        {service.title}
                      </h3>
                      {/* Details */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <div className="text-terminal-gray">
                            <div className="font-medium text-[15px]">Area</div>
                            <div className="text-[13px]">{service.area}</div>
                          </div>
                          <div className="text-terminal-gray text-right">
                            {service.storeys && (
                              <>
                                <div className="font-medium text-[15px]">Storeys</div>
                                <div className="text-[13px]">{service.storeys}</div>
                              </>
                            )}
                            {service.zone && (
                              <>
                                <div className="font-medium text-[15px]">Zone</div>
                                <div className="text-[13px]">{service.zone}</div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* View More Button */}
              <div className="text-center">
                <button className="text-terminal-blue font-inter text-lg md:text-xl font-medium hover:underline flex items-center gap-2 mx-auto">
                  View more
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
          );
        })()}

        {/* --- GallerySection code inlined --- */}
        {(() => {
          const galleryImages = [
            {
              id: 1,
              src: "https://api.builder.io/api/v1/image/assets/TEMP/e90382f4f689b50d8e024a451c730f69ad03a55b?width=436",
              alt: "Warehouse facility",
              className: "row-span-2 h-[566px]"
            },
            {
              id: 2,
              src: "https://api.builder.io/api/v1/image/assets/TEMP/b508b2de49d7b4299498d3171b3ae0c51c8cb917?width=1030",
              alt: "Terminal building exterior",
              className: "col-span-2 h-[263px]"
            },
            {
              id: 3,
              src: "https://api.builder.io/api/v1/image/assets/TEMP/8fa68afe6179eeffbfce0a5febf08cb24993878f?width=500",
              alt: "Loading area",
              className: "h-[263px]"
            },
            {
              id: 4,
              src: "https://api.builder.io/api/v1/image/assets/TEMP/b7e521a416be6100beb2ca5e333d76fb6e703f14?width=508",
              alt: "Office workspace",
              className: "h-[273px]"
            },
            {
              id: 5,
              src: "https://api.builder.io/api/v1/image/assets/TEMP/87a27952c2d8cb4a50ca8c7e1e19be7cad4d492e?width=1006",
              alt: "Container handling",
              className: "col-span-2 h-[273px]"
            },
            {
              id: 6,
              src: "https://api.builder.io/api/v1/image/assets/TEMP/c163b904948b8dcd96330ce83ec6143f383425ba?width=370",
              alt: "Terminal infrastructure",
              className: "row-span-2 h-[384px]"
            },
            {
              id: 7,
              src: "https://api.builder.io/api/v1/image/assets/TEMP/8d5a525621ea3a22328e29b88f10df30e2a7aeba?width=366",
              alt: "Equipment and machinery",
              className: "h-[162px]"
            }
          ];
          return (
            <section className="bg-terminal-bg py-8 md:py-16">
              <div className="container mx-auto px-4 md:px-6">
                {/* Section Title */}
                <h2 className="text-terminal-blue font-inter text-xl md:text-2xl font-bold mb-6 md:mb-8">
                  Gallery
                </h2>
                {/* Gallery Grid - Mobile: Simple 2-column, Desktop: Complex layout */}
                <div className="block md:hidden">
                  {/* Mobile Gallery - Simple 2-column grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {galleryImages.slice(0, 6).map((image) => (
                      <div key={image.id}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[150px] object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Desktop Gallery - Complex layout */}
                <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
                  {/* Tall image on the left */}
                  <div className="md:row-span-2">
                    <img
                      src={galleryImages[0].src}
                      alt={galleryImages[0].alt}
                      className="w-full h-[300px] md:h-[566px] object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  {/* Large horizontal image */}
                  <div className="md:col-span-2">
                    <img
                      src={galleryImages[1].src}
                      alt={galleryImages[1].alt}
                      className="w-full h-[200px] md:h-[263px] object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  {/* Medium image */}
                  <div>
                    <img
                      src={galleryImages[2].src}
                      alt={galleryImages[2].alt}
                      className="w-full h-[200px] md:h-[263px] object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  {/* Bottom row images */}
                  <div>
                    <img
                      src={galleryImages[3].src}
                      alt={galleryImages[3].alt}
                      className="w-full h-[200px] md:h-[273px] object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <img
                      src={galleryImages[4].src}
                      alt={galleryImages[4].alt}
                      className="w-full h-[200px] md:h-[273px] object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  
                </div>
              </div>
            </section>
          );
        })()}
      </main>
      <Footer />
    </div>
  );
}
