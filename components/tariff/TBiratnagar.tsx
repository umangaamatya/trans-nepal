"use client";
import React from "react";
import { TariffTable } from "@/components/TariffTable";

export default function TBiratnagar() {
  return (
    <>
      {/* Freight Entry Charges */}
      <div className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-4">
          Freight Entry Charges
        </h2>
        <TariffTable
          headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
          columnClasses={{
            Vehicle: "-ml-16 text-center tabular-nums",
            TEU: "text-center tabular-nums",
            FEU: "text-center tabular-nums",
          }}
          rows={[
            {
              sn: "1",
              activity: "Truck/Tanker/Tractor/Trailor per entry per trip",
              vehicle: <span className="pl-24 block">{`259.31`}</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "2",
              activity: "Rickshaw / Hand Trolley per entry per trip",
              vehicle: <span className="pl-24 block">{`129.69`}</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "3",
              activity: "Light Vehicles/Bullock Cart with capacity up to 5 Ton per entry",
              vehicle: <span className="pl-24 block">{`38.94`}</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "4",
              activity: "Container Truck (fixed container Vehicle) per entry per trip",
              vehicle: <span className="pl-24 block">{`389.06`}</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "5",
              activity: "Trailor / Flat Truck / Artriculated Vehicles with or without container per entry trip.",
              vehicle: <span className="pl-24 block">{`518.64`}</span>,
              teu: <span className="pl-24 block">{`778.13`}</span>,
              feu: "",
            },
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
          columnClasses={{
            Vehicle: "-ml-16 text-center tabular-nums",
            TEU: "text-center tabular-nums",
            FEU: "text-center tabular-nums",
          }}
          rows={[
            {
              sn: "1",
              activity: "All handling activities",
              vehicle: <span className="pl-24 block">2593.75 4668.74</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "2",
              activity: "Containerized cargo",
              vehicle: <span className="pl-24 block">181.57</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "3",
              activity: "Non containerized break bulk/Packaged/ Bagged cargo",
              vehicle: <span className="pl-24 block">181.57</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "4",
              activity: "Non containerized bulk/ loose cargo",
              vehicle: <span className="pl-24 block">129.69</span>,
              teu: "",
              feu: "",
            },
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
              vehicle: <span className="pl-24 block">2593.75 4150.00</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "2",
              activity: "Unloaded Container",
              vehicle: <span className="pl-24 block">1296.89 2075.01</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "3",
              activity: "LCL Cargo including container handling / loading / unloading and stuffing and destuffing",
              vehicle: <span className="pl-24 block">518.74</span>,
              teu: "",
              feu: "",
            },
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
              vehicle: <span className="pl-24 block">389.06</span>,
              teu: <span className="pl-24 block">518.74</span>,
              feu: <span className="pl-24 block">648.43</span>,
            },
            {
              sn: "2",
              activity: "Additional weighing services",
              vehicle: <span className="pl-24 block">194.53</span>,
              teu: <span className="pl-24 block">259.37</span>,
              feu: <span className="pl-24 block">324.21</span>,
            },
            {
              sn: "3",
              activity: "Bulk cargo weighing per MT",
              vehicle: <span className="pl-24 block">25.94</span>,
              teu: "",
              feu: "",
            },
          ]}
        />
      </div>

      {/* Warehousing Charges */}
      <div className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-2">
          Warehousing charges:{" "}
          <span className="font-normal">
            24 Hours Free time from the time of arrival
          </span>
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
              vehicle: <span className="pl-24 block">0.16</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "2",
              activity: "9-30 days + 0.1888 paisa / Kg / day",
              vehicle: <span className="pl-24 block">0.21</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "3",
              activity: "31 days onwards + 0.2830 paisa / Kg / day",
              vehicle: <span className="pl-24 block">0.31</span>,
              teu: "",
              feu: "",
            },
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
              vehicle: <span className="pl-24 block">0.08</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "2",
              activity: "9-30 days + 0.1888 paisa / Kg / day",
              vehicle: <span className="pl-24 block">0.10</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "3",
              activity: "31 days onwards + 0.2830 paisa / Kg / day",
              vehicle: <span className="pl-24 block">0.13</span>,
              teu: "",
              feu: "",
            },
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
              vehicle: <span className="pl-24 block">0.08</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "2",
              activity: "9 days onwards = 0.1181 paisa / Kg / day",
              vehicle: <span className="pl-24 block">0.13</span>,
              teu: "",
              feu: "",
            },
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
              vehicle: <span className="pl-24 block">-</span>,
              teu: <span className="pl-24 block">-</span>,
              feu: <span className="pl-24 block">-</span>,
            },
            {
              sn: "2",
              activity: "2-7 days per day",
              vehicle: <span className="pl-24 block">389.06</span>,
              teu: <span className="pl-24 block">518.74</span>,
              feu: "",
            },
            {
              sn: "3",
              activity: "8 days onwards per days",
              vehicle: <span className="pl-24 block">518.74</span>,
              teu: <span className="pl-24 block">518.74</span>,
              feu: <span className="pl-24 block">778.13</span>,
            },
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
              vehicle: <span className="pl-24 block">-</span>,
              teu: "",
              feu: "",
            },
            {
              sn: "2",
              activity: "2-7 days per day",
              vehicle: <span className="pl-24 block">389.06</span>,
              teu: <span className="pl-24 block">518.74</span>,
              feu: "",
            },
            {
              sn: "3",
              activity: "8 days onwards per days",
              vehicle: <span className="pl-24 block">518.74</span>,
              teu: <span className="pl-24 block">778.13</span>,
              feu: "",
            },
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
              vehicle: <span className="pl-24 block">259.39</span>,
              teu: <span className="pl-24 block">389.06</span>,
              feu: "",
            },
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
              activity:
                "Unfurnished room on the main terminal building @1071.81/m2 per month",
              vehicle: <span className="pl-24 block">259.39</span>,
              teu: <span className="pl-24 block">389.06</span>,
              feu: "",
            },
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
              vehicle: <span className="pl-24 block">3865.22</span>,
              teu: <span className="pl-24 block">7730.45</span>,
              feu: "",
            },
            {
              sn: "2",
              activity: "Half Cycle per operation",
              vehicle: <span className="pl-24 block">2013.80</span>,
              teu: <span className="pl-24 block">4026.28</span>,
              feu: "",
            },
            {
              sn: "3",
              activity: "Additional operations per hour",
              vehicle: <span className="pl-24 block">242.42</span>,
              teu: <span className="pl-24 block">484.84</span>,
              feu: "",
            },
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
              vehicle: <span className="pl-24 block">1556.25</span>,
              teu: <span className="pl-24 block">2334.37</span>,
              feu: <span className="pl-24 block">3112.50</span>,
            },
            {
              sn: "2",
              activity: "Rail container handling per operation",
              vehicle: <span className="pl-24 block">778.12</span>,
              teu: <span className="pl-24 block">1167.18</span>,
              feu: <span className="pl-24 block">1556.25</span>,
            },
            {
              sn: "3",
              activity: "Rail to road transfer charges",
              vehicle: <span className="pl-24 block">389.06</span>,
              teu: <span className="pl-24 block">583.59</span>,
              feu: <span className="pl-24 block">778.12</span>,
            },
            {
              sn: "4",
              activity: "Railway line usage charges per day",
              vehicle: <span className="pl-24 block">259.37</span>,
              teu: <span className="pl-24 block">389.06</span>,
              feu: <span className="pl-24 block">518.74</span>,
            },
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
              feu: "",
            },
            {
              sn: "2",
              activity: "Container positioning and handling",
              charges: "2,013.80",
              teu: "4,026.28",
              feu: "",
            },
            {
              sn: "3",
              activity: "Warehouse Delivery",
              charges: "9,111.30",
              teu: "12,136.30",
              feu: "",
            },
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
              feu: "",
            },
            {
              sn: "2",
              activity: "Export cargo handling and stuffing",
              charges: "1,812.25",
              teu: "3,624.50",
              feu: "",
            },
            {
              sn: "3",
              activity: "Pre-shipment container handling",
              charges: "8,028.15",
              teu: "10,704.20",
              feu: "",
            },
            {
              sn: "4",
              activity: "Export documentation processing",
              charges: "518.74",
              teu: "778.12",
              feu: "",
            },
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
              feu: "",
            },
            {
              sn: "2",
              activity: "Bulk cargo storage per MT per day",
              charges: "5.19",
              teu: "",
              feu: "",
            },
            {
              sn: "3",
              activity: "Bulk cargo handling and transfer",
              charges: "38.91",
              teu: "",
              feu: "",
            },
            {
              sn: "4",
              activity: "Specialized bulk cargo operations",
              charges: "51.88",
              teu: "",
              feu: "",
            },
            {
              sn: "5",
              activity:
                "Environmental handling for hazardous bulk cargo",
              charges: "77.81",
              teu: "",
              feu: "",
            },
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
              feu: "7,778.12",
            },
            {
              sn: "2",
              activity: "Customs clearance facilitation",
              charges: "1,944.53",
              teu: "2,916.79",
              feu: "3,889.06",
            },
            {
              sn: "3",
              activity: "Transit cargo handling",
              charges: "1,556.25",
              teu: "2,334.37",
              feu: "3,112.50",
            },
            {
              sn: "4",
              activity: "Documentation and certification",
              charges: "389.06",
              teu: "583.59",
              feu: "778.12",
            },
          ]}
        />
      </div>
    </>
  );
}