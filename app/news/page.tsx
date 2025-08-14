"use client";
import * as React from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-white font-inter">
      {/* Navigation Replacement */}
      <Navigation />
      {/* Hero Section */}
      <div className="w-full h-[308px] bg-[#252f5c] flex items-center justify-center relative">
        <div className="text-center text-white">
          <h1 className="font-poppins text-3xl lg:text-[45px] font-bold leading-normal mb-5">
            News & Events
          </h1>
          <div className="flex items-center justify-center gap-2 font-inter text-[12px] font-normal">
            <span>Home News & Events</span>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M6.77064 8.474L2.99931 12.2453L2.05664 11.3027L5.35664 8.00266L2.05664 4.70266L2.99931 3.76L6.77064 7.53133C6.89562 7.65635 6.96583 7.82589 6.96583 8.00266C6.96583 8.17944 6.89562 8.34898 6.77064 8.474Z" 
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 lg:px-[78px] py-[60px]">
        {/* Featured Section */}
        <div className="mb-20">
          <div className="text-brand-text-secondary font-inter text-[30px] font-bold leading-normal py-[10px] pr-[10px] pb-1 pl-0 border-b border-[#ac3a38] inline-block mb-10">
            Featured
          </div>
          <div className="flex flex-col lg:flex-row gap-[60px] items-start">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ce79956e6bc58dac7f29878b108b022565152d44?width=1042"
              alt="Featured news image"
              className="w-full lg:w-[521px] h-[325px] rounded-[17px] flex-shrink-0 object-cover"
            />
            <div className="flex-1 lg:pt-[40px]">
              <div className="text-brand-text-primary font-inter text-[15px] font-medium leading-normal mb-5">
                JANUARY 30, 2024
              </div>
              <h2 className="text-brand-text-primary font-poppins text-[30px] font-semibold leading-normal mb-5">
                Recognized by Customs
              </h2>
              <p className="text-brand-text-muted text-justify font-inter text-[20px] font-medium leading-[30px]">
                On the Occasion International Custom's day on 26th January 2024 Biratnagar and Kakarbhitta Custom's has recognized TransNepal for managing the terminal efficiently in the best interest of the trade and transit.
              </p>
            </div>
          </div>
        </div>
        {/* Latest News Section */}
        <div className="mb-20">
          <div className="text-brand-text-secondary font-inter text-[30px] font-bold leading-normal py-[10px] pr-[10px] pb-1 pl-0 border-b border-[#ac3a38] inline-block mb-10">
            Latest News
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
            {[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/807397c04198d6bbc5e5d3875d5c6d90a01b367d?width=752",
                date: "December 2, 2020",
                title: "Contract Signing of ICD Chobhar",
                description: "Transnepal T.R.S Logipark Pvt. Ltd. a 50:50 joint venture company between TransNepal Freight Services Pvt. Ltd..."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/b75876b97e82678864c6d7956e945bbdc39b15fa?width=726",
                date: "December 2, 2020",
                title: "Trans Silk joint venture to operate Tatopani ICD",
                description: "Nepal Intermodal Transport Development Board (NITDB) has entered into an agreement with Trans Nepal JV..."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/0ba5efefbc1ae789ae9cf8b01d8297d89f6800b6?width=754",
                date: "September 28, 2022",
                title: "Signing of contract for Kakarbhitta ICD",
                description: "TransNepal has signed the contract for leasing of operation and management of Karkarbhitta ICD for 5 years..."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/0f25da67cb4932f419ad716fa9f812e400c1d342?width=752",
                date: "September 28, 2022",
                title: "Transportation of Transformers for NEA's Hetauda-Dhalkebar-Inarua 400KV substation expansion",
                description: "Transportation of Transformers for NEA's Hetauda-Dhalkebar-Inarua 400KV substation expansion.."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/61d73dad139068be27600473044015b51feb5c13?width=726",
                date: "August 25 2020",
                title: "Transportation of Transformers for NEA's Hetauda-Dhalkebar-Inarua 400KV substation expansion",
                description: "TransNepal contributes to Pradesh No.1 Corona Jana Suraksha Kosh and collaborates on other initiatives to bolster Nepal's fight against COVID-19..."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/209144df642753aeba242868d4c79e7658fca7b4?width=754",
                date: "December 2, 2020",
                title: "Allcargo Logistics contributes to CM's Relief Fund collaborates to fight against COVID-19",
                description: "Mumbai, 2ndApril: Allcargo Logistics, one of India's biggest integrated logistics services provider and the global leader in LCL consolidation..."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/f27d8ffa6b0b6726b33cab9796ddcf08c36b07fe?width=752",
                date: "September 28, 2022",
                title: "Signing Of Contract For Biratnagar ICP",
                description: "TransNepal has signed the contract for leasing of operation and management of Biratnagar ICP for 5 years with NITDB at Kathmandu on 12th August 2020..."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/c8f3ae487415442c8c1d56e558a02790f5793d7b?width=726",
                date: "August 25 2020",
                title: "Awarded by Bhairahawa Customs for efficiently managing terminal",
                description: "TransNepal contributes to Pradesh No.1 Corona Jana Suraksha Kosh and collaborates on other..."
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/2285af3fac3b4d63dba015e636f2578261a880f0?width=754",
                date: "December 2, 2020",
                title: "Awarded by Biratnagar Customs for efficiently managing terminal",
                description: "TransNepal has Awarded by Biratnagar Customs for efficiently managing terminal..."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-[349px] rounded-[15px] object-cover"
                />
                {/* Date - updated styling */}
                <div className="absolute" style={{ top: 'calc(349px + 20px)', left: '0.5rem' }}>
                  <span className="text-black font-poppins text-[12px] font-normal">
                    {item.date}
                  </span>
                </div>
                <Link href="/news-more">
                  <h3 className="text-brand-text-primary font-poppins text-[20px] font-medium leading-normal mt-[60px] mb-[15px] hover:underline cursor-pointer">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-black text-opacity-33 font-poppins text-[12px] font-normal leading-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Our Journey Section */}
        <div className="mb-20 relative">
          <div className="text-brand-text-secondary font-inter text-[30px] font-bold leading-normal py-[10px] pr-[10px] pb-1 pl-0 border-b border-[#ac3a38] inline-block mb-10">
            Our Journey
          </div>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/59ae6a55042faa87f7e23be50970a4d3c05b9802?width=2404" 
            alt="Our Journey Timeline" 
            className="w-full h-[572px] mt-10 object-cover"
          />
          <div className="absolute -top-5 right-0 text-white text-justify font-inter text-[18px] font-normal leading-[32px]">
            <span>Technology Partner |</span>
            <span className="underline"> Pracas Infosys</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
