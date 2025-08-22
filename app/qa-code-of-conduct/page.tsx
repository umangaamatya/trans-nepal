import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";

export default function QualityContent() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-transnepal-dark">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-20 py-12 md:py-16">
          <div className="text-center">
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 flex flex-col items-center">
              <span>Quality Assurance</span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold my-1">&</span>
              <span>Code of Conduct</span>
            </h1>

            {/* Breadcrumbs */}
            <div className="flex items-center justify-center space-x-2 text-white text-xs font-inter">
              <a href="/" className="hover:underline">Home</a>
              <ChevronRight className="h-2 w-2" />
              <span>About Us</span>
              <ChevronRight className="h-2 w-2" />
              <span>QAC</span>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 lg:px-[115px] max-w-[1440px] mx-auto py-16">
        {/* Quality Policy Section */}
        <div className="relative py-16 pb-12">
          {/* Background quote box */}
          <div className="w-full max-w-[1090px] h-[100px] rounded-[15px] bg-[rgba(86,100,178,0.06)] absolute left-1/2 transform -translate-x-1/2 top-28 z-0">
            {/* Quote icons */}
            <div className="absolute left-[12px] top-[22px]">
              <svg width="18" height="18" viewBox="0 0 19 19" fill="none">
                <path d="M8.8604 6.52603C8.8604 7.2227 8.67832 7.80774 8.31415 8.28116C8.05607 8.60733 7.70589 8.8216 7.26361 8.92399C6.8282 9.02533 6.41653 9.03245 6.04445 8.94616C5.91778 9.69824 6.12361 10.4947 6.64611 11.3386C7.16967 12.182 7.8447 12.8161 8.6712 13.241L7.41957 15.042C6.78624 14.7285 6.18457 14.3311 5.6304 13.8505C5.06832 13.37 4.56957 12.8174 4.12624 12.1928C3.6829 11.5682 3.3504 10.8628 3.13665 10.0632C2.9229 9.26362 2.86353 8.4482 2.96565 7.60903C3.09865 6.5007 3.45649 5.61403 4.03915 4.95695C4.62129 4.29142 5.34646 3.95866 6.21465 3.95866C6.97861 3.95866 7.61274 4.18824 8.11465 4.65374C8.61129 5.10974 8.85935 5.73463 8.85882 6.52841L8.8604 6.52603ZM16.0836 6.52603C16.0836 7.2227 15.9015 7.80774 15.5373 8.28116C15.2787 8.61366 14.9285 8.82926 14.4868 8.92795C14.0434 9.02559 13.6371 9.03139 13.2676 8.94537C13.1409 9.68953 13.3389 10.4891 13.8629 11.3362C14.3854 12.1754 15.0599 12.8087 15.8864 13.2362L14.638 15.042C14.0041 14.7285 13.4077 14.3313 12.8488 13.8505C12.2817 13.3628 11.7779 12.8059 11.3494 12.1928C10.9092 11.5674 10.5815 10.8628 10.3677 10.0632C10.1506 9.26424 10.0922 8.43045 10.1959 7.60903C10.3274 6.5007 10.6836 5.61403 11.2647 4.95695C11.8453 4.29617 12.5691 3.96579 13.4362 3.96579C14.2015 3.96473 14.8354 4.19616 15.3378 4.66008C15.8345 5.11608 16.083 5.74096 16.0836 6.53474V6.52603Z" fill="#4B4B4B"/>
              </svg>
            </div>
            <div className="absolute right-[110px] top-[52px]">
              <svg width="18" height="18" viewBox="0 0 15 15" fill="none">
                <path d="M8.0051 5.15188C8.0051 5.70188 8.14885 6.16375 8.43635 6.5375C8.6401 6.795 8.91656 6.96417 9.26572 7.045C9.60947 7.125 9.93447 7.13063 10.2282 7.0625C10.3282 7.65625 10.1657 8.285 9.75322 8.95125C9.33989 9.61708 8.80697 10.1177 8.15447 10.4531L9.1426 11.875C9.6426 11.6275 10.1176 11.3137 10.5551 10.9344C10.9988 10.555 11.3926 10.1187 11.7426 9.62563C12.0926 9.1325 12.3551 8.57563 12.5238 7.94438C12.6926 7.31313 12.7395 6.66937 12.6588 6.00688C12.5538 5.13188 12.2713 4.43187 11.8113 3.91313C11.3518 3.38771 10.7793 3.125 10.0938 3.125C9.49072 3.125 8.9901 3.30625 8.59385 3.67375C8.20177 4.03375 8.00593 4.52708 8.00635 5.15375L8.0051 5.15188ZM2.3026 5.15188C2.3026 5.70188 2.44635 6.16375 2.73385 6.5375C2.93801 6.8 3.21447 6.97021 3.56322 7.04813C3.91322 7.12521 4.23406 7.12979 4.52572 7.06187C4.62572 7.64937 4.46947 8.28063 4.05572 8.94938C3.64322 9.61188 3.11072 10.1119 2.45822 10.4494L3.44385 11.875C3.94427 11.6275 4.4151 11.314 4.85635 10.9344C5.3041 10.5493 5.70178 10.1096 6.0401 9.62563C6.3876 9.13188 6.64635 8.57563 6.8151 7.94438C6.98651 7.31362 7.03259 6.65536 6.95072 6.00688C6.84697 5.13188 6.56572 4.43187 6.10697 3.91313C5.64864 3.39146 5.07718 3.13063 4.3926 3.13063C3.78843 3.12979 3.28801 3.3125 2.89135 3.67875C2.49926 4.03875 2.30301 4.53208 2.3026 5.15875V5.15188Z" fill="#4B4B4B"/>
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-[#283b9a] font-inter text-xl font-bold mb-2">
              Quality Policy
            </h2>
            <div className="w-[142px] h-0.5 bg-[#283b9a] mb-8"></div>
            
            <p className="text-[#4b4b4b] text-center font-inter text-[15px] font-normal leading-[30px] max-w-[1041px] mx-auto px-8 lg:px-[7px]">
              We are committed to provide quality and hassle free services to
              the customer in a cost effective and consistent manner by using
              our expertise to ensure customer satisfaction and value for money
              through continual improvement in our quality management system
            </p>
          </div>
        </div>

        {/* Code of Conduct Section */}
        <div className="py-8 pb-12">
          <h2 className="text-[#283b9a] font-inter text-xl font-bold mb-2">
            Code of Conduct
          </h2>
          <div className="w-[142px] h-0.5 bg-[#283b9a] mb-8"></div>
          
          <p className="text-[#4b4b4b] text-justify font-poppins text-[15px] font-normal leading-[27px] max-w-[1207px]">
            This 'Code of Conduct' shall be applicable to all Board Members,
            the Senior Management Team and all the Employees. Ethical business
            conduct is a key to a business and consequently, all Board
            Members, the Senior Management Team and all the Employees are
            expected to read and understand this code and emulate these
            standards in their day to day activities.
          </p>
        </div>

        {/* Code Sections */}
        <div className="mt-12">
          {[
            {
              title: "Conduct of Business",
              content: "The Board Members, the Senior Management team and the Employees shall not be involved in any activity that is anti national or would have any adverse effect on the objectives of the company. They shall not make false/misleading statements about the company or indulge in any unfair trade practices which is detrimental to company's image."
            },
            {
              title: "Services Quality",
              content: "As part of Allcargo, TransNepal is committed to provide service quality of International Standard, and hence the Board Members, the Senior Management team and the Employee shall render services of highest quality to the satisfaction of the customers."
            },
            {
              title: "Legislative Compliance",
              content: "The Board Members, the Senior Management team and the Employees shall comply with all the applicable provisions of existing local, state, national and international laws. They should further follow and obey the policies, procedures, rules and regulation relating to the business of the company."
            },
            {
              title: "Reporting to the Board",
              content: "In case of any agreement or contract which is or shall be entered into by and between two corporate entities, in which a Director is interested, the interested Director shall forthwith draw the attention of the Board about the fact and shall not participate in the process without Board's consent."
            },
            {
              title: "Conflict of Interest",
              content: "The Board Members, the Senior Management team and the Employees shall not derive any personal benefit by influencing any decision relating to any transaction or involve in any dealing with the company's promoters, its management or its suppliers and other stakeholders."
            },
            {
              title: "Protecting Company's Assets",
              content: "The Board Members, the Senior Management team and Employees shall not indulge or encourage any activity, which would result in misuse of the Company's Assets (both tangible and intangible) owned or leased."
            },
            {
              title: "Confidentiality",
              content: "The Directors, the Senior Management team and the Employees shall ensure and take all reasonable measures to protect the confidentiality of non-public information about the Company, its business, clientele and other materially significant information obtained or created in connection with any activities with the Company and to prevent the unauthorized disclosure of such information unless required by applicable laws or regulations or legal or regulatory process."
            },
            {
              title: "Outside Activities",
              content: "The Board Members, the Senior Management team as well as the Employee shall be free to pursue any kind of civil/political activities and can become Members or Office Bearers of any Trade Organization so long as it does not adversely affect or is detrimental to the business interests of the Company."
            },
            {
              title: "Non-abuse of official position",
              content: "The Board Members, the Senior Management team as well as the Employee are all in a position of trust. Each one of them has a responsibility to make decisions on merits and with due care. They must not abuse their official position to obtain any undue benefit for themselves, close relatives or for someone else, in cash or in kind. Similarly, they should not use their official position to influence any person to enter into financial or other arrangements with them, close relatives or with anyone else, at the cost of the Company."
            },
            {
              title: "Consumption of Intoxication drinks and drugs",
              content: "Strictly abide by any law relating to liquor, narcotics, or any other form of intoxication drugs in force in any particular locality or nation they may happen to be for the time being. During the course of their duty, not to be under the influence of any liquor, narcotics, or any other form of intoxication drugs and shall take due care that the performance of their duties at any time is not affected in any way by the influence of such drinks or drugs. Repeated indulgence in liquor on regular basis results in addiction, affects health of the resource concerned and ability to think & work in a normal way due to mental & physical tiredness."
            },
            {
              title: "Sexual Harassment",
              content: "TransNepal is committed to institute good employment practices and provide equal opportunities for men and women for growth and development and prevent, stop, redress, condemn sexual harassment of any form. It demands, demonstrates and promotes respectful behavior with all employees at all levels."
            }
          ].map((section, index) => (
            <div key={index} className="flex flex-col items-start gap-2.5 py-7 border-t border-[rgba(0,0,0,0.05)]">
              <h3 className="text-[#283b9a] font-poppins text-xl font-bold leading-10">
                {section.title}
              </h3>
              <p className="text-[#6b6b6b] text-justify font-inter text-[15px] font-normal leading-[27px] max-w-[1195px]">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Policy Management */}
        <div className="py-12 pb-20 mt-12">
          <h2 className="text-[#283b9a] font-inter text-xl font-bold mb-2">
            Policy Management
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Variation of the Code and Waivers",
                content: "The Code shall be reviewed from time to time for updation thereof. Any variation in the Code or any waivers from the provisions of the Code shall be approved by the Board Directors of the Company and shall be disclosed on the Company's website."
              },
              {
                title: "High Level of Ethical Standards",
                content: "In their personal and professional life, all Employees and Directors of the Company shall ensure high level of ethical standards and will not be involved in any incident of moral turpitude."
              },
              {
                title: "Violation of the Code",
                content: "The Board of Directors of the Company shall have the powers to take necessary action in case of any violation of the code."
              }
            ].map((card, index) => (
              <div key={index} className="relative">
                {/* Background card */}
                <div className="w-full h-[355px] rounded-[15px] bg-[#ECEFFF] p-8 flex flex-col justify-center">
                  <h3 className="text-[#283b9a] text-center font-inter text-xl font-bold mb-6 leading-6">
                    {card.title}
                  </h3>
                  <p className="text-[#283b9a] text-center font-inter text-[15px] font-normal leading-[18px] tracking-[0.15px]">
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
