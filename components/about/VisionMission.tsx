import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <div className="bg-nepal-bg min-h-screen py-16">
      {/* Hero Section */}
      <div className="bg-nepal-blue-darker pt-14 pb-16 mb-16 -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins text-[45px] font-bold text-white mb-4">
            Vision & Mission
          </h1>
          <div className="flex items-center justify-center text-white font-inter text-[12px] space-x-2">
            <span>Home</span>
            <svg className="w-2 h-4 text-white" viewBox="0 0 8 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.77259 8.47377L3.00126 12.2451L2.05859 11.3024L5.35859 8.00243L2.05859 4.70243L3.00126 3.75977L6.77259 7.5311C6.89757 7.65612 6.96778 7.82566 6.96778 8.00243C6.96778 8.17921 6.89757 8.84875 6.77259 8.47377Z" fill="white"/>
            </svg>
            <span>About Us</span>
            <svg className="w-2 h-4 text-white" viewBox="0 0 8 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.77259 8.47377L3.00126 12.2451L2.05859 11.3024L5.35859 8.00243L2.05859 4.70243L3.00126 3.75977L6.77259 7.5311C6.89757 7.65612 6.96778 7.82566 6.96778 8.00243C6.96778 8.17921 6.89757 8.84875 6.77259 8.47377Z" fill="white"/>
            </svg>
            <span>Vision & Mission</span>
          </div>
        </div>
      </div>

      {/* Vision & Mission Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Vision Section */}
          <div className="space-y-8">
            <div className="bg-nepal-blue rounded-tl-[50px] p-8 text-white relative">
              <div className="flex flex-col items-start mb-6">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-2 mr-4">
                    <Eye className="w-8 h-8 text-nepal-blue" />
                  </div>
                  <h2 className="font-poppins text-[20px] font-bold">Vision</h2>
                </div>
                <div className="w-16 h-[2px] bg-white mt-0 ml-16"></div>
              </div>
              <p className="font-poppins text-[15px] font-normal leading-relaxed">
                Become a leader in ICP/ICD/CFS management in Nepal.
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-nepal-blue rounded-bl-[50px] p-8 text-white relative">
              <div className="flex flex-col items-start mb-6">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-2 mr-4">
                    <Target className="w-8 h-8 text-nepal-blue" />
                  </div>
                  <h2 className="font-poppins text-[20px] font-bold">Mission</h2>
                </div>
                <div className="w-20 h-[2px] bg-white mt-0 ml-16"></div>
              </div>
              <div className="space-y-4 font-poppins text-[15px] font-normal leading-[27px]">
                <p>
                  Nurture long-term and good relationships with all stakeholders, public or private, through growth, trust, and honoring commitments.
                </p>
                <p>
                  Deliver quality services and create a benchmark for operation and management of ICP/ICD/CFS in Nepal.
                </p>
                <p>
                  Create better value for end users through knowledge, expertise, and technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/e393750a18df19ac24c7a06100b169a841e952d6?width=1020" 
                alt="Vision - Leadership in management" 
                className="w-full h-64 object-cover rounded-tr-[50px] shadow-lg"
              />
            </div>
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c3d5742f60aac4b367c1d6243c01726655f16c4a?width=1020" 
                alt="Mission - Quality services and stakeholder relationships" 
                className="w-full h-60 object-cover rounded-br-[50px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
