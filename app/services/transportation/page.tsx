"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Feature icons as inline SVGs to match the design exactly
const ShipIcon = () => (
  <svg
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8331 3.99935C13.8331 3.64573 13.9736 3.30659 14.2237 3.05654C14.4737 2.80649 14.8128 2.66602 15.1665 2.66602H17.8331C18.1868 2.66602 18.5259 2.80649 18.7759 3.05654C19.026 3.30659 19.1665 3.64573 19.1665 3.99935V5.75935L23.6051 6.49802C24.2275 6.60214 24.7929 6.92362 25.2006 7.4053C25.6083 7.88697 25.8319 8.49763 25.8318 9.12868V13.7047L28.5785 14.6193C28.7972 14.6923 28.9984 14.8099 29.1694 14.9646C29.3404 15.1194 29.4774 15.3079 29.5718 15.5183C29.6661 15.7288 29.7158 15.9565 29.7177 16.1871C29.7195 16.4177 29.6735 16.6461 29.5825 16.858L26.2211 24.702L27.7625 25.474C27.9246 25.5489 28.07 25.6556 28.1901 25.7877C28.3102 25.9199 28.4025 26.0748 28.4616 26.2433C28.5206 26.4118 28.5453 26.5905 28.534 26.7687C28.5227 26.9469 28.4757 27.121 28.3959 27.2807C28.316 27.4404 28.2049 27.5825 28.0691 27.6984C27.9333 27.8144 27.7756 27.9019 27.6054 27.9557C27.4351 28.0096 27.2558 28.0287 27.078 28.0119C26.9002 27.9951 26.7276 27.9428 26.5705 27.858L23.0251 26.086C22.655 25.9011 22.2469 25.8048 21.8331 25.8048C21.4194 25.8048 21.0113 25.9011 20.6411 26.086L18.8851 26.9647C18.1445 27.335 17.3278 27.5278 16.4998 27.5278C15.6718 27.5278 14.8551 27.335 14.1145 26.9647L12.3585 26.086C11.9882 25.9008 11.5798 25.8044 11.1658 25.8044C10.7518 25.8044 10.3434 25.9008 9.97313 26.086L6.42913 27.8594C6.11264 28.0174 5.74632 28.0433 5.41075 27.9313C5.07519 27.8192 4.79787 27.5785 4.6398 27.262C4.48173 26.9455 4.45586 26.5792 4.56788 26.2436C4.67991 25.9081 4.92064 25.6308 5.23713 25.4727L7.6798 24.2513L3.5438 17.014C3.42147 16.7999 3.34816 16.5613 3.32917 16.3155C3.31018 16.0697 3.34598 15.8227 3.43398 15.5923C3.52198 15.362 3.66 15.154 3.83809 14.9835C4.01617 14.8129 4.22987 14.684 4.4638 14.606L7.16647 13.7047V9.12868C7.16634 8.49763 7.39001 7.88697 7.79771 7.4053C8.20541 6.92362 8.77073 6.60214 9.39313 6.49802L13.8331 5.75935V3.99935Z"
      fill="#5664B2"
      fillOpacity="0.78"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="19"
    height="25"
    viewBox="0 0 19 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 flex-shrink-0"
  >
    <path
      d="M9.10233 0V4.72399H9.5C10.1584 4.72399 10.5163 5.34501 10.5516 5.97665C10.5693 6.29512 10.4986 6.58705 10.344 6.79405C10.1893 7.00637 9.94186 7.16561 9.5 7.16561C9.27907 7.16561 9.00953 7.01699 8.8107 6.77282C8.60744 6.53397 8.48372 6.21019 8.48372 5.9448H7.68837C7.68837 6.52866 7.91814 7.05414 8.24512 7.45223C8.57651 7.84501 9.01395 8.12102 9.5 8.12102C10.1186 8.12102 10.6223 7.85563 10.936 7.431C11.2542 7.00106 11.3779 6.44374 11.347 5.91295C11.294 4.98408 10.7549 4.04565 9.89767 3.82059V0H9.10233Z"
      fill="#7B86C3"
    />
  </svg>
);

const TruckIcon = () => (
  <svg
    width="28"
    height="29"
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 flex-shrink-0"
  >
    <path
      d="M0.875 9.24935H12.25L13.125 10.9993H1.75L0.875 9.24935ZM2.04167 12.7493H13.4167L14.2917 14.4993H2.91667L2.04167 12.7493ZM21 22.0827C21.9683 22.0827 22.75 21.301 22.75 20.3327C22.75 19.3643 21.9683 18.5827 21 18.5827C20.0317 18.5827 19.25 19.3643 19.25 20.3327C19.25 21.301 20.0317 22.0827 21 22.0827Z"
      fill="#5664B2"
      fillOpacity="0.81"
    />
  </svg>
);

const DashboardIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 flex-shrink-0"
  >
    <path
      d="M3 6.1C3 5.41044 3.27393 4.74912 3.76152 4.26152C4.24912 3.77393 4.91044 3.5 5.6 3.5H8.4C9.08956 3.5 9.75088 3.77393 10.2385 4.26152C10.7261 4.74912 11 5.41044 11 6.1V8.9C11 9.58956 10.7261 10.2509 10.2385 10.7385C9.75088 11.2261 9.08956 11.5 8.4 11.5H5.6C4.91044 11.5 4.24912 11.2261 3.76152 10.7385C3.27393 10.2509 3 9.58956 3 8.9V6.1Z"
      fill="#5664B2"
      fillOpacity="0.78"
    />
  </svg>
);

const ServiceIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 flex-shrink-0"
  >
    <path
      d="M18.72 15.2607C19.07 14.4107 19.26 13.5007 19.26 12.5007C19.26 11.7807 19.15 11.0907 18.96 10.4507C18.31 10.6007 17.63 10.6807 16.92 10.6807C15.466 10.6822 14.0329 10.3342 12.7415 9.6659C11.4502 8.9976 10.3384 8.02863 9.5 6.84068C8.60396 9.01142 6.91172 10.7573 4.77 11.7207C4.73 11.9707 4.73 12.2407 4.73 12.5007C4.73 13.4554 4.91804 14.4008 5.2834 15.2828C5.64875 16.1648 6.18425 16.9663 6.85933 17.6413C8.22272 19.0047 10.0719 19.7707 12 19.7707C13.05 19.7707 14.06 19.5407 14.97 19.1307C15.54 20.2207 15.8 20.7607 15.78 20.7607C14.14 21.3107 12.87 21.5807 12 21.5807C9.58 21.5807 7.27 20.6307 5.57 18.9207C4.53505 17.8906 3.76627 16.6242 3.33 15.2307H2V10.6807H3.09C3.42024 9.07319 4.17949 7.58509 5.28719 6.37427C6.39489 5.16345 7.80971 4.27509 9.38153 3.80344C10.9534 3.33179 12.6235 3.29445 14.2149 3.69539C15.8062 4.09632 17.2593 4.92057 18.42 6.08068C19.6798 7.33626 20.5393 8.93696 20.89 10.6807H22V15.2307H21.94L18.38 18.5007L13.08 17.9007V16.2307H17.91L18.72 15.2607Z"
      fill="#7B86C3"
    />
  </svg>
);

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex flex-col pt-7 pb-5 border-t border-black/5 gap-6">
    <div className="flex items-center gap-2.5">
      {icon}
      <h3 className="text-brand-blue-light font-poppins text-xl font-bold leading-10">
        {title}
      </h3>
    </div>
    <p className="text-brand-gray-light font-poppins text-base leading-[30px] text-justify">
      {description}
    </p>
  </div>
);

const HeroSection = () => (
  <section className="w-full h-[205px] bg-brand-blue flex items-center justify-center">
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-white font-poppins text-[45px] font-bold leading-normal mb-3">
        Transportation
      </h1>
      <div className="flex items-center gap-2 text-white font-inter text-xs">
        <span>Home Services Rental Services</span>
        <svg
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-2 h-4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.77162 8.47377L3.00028 12.2451L2.05762 11.3024L5.35762 8.00243L2.05762 4.70243L3.00028 3.75977L6.77162 7.5311C6.8966 7.65612 6.96681 7.82566 6.96681 8.00243C6.96681 8.17921 6.8966 8.34875 6.77162 8.47377Z"
            fill="white"
          />
        </svg>
        <svg
          width="8"
          height="17"
          viewBox="0 0 8 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-2 h-4"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.77162 8.97377L3.00028 12.7451L2.05762 11.8024L5.35762 8.50243L2.05762 5.20243L3.00028 4.25977L6.77162 8.0311C6.8966 8.15612 6.96681 8.32566 6.96681 8.50243C6.96681 8.67921 6.8966 8.84875 6.77162 8.97377Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </section>
);

const newsItems = [
  {
    title: "Recognized by Customs",
    date: "January 30, 2024",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/82eb23c8d9c6eb0a96a8e221cac4e2e731008d3b?width=694",
  },
  {
    title: "Contract Signing of ICD Chobhar",
    date: "December 15,2023",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/a95120ca9237eb03196b80bd9b241cf4e59e8c95?width=694",
  },
  {
    title: "Trans Silk joint venture company of Trans Nepal to operate Tatopani ICD for five years",
    date: "September 28, 2022",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/a95120ca9237eb03196b80bd9b241cf4e59e8c95?width=694",
  },
];

