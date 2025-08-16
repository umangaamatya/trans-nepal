"use client";
import React from "react";
import { TariffTable } from "@/components/TariffTable"; // Use default import if TariffTable is default-exported

export default function TChobar() {
  const headers = [
    "S.N",
    "Activities",
    "FY 2080/081 & 2081/082",
    "FY 2082/083 & 2083/084",
    "FY 2084/085 & 2085/086",
  ];

  const containerEntryData = [
    { sn: "1", activity: "Container Vehicle Entry", fy1: "Free", fy2: "Free", fy3: "Free" },
  ];

  const freightVehicleData = [
    { sn: "1", activity: "Commercial Vehicle above 10 ton", fy1: "133", fy2: "146.3", fy3: "160.93" },
    { sn: "2", activity: "Commercial Vehicle above 10 ton", fy1: "266", fy2: "292.6", fy3: "321.86" },
    { sn: "3", activity: "Light Vehicle/New vehicle with capacity up to 5 ton", fy1: "118", fy2: "129.8", fy3: "142.78" },
  ];

  const loadingUnloadingData = [
    { sn: "1", activity: "Containerized cargo per TEU", fy1: "4000", fy2: "4400", fy3: "4840" },
    { sn: "2", activity: "Commercial Vehicle above 10 ton", fy1: "6000", fy2: "6600", fy3: "7260" },
  ];

  const nonContainerizedData = [
    { sn: "1", activity: "Non-Containerized break bulk/packaged bagged cargo per ton", fy1: "360", fy2: "396", fy3: "435.6" },
  ];

  const loadedContainerData = [
    { sn: "1", activity: "Loaded Container (complete cycle of handling) - TEU", fy1: "1815", fy2: "1996.5", fy3: "2196.15" },
    { sn: "2", activity: "Loaded Container (complete cycle of handling) - FEU", fy1: "2450", fy2: "2695", fy3: "2964.5" },
  ];

  const emptyContainerData = [
    { sn: "1", activity: "Empty container (complete cycle of handling) - TEU", fy1: "394", fy2: "433.4", fy3: "476.74" },
    { sn: "2", activity: "Empty container (complete cycle of handling) - FEU", fy1: "591", fy2: "650.1", fy3: "715.11" },
  ];

  const specialChargesData = [
    { sn: "1", activity: "Special charges for over dimensional container (ODC)", fy1: "25% Additional", fy2: "25% Additional", fy3: "25% Additional" },
  ];

  const nonContainerizedPerTonData = [
    { sn: "1", activity: "Non-Containerized (Per ton)", fy1: "242.24", fy2: "266.46", fy3: "293.11" },
  ];

  const storageChargesData = [
    { sn: "1", activity: "24 hours free time from the time of entry", fy1: "Free", fy2: "Free", fy3: "Free" },
    { sn: "2", activity: "2-7 days = Rs/kg/day", fy1: "0.0847", fy2: "0.09317", fy3: "0.102487" },
    { sn: "3", activity: "8-30 days = Rs/kg/day", fy1: "0.01089", fy2: "0.011979", fy3: "0.131769" },
    { sn: "4", activity: "30 days onwards = Rs/kg/day", fy1: "0.1694", fy2: "0.18634", fy3: "0.024974" },
  ];

  const containerCleaningData = [
    { sn: "1", activity: "TEU", fy1: "260", fy2: "286", fy3: "314.60" },
    { sn: "2", activity: "FEU", fy1: "390", fy2: "429", fy3: "471.90" },
  ];

  const reeferChargeData = [
    { sn: "1", activity: "Per hour", fy1: "200", fy2: "220", fy3: "242" },
  ];

  const gpsLockData = [
    { sn: "1", activity: "Per Trip", fy1: "600", fy2: "660", fy3: "726" },
  ];

  const subLeaseData = [
    { sn: "1", activity: "Unfurnished room on the main terminal building per m2 per month", fy1: "666", fy2: "732.6", fy3: "805.86" },
  ];

  return (
    <>
      {/* International Tariffs */}
      <section className="mb-[60px]">
        <h2 className="text-[#283b9a] font-poppins text-[20px] font-bold mb-6">
          International Tariffs
        </h2>

        <TariffTable headers={headers} rows={containerEntryData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mt-8 mb-4">
          Freight Vehicle Entry per Entry/Trip
        </h3>
        <TariffTable headers={headers} rows={freightVehicleData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mt-8 mb-4">
          Loading/Unloading/Stuffing/Destuffing (all activities)
        </h3>
        <TariffTable headers={headers} rows={loadingUnloadingData} />
        <TariffTable headers={headers} rows={nonContainerizedData} />
        <TariffTable headers={headers} rows={loadedContainerData} />
        <TariffTable headers={headers} rows={emptyContainerData} />
        <TariffTable headers={headers} rows={specialChargesData} />
        <TariffTable headers={headers} rows={nonContainerizedPerTonData} />
        <TariffTable headers={headers} rows={storageChargesData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mt-8 mb-4">
          Cleaning of containers
        </h3>
        <TariffTable headers={headers} rows={containerCleaningData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mt-8 mb-4">
          Plug-in Charge for Reefer Container
        </h3>
        <TariffTable headers={headers} rows={reeferChargeData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mt-8 mb-4">
          GPS Lock Charge
        </h3>
        <TariffTable headers={headers} rows={gpsLockData} />

        <h3 className="text-[#283b9a] font-poppins text-[20px] font-normal mt-8 mb-4">
          Sub Lease Charges
        </h3>
        <TariffTable headers={headers} rows={subLeaseData} />
      </section>
    </>
  );
}