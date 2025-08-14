import Image from "next/image";
import { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: 'Board of Directors - Trans Nepal Freight Services',
  description: 'Meet our experienced leadership team driving Trans Nepal Freight Services forward with decades of logistics expertise.',
};

export default function BoardOfDirectors() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-96 bg-[#252f5c] overflow-hidden">
        <div className="absolute inset-0 bg-[#252f5c]"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center relative z-10">
          {/* Header text */}
          <div className="text-center text-white mb-12">
            <h1 className="text-white font-inter text-4xl md:text-6xl font-bold leading-normal">
              Board of Directors
            </h1>
          </div>
          {/* Breadcrumb */}
          <div className="mt-8">
            <div className="flex items-center gap-3 justify-center">
              <a href="/" className="text-white text-base font-normal hover:underline font-inter">Home</a>
              <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="white"/>
              </svg>
              <a href="/about" className="text-white text-base font-normal hover:underline font-inter">About Us</a>
              <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z" fill="white"/>
              </svg>
              <span className="text-white text-base font-normal font-inter">Board of Directors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        {/* Director 1 - Adarsh Hegde */}
        <div className="mb-20 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="font-inter text-2xl lg:text-3xl font-bold text-[#36427C] mb-3">
                Adarsh Hegde
              </h2>
              <p className="font-inter text-lg font-semibold text-[#AC3A38] mb-6">
                Chairman
              </p>
              <p className="font-inter text-base lg:text-lg text-[#171F45] leading-relaxed text-justify">
                Mr. Adarsh Hegde has been associated with Allcargo Logistics since its inception. With over two and half decades of experience in the field of logistics, he has been instrumental in the success of Allcargo Logistics' growth story. Under his leadership, Allcargo Logistics established 6 CFS & ICD facilities PAN India, making Allcargo CFS & ICD division one of the largest private players in the country. He continues to lead the blue print and strategy for the division. With his extensive experience & proficiency in transportation, he has contributed to the set-up the Allcargo Logistics Project Forwarding division. He is also a part of the leadership team at ECU-Line with respect to driving international procurement initiative and organisation-wide planning. After finishing his mechanical engineering from Nitte Education Trust, Mangalore.
              </p>
            </div>
            <div className="lg:col-span-1">
              <div className="relative max-w-xs mx-auto">
                <Image 
                  src="/about/bod/adarsh-hegde.png"
                  alt="Adarsh Hegde"
                  width={250}
                  height={350}
                  className="w-full h-80 lg:h-96 object-cover object-center rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-20 lg:mb-32"></div>

        {/* Director 2 - Mukesh Kumar Rathi */}
        <div className="mb-20 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-1 lg:order-1">
              <div className="relative max-w-xs mx-auto overflow-hidden rounded-2xl">
                <Image 
                  src="/about/bod/mukesh-rathi.png"
                  alt="Mukesh Kumar Rathi"
                  width={250}
                  height={350}
                  className="w-full h-80 lg:h-96 object-cover object-top shadow-lg scale-125 transform"
                />
              </div>
            </div>
            <div className="lg:col-span-2 lg:order-2">
              <h2 className="font-inter text-2xl lg:text-3xl font-bold text-[#283B9A] mb-3">
                Mukesh Kumar Rathi
              </h2>
              <p className="font-inter text-lg font-semibold text-[#AC3A38] mb-6">
                Managing Director
              </p>
              <p className="font-inter text-base lg:text-lg text-[#171F45] leading-relaxed text-justify">
                Mr. Mukesh Kumar Rathi has been holding the position as Managing Director of TransNepal Freight Services Pvt. Ltd., since 2002. He is a young and dynamic businessman. He played a key role in developing and implementing various systems and procedures which helps the organisation in achieving and establishing its benchmark in ICD/CFS operation in Nepal. He was very instrumental in renewing the contract for operation and management of ICDs with Nepal Intermodal Transport Development Board in the year 2012. His sincerity, foresight and skill to handle manpower make him true business leader. He is a Group Director of Rathi Group a leading business house in Nepal having its presence in Trading, Manufacturing and Service sector across the board.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-20 lg:mb-32"></div>

        {/* Director 3 - Bhim Raj Joshi */}
        <div className="mb-20 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="font-inter text-2xl lg:text-3xl font-bold text-[#36427C] mb-3">
                Bhim Raj Joshi
              </h2>
              <p className="font-inter text-lg font-semibold text-[#AC3A38] mb-6">
                Director
              </p>
              <p className="font-inter text-base lg:text-lg text-[#171F45] leading-relaxed text-justify">
                Mr. Bhim Raj Joshi is on board since the formation of this company. He is a self made man and has a very vast experience in the field of transport and supply chain management in Nepal. He involves in policy formulation and provides strategic support to the management in the operation of ICDs. Mr. Joshi chairs J.B.Transport Group, a pioneer in the field of transportation in Nepal and this is his vision and sincere effort which made JBT strengthen day by day and today is a reputed name and market leader in transportation sector of Nepal.
              </p>
            </div>
            <div className="lg:col-span-1">
              <div className="relative max-w-xs mx-auto">
                <Image 
                  src="/about/bod/bhim-joshi.png"
                  alt="Bhim Raj Joshi"
                  width={250}
                  height={350}
                  className="w-full h-80 lg:h-96 object-cover object-center rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-20 lg:mb-32"></div>

        {/* Director 4 - Pankaj Rathi */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-1 lg:order-1">
              <div className="relative max-w-xs mx-auto overflow-hidden rounded-2xl">
                <Image 
                  src="/about/bod/pankaj-rathi.png"
                  alt="Pankaj Rathi"
                  width={250}
                  height={350}
                  className="w-full h-80 lg:h-96 object-cover object-top shadow-lg scale-125 transform"
                />
              </div>
            </div>
            <div className="lg:col-span-2 lg:order-2">
              <h2 className="font-inter text-2xl lg:text-3xl font-bold text-[#283B9A] mb-3">
                Pankaj Rathi
              </h2>
              <p className="font-inter text-lg font-semibold text-[#AC3A38] mb-6">
                Director
              </p>
              <p className="font-inter text-base lg:text-lg text-[#171F45] leading-relaxed text-justify">
                Mr. Pankaj Rathi, the youngest director in the board is an MBA (International Business and Finance) and leading the BAGMATI PLASTIC INDUSTRIES PVT.LTD. as its chairman. He has an understanding of the macroeconomic Dynamics of Nepal due to exposure to various international markets. He has an analytical bent of mind with a passion for entrepreneurship and financial markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
