"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight, ChevronDown, Filter, Building, Warehouse, Cog } from "lucide-react";
import { useState } from "react";

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="relative h-[455px] bg-terminal-blue overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/825eab97ef65ff6b862e540837050b848fd1fb3c?width=2880"
          alt="Tatopani Port"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#616FB3]/80 to-[#171F45]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-[55px] font-bold font-poppins leading-tight">
              Terminal Management
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-[65px] font-bold font-poppins leading-tight">
              Tatopani
            </h2>
          </div>

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-xs font-inter">
            <span>Home</span>
            <ChevronRight className="h-3 w-3" />
            <span>Services</span>
            <ChevronRight className="h-3 w-3" />
            <span>Terminal Management</span>
            <ChevronRight className="h-3 w-3" />
            <span>Tatopani</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Salient Features Section ---
const SalientFeatures = () => {
  return (
    <section className="bg-terminal-bg-light py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-terminal-blue text-2xl font-bold font-inter mb-6">
            Salient Features
          </h2>
          
          <div className="mb-6">
            <p className="text-black text-xl font-bold font-inter">
              Spread over 129 bighas
            </p>
          </div>

          <div className="text-terminal-gray text-sm font-inter leading-[30px] text-justify">
            <p>
              Tatopani ICD is located in Sidhupachowk, Bagmati Province 114 Km north east of Kathmandu. 
              Tatopani and Rasua are two important cross border points of Nepal to China. But Tatopani point 
              provides better better services and facilitates trade and transit efficiently than Rasua because 
              of this ICD and better road connectivity. With the development of North-South Road Corridors along 
              Koshi, Gandaki and Karnali rivers, trade between India and China can happen via Nepal and Tatopani 
              ICD will play a crucial role in facilitating the north-south trade between India and China.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ServiceCard (inline) ---
interface ServiceCardProps {
  title: string;
  area?: string;
  areaValue?: string;
  type?: string;
  typeValue?: string;
  weight?: string;
  weightValue?: string;
  capacity?: string;
  capacityValue?: string;
  position?: string;
  positionValue?: string;
  storey?: string;
  storeyValue?: string;
  floor?: string;
  floorValue?: string;
  category: "building" | "warehouse" | "processing";
}

const ServiceCard = ({
  title,
  area,
  areaValue,
  type,
  typeValue,
  weight,
  weightValue,
  capacity,
  capacityValue,
  position,
  positionValue,
  storey,
  storeyValue,
  floor,
  floorValue,
  category
}: ServiceCardProps) => {
  const getIcon = () => {
    switch (category) {
      case "warehouse":
        return <Warehouse className="h-4 w-4" />;
      case "processing":
        return <Cog className="h-4 w-4" />;
      default:
        return <Building className="h-4 w-4" />;
    }
  };

  const getCategoryLabel = () => {
    switch (category) {
      case "warehouse":
        return "Warehouse";
      case "processing":
        return "Processing Areas";
      default:
        return "Terminal Building";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Category Badge */}
      <div className="mb-4">
        <div className="inline-flex items-center bg-terminal-blue-light text-white px-3 py-1 rounded-full text-xs font-inter">
          {getIcon()}
          <span className="ml-2">{getCategoryLabel()}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-terminal-blue text-xl font-medium font-poppins mb-4 leading-tight">
        {title}
      </h3>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        {area && (
          <div>
            <div className="text-terminal-gray font-poppins mb-1">{area}</div>
            <div className="text-terminal-gray text-xs font-poppins">{areaValue}</div>
          </div>
        )}
        {storey && (
          <div>
            <div className="text-terminal-gray font-poppins mb-1">{storey}</div>
            <div className="text-terminal-gray text-xs font-poppins">{storeyValue}</div>
          </div>
        )}
        {floor && (
          <div>
            <div className="text-terminal-gray font-poppins mb-1">{floor}</div>
            <div className="text-terminal-gray text-xs font-poppins">{floorValue}</div>
          </div>
        )}
        {type && (
          <div>
            <div className="text-terminal-gray font-poppins mb-1">{type}</div>
            <div className="text-terminal-gray text-xs font-poppins">{typeValue}</div>
          </div>
        )}
        {weight && (
          <div>
            <div className="text-terminal-gray font-poppins mb-1">{weight}</div>
            <div className="text-terminal-gray text-xs font-poppins">{weightValue}</div>
          </div>
        )}
        {capacity && (
          <div>
            <div className="text-terminal-gray font-poppins mb-1">{capacity}</div>
            <div className="text-terminal-gray text-xs font-poppins">{capacityValue}</div>
          </div>
        )}
        {position && (
          <div className="col-span-2">
            <div className="text-terminal-gray font-poppins mb-1">{position}</div>
            <div className="text-terminal-gray text-xs font-poppins">{positionValue}</div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- ServicesGrid Section with Dropdown Filter ---
const ServicesGrid = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Admin Building",
      area: "Area",
      areaValue: "3,011 sqm",
      storey: "Storey",
      storeyValue: "Two storied",
      category: "building"
    },
    {
      title: "Quarter Building for Customs",
      area: "Area",
      areaValue: "3,011 sqm",
      storey: "Storey",
      storeyValue: "Two storied",
      category: "building"
    },
    {
      title: "Bhimraj Joshi",
      position: "Position",
      positionValue: "Joint Managing Director",
      category: "building"
    },
    {
      title: "Warehouse",
      area: "Area",
      areaValue: "1,129 sqm",
      type: "Type",
      typeValue: "Storage",
      category: "warehouse"
    },
    {
      title: "Goods Shed",
      area: "Area",
      areaValue: "700 sqm",
      type: "Type",
      typeValue: "Storage",
      category: "warehouse"
    },
    {
      title: "Inspection Shed",
      area: "Area",
      areaValue: "598 sqm",
      type: "Type",
      typeValue: "Examination",
      category: "warehouse"
    },
    {
      title: "Custom Litigation Shed",
      area: "Area",
      areaValue: "207 sqm",
      type: "Type",
      typeValue: "Legal Hold",
      category: "warehouse"
    },
    {
      title: "Weigh Bridge",
      weight: "Weight",
      weightValue: "100 MT",
      type: "Type",
      typeValue: "Measurement",
      category: "processing"
    },
    {
      title: "Diesel Generator Set",
      capacity: "Capacity",
      capacityValue: "125 KVA",
      type: "Type",
      typeValue: "Power Supply",
      category: "processing"
    }
  ];

  // Get unique categories for dropdown
  const categories = [
    "All categories",
    ...Array.from(new Set(services.map(s => {
      if (s.category === "building") return "Terminal Building";
      if (s.category === "warehouse") return "Warehouse";
      if (s.category === "processing") return "Processing Areas";
      return s.category;
    })))
  ] as const;

  // Map dropdown label to service category value
  const categoryMap: Record<"Terminal Building" | "Warehouse" | "Processing Areas", string> = {
    "Terminal Building": "building",
    "Warehouse": "warehouse",
    "Processing Areas": "processing"
  };

  type CategoryType = typeof categories[number];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All categories");

  const filteredServices =
    selectedCategory === "All categories"
      ? services
      : services.filter(s =>
          categoryMap[selectedCategory as keyof typeof categoryMap] === s.category
        );

  return (
    <section className="bg-terminal-bg-light py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Filter */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center bg-white rounded-2xl px-6 py-3 shadow-sm relative">
            <Filter className="h-5 w-5 text-terminal-blue mr-3" />
            <button
              className="flex items-center text-terminal-blue text-lg font-medium font-inter focus:outline-none"
              onClick={() => setDropdownOpen(open => !open)}
            >
              {selectedCategory}
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 z-10 w-48">
                <ul>
                  {categories.map(cat => (
                    <li key={cat}>
                      <button
                        className={`w-full text-left px-4 py-2 hover:bg-terminal-bg-light text-terminal-blue font-inter text-base ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        
      </div>
    </section>
  );
};


function Index() {
  return (
    <div className="min-h-screen bg-terminal-bg-light">
      <Navigation />
      <Hero />
      <SalientFeatures />
      <ServicesGrid />
      <Footer />
    </div>
  );
}

export default Index;
