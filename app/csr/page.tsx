'use client'

import { useState, useRef } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

export default function Csr() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      const newPosition = direction === 'left' 
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "CSR" }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full h-[414px] bg-brand-blue flex items-center justify-center px-4">
        <h1 className="text-white text-center font-poppins text-4xl lg:text-[60px] font-bold leading-normal">
          <span>Customer Shared</span>
          <br />
          <span>Responsibility</span>
        </h1>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Breadcrumb */}
        <div className="py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* CSR Initiatives Section */}
        <section className="py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 relative">
            {/* Images */}
            <div className="relative flex-shrink-0 w-full lg:w-auto">
              <Image 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ee74bfc3c3d6484228d57cc66f980fffeb9773af?width=816" 
                alt="Main CSR" 
                width={408}
                height={404}
                className="w-full max-w-[408px] h-[300px] lg:h-[404px] rounded-[15px] object-cover mx-auto"
              />
              <Image 
                src="https://api.builder.io/api/v1/image/assets/TEMP/8fcddb932c9f36e50cb2e155b63d9f21cda6e96b?width=640" 
                alt="Overlay CSR" 
                width={320}
                height={283}
                className="w-[250px] lg:w-[320px] h-[200px] lg:h-[283px] rounded-[15px] border-[10px] lg:border-[20px] border-white absolute -bottom-5 lg:-bottom-10 -left-[50px] lg:-left-[100px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-10 flex-1 w-full">
              {/* Icons Column */}
              <div className="flex lg:flex-col flex-row gap-9 items-center justify-center lg:justify-start">
                {/* House Icon */}
                <svg className="w-[72px] h-[72px] fill-brand-red" viewBox="0 0 72 72">
                  <path d="M66 27L36 3L6 27V33H12V63H27V51C27 48.6131 27.9482 46.3239 29.636 44.636C31.3239 42.9482 33.6131 42 36 42C38.3869 42 40.6761 42.9482 42.364 44.636C44.0518 46.3239 45 48.6131 45 51V63H60V33H66V27Z"/>
                </svg>

                {/* Health Icon */}
                <svg className="w-[72px] h-[72px] fill-brand-red" viewBox="0 0 72 72">
                  <path fillRule="evenodd" clipRule="evenodd" d="M36 4.5H35.922C35.8077 4.50048 35.6935 4.50749 35.58 4.521C35.3468 4.54592 35.1146 4.57994 34.884 4.623C34.1372 4.76948 33.4045 4.98026 32.694 5.253C30.888 5.931 28.389 7.206 25.2 9.6C22.83 11.376 18.969 12.42 15.306 12.972C13.2497 13.2743 11.1768 13.4506 9.099 13.5H6V36C6 40.968 8.034 45.42 10.8 49.191C13.569 52.956 17.19 56.205 20.7 58.839C25.0673 62.0876 29.751 64.8878 34.68 67.197L34.752 67.227L34.764 67.233L34.83 67.263C35.2114 67.4243 35.6221 67.505 36.0361 67.4998C36.4502 67.4946 36.8587 67.4038 37.236 67.233L37.248 67.227L37.317 67.197C37.7056 67.0195 38.0916 66.8365 38.475 66.648C39.249 66.27 40.347 65.718 41.655 64.998C45.0112 63.175 48.2342 61.1168 51.3 58.839C54.81 56.205 58.431 52.959 61.2 49.191C63.966 45.42 66 40.968 66 36V13.5H62.901L62.55 13.491C60.5896 13.4298 58.6343 13.2555 56.694 12.969C53.031 12.42 49.17 11.382 46.8 9.6C43.611 7.206 41.112 5.931 39.303 5.253C38.5925 4.98026 37.8598 4.76948 37.113 4.623C36.7706 4.56305 36.425 4.52298 36.078 4.503H36.036L36.018 4.5H36ZM33 21V33H21V39H33V51H39V39H51V33H39V21H33Z"/>
                </svg>

                {/* Disaster Relief Icon */}
                <svg className="w-[72px] h-[65px] fill-brand-red" viewBox="0 0 72 65">
                  <path d="M39.5945 4.33712e-07H32.4521C31.0501 -0.000467261 29.6741 0.377328 28.4699 1.09335C27.2658 1.80936 26.2783 2.83693 25.6121 4.06714V28.0964H46.588V4.41283C45.9598 3.09321 44.9694 1.9782 43.7316 1.19715C42.4938 0.416097 41.0593 0.00099838 39.5945 4.33712e-07Z"/>
                </svg>

                {/* Truck Icon */}
                <svg className="w-[72px] h-[72px] fill-brand-red" viewBox="0 0 72 72">
                  <path d="M54 55.5C52.8065 55.5 51.6619 55.0259 50.818 54.182C49.9741 53.3381 49.5 52.1935 49.5 51C49.5 49.8065 49.9741 48.6619 50.818 47.818C51.6619 46.9741 52.8065 46.5 54 46.5C55.1935 46.5 56.3381 46.9741 57.182 47.818C58.0259 48.6619 58.5 49.8065 58.5 51C58.5 52.1935 58.0259 53.3381 57.182 54.182C56.3381 55.0259 55.1935 55.5 54 55.5ZM58.5 28.5L64.38 36H51V28.5M18 55.5C16.8065 55.5 15.6619 55.0259 14.818 54.182C13.9741 53.3381 13.5 52.1935 13.5 51C13.5 49.8065 13.9741 48.6619 14.818 47.818C15.6619 46.9741 16.8065 46.5 18 46.5C19.1935 46.5 20.3381 46.9741 21.182 47.818C22.0259 48.6619 22.5 49.8065 22.5 51C22.5 52.1935 22.0259 53.3381 21.182 54.182C20.3381 55.0259 19.1935 55.5 18 55.5ZM60 24H51V12H9C5.67 12 3 14.67 3 18V51H9C9 53.3869 9.94821 55.6761 11.636 57.364C13.3239 59.0518 15.6131 60 18 60C20.3869 60 22.6761 59.0518 24.364 57.364C26.0518 55.6761 27 53.3869 27 51H45C45 53.3869 45.9482 55.6761 47.636 57.364C49.3239 59.0518 51.6131 60 54 60C56.3869 60 58.6761 59.0518 60.364 57.364C62.0518 55.6761 63 53.3869 63 51H69V36L60 24Z"/>
                </svg>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-10 flex-1">
                <div className="flex flex-col gap-[10px] opacity-70">
                  <h3 className="text-brand-red text-[30px] font-bold leading-normal font-poppins">
                    Support for Rehabilitation
                  </h3>
                  <p className="text-brand-text-blue text-xl font-normal leading-normal font-inter">
                    Building Hope through Infrastructure Support
                  </p>
                </div>

                <div className="flex flex-col gap-[10px] opacity-70">
                  <h3 className="text-brand-red text-[30px] font-bold leading-normal font-poppins">
                    Health Crisis Support
                  </h3>
                  <p className="text-brand-text-blue text-xl font-normal leading-normal font-inter">
                    Strengthening Nepal's Fight Against COVID-19
                  </p>
                </div>

                <div className="flex flex-col gap-[10px] opacity-70">
                  <h3 className="text-brand-red text-[30px] font-bold leading-normal font-poppins">
                    Disaster Relief Contributions
                  </h3>
                  <p className="text-brand-text-blue text-xl font-normal leading-normal font-inter">
                    Quick Response to National Emergencies
                  </p>
                </div>

                <div className="flex flex-col gap-[10px] opacity-70">
                  <h3 className="text-brand-red text-[30px] font-bold leading-normal font-poppins">
                    Logistics Support During Crisis
                  </h3>
                  <p className="text-brand-text-blue text-xl font-normal leading-normal font-inter">
                    Keeping the Nation Moving in Times of Crisis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="relative -mx-4 md:-mx-8 lg:-mx-20 h-[722px] overflow-hidden bg-gradient-to-r from-brand-light-blue to-brand-blue">
          {/* Blue Circle Background */}
          <div className="absolute top-0 right-0 w-[734px] h-[716px] bg-brand-blue rounded-full opacity-80"></div>
          
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[50px] lg:right-[100px] flex gap-5 z-10">
            <button 
              onClick={() => scrollCarousel('left')}
              className="w-[58px] h-[58px] rounded-full bg-white/10 backdrop-blur-sm border border-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="w-[58px] h-[58px] rounded-full bg-white/10 backdrop-blur-sm border border-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Carousel Cards */}
          <div 
            ref={carouselRef}
            className="flex gap-[30px] overflow-x-auto scroll-smooth px-[50px] lg:px-[100px] py-[115px] scrollbar-hide"
          >
            {[
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/114055ff6896040f4714e20342378b02288ddd9f?width=514",
                date: "May 21, 2024",
                title: "CSR-Manav Sewa Ashram",
                description: "TransNepal Freight Services Pvt. Ltd contributed Rs. 5,11,111 to Manav Sewa Ashram"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/32c0935e2d805c06f9343d085787d2bb41ea5748?width=514",
                date: "May 21, 2024",
                title: "CSR-Fight against COVID-19",
                description: "In its drive to fight against COVID-19 TransNepal has extended its hand to Nagarik Care Centre"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/b1324330dd7208e1666c615eb2808859d9595eb7?width=514",
                date: "May 21, 2024",
                title: "CSR-Environmental Initiative",
                description: "TransNepal has planted 100 Ashoka Trees in ICP today to keep the environment clean"
              },
              {
                image: "https://api.builder.io/api/v1/image/assets/TEMP/65eec40dc0c0fe60548d1c27d5874d5a9a837cf9?width=534",
                date: "May 21, 2024",
                title: "CSR-Community Support",
                description: "TransNepal Freight Services Pvt. Ltd contributed Rs. 5,11,111 to Manav Sewa Ashram"
              },
            ].map((card, index) => (
              <div key={index} className="w-[320px] h-[492px] bg-white rounded-[15px] border border-white flex-shrink-0 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  width={320}
                  height={174}
                  className="w-full h-[174px] object-cover" 
                />
                <div className="p-6 flex flex-col gap-4">
                  <div className="text-brand-text-blue text-[15px] font-normal font-inter">
                    {card.date}
                  </div>
                  <div className="w-full h-px bg-brand-text-blue"></div>
                  <div className="text-brand-text-blue text-xl font-bold font-poppins">
                    {card.title}
                  </div>
                  <div className="text-brand-text-blue text-sm font-normal opacity-70 flex-1 font-inter">
                    {card.description}
                  </div>
                  <div className="text-brand-blue text-[15px] font-normal underline cursor-pointer hover:text-brand-text-blue transition-colors font-inter">
                    Read More
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Communication Skills Section */}
        <section className="py-20">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-10 gap-6">
            <h2 className="text-brand-text-blue font-poppins text-[30px] font-bold leading-normal max-w-[752px]">
              5 must-have communication skills for leaders
            </h2>
            <div className="text-right">
              <div className="text-brand-light-blue font-poppins text-xl font-normal mb-2">
                PRACAS INFOSYS
              </div>
              <div className="text-brand-light-blue font-poppins text-xl font-normal">
                Published on: MARCH 8, 2020
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-brand-red mb-10"></div>

          <div className="text-brand-text-blue text-xl font-normal leading-normal text-justify mb-16 font-inter">
            In current times, when businesses across the world are faced with handling the health and economic implications of a crisis like the Coronavirus outbreak, communicating effectively with employees becomes all the more important. Keeping these five communication aspects in mind will surely help reduce panic, maintain productivity and get employees to cooperate with safety and prevention measures being undertaken to minimise impact.
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {[
              {
                number: 1,
                title: "Listening",
                description: "Listening is the most important communication skill for a sales person. Professional listening skills involve assessing the tone and scouting for any emotions behind the message."
              },
              {
                number: 2,
                title: "Clarity and Conciseness",
                description: "Clear communication helps clients and colleagues perceive and understand your point of view thereby negating any room for rumours and misunderstandings."
              },
              {
                number: 3,
                title: "Open to Feedback",
                description: "Communication is never one-sided. To keep the communication channels open, apart from listening you should also be open to receiving feedback and responding to questions from your customers and your team."
              },
              {
                number: 4,
                title: "Attention to Body Language",
                description: "It is important to pay attention to non-verbal cues when communicating. Body language is the key to successful communication. Your clients will be more open to you and your message if your body language is warm and accepting."
              },
              {
                number: 5,
                title: "Adapting to communication",
                description: "Connecting with the people is of crucial importance in any commercial role. No matter how much charisma you have you can impact only when you connect deeply with the people you are communicating with."
              },
            ].map((skill, index) => (
              <div key={index} className="relative pt-10 px-6 pb-6 border-[3px] border-brand-light-blue rounded-[15px] min-h-[310px]">
                {/* Numbered Circle */}
                <div className="absolute -top-[30px] -left-[30px] w-[60px] h-[60px] bg-brand-red rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold font-poppins">{skill.number}</span>
                </div>
                
                <h3 className="text-brand-text-blue font-inter text-[25px] font-bold leading-normal mb-5 text-center">
                  {skill.title}
                </h3>
                <p className="text-brand-light-blue text-[15px] font-normal leading-[25px] font-inter">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Read More Button */}
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center w-[172px] h-[48px] rounded-[17px] border-[3px] border-brand-light-blue bg-brand-light-blue text-white text-xl font-bold hover:bg-transparent hover:text-brand-light-blue transition-colors font-inter">
              <span className="mr-2">Read more</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Back to Top Button */}
        <div className="flex justify-end mb-8">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-brand-blue hover:text-brand-text-blue transition-colors font-inter"
          >
            <span className="text-lg font-normal">Back to top</span>
            <ArrowUp className="w-[7px] h-[13px]" />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
