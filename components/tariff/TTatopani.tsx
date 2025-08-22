"use client";
import React from "react";
import { TariffTable } from "@/components/TariffTable";

export default function TTatopani() {
  const freightEntryData = [
    { sn: "1", activity: "Truck/Tanker/Tractor/Trailor per entry per trip", vehicle: <span className="pl-24 block">259.31</span>, teu: "", feu: "" },
    { sn: "2", activity: "Light Vehicles/Bullock Cart with capacity up to 5 Ton per entry", vehicle: <span className="pl-24 block">129.69</span>, teu: "", feu: "" },
    { sn: "3", activity: "Rickshaw / Hand Trolley per entry per trip", vehicle: <span className="pl-24 block">38.94</span>, teu: "", feu: "" },
    { sn: "4", activity: "Container Truck (fixed container Vehicle) per entry per trip", vehicle: <span className="pl-24 block">389.06</span>, teu: "", feu: "" },
    { sn: "5", activity: "Trailor / Flat Truck / Artriculated Vehicles with or without container per entry trip.", vehicle: <span className="pl-24 block">518.64</span>, teu: <span className="pl-24 block">778.13</span>, feu: "" },
  ];

  const cargoHandlingData = [
    { sn: "1", activity: "All handling activities", vehicle: <span className="pl-24 block">2593.75 4668.74</span>, teu: "", feu: "" },
    { sn: "2", activity: "Containerized cargo", vehicle: <span className="pl-24 block">181.57</span>, teu: "", feu: "" },
    { sn: "3", activity: "Non containerized break bulk/Packaged/ Bagged cargo", vehicle: <span className="pl-24 block">181.57</span>, teu: "", feu: "" },
    { sn: "4", activity: "Non containerized bulk/ loose cargo", vehicle: <span className="pl-24 block">129.69</span>, teu: "", feu: "" },
  ];

  const terminalHandlingData = [
    { sn: "1", activity: "Loaded container", vehicle: <span className="pl-24 block">2593.75 4150.00</span>, teu: "", feu: "" },
    { sn: "2", activity: "Unloaded Container", vehicle: <span className="pl-24 block">1296.89 2075.01</span>, teu: "", feu: "" },
    { sn: "3", activity: "LCL Cargo including container handling / loading / unloading and stuffing and destuffing", vehicle: <span className="pl-24 block">518.74</span>, teu: "", feu: "" },
  ];

  const weighmentData = [
    { sn: "1", activity: "Loaded/empty container", vehicle: <span className="pl-24 block">259.39</span>, teu: "", feu: "" },
  ];

  const importsData = [
    { sn: "1", activity: "2-8 days +0.1416 paisa/ Kg / day", vehicle: <span className="pl-24 block">0.16</span>, teu: "", feu: "" },
    { sn: "2", activity: "9-30 days + 0.1888 paisa / Kg / day", vehicle: <span className="pl-24 block">0.21</span>, teu: "", feu: "" },
    { sn: "3", activity: "31 days onwards + 0.2830 paisa / Kg / day", vehicle: <span className="pl-24 block">0.31</span>, teu: "", feu: "" },
  ];

  const exportsData = [
    { sn: "1", activity: "2-8 days + 0.0706 paisa / Kg / day", vehicle: <span className="pl-24 block">0.08</span>, teu: "", feu: "" },
    { sn: "2", activity: "9-30 days + 0.1888 paisa / Kg / day", vehicle: <span className="pl-24 block">0.10</span>, teu: "", feu: "" },
    { sn: "3", activity: "31 days onwards + 0.2830 paisa / Kg / day", vehicle: <span className="pl-24 block">0.13</span>, teu: "", feu: "" },
  ];

  const openYardData = [
    { sn: "1", activity: "2-8 days + 0.0706 paisa / Kg / day", vehicle: <span className="pl-24 block">0.08</span>, teu: "", feu: "" },
    { sn: "2", activity: "9 days onwards = 0.1181 paisa / Kg / day", vehicle: <span className="pl-24 block">0.13</span>, teu: "", feu: "" },
  ];

  const freightVehicleData = [
    { sn: "1", activity: "One day free", vehicle: <span className="pl-24 block">-</span>, teu: <span className="pl-24 block">-</span>, feu: <span className="pl-24 block">-</span> },
    { sn: "2", activity: "2-7 days per day", vehicle: <span className="pl-24 block">389.06</span>, teu: <span className="pl-24 block">518.74</span>, feu: "" },
    { sn: "3", activity: "8 days onwards per days", vehicle: <span className="pl-24 block">518.74</span>, teu: <span className="pl-24 block">518.74</span>, feu: <span className="pl-24 block">778.13</span> },
  ];

  const containerParkingData = [
    { sn: "1", activity: "One day free", vehicle: <span className="pl-24 block">-</span>, teu: "", feu: "" },
    { sn: "2", activity: "2-7 days per day", vehicle: <span className="pl-24 block">389.06</span>, teu: <span className="pl-24 block">518.74</span>, feu: "" },
    { sn: "3", activity: "8 days onwards per days", vehicle: <span className="pl-24 block">518.74</span>, teu: <span className="pl-24 block">778.13</span>, feu: "" },
  ];

  const cleaningData = [
    { sn: "1", activity: "Cost of cleaning", vehicle: <span className="pl-24 block">259.39</span>, teu: <span className="pl-24 block">389.06</span>, feu: "" },
  ];

  const subleaseData = [
    { sn: "1", activity: "Unfurnished room on the main terminal building @1071.81/m2 per month", vehicle: "", teu: "", feu: "" },
  ];

  const forkliftData = [
    { sn: "1", activity: "Complete Cycle", vehicle: <span className="pl-24 block">3865.22</span>, teu: <span className="pl-24 block">7730.45</span>, feu: "" },
    { sn: "2", activity: "Half Cycle per operation", vehicle: <span className="pl-24 block">2013.80</span>, teu: <span className="pl-24 block">4026.28</span>, feu: "" },
    { sn: "3", activity: "Additional operations per hour", vehicle: <span className="pl-24 block">242.42</span>, teu: <span className="pl-24 block">484.84</span>, feu: "" },
  ];

  return (
    <>
      {/* Freight Entry Charges */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-4">Freight Entry Charges</h2>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={freightEntryData} />
      </section>

      {/* Cargo Handling Charges */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-2">Cargo Handling Charges</h2>
        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">Loading/ Unloading/ Handling of Cargo</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={cargoHandlingData} />
      </section>

      {/* Terminal Handling Charges */}
      <section className="mb-[60px]">
        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">Terminal Handling Charger</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={terminalHandlingData} />
      </section>

      {/* Weighment charge */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-4">Weighment charge</h2>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={weighmentData} />
      </section>

      {/* Warehousing Charges */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-2">
          Warehousing charges: <span className="font-normal">24 Hours Free time from the time of arrival</span>
        </h2>

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">Imports</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={importsData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">Exports</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={exportsData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">Open Yard Storage</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={openYardData} />
      </section>

      {/* Parking & Storage Charges */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold leading-normal mb-2">
          Parking & Storage Charges for loaded/unloaded vehicles
        </h2>

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">Freight vehicle</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={freightVehicleData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">Container</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={containerParkingData} />
      </section>

      {/* Cleaning of Containers */}
      <section className="mb-[60px]">
        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">Cleaning of Containers</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={cleaningData} />
      </section>

      {/* Sub lease charges */}
      <section className="mb-[60px]">
        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">Sub lease charges</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={subleaseData} />
      </section>

      {/* Forklift Charges */}
      <section className="mb-[60px]">
        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal leading-normal mb-4">Forklift Charges</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={forkliftData} />
      </section>
    </>
  );
}
