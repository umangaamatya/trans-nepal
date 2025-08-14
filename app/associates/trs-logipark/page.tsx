"use client";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

import { ChevronRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen text-[15px] md:text-[16px] font-inter">
      <Navigation />
      {/* --- Inlined HeroSection --- */}
      <section className="relative bg-transnepal-blue-dark h-80 flex items-center justify-center">
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

      {/* --- Inlined CompanyOverview --- */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-transnepal-text text-xl md:text-2xl font-bold mb-2">
              Company overview
            </h2>
            <div className="w-32 h-1 bg-transnepal-text"></div>
          </div>
          <div className="max-w-6xl">
            <p className="text-transnepal-text text-base md:text-lg font-medium leading-relaxed text-justify">
              TransNepal TRS Logipark Pvt. Ltd. a 50:50 Joint Venture company incorporated in the year 2023 with the objective of operating and managing terminals in Nepal. The company has signed the contract of operation and management of Chobhar ICD with Nepal Intermodel Transport Development Board and commenced its operation from December 2023
            </p>
          </div>
        </div>
      </section>

      {/* --- Inlined BoardOfDirectors --- */}
      {(() => {
        const directors = [
          {
            name: "Mukesh Kumar Rathi",
            title: "Director",
            imageUrl: "https://via.placeholder.com/100x100/cccccc/666666?text=MKR"
          },
          {
            name: "Debangshu Mukherjee",
            title: "Director",
            imageUrl: "https://via.placeholder.com/100x100/cccccc/666666?text=DM"
          },
          {
            name: "Raghvendra Pratap Singh",
            title: "Director",
            imageUrl: "https://via.placeholder.com/100x100/cccccc/666666?text=RPS"
          },
          {
            name: "Suresh Kumar",
            title: "Director",
            imageUrl: "https://via.placeholder.com/100x100/cccccc/666666?text=SK"
          },
          {
            name: "Bhimraj Joshi",
            title: "Director",
            imageUrl: "https://via.placeholder.com/100x100/cccccc/666666?text=BJ"
          },
          {
            name: "Dipendra Pratap Singh",
            title: "Director",
            imageUrl: "https://via.placeholder.com/100x100/cccccc/666666?text=DPS"
          }
        ];
        const DirectorCard = ({ name, title, imageUrl }: { name: string; title: string; imageUrl: string }) => (
          <div className="bg-transnepal-card-bg rounded-2xl p-6 flex items-center">
            <img
              src={imageUrl}
              alt={name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <p className="text-transnepal-blue text-base md:text-lg font-normal mb-1">{title}</p>
              <h3 className="text-transnepal-blue text-base md:text-lg font-normal">{name}</h3>
            </div>
          </div>
        );
        return (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-transnepal-blue text-xl md:text-2xl font-bold mb-2">
                  Board of Directors
                </h2>
                <div className="w-32 h-1 bg-black"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {directors.map((director, index) => (
                  <DirectorCard
                    key={index}
                    name={director.name}
                    title={director.title}
                    imageUrl={director.imageUrl}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* --- Inlined ManagementTeam --- */}
      {(() => {
        const members = [
          {
            name: "Capt. Mayur Paralkar",
            title: "Management Committee Member",
            imageUrl: "https://via.placeholder.com/100x100/cccccc/666666?text=CMP"
          },
          {
            name: "Anand Kumar Singh",
            title: "Management Committee Member",
            imageUrl: "https://via.placeholder.com/100x100/cccccc/666666?text=AKS"
          },
          {
            name: "Anirudra Thapa",
            title: "Chief Executive Officer",
            imageUrl: "https://via.placeholder.com/100x100/cccccc/666666?text=AT"
          },
          {
            name: "Raj Sapkota",
            title: "Chief Financial Officer",
            imageUrl: "https://via.placeholder.com/100x100/cccccc/666666?text=RS"
          }
        ];
        const MemberCard = ({ name, title, imageUrl }: { name: string; title: string; imageUrl: string }) => (
          <div className="bg-transnepal-card-bg rounded-2xl p-6 flex items-center">
            <img
              src={imageUrl}
              alt={name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <p className="text-transnepal-blue text-base md:text-lg font-normal mb-1">{title}</p>
              <h3 className="text-transnepal-blue text-base md:text-lg font-normal">{name}</h3>
            </div>
          </div>
        );
        return (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-transnepal-blue text-xl md:text-2xl font-bold mb-2">
                  Management Team
                </h2>
                <div className="w-32 h-1 bg-black"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {members.map((member, index) => (
                  <MemberCard
                    key={index}
                    name={member.name}
                    title={member.title}
                    imageUrl={member.imageUrl}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })()}
      <Footer />
    </div>
  );
}
