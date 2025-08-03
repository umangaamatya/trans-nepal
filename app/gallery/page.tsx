import { ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Gallery() {
  const galleryItems = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0bc076dbb0b9a5305a41322e66626767ada8b219?width=760",
      title: "Certificates"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6638593db53990af98815a9a75e852002a636386?width=760", 
      title: "ICD Inauguration 2002"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/51f4c65a29725217f89824692a3462467e61a27d?width=760",
      title: "ICP Biratnagar"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/330ac27a3db549b8382fa3944bac7c637a97310f?width=760",
      title: "ICP Inauguration 2020"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f8423d1ae1fa81f94f58a95732296ee3ed058c47?width=760",
      title: "Finance Minister Visit"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b416688bcdc9b96064de15170bbe22f1537db4d7?width=774",
      title: "ICD Kakarbhitta"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/239c70c2d3b4f1bf9c59b4d7d4dfea60bb718bd9?width=760",
      title: "Railway Inauguration at ICP"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9edade05008109f0f16399126d3df70e4bd7ff1c?width=760",
      title: "ICD Tatopani Inauguration"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d595584d7a9138de68e55b9b4c39c3be0e1d35c9?width=760",
      title: "ICD Chobhar Inauguration"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative w-full h-[455px] flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 w-full h-full bg-[#36427C]">
          <div 
            className="absolute inset-0 w-full h-full opacity-80"
            style={{
              background: 'linear-gradient(90deg, #616FB3 0.01%, #171F45 100%)'
            }}
          />
        </div>
        
        {/* Hero Title */}
        <div className="relative z-10 text-white text-center text-[48px] sm:text-[60px] md:text-[72px] lg:text-[90px] font-bold leading-normal">
          Gallery
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-4 sm:px-8 lg:px-16 xl:px-[72px] py-5 text-[#283b9a] text-xs font-normal">
        <span>Home Gallery</span>
        <ChevronRight className="w-2 h-4 text-[#283B9A]" />
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-[70px] py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-[75px] justify-items-center">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative w-full max-w-[380px] mx-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto min-h-[364px] max-h-[377px] object-cover shadow-[0_4px_0_rgba(0,0,0,0.25)] rounded-lg"
              />
              
              {/* Label overlay with custom shape */}
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center w-fit max-w-full">
                {/* Left curve */}
                <svg
                  width="21"
                  height="75"
                  viewBox="0 0 21 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[21px] h-[75px] fill-[#36427C] flex-shrink-0"
                >
                  <path d="M0 38.1658C0 58.071 12.1664 76.2073 17.5 76.2073C22.8336 76.2073 19.3146 58.071 19.3146 38.1658C15.2484 17.0777 24.6483 0.207278 19.3147 0.207278C7 -2.29272 0 18.2607 0 38.1658Z" fill="#36427C" />
                </svg>
                
                {/* Center background */}
                <div className="bg-[#36427c] h-[71px] px-4 sm:px-8 md:px-12 lg:px-16 relative flex items-center justify-center min-w-[280px] sm:min-w-[300px]">
                  <span className="text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-normal text-center">
                    {item.title}
                  </span>
                </div>
                
                {/* Right curve */}
                <svg
                  width="21"
                  height="75"
                  viewBox="0 0 21 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[21px] h-[75px] fill-[#36427C] flex-shrink-0"
                >
                  <path d="M21 38.5612C21 58.151 8.83358 76 3.5 76C-1.83358 76 1.68538 58.151 1.68538 38.5612C5.75165 17.8072 -3.64831 1.20397 1.68528 1.20397C13 -1.5 21 18.9714 21 38.5612Z" fill="#36427C" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
