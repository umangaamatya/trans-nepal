import Navigation from "@/components/Navigation";
import { TariffTable } from "../../components/TariffTable";
import { ChevronRight } from "lucide-react";

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="w-full h-[308px] bg-[#252f5c] relative mt-8 flex flex-col items-center justify-center">
        <h1 className="text-white text-center font-poppins text-[45px] font-bold leading-normal mb-4">
          Tarrif Information
        </h1>
        <div className="flex items-center gap-2 text-white font-inter text-[12px] font-normal leading-normal">
          <span>About Us Contact Us</span>
          <ChevronRight className="w-2 h-4 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-[166px] py-10">
        {/* Description */}
        <div className="w-full max-w-[1111px] mb-10 text-[#283b9a] text-justify font-poppins text-[15px] font-normal leading-[26px]">
          This section outlines tariff details for dry port services, including charges for freight entry, cargo and terminal handling, weighing, warehousing, storage, container cleaning, sub-leasing, forklift use, rail handling, and bulk cargo operations, providing clear pricing for all port-related activities.
        </div>

        {/* Freight Entry Charges */}
        <div className="mb-[60px]">
          <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-4">
            Freight Entry Charges
          </h2>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Truck/Tanker/Tractor/Trailor per entry per trip",
                vehicle: "259.31",
                teu: "",
                feu: ""
              },
              {
                sn: "2",
                activity: "Rickshaw / Hand Trolley per entry per trip",
                vehicle: "129.69",
                teu: "",
                feu: ""
              },
              {
                sn: "3",
                activity: "Light Vehicles/Bullock Cart with capacity up to 5 Ton per entry",
                vehicle: "38.94",
                teu: "",
                feu: ""
              },
              {
                sn: "4",
                activity: "Container Truck (fixed container Vehicle) per entry per trip",
                vehicle: "389.06",
                teu: "",
                feu: ""
              },
              {
                sn: "5",
                activity: "Trailor / Flat Truck / Artriculated Vehicles with or without container per entry trip.",
                vehicle: "518.64",
                teu: "778.13",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Cargo Handling Charges */}
        <div className="mb-[60px]">
          <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-2">
            Cargo Handling Charges
          </h2>
          <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">
            Loading/ Unloading/ Handling of Cargo
          </h3>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "All handling activities",
                vehicle: "2593.75 4668.74",
                teu: "",
                feu: ""
              },
              {
                sn: "2",
                activity: "Containerized cargo",
                vehicle: "181.57",
                teu: "",
                feu: ""
              },
              {
                sn: "3",
                activity: "Non containerized break bulk/Packaged/ Bagged cargo",
                vehicle: "181.57",
                teu: "",
                feu: ""
              },
              {
                sn: "4",
                activity: "Non containerized bulk/ loose cargo",
                vehicle: "129.69",
                teu: "",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Terminal Handling Charges */}
        <div className="mb-[60px]">
          <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">
            Terminal Handling Charger
          </h3>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Loaded container",
                vehicle: "2593.75 4150.00",
                teu: "",
                feu: ""
              },
              {
                sn: "2",
                activity: "Unloaded Container",
                vehicle: "1296.89 2075.01",
                teu: "",
                feu: ""
              },
              {
                sn: "3",
                activity: "LCL Cargo including container handling / loading / unloading and stuffing and destuffing",
                vehicle: "518.74",
                teu: "",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Weighing Charges */}
        <div className="mb-[60px]">
          <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-4">
            Weighing Charges
          </h2>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Weighing charges per trip per vehicle",
                vehicle: "389.06",
                teu: "518.74",
                feu: "648.43"
              },
              {
                sn: "2",
                activity: "Additional weighing services",
                vehicle: "194.53",
                teu: "259.37",
                feu: "324.21"
              },
              {
                sn: "3",
                activity: "Bulk cargo weighing per MT",
                vehicle: "25.94",
                teu: "",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Warehousing Charges */}
        <div className="mb-[60px]">
          <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-2">
            Warehousing charges:{" "}
            <span className="font-normal">24 Hours Free time from the time of arrival</span>
          </h2>
          <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">
            Imports
          </h3>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "2-8 days +0.1416 paisa/ Kg / day",
                vehicle: "0.16",
                teu: "",
                feu: ""
              },
              {
                sn: "2",
                activity: "9-30 days + 0.1888 paisa / Kg / day",
                vehicle: "0.21",
                teu: "",
                feu: ""
              },
              {
                sn: "3",
                activity: "31 days onwards + 0.2830 paisa / Kg / day",
                vehicle: "0.31",
                teu: "",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Exports */}
        <div className="mb-[60px]">
          <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">
            Exports
          </h3>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "2-8 days + 0.0706 paisa / Kg / day",
                vehicle: "0.08",
                teu: "",
                feu: ""
              },
              {
                sn: "2",
                activity: "9-30 days + 0.1888 paisa / Kg / day",
                vehicle: "0.10",
                teu: "",
                feu: ""
              },
              {
                sn: "3",
                activity: "31 days onwards + 0.2830 paisa / Kg / day",
                vehicle: "0.13",
                teu: "",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Open Yard Storage */}
        <div className="mb-[60px]">
          <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">
            Open Yard Storage
          </h3>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "2-8 days + 0.0706 paisa / Kg / day",
                vehicle: "0.08",
                teu: "",
                feu: ""
              },
              {
                sn: "2",
                activity: "9 days onwards = 0.1181 paisa / Kg / day",
                vehicle: "0.13",
                teu: "",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Parking & Storage Charges */}
        <div className="mb-[60px]">
          <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-2">
            Parking & Storage Charges for loaded/unloaded vehicles
          </h2>
          <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">
            Freight vehicle
          </h3>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "One day free",
                vehicle: "-",
                teu: "-",
                feu: "-"
              },
              {
                sn: "2",
                activity: "2-7 days per day",
                vehicle: "389.06",
                teu: "518.74",
                feu: ""
              },
              {
                sn: "3",
                activity: "8 days onwards per days",
                vehicle: "518.74",
                teu: "518.74",
                feu: "778.13"
              }
            ]}
          />
        </div>

        {/* Container */}
        <div className="mb-[60px]">
          <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">
            Container
          </h3>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "One day free",
                vehicle: "-",
                teu: "",
                feu: ""
              },
              {
                sn: "2",
                activity: "2-7 days per day",
                vehicle: "389.06",
                teu: "518.74",
                feu: ""
              },
              {
                sn: "3",
                activity: "8 days onwards per days",
                vehicle: "518.74",
                teu: "778.13",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Cleaning of Containers */}
        <div className="mb-[60px]">
          <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">
            Cleaning of Containers
          </h3>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Cost of cleaning",
                vehicle: "259.39",
                teu: "389.06",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Sub lease charges */}
        <div className="mb-[60px]">
          <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">
            Sub lease charges
          </h3>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Unfurnished room on the main terminal building @1071.81/m2 per month",
                vehicle: "",
                teu: "",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Forklift Charges */}
        <div className="mb-[60px]">
          <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">
            Forklift Charges
          </h3>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Complete Cycle",
                vehicle: "3865.22",
                teu: "7730.45",
                feu: ""
              },
              {
                sn: "2",
                activity: "Half Cycle per operation",
                vehicle: "2013.80",
                teu: "4026.28",
                feu: ""
              },
              {
                sn: "3",
                activity: "Additional operations per hour",
                vehicle: "242.42",
                teu: "484.84",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Rail Handling Charges */}
        <div className="mb-[60px]">
          <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-4">
            Rail Handling Charges
          </h2>
          <TariffTable
            headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Rail loading / unloading per container",
                vehicle: "1556.25",
                teu: "2334.37",
                feu: "3112.50"
              },
              {
                sn: "2",
                activity: "Rail container handling per operation",
                vehicle: "778.12",
                teu: "1167.18",
                feu: "1556.25"
              },
              {
                sn: "3",
                activity: "Rail to road transfer charges",
                vehicle: "389.06",
                teu: "583.59",
                feu: "778.12"
              },
              {
                sn: "4",
                activity: "Railway line usage charges per day",
                vehicle: "259.37",
                teu: "389.06",
                feu: "518.74"
              }
            ]}
          />
        </div>

        {/* Import-Terminal Handlings Charges */}
        <div className="mb-[60px]">
          <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-4">
            Import-Terminal Handlings Charges
          </h2>
          <TariffTable
            headers={["S.N", "Activities", "Schedule of Charges (w.e.f)", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Factory Destuffing",
                charges: "7,054.30",
                teu: "",
                feu: ""
              },
              {
                sn: "2",
                activity: "Container positioning and handling",
                charges: "2,013.80",
                teu: "4,026.28",
                feu: ""
              },
              {
                sn: "3",
                activity: "Warehouse Delivery",
                charges: "9,111.30",
                teu: "12,136.30",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Export-Terminal Handlings Charges */}
        <div className="mb-[60px]">
          <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-4">
            Export-Terminal Handlings Charges
          </h2>
          <TariffTable
            headers={["S.N", "Activities", "Schedule of Charges (w.e.f)", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Container stuffing at factory",
                charges: "6,215.90",
                teu: "",
                feu: ""
              },
              {
                sn: "2",
                activity: "Export cargo handling and stuffing",
                charges: "1,812.25",
                teu: "3,624.50",
                feu: ""
              },
              {
                sn: "3",
                activity: "Pre-shipment container handling",
                charges: "8,028.15",
                teu: "10,704.20",
                feu: ""
              },
              {
                sn: "4",
                activity: "Export documentation processing",
                charges: "518.74",
                teu: "778.12",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Bulk Cargo Operations */}
        <div className="mb-[60px]">
          <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-4">
            Bulk Cargo Operations
          </h2>
          <TariffTable
            headers={["S.N", "Activities", "Rate per MT", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Bulk cargo loading / unloading per MT",
                charges: "25.94",
                teu: "",
                feu: ""
              },
              {
                sn: "2",
                activity: "Bulk cargo storage per MT per day",
                charges: "5.19",
                teu: "",
                feu: ""
              },
              {
                sn: "3",
                activity: "Bulk cargo handling and transfer",
                charges: "38.91",
                teu: "",
                feu: ""
              },
              {
                sn: "4",
                activity: "Specialized bulk cargo operations",
                charges: "51.88",
                teu: "",
                feu: ""
              },
              {
                sn: "5",
                activity: "Environmental handling for hazardous bulk cargo",
                charges: "77.81",
                teu: "",
                feu: ""
              }
            ]}
          />
        </div>

        {/* Terminal Handling Charges (Bilateral) */}
        <div className="mb-[60px]">
          <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-4">
            Terminal Handling Charges (Bilateral)
          </h2>
          <TariffTable
            headers={["S.N", "Activities", "Bilateral Rate", "TEU", "FEU"]}
            rows={[
              {
                sn: "1",
                activity: "Cross-border container handling",
                charges: "3,889.06",
                teu: "5,833.59",
                feu: "7,778.12"
              },
              {
                sn: "2",
                activity: "Customs clearance facilitation",
                charges: "1,944.53",
                teu: "2,916.79",
                feu: "3,889.06"
              },
              {
                sn: "3",
                activity: "Transit cargo handling",
                charges: "1,556.25",
                teu: "2,334.37",
                feu: "3,112.50"
              },
              {
                sn: "4",
                activity: "Documentation and certification",
                charges: "389.06",
                teu: "583.59",
                feu: "778.12"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
