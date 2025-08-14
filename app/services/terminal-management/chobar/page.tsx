"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, Building, Warehouse, Settings, Filter, MapPin } from "lucide-react"

export default function Index() {
  const facilityData = [
    {
      title: "Main Admin Building",
      category: "Administrative Building",
      categoryColor: "bg-terminal-secondary",
      area: "600 sqm",
      frame: "RCC",
      tag: "EXIM",
      tagColor: "bg-slate-100 text-terminal-text-dark"
    },
    {
      title: "Domestic Admin Building", 
      category: "Administrative Building",
      categoryColor: "bg-terminal-secondary",
      area: "912 sqm",
      frame: "RCC",
      tag: "Domestic",
      tagColor: "bg-slate-100 text-terminal-text-dark"
    },
    {
      title: "Warehouse Shed",
      category: "Warehouse & Storage", 
      categoryColor: "bg-terminal-secondary",
      area: "1,329 sqm",
      numbers: "2",
      tag: "EXIM",
      tagColor: "bg-slate-100 text-terminal-text-dark"
    },
    {
      title: "Warehouse",
      category: "Warehouse & Storage",
      categoryColor: "bg-terminal-secondary", 
      area: "1,329 sqm",
      numbers: "2",
      tag: "Domestic",
      tagColor: "bg-slate-100 text-terminal-text-dark"
    },
    {
      title: "Quarantine Building",
      category: "Processing Areas",
      categoryColor: "bg-terminal-secondary",
      area: "885 sqm", 
      frame: "RCC",
      tag: "EXIM",
      tagColor: "bg-slate-100 text-terminal-text-dark"
    },
    {
      title: "Inspection Shed",
      category: "Processing Areas",
      categoryColor: "bg-terminal-secondary",
      area: "800 sqm",
      numbers: "2",
      tag: "EXIM", 
      tagColor: "bg-slate-100 text-terminal-text-dark"
    },
    {
      title: "Inspection Shed",
      category: "Processing Areas", 
      categoryColor: "bg-terminal-secondary",
      area: "800 sqm",
      frame: "RCC",
      tag: "Domestic",
      tagColor: "bg-slate-100 text-terminal-text-dark"
    },
    {
      title: "ESS & Pump House",
      category: "Utilities",
      categoryColor: "bg-terminal-secondary",
      area: "885 sqm",
      frame: "Prefab",
      tag: "",
      tagColor: ""
    },
    {
      title: "Standby Diesel Generator", 
      category: "Utilities",
      categoryColor: "bg-terminal-secondary",
      capacity: "400 KVA & 250 KVA",
      numbers: "2",
      tag: "",
      tagColor: ""
    }
  ]

  const navigationItems = [
    { name: "Home", active: false },
    { name: "About Us", active: false, hasDropdown: true },
    { name: "Services", active: true, hasDropdown: true },
    { name: "Tariff", active: false },
    { name: "Associates", active: false, hasDropdown: true },
    { name: "Contact Us", active: false },
    { name: "Gallery", active: false },
    { name: "News & Events", active: false },
    { name: "CSR", active: false }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative bg-terminal-primary bg-gradient-to-r from-blue-900/80 to-blue-600/80 py-24"
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(97, 111, 179, 0.80) 1.08%, rgba(23, 31, 69, 0.80) 99.89%), url('https://api.builder.io/api/v1/image/assets/TEMP/a65a2ba4b03dfaf9f3518e66d7a494ba0d4a929b?width=2940')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 lg:px-8 text-center">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center space-x-2 text-white text-xs mb-8">
            <span>Home</span>
            <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
            <span>Services</span>
            <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
            <span>Terminal Management</span>
            <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
            <span>Chobari</span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins">
              Terminal Management
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-poppins">
              Chobar
            </h2>
          </div>
        </div>
      </section>

      {/* Salient Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl">
            <h3 className="text-xl font-bold text-terminal-primary mb-6 font-inter">
              Salient Features
            </h3>
            <p className="text-terminal-text font-inter text-sm leading-8 text-justify">
              Tatopani ICD is located in Sidhupachowk, Bagmati Province 114 Km north east of Kathmandu. Tatopani and Rasua are two important cross border points of Nepal to China. But Tatopani point provides better better services and facilitates trade and transit efficiently than Rasua because of this ICD and better road connectivity. With the development of North-South Road Corridors along Koshi, Gandaki and Karnali rivers, trade between India and China can happen via Nepal and Tatopani ICD will play a crucial role in facilitating the north-south trade between India and China.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white rounded-2xl border border-gray-200 px-4 py-3 shadow-sm">
              <Filter className="h-6 w-6 text-terminal-primary mr-3" />
              <span className="text-terminal-primary font-medium mr-8">All categories</span>
              <ChevronDown className="h-4 w-4 text-terminal-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityData.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`${facility.categoryColor} text-white px-3 py-1 rounded-full flex items-center space-x-2`}>
                    <Building className="h-4 w-4" />
                    <span className="text-xs font-medium">{facility.category}</span>
                  </div>
                  {facility.tag && (
                    <div className={`${facility.tagColor} px-2 py-1 rounded-full`}>
                      <span className="text-xs font-medium">{facility.tag}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h4 className="text-lg font-medium text-terminal-primary mb-6 font-poppins leading-tight">
                  {facility.title}
                </h4>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-terminal-text font-medium mb-1">Area</div>
                    <div className="text-terminal-text text-xs">{facility.area}</div>
                  </div>
                  {facility.frame && (
                    <div>
                      <div className="text-terminal-text font-medium mb-1">Frame</div>
                      <div className="text-terminal-text text-xs">{facility.frame}</div>
                    </div>
                  )}
                  {facility.numbers && (
                    <div>
                      <div className="text-terminal-text font-medium mb-1">Numbers</div>
                      <div className="text-terminal-text text-xs">{facility.numbers}</div>
                    </div>
                  )}
                  {facility.capacity && (
                    <div>
                      <div className="text-terminal-text font-medium mb-1">Capacity</div>
                      <div className="text-terminal-text text-xs">{facility.capacity}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <button className="flex items-center justify-center mx-auto space-x-2 text-black font-medium">
              <span>View more</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Terminal Layout Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/53ad9b5ef24dc67133e823bd53225e16a3306643?width=2292"
                alt="Terminal Layout Map"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
