'use client';

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="w-full h-[65px] bg-white flex items-center justify-between px-4 lg:px-[78px] relative">
        {/* Logo */}
        <div className="flex items-center relative">
          <div className="relative">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7308b7c1ed2e9dab51754b94b898b565697ff230?width=330" 
              alt="Trans Nepal Logo" 
              className="w-[165px] h-[52px]"
              style={{ boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.25) inset" }}
            />
            <ChevronDown className="w-[10px] h-[10px] text-white absolute top-1/2 -translate-y-1/2 left-[331px]" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-[25px]">
          <Link 
            href="/" 
            className="text-black font-inter text-[15px] font-normal flex items-center px-3 py-1 rounded-full"
          >
            Home
          </Link>
          
          <div className="flex items-center px-3 py-1 rounded-full bg-[#36427C]">
            <div className="flex items-center gap-1">
              <span className="text-white font-inter text-[15px] font-normal">
                About Us
              </span>
              <ChevronDown className="w-[8.667px] h-[4.667px] text-white" />
            </div>
          </div>

          <div className="flex items-center px-3 py-1 rounded-full">
            <div className="flex items-center gap-1">
              <span className="text-black font-inter text-[15px] font-normal">
                Services
              </span>
              <ChevronDown className="w-[8.667px] h-[4.667px] text-black" />
            </div>
          </div>

          <Link 
            href="/tariff" 
            className="text-black font-inter text-[15px] font-normal flex items-center px-3 py-1 rounded-full"
          >
            Tariff
          </Link>

          <div className="flex items-center px-3 py-1 rounded-full">
            <div className="flex items-center gap-1">
              <span className="text-black font-inter text-[15px] font-normal">
                Associates
              </span>
              <ChevronDown className="w-[8.667px] h-[4.667px] text-black" />
            </div>
          </div>

          <Link 
            href="/contact" 
            className="text-black font-inter text-[15px] font-normal flex items-center px-3 py-1 rounded-full"
          >
            Contact Us
          </Link>

          <Link 
            href="/gallery" 
            className="text-black font-inter text-[15px] font-normal flex items-center px-3 py-1 rounded-full"
          >
            Gallery
          </Link>

          <Link 
            href="/news" 
            className="text-black font-inter text-[15px] font-normal flex items-center px-3 py-1 rounded-full"
          >
            News & Events
          </Link>

          <Link 
            href="/csr" 
            className="text-black font-inter text-[15px] font-normal flex items-center px-3 py-1 rounded-full"
          >
            CSR
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-black font-inter text-[15px] font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="text-black font-inter text-[15px] font-normal py-2">
              About Us
            </div>
            <div className="text-black font-inter text-[15px] font-normal py-2">
              Services
            </div>
            <Link
              href="/tariff"
              className="text-black font-inter text-[15px] font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tariff
            </Link>
            <div className="text-black font-inter text-[15px] font-normal py-2">
              Associates
            </div>
            <Link
              href="/contact"
              className="text-black font-inter text-[15px] font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/gallery"
              className="text-black font-inter text-[15px] font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/news"
              className="text-black font-inter text-[15px] font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News & Events
            </Link>
            <Link
              href="/csr"
              className="text-black font-inter text-[15px] font-normal py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CSR
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
