import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Home() {
  const teamMembers = [
    {
      name: "Capt. Mayur Paralkar",
      position: "Advisor",
      description: "Mr. Adarsh Hegde has been associated with Allcargo Logistics since its inception. With over two and half decades of experience in the field of logistics, he has been instrumental in the success of Allcargo Logistics' growth story. Under his leadership, Allcargo Logistics established 6 CFS & ICD facilities PAN India, making Allcargo CFS & ICD division one of the largest private players in the country. He continues to lead the blue print and strategy for the division. With his extensive experience & proficiency in transportation, he has contributed to the set-up the Allcargo Logistics Project Forwarding division. He is also a part of the leadership team at ECU-Line with respect to driving international procurement initiative and organisation-wide planning. After finishing his mechanical engineering from Nitte Education Trust, Mangalore.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/601e9598ebe209a8bc1e8a2a6d6f2b8362c7260f?width=564",
      imagePosition: "right"
    },
    {
      name: "Anand Kumar Singh",
      position: "General Manager", 
      description: "Mr.Anand Kumar Singh represents Allcargo Logistics Ltd. in Nepal and at present holds the position of General Manager in the company. He is responsible for overseeing company's business and reporting to it's headquarter in Mumbai, India. He joined the company in the year 2002 as in charge of Bhairahawa ICD and later deputed as Finance and Administrative head in the year 2005 at company's head office at Biratnagar.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1bec3c4400f97738915a8c0d79593143ed6583aa?width=564",
      imagePosition: "left"
    },
    {
      name: "Laxmi Subba",
      position: "Manager- ICP Biratnagar",
      description: "\"Mr. Bhim Raj Joshi is on board since the formation of this company. He is a self made man and has a very vast experience in the field of transport and supply chain management in Nepal. He involves in policy formulation and provides strategic support to the management in the operation of ICDs. Mr. Joshi chairs J.B.Transport Group, a pioneer in the field of transportation in Nepal and this is his vision and sincere effort which made JBT strengthen day by day and today is a reputed name and market leader in transportation sector of Nepal.\"",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3f382ddd91fc1cf1a7075b860d62d0f5979beef1?width=564",
      imagePosition: "right"
    },
    {
      name: "Rajesh Babu Tiwari",
      position: "Manager- ICD Kakarvitta",
      description: "Mr. Pankaj Rathi, the youngest director in the board is an MBA (International Business and Finance)and leading the BAGMATI PLASTIC INDUSTRIES PVT.LTD. as its chairman. He has an understanding of the macroeconomic Dynamics of Nepal due to exposure to various international markets. He has an analytical bent of mind with a passion for entrepreneurship and financial markets",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/99aaab3446f5d0c4514545f2a0e993bfe4847e5e?width=564",
      imagePosition: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navigation />
      
      {/* Hero Section - updated to match Board Of Directors */}
      <section className="relative w-full h-96 bg-[#36427C] overflow-hidden">
        <div className="absolute inset-0 bg-[#252f5c]"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center relative z-10">
          {/* Title */}
          <div className="text-center text-white mb-12">
            <h1 className="text-white font-inter text-4xl md:text-6xl font-bold leading-normal">
              Management Team
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
              <span className="text-white text-base font-normal font-inter">Management Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <div className="py-[120px] px-[150px] max-w-[1440px] mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className={`flex items-start gap-[60px] mb-[120px] ${
              member.imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'
            }`}>
              <div className="flex-1 max-w-[810px]">
                <h2 className="font-inter text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#283B9A' }}>
                  {member.name}
                </h2>
                <p className="font-inter text-lg lg:text-xl font-semibold mb-7" style={{ color: '#AC3A38' }}>
                  {member.position}
                </p>
                <p className="font-inter text-base lg:text-lg text-[#171F45] leading-relaxed text-justify">
                  {member.description}
                </p>
              </div>
              <Image 
                src={member.image}
                alt={member.name}
                width={282}
                height={325}
                className="w-[282px] h-[325px] rounded-[15px] flex-shrink-0"
              />
            </div>
            
            {/* Divider line (except for last member) */}
            {index < teamMembers.length - 1 && (
              <div className="w-full h-px bg-[rgba(23,31,69,0.05)] my-[60px]"></div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

