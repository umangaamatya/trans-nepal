"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, Filter } from "lucide-react";

export default function Index() {
  // Service data with categories
  const services = [
    { title: "Custom Office", area: "600 sqm", floor: "Ground floor", category: "Administrative" },
    { title: "Freight Forwarding", area: "195 sqm", floor: "Ground floor", category: "Support" },
    { title: "Desktop / Photocopiers", area: "50 sqm", floor: "Ground floor", category: "Support" },
    { title: "Lobby / Front Desk", area: "145 sqm", floor: "Ground floor", category: "Administrative" },
    { title: "Electrical Room", area: "195 sqm", floor: "Ground floor", category: "Support" },
    { title: "Bank", area: "140 sqm", floor: "First floor", category: "Support" }
  ];

  const categories = Array.from(new Set(services.map(s => s.category)));

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const filteredServices =
    selectedCategory === "All categories"
      ? services
      : services.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[455px] bg-[#36427C] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/59a5f479f6efea36e6222138131b123577f94775?width=2890')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#616FB3]/80 to-[#171F45]/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins leading-tight">
              Terminal Management
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins">
              Kakarbitta
            </h2>
          </div>
          <div className="flex items-center justify-center mt-8 text-xs font-inter">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <span>Services</span>
            <span className="mx-2">›</span>
            <span>Terminal Management</span>
            <span className="mx-2">›</span>
            <span>Kakarbitta</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-terminal-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-terminal-primary font-poppins mb-4">
              Features
            </h2>
            <p className="text-terminal-gray-medium font-poppins text-sm leading-relaxed max-w-5xl">
              Kakarbhitta ICD spread over 7.5 hectares of land is located in Mechinagar Municipality of Jhapa district and has been developed to boost trade with Bangladesh and Bhutan through India. This ICD is linked to East-West highway that connects this facility with other terminals such as Biratnagar ICP, Biragunj ICD/ICP, Bhairahawa ICD and Nepalgung ICD..
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-terminal-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Section */}
          <div className="mb-8 flex items-center relative">
            <div className="flex items-center bg-white rounded-2xl px-4 py-2 shadow-sm relative">
              <Filter className="w-5 h-5 md:w-6 md:h-6 text-terminal-blue mr-3" />
              <button
                className="flex items-center text-terminal-primary font-medium font-inter text-lg mr-2 focus:outline-none"
                onClick={() => setDropdownOpen(open => !open)}
              >
                {selectedCategory}
                <ChevronDown className="h-4 w-4 ml-2 text-terminal-primary" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 z-10 w-48">
                  <ul>
                    <li>
                      <button
                        className={`w-full text-left px-4 py-2 hover:bg-terminal-gray-light text-terminal-primary font-inter text-base ${
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
                    {categories.map(cat => (
                      <li key={cat}>
                        <button
                          className={`w-full text-left px-4 py-2 hover:bg-terminal-gray-light text-terminal-primary font-inter text-base ${
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center bg-terminal-secondary text-white px-4 py-2 rounded-full text-sm font-medium mb-4 w-fit">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
                  </svg>
                  Terminal Building
                </div>

                <h3 className="text-xl font-medium text-terminal-primary font-poppins mb-4">
                  {service.title}
                </h3>

                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-terminal-gray-medium font-poppins mb-1">Area</p>
                    <p className="text-terminal-gray-medium font-poppins text-xs">{service.area}</p>
                  </div>
                  <div>
                    <p className="text-terminal-gray-medium font-poppins mb-1">Floor</p>
                    <p className="text-terminal-gray-medium font-poppins text-xs">{service.floor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-terminal-primary font-medium font-inter text-lg hover:underline">
              View more
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-terminal-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-terminal-primary font-inter mb-8">
            Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://api.builder.io/api/v1/image/assets/TEMP/bd56c58969bd2639409f656efdd991b2179f395a?width=788",
              "https://api.builder.io/api/v1/image/assets/TEMP/a4dea02eade18fc5b2b5786d416262be406e1657?width=788",
              "https://api.builder.io/api/v1/image/assets/TEMP/5f7bcbaed628f0c3c287fa0dd58ad54a27809278?width=788",
              "https://api.builder.io/api/v1/image/assets/TEMP/58e3ed79efcaa819ec25ffc5e68df32e6f2b937c?width=788",
              "https://api.builder.io/api/v1/image/assets/TEMP/c35a9c3059c0e3e862ca8a3e0d25bebfc11dbaec?width=788",
              "https://api.builder.io/api/v1/image/assets/TEMP/1be9264d03827b8de64c92581edc25878a9625be?width=788"
            ].map((image, index) => (
              <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
