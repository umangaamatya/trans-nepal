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
      
      {/* Hero Section */}
      <div className="relative w-full h-[455px]">
        {/* Blue background */}
        <div className="w-full h-[372px] absolute left-0 top-[83px]" style={{ backgroundColor: '#36427C' }}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <h1 className="text-white text-center font-poppins text-5xl font-bold leading-[70px] absolute left-1/2 transform -translate-x-1/2 top-[189px] w-[911px]">
            <span>Management</span>
            <br />
            <span>Team</span>
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 top-[341px] w-[397px] h-[23px]">
            <span className="text-white font-inter text-xs">Home</span>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47401L3.00028 12.2453L2.05762 11.3027L5.35762 8.00268L2.05762 4.70268L3.00028 3.76001L6.77162 7.53134C6.8966 7.65636 6.96681 7.8259 6.96681 8.00268C6.96681 8.17945 6.8966 8.34899 6.77162 8.47401Z" fill="white"/>
            </svg>
            <span className="text-white font-inter text-xs">About Us</span>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.77162 8.47401L3.00028 12.2453L2.05762 11.3027L5.35762 8.00268L2.05762 4.70268L3.00028 3.76001L6.77162 7.53134C6.8966 7.65636 6.96681 7.8259 6.96681 8.00268C6.96681 8.17945 6.8966 8.34899 6.77162 8.47401Z" fill="white"/>
            </svg>
            <span className="text-white font-inter text-xs">Management team</span>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-[120px] px-[150px] max-w-[1440px] mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <div className={`flex items-start gap-[60px] mb-[120px] ${
              member.imagePosition === 'left' ? 'flex-row-reverse' : 'flex-row'
            }`}>
              <div className="flex-1 max-w-[810px]">
                <h2 className="text-xl font-bold leading-normal mb-2 font-poltawski" style={{ color: '#36427C' }}>
                  {member.name}
                </h2>
                <p className="text-[15px] font-normal leading-normal mb-[30px] font-poppins" style={{ color: '#AC3A38' }}>
                  {member.position}
                </p>
                <p className="text-justify text-[15px] font-normal leading-[30px] font-poppins" style={{ color: '#171F45' }}>
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

