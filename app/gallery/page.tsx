"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

export default function Gallery() {
  const galleryItems = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f7158e8b83c9525e59e6e9ba47d6846dee76f242?width=802",
      title: "Certificates"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c46cfaa102bfb9ce39ce50a3b4ffc5083ff467e4?width=802",
      title: "ICD Inauguration 2002"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8d094cf9a7f52cc545d2317e445b7583a95e47f0?width=802",
      title: "ICP Biratnagar"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0506826ac2212108b4f6a4164ec0e8e634a6a271?width=802",
      title: "ICP Inauguration 2020"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e95e58efc099320a4268260903de9c33aef604ee?width=802",
      title: "Finance Minister Visit"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/66fb976e9bb051d479f01a9c93729a516564c8ec?width=802",
      title: "ICD Kakarbhitta"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cce74699bba41308905e2dcef5ea01c366b0bb16?width=802",
      title: "Railway Inauguration at ICP"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/77cddc22ad0663b1efb4274641528b801d90d885?width=800",
      title: "ICD Tatopani Inauguration"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5d6788d09fdd977e9cb92a883ed6fc4bd3bd4d52?width=800",
      title: "ICD Chobhar Inauguration"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="w-full h-[199px] bg-brand-blue-dark relative">
        <div className="absolute left-1/2 top-[65px] transform -translate-x-1/2">
          <h1 className="text-white text-center font-poppins text-[45px] font-semibold">
            Gallery
          </h1>
        </div>
        <div className="absolute left-1/2 top-[133px] transform -translate-x-1/2 flex items-center gap-2">
          <span className="text-white font-inter text-[12px] font-normal">Home</span>
          <ChevronRight className="w-2 h-4 text-white" />
          <span className="text-white font-inter text-[12px] font-normal">Gallery</span>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="w-full max-w-[1280px] mx-auto px-5 py-20">
        {/* First Row */}
        <div className="flex gap-[38px] mb-20 flex-wrap">
          {galleryItems.slice(0, 3).map((item, index) => (
            <div key={index} className="flex-1 min-w-[300px]">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-[303px] rounded-[15px] object-cover"
              />
              <h3 className="text-brand-blue font-poppins text-[20px] font-bold mt-[14px] text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex gap-[38px] mb-20 flex-wrap">
          {galleryItems.slice(3, 6).map((item, index) => (
            <div key={index} className="flex-1 min-w-[300px]">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-[303px] rounded-[15px] object-cover"
              />
              <h3 className="text-brand-blue font-poppins text-[20px] font-bold mt-[14px] text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Third Row */}
        <div className="flex gap-[38px] mb-20 flex-wrap">
          {galleryItems.slice(6, 9).map((item, index) => (
            <div key={index} className="flex-1 min-w-[300px]">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-[301px] rounded-[15px] object-cover"
              />
              <h3 className="text-brand-blue font-poppins text-[20px] font-bold mt-[14px] text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
