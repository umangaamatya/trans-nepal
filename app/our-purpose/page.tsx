import { Eye, Target, ChevronRight } from "lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function OurPurpose() {
  return (
    <div className="w-full bg-trans-nepal-bg font-poppins">
      <Navigation />
      
      <div className="px-[78px] relative">
        {/* Page Title */}
        <div className="text-trans-nepal-dark-blue text-center font-poppins text-[45px] font-semibold leading-[48px] mx-auto mt-[94px] mb-[122px] w-[911px]">
          <span>Our</span>
          <br />
          <span>Purpose</span>
        </div>

        {/* Breadcrumb */}
        <div className="text-trans-nepal-blue font-inter text-[12px] font-normal flex items-center gap-2 justify-center mb-[104px]">
          <span>Home</span>
          <ChevronRight className="w-2 h-4 text-trans-nepal-blue" />
          <span>About Us</span>
          <ChevronRight className="w-2 h-4 text-trans-nepal-blue" />
          <span>Our Purpose</span>
        </div>

       {/* Vision and Mission Section */}
        <div className="relative h-[570px] mb-20">
          {/* Vision Background Overlay */}
          <div className="absolute left-[97px] top-0 w-[510px] h-[140px] bg-trans-nepal-blue/80 rounded-tl-[50px] z-10"></div>

          {/* Mission Background Overlay */}
          <div className="absolute left-[97px] top-[160px] w-[510px] h-[390px] bg-trans-nepal-blue/80 rounded-bl-[50px] z-10"></div>

          {/* Vision Content */}
          <div className="absolute left-[97px] top-0 z-20">
            <div className="flex items-start gap-4 p-8">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Eye className="w-6 h-6 text-trans-nepal-light-blue" />
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-white font-poppins text-[20px] font-semibold mb-2">
                  Vision
                </h3>
                <div className="w-16 h-[2px] bg-white mb-4"></div>
                <p className="text-white font-poppins text-[15px] font-medium max-w-[400px]">
                  Become a leader in ICP/ICD/CFS management in Nepal.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Content */}
          <div className="absolute left-[97px] top-[160px] z-20">
            <div className="flex items-start gap-4 p-8">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Target className="w-6 h-6 text-trans-nepal-light-blue" />
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-white font-poppins text-[20px] font-semibold mb-2">
                  Mission
                </h3>
                <div className="w-16 h-[2px] bg-white mb-4"></div>
                <div className="text-white font-poppins text-[15px] font-medium leading-[27px] max-w-[320px]">
                  <p className="mb-4">
                    Nurture long-term and good relationships with all
                    stakeholders, public or private, through growth, trust, and
                    honoring commitments.
                  </p>
                  <p className="mb-4">
                    Deliver quality services and create a benchmark for operation
                    and management of ICP/ICD/CFS in Nepal.
                  </p>
                  <p>
                    Create better value for end users through knowledge,
                    expertise, and technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e393750a18df19ac24c7a06100b169a841e952d6?width=1020"
            alt="Vision"
            className="w-[480px] h-[275px] rounded-tr-[50px] absolute right-[40px] top-0 object-cover"
          />

          {/* Mission Image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c3d5742f60aac4b367c1d6243c01726655f16c4a?width=1020"
            alt="Mission"
            className="w-[480px] h-[275px] rounded-br-[50px] absolute right-[40px] top-[295px] object-cover"
          />
        </div>

        {/* Salient Features */}
        <div className="text-trans-nepal-blue text-left font-poppins text-[20px] font-bold mb-[76px]">
          Salient features
        </div>

        {/* Terminal Network Section */}
        <div className="flex gap-[227px] mb-20">
          <div className="flex-none w-[409px]">
            <div className="text-[#171f45] font-poppins text-[20px] font-semibold text-center mb-[37px]">
              Terminal Network
            </div>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/23d0655bf405c820c2b682b5d1a563411312381f?width=818" 
              alt="Terminal Network Map" 
              className="w-[409px] h-[296px]"
            />
          </div>
          
          <div className="flex-1 max-w-[711px]">
            <div className="text-trans-nepal-light-blue font-poppins text-[17px] font-bold mb-[37px]">
              Border Terminals
            </div>
            <div className="text-[#4b4b4b] font-poppins text-[15px] font-semibold mb-[81px]">
              <span>
                TransNepal has been managing two terminals at Nepal-India
                border
              </span>
              <br />
              <span className="font-bold">
                Biratnagar & Kakarbitta
              </span>
              <span>: Located in the plains of Eastern Nepal</span>
            </div>

            <div className="text-trans-nepal-light-blue font-poppins text-[17px] font-bold mb-8">
              Joint venture
            </div>
            <div className="text-[#4b4b4b] font-poppins text-[15px] font-semibold mb-[109px]">
              <span>
                Through joint ventures, TransNepal acquired two ICDs:
              </span>
              <br />
              <span className="font-bold">
                Tatopani ICD:
              </span>
              <span>Located at Nepal-China border</span>
              <br />
              <span className="font-bold">
                Chobhar ICD:
              </span>
              <span>Located at Kirtipur, Kathmandu Valley</span>
            </div>

            <div className="text-trans-nepal-light-blue font-poppins text-[17px] font-bold leading-[27px] mb-[33px]">
              Unique Capabilities
            </div>
            <div className="text-[#4b4b4b] font-poppins text-[15px] font-normal leading-[27px]">
              <span className="font-bold">
                Chobhar ICD:
              </span>
              <span>
                A unique facility handling both EXIM and DOMESTIC cargo. These
                facilities cut down overhead expenses of exporters/importers
                significantly and eliminate business uncertainties.
              </span>
            </div>
          </div>
        </div>

        {/* EV Storage Solutions */}
        <div className="bg-white px-[39px] py-[46px] pb-[47px] mx-[-78px] mb-[48px] relative">
          <div className="text-trans-nepal-blue text-left font-inter text-[20px] font-extrabold mb-[33px]">
            EV Storage Solutions
          </div>
          <div className="text-[#4b4b4b] font-poppins text-[15px] font-normal leading-[27px] max-w-[814px] ml-[38px]">
            <span>
              The Nepal Govt. has introduced policies to encourage adoption of
              EVs and consequently there has been spurt in import of EVs in
              the country which requires storage space and for that Chobhar
              ICD is well equipped with state of art warehouses has adequate
              space in both EXIM and DOMESTIC sections of terminal to
              accommodate the growing inventory of EVs and their components.
            </span>
            <br />
            <span>
              All the terminals are equipped with fire fighting hydrant system
              and n-number of cylinders have been put thereon to tackle small
              incident.
            </span>
          </div>
          <div className="w-[370px] h-[218px] bg-gray-300 rounded-[15px] absolute right-[39px] top-[46px]"></div>
        </div>

        {/* Advanced Storage Solutions */}
        <div className="bg-white px-[39px] py-[42px] pb-[47px] mx-[-78px] mb-[48px]">
          <div className="text-trans-nepal-blue text-left font-inter text-[20px] font-extrabold mb-[48px]">
            Advanced Storage Solutions
          </div>
          <div className="text-[#4b4b4b] font-poppins text-[15px] font-normal leading-[27px] max-w-[1194px] ml-[39px]">
            <span>
              Automated Warehousing Solution like Warehouse Management
              System(WMS) to streamline inventory processing, reducing errors,
              and optimising storage.
            </span>
            <br />
            <span>
              The Company also provides Tailor-Made Storage Solution that are
              designed to align with the specific requirements of business,
              offering a range of benefits which extends beyond basic storage
              services.
            </span>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white px-[39px] py-[44px] pb-[50px] mx-[-78px] mb-[40px]">
          <div className="text-trans-nepal-blue font-inter text-[20px] font-extrabold mb-[46px]">
            Security
          </div>
          <div className="text-[#4b4b4b] font-poppins text-[15px] font-normal leading-[27px] max-w-[1194px]">
            <span>
              These terminals bring the advantages of the gateway ports to the
              very door-step of exporters /importers across Nepal.With a view
              to provide 24 hour power supply there is a back up arrangement
              of Diesel Generator ranging from 82.5 KVA to 450 KVA.These
              facilities are well connected to the gateway ports of
              Kolkata/Haldia and Vizag(in India) by road and rail.
            </span>
            <br />
            <span>
              All the terminals have Grade-A category of warehouse and
              equipped with Digital Weighbridge.
            </span>
            <br />
            <span>
              Availability of handling equipment like crane, forklift and
              pallet trolley etc.
            </span>
            <br />
            <span>
              Availability of space for warehousing and 3PL operations.
            </span>
          </div>
        </div>

        {/* History and memories */}
        <div className="bg-white px-[39px] py-[44px] pb-[52px] mx-[-78px] mb-[40px]">
          <div className="text-trans-nepal-blue font-inter text-[20px] font-extrabold mb-[46px]">
            History and memories
          </div>
          <div className="text-[#4b4b4b] font-poppins text-[15px] font-normal leading-[27px] max-w-[1194px]">
            Nepal is a land linked country having China on the northern side
            and India on the southern side. Hence establishment of dry ports
            were got utmost importance to boost trade and transit because port
            is the gateway to trade growth and it further facilitates transit.
            By the year 2002 three ICDs viz Biratnagar, Bhairahawa (both roads
            based) and Birganj (rail based) were ready to be operationalised
            under PPP model and NITDB a regulatory body under the MoICS
            invited a global tender where TransNepal, after being technically
            qualified and tendering highest bid, awarded the operation and
            management of ICDs Biratnagar and Bhairahawa. The company took
            charge and started operation of both the ICDs on 17th April, 2002
            from NITDB. A ceremony was held on the opening day itself in
            Biratnagar ICD premises where Honorable Minister Mr. Purna Bahadur
            Khadaka, MoICS was the chief guest
          </div>
        </div>

        {/* Bottom Image */}
        <div className="w-full h-[294px] bg-gray-300 mx-[-78px] mb-0" style={{
          backgroundImage: 'url("https://api.builder.io/api/v1/image/assets/TEMP/bottom-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>

      <Footer />
    </div>
  );
}
