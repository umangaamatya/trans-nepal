"use client";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { ChevronRight } from "lucide-react";

// Fix: Use valid Tailwind classes and ensure custom colors are defined in tailwind.config.js

export default function Index() {
  return (
    <div className="min-h-screen text-[15px] md:text-[16px] font-inter">
      <Navigation />
      {/* --- HeroSection --- */}
      <section className="relative bg-[#252f5c] h-80 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            TransNepal TRS Logipark
            <br />
            Pvt. Ltd.
          </h1>
          {/* Breadcrumb */}
          <div className="flex items-center justify-center mt-6 text-white text-xs">
            <span>Home</span>
            <ChevronRight className="w-3 h-3 mx-2" />
            <span>Associates</span>
            <ChevronRight className="w-3 h-3 mx-2" />
            <span>TransNepal TRS Logipark Pvt.Ltd.</span>
          </div>
        </div>
      </section>

      {/* --- CompanyOverview --- */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-[#36427C] text-xl md:text-2xl font-bold mb-2">
              Company overview
            </h2>
            <div className="w-32 h-1 bg-[#36427C]"></div>
          </div>
          <div className="max-w-6xl">
            <p className="text-black text-base md:text-lg font-medium leading-relaxed text-justify">
              TransNepal TRS Logipark Pvt. Ltd. a 50:50 Joint Venture company incorporated in the year 2023 with the objective of operating and managing terminals in Nepal. The company has signed the contract of operation and management of Chobhar ICD with Nepal Intermodel Transport Development Board and commenced its operation from December 2023
            </p>
          </div>
        </div>
      </section>

      {/* --- BoardOfDirectors --- */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-[#283B9A] text-xl md:text-2xl font-bold mb-2">
              Board of Directors
            </h2>
            <div className="w-52 h-[2px] bg-[#283B9A]"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                name: "Mukesh Kumar Rathi",
                title: "Director",
                imageUrl: "/associates/mukesh.png"
              },
              {
                name: "Debangshu Mukherjee",
                title: "Director",
                imageUrl: "/associates/random.png"
              },
              {
                name: "Raghvendra Pratap Singh",
                title: "Director",
                imageUrl: "/associates/random.png"
              },
              {
                name: "Suresh Kumar",
                title: "Director",
                imageUrl: "/associates/random.png"
              },
              {
                name: "Bhimraj Joshi",
                title: "Director",
                imageUrl: "/associates/bhimraj.png"
              },
              {
                name: "Dipendra Pratap Singh",
                title: "Director",
                imageUrl: "/associates/random.png"
              }
            ].map((director, index) => (
              <div key={index} className="bg-[#F6F8FF] rounded-2xl p-6 flex items-center">
                <img
                  src={director.imageUrl}
                  alt={director.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-[#283B9A] text-base md:text-lg font-normal mb-1">{director.title}</p>
                  <h3 className="text-[#283B9A] text-base md:text-lg font-normal">{director.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ManagementTeam --- */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-[#283B9A] text-xl md:text-2xl font-bold mb-2">
              Experience behind the wheel
            </h2>
            <div className="w-80 h-[2px] bg-[#283B9A]"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                name: "Debangshu Mukherjee",
                title: "Management Committee Member",
                imageUrl: "/associates/random.png"
              },
              {
                name: "Capt. Mayur Paralkar",
                title: "Management Committee Member",
                imageUrl: "/associates/mayur.png"
              },
              {
                name: "Anand Kumar Singh",
                title: "Management Committee Member",
                imageUrl: "/associates/anand.png"
              },
              {
                name: "Aditya Roy",
                title: "Management Committee Member CFO",
                imageUrl: "/associates/random.png"
              },
              {
                name: "Ravi Vidyarthi",
                title: "Chief Executive Officer",
                imageUrl: "/associates/random.png"
              }
            ].map((member, index) => (
              <div key={index} className="bg-[#F6F8FF] rounded-2xl p-6 flex items-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-[#283B9A] text-base md:text-sm font-thin mb-1">{member.title}</p>
                  <h3 className="text-[#283B9A] text-base md:text-lg font-normal">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