import { useState } from "react";

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };
  return (
    <div className="relative w-full max-w-[313px]">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full h-[34px] px-5 pr-14 rounded-[30px] border border-gray-400/40 bg-white font-poppins text-xs text-black/60 outline-none focus:border-brand-service-bg focus:ring-1 focus:ring-brand-service-bg"
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="absolute right-px top-px w-[54px] h-[32px] bg-brand-service-bg rounded-r-[16px] flex items-center justify-center cursor-pointer hover:bg-brand-service-bg/90 transition-colors"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 h-3.5"
        >
          <path
            d="M11.4333 12.25L7.75833 8.575C7.46667 8.80833 7.13125 8.99305 6.75208 9.12917C6.37292 9.26528 5.96944 9.33333 5.54167 9.33333C4.48194 9.33333 3.58517 8.96622 2.85133 8.232C2.1175 7.49778 1.75039 6.601 1.75 5.54167C1.74961 4.48233 2.11672 3.58556 2.85133 2.85133C3.58594 2.11711 4.48272 1.75 5.54167 1.75C6.60061 1.75 7.49758 2.11711 8.23258 2.85133C8.96758 3.58556 9.3345 4.48233 9.33333 5.54167C9.33333 5.96944 9.26528 6.37292 9.12917 6.75208C8.99306 7.13125 8.80833 7.46667 8.575 7.75833L12.25 11.4333L11.4333 12.25ZM5.54167 8.16667C6.27083 8.16667 6.89072 7.91156 7.40133 7.40133C7.91194 6.89111 8.16706 6.27122 8.16667 5.54167C8.16628 4.81211 7.91117 4.19242 7.40133 3.68258C6.8915 3.17275 6.27161 2.91744 5.54167 2.91667C4.81172 2.91589 4.19203 3.17119 3.68258 3.68258C3.17314 4.19397 2.91783 4.81367 2.91667 5.54167C2.9155 6.26967 3.17081 6.88955 3.68258 7.40133C4.19436 7.91311 4.81406 8.16822 5.54167 8.16667Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}

function NewsSidebar() {
  return (
    <div className="w-full max-w-[347px] flex-shrink-0">
      {/* Search Box */}
      <div className="mb-10">
        <SearchBox />
      </div>
      {/* News Items */}
      <div className="flex flex-col gap-10">
        {newsItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[205px] object-cover mb-4"
            />
            <h3 className="text-brand-blue-light font-poppins text-[17px] font-bold leading-10 mb-2">
              {item.title}
            </h3>
            <p className="text-black font-poppins text-xs leading-10">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  const features = [
    {
      icon: <ShipIcon />,
      title: "Diverse Modes",
      description:
        "Our transportation services cover a wide range of modes including road, rail, air, and sea. Whether you need to move cargo locally or globally, we have the expertise and resources to get it done efficiently.",
    },
    {
      icon: <BuildingIcon />,
      title: "State-of-the-Art Equipment",
      description:
        "We maintain a modern fleet of vehicles and equipment, ensuring that your cargo is transported safely and securely. From trucks and trailers to cargo planes and vessels, we have the right tools for the job.",
    },
    {
      icon: <TruckIcon />,
      title: "Reliable Performance",
      description:
        "At Allcargo, we prioritize reliability and on-time delivery. Our team of experienced professionals works tirelessly to ensure that your cargo reaches its destination according to schedule, every time.",
    },
    {
      icon: <DashboardIcon />,
      title: "Customized Solutions",
      description:
        "We understand that every transportation need is unique. That's why we offer flexible and customizable solutions tailored to your specific requirements. Whether you need short-term transportation for a single shipment or long-term logistics support, we've got you covered.",
    },
    {
      icon: <ServiceIcon />,
      title: "Exceptional Customer Service",
      description:
        "Our dedicated team is committed to providing outstanding customer service every step of the way. From initial consultation to final delivery, we're here to answer your questions, address your concerns, and ensure a smooth and hassle-free transportation experience.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Content */}
            <div className="flex-1 max-w-[900px]">
              {/* Welcome Section */}
              <div className="mb-20">
                <h2 className="text-brand-blue-light text-center font-poppins text-[25px] font-bold leading-10 mb-7">
                  Welcome to Allcargo Logistics Limited Transportation Services!
                </h2>
                <p className="text-brand-gray font-poppins text-xl leading-[30px] text-justify">
                  When it comes to moving goods efficiently and reliably, Allcargo
                  Logistics Limited is your trusted partner. With a wealth of
                  experience in the logistics industry and a commitment to
                  excellence, we provide a comprehensive range of transportation
                  solutions tailored to meet your needs.
                </p>
              </div>
              {/* Features */}
              <div className="flex flex-col gap-0">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
            {/* Right Sidebar */}
            <div className="lg:w-[347px] lg:flex-shrink-0">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
