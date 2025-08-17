import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function Home() {
  const teamMembers = [
    {
      name: "Capt. Mayur Paralkar",
      position: "Advisor",
      description: "Capt. Mayur Parlalkar brings decades of maritime and logistics expertise, having held leadership roles across shipping, port operations, and supply chain management. With a proven track record in guiding strategic initiatives, he has been instrumental in developing efficient operational frameworks and driving sustainable growth. His career spans commanding vessels, managing large-scale logistics hubs, and steering critical infrastructure projects that have enhanced operational capabilities across regions. Known for his deep understanding of transportation systems and international trade, he provides valuable insights into strategic planning, risk management, and process optimization. Capt. Mayur continues to play an advisory role in shaping long-term growth strategies and fostering innovation within the logistics sector.",
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
      description: "Mr. Laxmi Subba serves as Manager at ICP Biratnagar under Trans Nepal. With extensive experience in transport operations and supply chain management, he plays a vital role in overseeing the smooth functioning of the ICP and ensuring efficient coordination across operations. His leadership, strategic insight, and commitment to service excellence have been instrumental in enhancing operational efficiency, implementing effective policies, and strengthening Trans Nepal’s position in Nepal’s logistics and transportation sector.",
      image: "/about/management/laxmi.png",
      imagePosition: "right"
    },
    {
      name: "Rajesh Babu Tiwari",
      position: "Manager- ICD Kakarvitta",
      description: "Mr. Rajesh Babu Tiwari serves as Manager at ICD Kakadbhitta under Trans Nepal. With extensive experience in transport management, customs operations, and cross-border trade facilitation, he is responsible for ensuring the smooth and efficient functioning of the terminal. His strong leadership, in-depth industry knowledge, and commitment to operational excellence have significantly contributed to enhancing service standards and optimizing workflows. Through his dedication and professional expertise, Mr. Tiwari plays a vital role in strengthening Trans Nepal’s reputation as a trusted leader in Nepal’s logistics and transportation sector.",
      image: "/about/management/rajesh.png",
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

