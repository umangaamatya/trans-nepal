"use client";
import React from "react";
import { TariffTable } from "@/components/TariffTable";

export default function TChobar() {
  const headers = [
    "S.N",
    "Activities",
    "FY 2080/081 & 2081/082",
    "FY 2082/083 & 2083/084",
    "FY 2084/085 & 2085/086",
  ];

  // Example data with realistic values (replace with actual data as needed)
  const containerEntryData = [
    { sn: "1", activity: "Container Vehicle Entry", fy1: <span className="pl-8 block">Free</span>, fy2: <span className="pl-8 block">Free</span>, fy3: <span className="pl-8 block">Free</span> },
  ];

  const freightVehicleData = [
    { sn: "1", activity: "Commercial Vehicle above 10 ton", fy1: <span className="pl-8 block">133</span>, fy2: <span className="pl-8 block">146.3</span>, fy3: <span className="pl-8 block">160.93</span> },
    { sn: "2", activity: "Commercial Vehicle above 20 ton", fy1: <span className="pl-8 block">266</span>, fy2: <span className="pl-8 block">292.6</span>, fy3: <span className="pl-8 block">321.86</span> },
    { sn: "3", activity: "Light Vehicle/New vehicle up to 5 ton", fy1: <span className="pl-8 block">118</span>, fy2: <span className="pl-8 block">129.8</span>, fy3: <span className="pl-8 block">142.78</span> },
  ];

  const loadingUnloadingData = [
    { sn: "1", activity: "Containerized cargo per TEU", fy1: <span className="pl-8 block">4000</span>, fy2: <span className="pl-8 block">4400</span>, fy3: <span className="pl-8 block">4840</span> },
    { sn: "2", activity: "Commercial Vehicle above 10 ton", fy1: <span className="pl-8 block">6000</span>, fy2: <span className="pl-8 block">6600</span>, fy3: <span className="pl-8 block">7260</span> },
  ];

  const nonContainerizedData = [
    { sn: "1", activity: "Non-Containerized break bulk/packaged bagged cargo per ton", fy1: <span className="pl-8 block">360</span>, fy2: <span className="pl-8 block">396</span>, fy3: <span className="pl-8 block">435.6</span> },
  ];

  const loadedContainerData = [
    { sn: "1", activity: "Loaded Container (handling) - TEU", fy1: <span className="pl-8 block">1815</span>, fy2: <span className="pl-8 block">1996.5</span>, fy3: <span className="pl-8 block">2196.15</span> },
    { sn: "2", activity: "Loaded Container (handling) - FEU", fy1: <span className="pl-8 block">2450</span>, fy2: <span className="pl-8 block">2695</span>, fy3: <span className="pl-8 block">2964.5</span> },
  ];

  const emptyContainerData = [
    { sn: "1", activity: "Empty container (handling) - TEU", fy1: <span className="pl-8 block">394</span>, fy2: <span className="pl-8 block">433.4</span>, fy3: <span className="pl-8 block">476.74</span> },
    { sn: "2", activity: "Empty container (handling) - FEU", fy1: <span className="pl-8 block">591</span>, fy2: <span className="pl-8 block">650.1</span>, fy3: <span className="pl-8 block">715.11</span> },
  ];

  const specialChargesData = [
    { sn: "1", activity: "Special charges for ODC container", fy1: <span className="pl-8 block">25% Addl.</span>, fy2: <span className="pl-8 block">25% Addl.</span>, fy3: <span className="pl-8 block">25% Addl.</span> },
  ];

  const nonContainerizedPerTonData = [
    { sn: "1", activity: "Non-Containerized (Per ton)", fy1: <span className="pl-8 block">242.24</span>, fy2: <span className="pl-8 block">266.46</span>, fy3: <span className="pl-8 block">293.11</span> },
  ];

  const storageChargesData = [
    { sn: "1", activity: "24 hours free time from entry", fy1: <span className="pl-8 block">Free</span>, fy2: <span className="pl-8 block">Free</span>, fy3: <span className="pl-8 block">Free</span> },
    { sn: "2", activity: "2-7 days = Rs/kg/day", fy1: <span className="pl-8 block">0.0847</span>, fy2: <span className="pl-8 block">0.09317</span>, fy3: <span className="pl-8 block">0.102487</span> },
    { sn: "3", activity: "8-30 days = Rs/kg/day", fy1: <span className="pl-8 block">0.01089</span>, fy2: <span className="pl-8 block">0.011979</span>, fy3: <span className="pl-8 block">0.131769</span> },
    { sn: "4", activity: "30 days onwards = Rs/kg/day", fy1: <span className="pl-8 block">0.1694</span>, fy2: <span className="pl-8 block">0.18634</span>, fy3: <span className="pl-8 block">0.024974</span> },
  ];

  const containerCleaningData = [
    { sn: "1", activity: "TEU", fy1: <span className="pl-8 block">260</span>, fy2: <span className="pl-8 block">286</span>, fy3: <span className="pl-8 block">314.60</span> },
    { sn: "2", activity: "FEU", fy1: <span className="pl-8 block">390</span>, fy2: <span className="pl-8 block">429</span>, fy3: <span className="pl-8 block">471.90</span> },
  ];

  const reeferChargeData = [
    { sn: "1", activity: "Per hour", fy1: <span className="pl-8 block">200</span>, fy2: <span className="pl-8 block">220</span>, fy3: <span className="pl-8 block">242</span> },
  ];

  const gpsLockData = [
    { sn: "1", activity: "Per Trip", fy1: <span className="pl-8 block">600</span>, fy2: <span className="pl-8 block">660</span>, fy3: <span className="pl-8 block">726</span> },
  ];

  const subLeaseData = [
    { sn: "1", activity: "Unfurnished room on terminal building per m2/month", fy1: <span className="pl-8 block">666</span>, fy2: <span className="pl-8 block">732.6</span>, fy3: <span className="pl-8 block">805.86</span> },
  ];

  return (
    <>
      {/* International Tariffs */}
      <section className="mb-12">
        <h2 className="text-[#283b9a] font-poppins text-[18px] font-bold mb-4">
          International Tariffs
        </h2>

        <TariffTable headers={headers} rows={containerEntryData} />

        <h3 className="text-[#283b9a] font-poppins text-[16px] font-semibold mt-8 mb-3">
          Freight Vehicle Entry per Entry/Trip
        </h3>
        <TariffTable headers={headers} rows={freightVehicleData} />

        <h3 className="text-[#283b9a] font-poppins text-[16px] font-semibold mt-8 mb-3">
          Loading/Unloading/Stuffing/Destuffing (all activities)
        </h3>
        <TariffTable headers={headers} rows={loadingUnloadingData} />
        <TariffTable headers={headers} rows={nonContainerizedData} />
        <TariffTable headers={headers} rows={loadedContainerData} />
        <TariffTable headers={headers} rows={emptyContainerData} />
        <TariffTable headers={headers} rows={specialChargesData} />
        <TariffTable headers={headers} rows={nonContainerizedPerTonData} />
        <TariffTable headers={headers} rows={storageChargesData} />

        <h3 className="text-[#283b9a] font-poppins text-[16px] font-semibold mt-8 mb-3">
          Cleaning of containers
        </h3>
        <TariffTable headers={headers} rows={containerCleaningData} />

        <h3 className="text-[#283b9a] font-poppins text-[16px] font-semibold mt-8 mb-3">
          Plug-in Charge for Reefer Container
        </h3>
        <TariffTable headers={headers} rows={reeferChargeData} />

        <h3 className="text-[#283b9a] font-poppins text-[16px] font-semibold mt-8 mb-3">
          GPS Lock Charge
        </h3>
        <TariffTable headers={headers} rows={gpsLockData} />

        <h3 className="text-[#283b9a] font-poppins text-[16px] font-semibold mt-8 mb-3">
          Sub Lease Charges
        </h3>
        <TariffTable headers={headers} rows={subLeaseData} />
      </section>
    </>
  );
}