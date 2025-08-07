"use client";
import { Mail, Phone, Facebook, Linkedin, Youtube, ChevronRight, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#283B9A] text-white font-inter pt-10 px-4 lg:px-20 relative">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 pb-14 border-b border-white/30">
        {/* Connect with Us */}
        <div className="flex-1">
          <h3 className="text-[20px] lg:text-[24px] font-bold uppercase border-b-2 border-white inline-block pb-2 mb-6">
            Connect with us
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <span className="text-[18px]">info@transnepaldryport.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span className="text-[18px]">+977 21 501470</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span className="text-[18px]">+977 21 501441</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Facebook className="w-8 h-8 text-white" />
            <Linkedin className="w-8 h-8 text-white" />
            <Youtube className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex-1">
          <h3 className="text-[20px] lg:text-[24px] font-bold uppercase border-b-2 border-white inline-block pb-2 mb-6">
            Useful Links
          </h3>
          <ul className="space-y-2">
            {["Department Of Customs", "NITDB Board", "FNCCI", "Indian Embassy Nepal", "Check Email"].map((text, i) => (
              <li key={i} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-white/80" />
                <span className="text-[16px]">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-[20px] lg:text-[24px] font-bold uppercase border-b-2 border-white inline-block pb-2 mb-6">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Management Team", "Biratnagar ICP", "Kakarbhitta ICD", "Tariff", "News & Events"].map((text, i) => (
              <li key={i} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-white/80" />
                <span className="text-[16px]">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo and Button */}
        <div className="flex flex-col items-center gap-6 lg:gap-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="border border-white text-white px-4 py-2 rounded hover:bg-white/10 transition"
          >
            Back to top <ChevronUp className="inline ml-1 w-4 h-4" />
          </button>
          <div className="w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2908a7b8d88bbb4d28f2f504f42ae1abeaaed0fa?width=450"
              alt="Trans Nepal Logo"
              className="w-[130px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6 text-[14px] text-white/80 gap-3">
        <div>All rights Reserved | Copyright © 2024 Trans Nepal Freight Services Pvt. Ltd.</div>
        <div>
          Technology Partner | <span>Pracas Infosys</span>
        </div>
      </div>
    </footer>
  );
}