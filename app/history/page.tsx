"use client";

import { ChevronDown, ArrowRight, Phone, Mail, ArrowLeft, Menu, X, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-transnepal-dark">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-20 py-12 md:py-16">
          <div className="text-center">
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              History & Memories
            </h1>

            {/* Breadcrumbs */}
            <div className="flex items-center justify-center space-x-2 text-white text-xs font-inter">
              <span>Home</span>
              <ArrowRight className="h-2 w-2" />
              <span>About Us</span>
              <ArrowRight className="h-2 w-2" />
              <span>History & Memories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-4 lg:px-20 py-12 md:py-16">
        <div className="space-y-6 md:space-y-8">
          {/* Article Title */}
          <h2 className="text-transnepal-primary font-poppins text-sm md:text-base font-normal leading-7">
            INAUGURATION CEREMONY HELD ON 17TH APRIL 2002 AT INLAND CLEARANCE DEPOT BIRATNAGAR
          </h2>

          {/* Article Content */}
          <div className="text-transnepal-gray font-poppins text-sm md:text-base leading-7 text-justify">
            Nepal is a land linked country having China on the northern side and India on the southern side. Hence establishment of dry ports were got utmost importance to boost trade and transit because port is the gateway to trade growth and it further facilitates transit. By the year 2002 three ICDs viz Biratnagar, Bhairahawa (both roads based) and Birganj (rail based) were ready to be operationalised under PPP model and NITDB a regulatory body under the MoICS invited a global tender where TransNepal, after being technically qualified and tendering highest bid, awarded the operation and management of ICDs Biratnagar and Bhairahawa. The company took charge and started operation of both the ICDs on 17th April, 2002 from NITDB. A ceremony was held on the opening day itself in Biratnagar ICD premises where Honorable Minister Mr. Purna Bahadur Khadaka, MoICS was the chief guest and inaugurated the event. The program was very upbeat and attended by people from across the board like bureaucrats, customs, business fraternity and others
          </div>

          {/* Image */}
          <div className="mt-6 md:mt-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F1f4527fd6f7444eca706cc5a81627746%2Fd5acd7372e6b4a40b651f19618443d5f?format=webp&width=800"
              alt="Inauguration ceremony at Biratnagar ICD"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
