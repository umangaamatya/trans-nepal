// app/tariff/page.tsx (or wherever your main tariff page lives)
"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const TABS = [
  { label: "ICP Biratnagar", value: "biratnagar" },
  { label: "ICP Kakarbhitta", value: "kakarbhitta" },
  { label: "ICP Tatopani", value: "tatopani" },
  { label: "ICP Chobar", value: "chobar" },
] as const;
type TabValue = typeof TABS[number]["value"];

// Lazy-load each tab’s content (keeps initial bundle small)
const Biratnagar = dynamic(() => import("@/components/tariff/TBiratnagar"), { loading: () => <div className="py-10"></div> });
const Kakarbhitta = dynamic(() => import("@/components/tariff/TKakarbhitta"), { loading: () => <div className="py-10"></div> });
const Tatopani    = dynamic(() => import("@/components/tariff/TTatopani"),    { loading: () => <div className="py-10"></div> });
const Chobar      = dynamic(() => import("@/components/tariff/TChobar"),      { loading: () => <div className="py-10"></div> });

export default function TariffPage() {
  const [activeTab, setActiveTab] = useState<TabValue>("biratnagar");

  // Map active tab to its component
  const ActiveContent = useMemo(() => {
    switch (activeTab) {
      case "biratnagar":  return Biratnagar;
      case "kakarbhitta": return Kakarbhitta;
      case "tatopani":    return Tatopani;
      case "chobar":      return Chobar;
    }
  }, [activeTab]);

  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="w-full h-[308px] bg-[#252f5c] relative mt-8 flex flex-col items-center justify-center">
        <h1 className="text-white text-center font-poppins text-[45px] font-bold leading-normal mb-4">
          Tariff Information
        </h1>
        <div className="flex items-center gap-2 text-white font-inter text-[12px] font-normal leading-normal">
          <span>About Us Contact Us</span>
          <ChevronRight className="w-2 h-4 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-[166px] py-10">
        {/* Description */}
        <p className="w-full max-w-[1111px] mb-10 text-[#283b9a] text-justify font-poppins text-[15px] leading-[26px]">
          This section outlines tariff details for dry port services, including charges for freight entry,
          cargo and terminal handling, weighing, warehousing, storage, container cleaning, sub-leasing,
          forklift use, rail handling, and bulk cargo operations, providing clear pricing for all port-related activities.
        </p>

        {/* Tabs */}
        <div className="flex mb-10" role="tablist" aria-label="Tariff locations">
          <div className="flex flex-row gap-2 min-w-[180px]">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                id={`tab-${tab.value}`}
                role="tab"
                aria-selected={activeTab === tab.value}
                aria-controls={`panel-${tab.value}`}
                onClick={() => setActiveTab(tab.value)}
                className={`text-left px-4 py-2 font-poppins text-[15px] font-medium transition-colors ${
                  activeTab === tab.value
                    ? "bg-[#ecefff] text-black"
                    : "bg-transparent text-black hover:bg-[#ecefff]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active tab content */}
        <section
          key={activeTab} // force remount so internal state resets on tab change
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
        >
          <ActiveContent />
        </section>
      </div>
      <Footer />
    </div>
  );
}