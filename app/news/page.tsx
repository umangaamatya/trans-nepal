"use client";

import { ArrowRight, ArrowUp } from "lucide-react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Timeline from '../../components/Timeline';

export default function NewsPage() {
  const newsItems = [
    {
      date: "Dec 17, 2023",
      title: "Contract Signing of ICD Chobhar",
      source: "PRACAS INFOSYS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/839392a97a00fdb85bdd4dbf91046c161e4346eb?width=726"
    },
    {
      date: "Sep 28, 2022",
      title: "Trans Silk joint venture to operate Tatopani ICD",
      source: "PRACAS INFOSYS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/68d4cb5f41a09eb8b25f3a324322aabf9eacd32e?width=726"
    },
    {
      date: "Sep 28, 2022",
      title: "Signing of contract for Kakarbhitta ICD",
      source: "PRACAS INFOSYS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/49ffac54c0f1a8b1b73bfd1dac2a442b5ebb5a37?width=726"
    },
    {
      date: "Dec 17, 2023",
      title: "Transportation of Transformers for NEA's substation expansion",
      source: "PRACAS INFOSYS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/82e4350e5ce599a1315a323a7e989eec263fad98?width=726"
    },
    {
      date: "Aug 18, 2020",
      title: "Allcargo Logistics contributes to Fund, to fight against COVID-19",
      source: "PRACAS INFOSYS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0145c8581c5017877ddfe08f37faa0a9051471df?width=726"
    },
    {
      date: "Aug 17, 2020",
      title: "Signing Of Contract For Biratnagar ICP",
      source: "PRACAS INFOSYS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1665650328b3ee80fc99d8244a2d492dd2366e64?width=726"
    },
    {
      date: "Mar 8, 2020",
      title: "Awarded by Bhairahawa Customs for efficiently managing terminal",
      source: "PRACAS INFOSYS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9689d460b62c35d8ce3cbbab4cc4c7625d38234b?width=726"
    },
    {
      date: "Mar 8, 2020",
      title: "Awarded by Biratnagar Customs for efficiently managing terminal",
      source: "PRACAS INFOSYS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2ff6f318ff8df8f7601a8f819a6a667f154bdbd6?width=726"
    },
    {
      date: "Dec 17, 2023",
      title: "Honourd by IRD Biratnagar as highest paid taxpayer",
      source: "PRACAS INFOSYS",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d432db9e19ffa84ebe28b3604b6a5aa450e18c52?width=726"
    }
  ];

  const timelineEvents = [
    {
      year: "2002",
      title: "Company Incorporation & Initial Lease",
      description: "Took over Kakarbhitta ICD, international competitive bidding process.",
      type: "start"
    },
    {
      year: "2012",
      title: "Lease Renewal",
      description: "Lease of both ICDs renewed for another 10 years.",
      type: "end"
    },
    {
      year: "2020",
      title: "Company Incorporation & Initial Lease",
      description: "Took over Kakarbhitta ICD, international competitive bidding process.",
      type: "start"
    },
    {
      year: "2021",
      title: "Kakarbhitta ICD Operations Begin",
      description: "Took over Kakarbhitta ICD, international competitive bidding process.",
      type: "end"
    },
    {
      year: "2022",
      title: "Company Incorporation & Initial Lease",
      description: "Took over Kakarbhitta ICD, international competitive bidding process.",
      type: "start"
    },
    {
      year: "2023",
      title: "Chobhar ICD (TRS Logipark)",
      description: "Signed contract; began Chobhar ICD operation under new company name.",
      type: "end"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "News & Events" }
  ];

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-[458px] overflow-hidden bg-brand-blue">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-light-blue/70"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(40, 59, 154, 0.8) 0%, rgba(78, 96, 176, 0.6) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/129cd8968d765e93cd69ae6922bc82a7a7b195a0?width=2898')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-[90%]">
            <h1 className="font-poppins text-4xl md:text-6xl lg:text-[80px] font-bold leading-normal mb-6 text-white">
              News & Events
            </h1>
            <p className="text-lg md:text-[20px] font-medium leading-normal max-w-[623px] mx-auto font-inter">
              Stay updated with the latest developments, industry insights, and upcoming events at Trans Nepal Dry Port
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        {/* Breadcrumb */}
        <div className="py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Featured Section */}
        <section className="py-20">
          <div className="bg-gradient-to-r from-brand-light-blue/80 to-brand-blue rounded-[15px] p-6 md:p-[45px] flex flex-col lg:flex-row items-center gap-8 lg:gap-[60px] relative">
            <Image 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c935d760361af0bd31a88e681476339aba761aa7?width=1058" 
              alt="Featured Image" 
              width={529}
              height={330}
              className="w-full lg:w-[529px] h-[250px] lg:h-[330px] object-cover rounded-[15px]"
            />
            <div className="flex-1 text-white">
              <div className="inline-block bg-brand-red text-white rounded-[15px] px-4 py-2 text-[20px] font-medium mb-6 transform -rotate-1 relative z-10">
                Featured
              </div>
              <h2 className="text-[30px] font-bold leading-normal mb-5 font-poppins">
                Recognized by Customs
              </h2>
              <div className="text-[20px] font-medium leading-normal mb-8 font-inter">
                <span>PRACAS INFOSYS</span><br />
                <span>JANUARY 30, 2024</span>
              </div>
              <p className="text-[20px] font-medium leading-normal text-justify font-inter">
                On the Occasion International Custom&apos;s day on 26th January 2024 Biratnagar and Kakarbhitta Custom&apos;s has recognized TransNepal for managing the terminal efficiently in the best interest of the trade and transit.
              </p>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-20">
          <div className="relative mb-[60px]">
            <h2 className="text-brand-text-blue text-2xl md:text-[40px] font-bold leading-normal border-b-2 border-brand-text-blue inline-block pb-2 font-poppins">
              Latest News
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[92px]">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-brand-light-blue rounded-[15px] overflow-hidden relative">
                <Image 
                  src={item.image} 
                  alt="News Image" 
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-t-[15px]"
                />
                <div className="p-5 text-white relative">
                  <div className="absolute -top-[280px] left-5 bg-brand-red text-white rounded-[15px] px-4 py-2 text-[15px] font-medium z-10 font-inter">
                    {item.date}
                  </div>
                  <h3 className="text-[20px] font-bold leading-normal mb-4 mt-10 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-medium leading-normal mb-4 font-inter">
                    {item.source}
                  </p>
                  <div className="text-[15px] font-medium leading-normal cursor-pointer flex items-center gap-2 hover:text-gray-200 transition-colors font-inter">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-20">
          <div className="text-center mb-20">
            <h2 className="text-brand-red font-poppins text-[40px] font-bold leading-normal mb-5">
              Our Journey
            </h2>
            <p className="text-brand-red/60 text-[20px] font-medium leading-normal font-inter">
              Take a look through our milestone and achievements
            </p>
          </div>
          
          <div className="bg-white border-2 border-brand-text-blue rounded-[15px] p-10 relative">
            {/* Timeline Background SVG */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <svg width="100%" height="117" viewBox="0 0 976 117" fill="none" className="absolute top-0">
                <rect x="11" y="92" width="15" height="14" fill="#283B9A"></rect>
                <path d="M269.499 58.0139L223.999 105.903H262.999H265.999C265.999 105.903 267.999 105.933 268.499 105.903C268.999 105.873 295.586 106.187 295.999 105.903L335.064 61.2789C336.546 60.2532 336.546 57.7837 335.064 56.7552L321.999 41.0141L306.499 23.0141C306.087 22.7276 296 10.0452 295.499 10.0139C294.998 9.98264 287.999 10.0139 287.999 10.0139L222.999 10.903C222.999 10.903 269.498 57.5118 269.499 58.0139Z" fill="#22338A"></path>
                <path d="M696.03 58.0139L650.53 105.903H689.53H692.53C692.53 105.903 694.53 105.933 695.03 105.903C695.531 105.873 722.117 106.187 722.53 105.903L761.595 61.2789C763.078 60.2532 763.078 57.7837 761.595 56.7552L748.53 41.0141L733.03 23.0141C732.618 22.7276 722.531 10.0452 722.03 10.0139C721.529 9.98264 714.53 10.0139 714.53 10.0139L649.53 10.903C649.53 10.903 696.029 57.5118 696.03 58.0139Z" fill="#4E60B0"></path>
                <rect x="10" y="11" width="16" height="13" fill="#171F45"></rect>
                <path d="M56.499 58.1108L10.999 106H49.999H52.999C52.999 106 54.9987 106.03 55.499 106C55.9993 105.97 82.5858 106.284 82.999 106L122.064 61.3759C123.546 60.3502 123.546 57.8807 122.064 56.8522L108.999 41.1111L93.499 23.111C93.0867 22.8245 83.0001 10.1421 82.499 10.1109C81.9979 10.0796 74.999 10.1109 74.999 10.1109L9.99902 11C9.99902 11 56.4982 57.6087 56.499 58.1108Z" fill="#1B296C"></path>
                <path d="M482.854 58.0139L437.354 105.903H476.354H479.354C479.354 105.903 481.354 105.933 481.854 105.903C482.355 105.873 508.941 106.187 509.354 105.903L548.42 61.2789C549.902 60.2532 549.902 57.7837 548.42 56.7552L535.354 41.0141L519.854 23.0141C519.442 22.7276 509.356 10.0452 508.854 10.0139C508.353 9.98264 501.354 10.0139 501.354 10.0139L436.354 10.903C436.354 10.903 482.854 57.5118 482.854 58.0139Z" fill="#283B9A"></path>
                <path d="M909.206 58.0139L863.706 105.903H902.706H905.706C905.706 105.903 907.706 105.933 908.206 105.903C908.706 105.873 935.293 106.187 935.706 105.903L974.771 61.2789C976.253 60.2532 976.253 57.7837 974.771 56.7552L961.706 41.0141L946.206 23.0141C945.794 22.7276 935.707 10.0452 935.206 10.0139C934.705 9.98264 927.706 10.0139 927.706 10.0139L862.706 10.903C862.706 10.903 909.205 57.5118 909.206 58.0139Z" fill="#7885C6"></path>
              </svg>
            </div>

            {/* Years */}
            <div className="hidden lg:flex justify-between items-center mb-10 px-10">
              {timelineEvents.map((event) => (
                <div key={event.year} className="text-brand-blue text-[20px] font-bold font-poppins">
                  {event.year}
                </div>
              ))}
            </div>

            <Timeline /> 
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
