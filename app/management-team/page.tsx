import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

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
      
      {/* Hero Section */}
      <section className="bg-transnepal-dark">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-20 py-12 md:py-16">
          <div className="text-center">
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Management Team
            </h1>

            {/* Breadcrumbs */}
            <div className="flex items-center justify-center space-x-2 text-white text-xs font-inter">
              <a href="/" className="hover:underline">Home</a>
              <ChevronRight className="h-2 w-2" />
              <span>About Us</span>
              <ChevronRight className="h-2 w-2" />
              <span>Management Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <div className="py-12 px-4 md:px-12 lg:px-[150px] max-w-[1440px] mx-auto">
      {teamMembers.map((member, index) => (
        <div key={index}>
          <div className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-[60px] mb-16 lg:mb-[120px] ${
            member.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
          }`}>
            <div className="flex-1 max-w-full lg:max-w-[810px]">
              <h2 className="font-inter text-xl md:text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#283B9A' }}>
                {member.name}
              </h2>
              <p className="font-inter text-base md:text-lg lg:text-xl font-semibold mb-7" style={{ color: '#AC3A38' }}>
                {member.position}
              </p>
              <p className="font-inter text-sm md:text-base lg:text-lg text-[#171F45] leading-relaxed text-justify">
                {member.description}
              </p>
            </div>
            <div className="w-full max-w-[282px] mx-auto lg:mx-0">
              <Image 
                src={member.image}
                alt={member.name}
                width={282}
                height={325}
                className="w-full h-auto max-h-[325px] rounded-[15px] flex-shrink-0 object-cover"
              />
            </div>
          </div>
          {/* Divider line (except for last member) */}
          {index < teamMembers.length - 1 && (
            <div className="w-full h-px bg-[rgba(23,31,69,0.05)] my-8 lg:my-[60px]"></div>
          )}
        </div>
      ))}
</div>

      <Footer />
    </div>
  );
}

