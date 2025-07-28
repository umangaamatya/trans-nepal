import Navigation from "../../components/Navigation";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import Image from "next/image";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
  nameFont?: string;
  positionFont?: string;
  descriptionColor?: string;
  dividerColor?: string;
  positionSize?: string;
  descriptionSize?: string;
  reverse?: boolean;
  hasShadow?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Capt. Mayur Paralkar",
    position: "Advisor",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/04469f0d952d8fe50edb4645db949f1acd0b17bc?width=650",
    description: "Mr. Adarsh Hegde has been associated with Allcargo Logistics since its inception. With over two and half decades of experience in the field of logistics, he has been instrumental in the success of Allcargo Logistics' growth story. Under his leadership, Allcargo Logistics established 6 CFS & ICD facilities PAN India, making Allcargo CFS & ICD division one of the largest private players in the country.",
    nameFont: "font-poppins",
    positionFont: "font-poppins",
    descriptionColor: "text-brand-blue text-opacity-72",
    dividerColor: "bg-brand-blue",
    positionSize: "text-[25px]",
    descriptionSize: "text-[15px]"
  },
  {
    name: "Mukesh Kumar Rathi",
    position: "Advisor", 
    image: "https://api.builder.io/api/v1/image/assets/TEMP/7b65fb9a0d63208622439de562f3830edd3723b7?width=650",
    description: "Mr. Mukesh Kumar Rathi has been holding the position as Managing Director of TransNepal Freight Services Pvt. Ltd., since 2002. He is a young and dynamic businessman. He played a key role in developing and implementing various systems and procedures which helps the organisation in achieving and establishing its benchmark in ICD/CFS operation in Nepal.",
    nameFont: "font-poppins",
    positionFont: "font-poppins", 
    descriptionColor: "text-brand-light-blue",
    dividerColor: "bg-black",
    positionSize: "text-[25px]",
    descriptionSize: "text-[15px]",
    reverse: true,
    hasShadow: true
  },
  {
    name: "Bhim Raj Joshi",
    position: "Advisor",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ac2a6a9ea9e5f6bb7f2f792a0f23fa2d23ec99f8?width=650",
    description: "Mr. Bhim Raj Joshi is on board since the formation of this company. He is a self made man and has a very vast experience in the field of transport and supply chain management in Nepal. He involves in policy formulation and provides strategic support to the management in the operation of ICDs. Mr. Joshi chairs J.B.Transport Group, a pioneer in the field of transportation in Nepal",
    nameFont: "font-inter",
    positionFont: "font-inter",
    descriptionColor: "text-brand-light-blue",
    dividerColor: "bg-brand-blue",
    positionSize: "text-[30px]",
    descriptionSize: "text-[15px]"
  },
  {
    name: "Pankaj Rathi",
    position: "Advisor",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ca192833b8e78001308cb1d58f0e29cad36bb19b?width=650",
    description: "Mr. Pankaj Rathi, the youngest director in the board is an MBA (International Business and Finance)and leading the BAGMATI PLASTIC INDUSTRIES PVT.LTD. as its chairman. He has an understanding of the macroeconomic Dynamics of Nepal due to exposure to various international markets. He has an analytical bent of mind with a passion for entrepreneurship and financial markets",
    nameFont: "font-poppins",
    positionFont: "font-poppins",
    descriptionColor: "text-brand-light-blue", 
    dividerColor: "bg-brand-blue",
    positionSize: "text-[25px]",
    descriptionSize: "text-[20px]",
    reverse: true
  }
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  const cardContent = (
    <>
      <Image
        src={member.image}
        alt={member.name}
        width={325}
        height={436}
        className={`w-full md:w-[325px] h-[300px] md:h-[436px] rounded-[15px] border-[5px] border-brand-blue flex-shrink-0 object-cover ${
          member.hasShadow ? 'shadow-[0_5px_28px_0_rgba(0,0,0,0.25)]' : ''
        }`}
      />
      <div className="flex-1 pt-5 w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5 gap-2 md:gap-0">
          <div className={`text-brand-blue ${member.nameFont} text-lg md:text-xl font-bold`}>
            {member.name}
          </div>
          <div className={`text-brand-red ${member.positionFont} text-xl md:${member.positionSize} font-bold`}>
            {member.position}
          </div>
        </div>
        <div className={`w-full h-px ${member.dividerColor} mb-7`}></div>
        <div className={`${member.descriptionColor} text-justify ${member.nameFont} text-sm md:${member.descriptionSize} font-normal leading-6 md:leading-[30px]`}>
          {member.description}
        </div>
      </div>
    </>
  );

  return (
    <div className={`flex flex-col md:flex-row gap-6 md:gap-10 mb-20 md:mb-25 items-start ${member.reverse ? 'md:flex-row-reverse' : ''}`}>
        {cardContent}
    </div>
  );
}

export default function ManagementTeam() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us" },
    { label: "Management Team" }
  ];

  return (
    <div className="min-h-screen w-full bg-white relative">
      <Navigation />
      
      <div className="py-10 md:py-20 px-4 md:px-20 lg:px-40 max-w-[1440px] mx-auto">
        <div className="text-center mb-1 md:mb-3">
          <h1 className="font-poppins font-bold text-3xl md:text-[50px] text-brand-text-blue leading-tight">
            Management<br />Team
          </h1>
        </div>
        
        {/* Breadcrumb closer to the header */}
        <div className="mb-10 md:mb-20">
          <Breadcrumb items={breadcrumbItems} centered={true} />
        </div>
        
        <div className="space-y-20 md:space-y-25">
            {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
            ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

