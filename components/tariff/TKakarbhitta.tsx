// components/tariff/ContentKakarbhitta.tsx
"use client";
import React from "react";
import { TariffTable } from "@/components/TariffTable";

export default function TKakarbhitta() {
  const freightEntryData = [
    { sn: "1", activity: "Truck/Tanker/Tractor/Trailor per entry per trip", vehicle: "259.31", teu: "", feu: "" },
    { sn: "2", activity: "Rickshaw / Hand Trolley per entry per trip", vehicle: "129.69", teu: "", feu: "" },
    { sn: "3", activity: "Light Vehicles/Bullock Cart with capacity up to 5 Ton per entry", vehicle: "38.94", teu: "", feu: "" },
    { sn: "4", activity: "Container Truck (fixed container Vehicle) per entry per trip", vehicle: "389.06", teu: "", feu: "" },
    { sn: "5", activity: "Trailor / Flat Truck / Artriculated Vehicles with or without container per entry trip.", vehicle: "518.64", teu: "778.13", feu: "" }
  ];

  const cargoHandlingData = [
    { sn: "1", activity: "All handling activities", vehicle: "2593.75 4668.74", teu: "", feu: "" },
    { sn: "2", activity: "Containerized cargo", vehicle: "181.57", teu: "", feu: "" },
    { sn: "3", activity: "Non containerized break bulk/Packaged/ Bagged cargo", vehicle: "181.57", teu: "", feu: "" },
    { sn: "4", activity: "Non containerized bulk/ loose cargo", vehicle: "129.69", teu: "", feu: "" }
  ];

  const terminalHandlingData = [
    { sn: "1", activity: "Loaded container", vehicle: "2593.75 4150.00", teu: "", feu: "" },
    { sn: "2", activity: "Unloaded Container", vehicle: "1296.89 2075.01", teu: "", feu: "" },
    { sn: "3", activity: "LCL Cargo including container handling / loading / unloading and stuffing and destuffing", vehicle: "518.74", teu: "", feu: "" }
  ];

  const weighmentData = [
    // If Kakarbhitta really has a different table, keep it. Otherwise mirror Biratnagar’s three rows.
    { sn: "1", activity: "Loaded/empty container", vehicle: "259.39", teu: "", feu: "" }
  ];

  const importsData = [
    { sn: "1", activity: "2-8 days +0.1416 paisa/ Kg / day", vehicle: "0.16", teu: "", feu: "" },
    { sn: "2", activity: "9-30 days + 0.1888 paisa / Kg / day", vehicle: "0.21", teu: "", feu: "" },
    { sn: "3", activity: "31 days onwards + 0.2830 paisa / Kg / day", vehicle: "0.31", teu: "", feu: "" }
  ];

  const exportsData = [
    { sn: "1", activity: "2-8 days + 0.0706 paisa / Kg / day", vehicle: "0.08", teu: "", feu: "" },
    { sn: "2", activity: "9-30 days + 0.1888 paisa / Kg / day", vehicle: "0.10", teu: "", feu: "" },
    { sn: "3", activity: "31 days onwards + 0.2830 paisa / Kg / day", vehicle: "0.13", teu: "", feu: "" }
  ];

  const openYardData = [
    { sn: "1", activity: "2-8 days + 0.0706 paisa / Kg / day", vehicle: "0.08", teu: "", feu: "" },
    { sn: "2", activity: "9 days onwards = 0.1181 paisa / Kg / day", vehicle: "0.13", teu: "", feu: "" }
  ];

  const freightVehicleData = [
    { sn: "1", activity: "One day free", vehicle: "-", teu: "-", feu: "-" },
    { sn: "2", activity: "2-7 days per day", vehicle: "389.06", teu: "518.74", feu: "" },
    { sn: "3", activity: "8 days onwards per days", vehicle: "518.74", teu: "518.74", feu: "778.13" }
  ];

  const containerData = [
    { sn: "1", activity: "One day free", vehicle: "-", teu: "", feu: "" },
    { sn: "2", activity: "2-7 days per day", vehicle: "389.06", teu: "518.74", feu: "" },
    { sn: "3", activity: "8 days onwards per days", vehicle: "518.74", teu: "778.13", feu: "" }
  ];

  const cleaningData = [
    { sn: "1", activity: "Cost of cleaning", vehicle: "259.39", teu: "389.06", feu: "" }
  ];

  const subLeaseData = [
    { sn: "1", activity: "Unfurnished room on the main terminal building @1071.81/m2 per month", vehicle: "", teu: "", feu: "" }
  ];

  const forkliftData = [
    { sn: "1", activity: "Complete Cycle", vehicle: "3865.22", teu: "7730.45", feu: "" },
    { sn: "2", activity: "Half Cycle per operation", vehicle: "2013.80", teu: "4026.28", feu: "" },
    { sn: "3", activity: "Additional operations per hour", vehicle: "242.42", teu: "484.84", feu: "" }
  ];

  return (
    <>
      {/* Freight Entry Charges */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold mb-4">Freight Entry Charges</h2>
        <TariffTable
          headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
          rows={freightEntryData}
        />
      </section>

      {/* Cargo Handling Charges */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold mb-2">Cargo Handling Charges</h2>
        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mb-4">
          Loading/ Unloading/ Handling of Cargo
        </h3>
        <TariffTable
          headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
          rows={cargoHandlingData}
        />
      </section>

      {/* Terminal Handling Charges */}
      <section className="mb-[60px]">
        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mb-4">Terminal Handling Charger</h3>
        <TariffTable
          headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
          rows={terminalHandlingData}
        />
      </section>

      {/* Weighment Charge */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold mb-4">Weighment charge</h2>
        <TariffTable
          headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]}
          rows={weighmentData}
        />
      </section>

      {/* Warehousing Charges */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold mb-2">
          Warehousing charges: <span className="font-normal">24 Hours Free time from the time of arrival</span>
        </h2>

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mb-4">Imports</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={importsData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mb-4">Exports</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={exportsData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mb-4">Open Yard Storage</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={openYardData} />
      </section>

      {/* Parking & Storage Charges */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold mb-2">
          Parking & Storage Charges for loaded/unloaded vehicles
        </h2>

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mb-4">Freight vehicle</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={freightVehicleData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mb-4">Container</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={containerData} />
      </section>

      {/* Cleaning of Containers */}
      <section className="mb-[60px]">
        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mb-4">Cleaning of Containers</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={cleaningData} />
      </section>

      {/* Sub lease charges */}
      <section className="mb-[60px]">
        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mb-4">Sub lease charges</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={subLeaseData} />
      </section>

      {/* Forklift Charges */}
      <section className="mb-[60px]">
        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mb-4">Forklift Charges</h3>
        <TariffTable headers={["S.N", "Activities", "Vehicle", "TEU", "FEU"]} rows={forkliftData} />
      </section>
    </>
  );
}