import { ChevronRight, Quote } from "lucide-react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";

export default function QACodeOfConduct() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 py-5">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-brand-blue">Home</span>
          <ChevronRight className="w-2 h-4 text-brand-blue" />
          <span className="text-brand-blue">About Us</span>
          <ChevronRight className="w-2 h-4 text-brand-blue" />
          <span className="text-brand-blue">QAC & Code of Conduct</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* Page Title */}
        <h1 className="text-brand-blue text-center text-[32px] lg:text-[50px] font-extrabold leading-normal mb-16">
          Quality Assurance & Code of Conduct
        </h1>

        {/* Quality Policy Section */}
        <div className="mb-16">
          <h2 className="text-brand-red text-[24px] lg:text-[30px] font-bold leading-normal mb-5">
            Quality Policy
          </h2>
          <div className="w-[155px] h-0.5 bg-brand-blue mb-10"></div>
          
          <div className="relative bg-white border border-brand-blue rounded-[30px] p-5 lg:p-10 min-h-[200px] flex items-center">
            {/* Left Quote */}
            <Quote className="absolute left-3 lg:left-5 top-3 lg:top-5 w-12 lg:w-16 h-12 lg:h-16 text-brand-blue" />
            
            <div className="max-w-4xl mx-auto px-8 lg:px-0">
              <p className="text-brand-blue text-justify text-[18px] lg:text-[25px] font-medium leading-[24px] lg:leading-[30px]">
                We are committed to provide quality and hassle free services to the customer in a cost effective and consistent manner by using our expertise to ensure customer satisfaction and value for money through continual improvement in our quality management system
              </p>
            </div>
            
            {/* Right Quote */}
            <Quote className="absolute right-3 lg:right-5 bottom-3 lg:bottom-5 w-12 lg:w-16 h-12 lg:h-16 text-brand-blue rotate-180" />
          </div>
        </div>

        {/* Code of Conduct Section */}
        <div className="mb-16">
          <h2 className="text-brand-red text-[24px] lg:text-[30px] font-bold leading-normal mb-5">
            Code of Conduct
          </h2>
          <div className="w-[198px] h-0.5 bg-brand-blue mb-10"></div>
          
          <p className="text-brand-blue text-justify text-[18px] lg:text-[25px] font-medium leading-[22px] lg:leading-[27px] mb-10">
            This 'Code of Conduct' shall be applicable to all Board Members, the Senior Management Team and all the Employees. Ethical business conduct is a key to a business and consequently, all Board Members, the Senior Management Team and all the Employees are expected to read and understand this code and emulate these standards in their day to day activities.
          </p>
        </div>

        {/* Core Principles Section */}
        <div className="mb-20">
          <div className="bg-brand-blue text-white text-[30px] font-bold text-center py-5 mb-10 rounded-[15px]">
            Core Principles
          </div>
          
          <div className="space-y-6">
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
                content: "The Board Members, the Senior Management team as well as the Employee are all in a position of trust. Each one of them has a responsibility to make decisions on merits and with due care. They must not abuse their official position to obtain any undue benefit for themselves, close relatives or for someone else, in cash or kind. Similarly, they should not use their official position to influence any person to enter into financial or other arrangements with them, close relatives or with anyone else, at the cost of the Company."
              },
              {
                title: "Consumption of Intoxication drinks and drugs",
                content: "Strictly abide by any law relating to liquor, narcotics, or any other form of intoxication drugs in force in any particular locality or nation they may happen to be for the time being. During the course of their duty, not to be under the influence of any liquor, narcotics, or any other form of intoxication drugs and shall take due care that the performance of their duties at any time is not affected in any way by the influence of such drinks or drugs. Repeated indulgence in liquor on regular basis results in addiction, affects health of the resource concerned and ability to think & work in a normal way due to mental & physical tiredness."
              },
              {
                title: "Sexual Harassment",
                content: "TransNepal is committed to institute good employment practices and provide equal opportunities for men and women for growth and development and prevent, stop, redress, condemn sexual harassment of any form. It demands, demonstrates and promotes respectful behavior with all employees at all levels."
              }
            ].map((principle, index) => (
              <div key={index} className="bg-light-blue border-l-[20px] border-medium-blue rounded-[15px] p-7">
                <h3 className="text-text-blue text-[25px] font-semibold leading-normal mb-4">
                  {principle.title}
                </h3>
                <p className="text-text-blue text-xl font-medium leading-normal text-justify">
                  {principle.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Management Section */}
        <div className="mb-20">
          <h2 className="text-brand-red text-[30px] font-bold leading-normal mb-5">
            Policy Management
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
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
            ].map((item, index) => (
              <div key={index} className="bg-light-blue border-l-[100px] border-light-blue rounded-[15px] p-7 min-h-[300px] flex flex-col justify-center">
                <h3 className="text-text-blue text-center text-[25px] font-semibold leading-normal mb-5">
                  {item.title}
                </h3>
                <p className="text-text-blue text-xl font-medium leading-normal tracking-[0.2px] text-justify">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
