'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Eye, Target } from 'lucide-react';

export default function OurPurpose() {
  return (
    <div className="w-full bg-white">
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        {/* --- This top section remains unchanged --- */}
        <section className="relative pt-[40px] lg:pt-[80px] px-4">
          <h1 className="max-w-[911px] text-[#233488] text-center font-poppins text-[40px] lg:text-[50px] font-bold leading-normal mx-auto mb-0">
            <span>Our</span>
            <br />
            <span>Purpose</span>
          </h1>

          <div className="flex flex-col lg:flex-row gap-[45px] mx-auto max-w-[1300px] lg:mx-[131px] mt-[60px] lg:mt-[100px] relative">
            <div className="flex flex-col gap-[39px] w-full lg:w-auto">
              <div className="w-full lg:w-[552px] h-auto lg:h-[253px] bg-[#36427C] rounded-tl-[50px] relative p-[25px] lg:pr-[170px]">
                <div className="absolute left-[25px] top-[25px]">
                  <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center">
                    <Eye className="w-[58px] h-[58px] text-[#36427C]" />
                  </div>
                </div>
                <div className="w-[80px] h-[2px] bg-white absolute left-[119px] lg:left-[139px] top-[58px]"></div>
                <div className="text-white font-poppins text-[25px] font-bold mt-[40px] ml-[119px] lg:ml-[139px] mb-[20px]">
                  Vision
                </div>
                <div className="text-white font-poppins text-[15px] font-normal ml-[20px] lg:ml-[139px] leading-[23px]">
                  Become a leader in ICP/ICD/CFS management in Nepal.
                </div>
              </div>

              <div className="w-full lg:w-[558px] h-auto lg:h-[458px] bg-[#36427C] rounded-bl-[50px] relative p-[25px] lg:p-[45px] lg:pr-[180px]">
                <div className="absolute left-[30px] top-[45px]">
                  <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center">
                    <Target className="w-[49px] h-[49px] text-[#36427C]" />
                  </div>
                </div>
                <div className="w-[80px] h-[2px] bg-white absolute left-[119px] lg:left-[139px] top-[58px]"></div>
                <div className="text-white font-poppins text-[25px] font-bold mt-[40px] ml-[20px] lg:ml-[139px] mb-[20px]">
                  Mission
                </div>
                <div className="text-white font-poppins text-[15px] font-normal mt-[20px] lg:mt-[40px] ml-[20px] lg:ml-[139px] mb-[25px] lg:mb-[49px] leading-[27px] w-full lg:w-[333px]">
                  <span>
                    Nurture long-term and good relationships with all
                    stakeholders, public or private, through growth, trust, and
                    honoring commitments.
                  </span>
                  <br /><br />
                  <span>
                    Deliver quality services and create a benchmark for
                    operation and management of ICP/ICD/CFS in Nepal.
                  </span>
                  <br /><br />
                  <span>
                    Create better value for end users through knowledge,
                    expertise, and technologies.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[39px] w-full lg:w-auto mt-8 lg:mt-0">
              <img
                src="/about/our-purpose/vision.png"
                alt="Terminal Operations"
                className="w-full lg:w-[558px] h-[300px] lg:h-[458px] rounded-tr-[50px] object-cover"
              />
              <img
                src="/about/our-purpose/mission.png"
                alt="Freight Services"
                className="w-full lg:w-[552px] h-[200px] lg:h-[253px] rounded-br-[50px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-[80px] lg:mt-[140px] px-4">
          <h2 className="text-[#AC3A38] text-center font-poppins text-[25px] font-bold mx-auto mb-[50px] lg:mb-[80px] max-w-[816px]">
            Salient features
          </h2>

          <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] mx-auto max-w-[1300px] lg:mx-[121px]">
            <div className="flex flex-col items-center w-full lg:w-auto">
              <h3 className="text-[#171F45] text-center font-poppins text-[25px] font-bold mb-[40px]">
                Terminal Network
              </h3>
              <img
                src="/about/our-purpose/terminal.png"
                alt="Terminal Network Map"
                className="w-full max-w-[451px] h-auto lg:h-[326px] object-contain"
              />
            </div>
            <div className="flex-1 pt-[30px] lg:pt-[60px]">
              <div className="mb-[40px]">
                <h3 className="text-[#36427C] font-poppins text-[20px] font-bold mb-[15px]">
                  Border Terminals
                </h3>
                <p className="text-[#36427C] font-poppins text-[17px] font-normal mb-[40px] leading-normal">
                  <span>
                    TransNepal has been managing two terminals at Nepal-India
                    border
                  </span><br />
                  <span className="font-bold">
                    Biratnagar & Kakarbitta
                  </span>
                  <span>: Located in the plains of Eastern Nepal</span>
                </p>
              </div>

              <div className="mb-[40px]">
                <h3 className="text-[#36427C] font-poppins text-[20px] font-bold mb-[15px]">
                  Joint venture
                </h3>
                <p className="text-[#36427C] font-poppins text-[17px] font-normal mb-[40px] leading-normal">
                  <span>
                    Through joint ventures, TransNepal acquired two ICDs:
                  </span><br />
                  <span className="font-bold">
                    Tatopani ICD:
                  </span>
                  <span> Located at Nepal-China border</span><br />
                  <span className="font-bold">
                    Chobhar ICD:
                  </span>
                  <span> Located at Kirtipur, Kathmandu Valley</span>
                </p>
              </div>
              <div>
                <p className="text-[#36427C] font-poppins text-[17px] font-normal leading-[27px] w-full lg:w-[711px]">
                  <span className="font-bold">
                    Unique Capabilities
                  </span><br />
                  <span className="font-bold">
                    Chobhar ICD:
                  </span>
                  <span>
                    {" "}A unique facility handling both EXIM and DOMESTIC cargo. These
                    facilities cut down overhead expenses of exporters/importers
                    significantly and eliminate business uncertainties.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- REFACTORED SECTIONS START HERE --- */}

        {/* EV Storage Solutions Section */}
        <section className="bg-[#36427C] mt-[50px] lg:mt-[100px]">
          <div className="max-w-7xl mx-auto py-[50px] lg:py-[73px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left Text Content */}
              <div className="lg:w-2/3">
                <h2 className="text-white font-inter text-[25px] font-bold mb-[50px] lg:mb-[77px]">
                  EV Storage Solutions
                </h2>
                <div className="text-white font-poppins text-[17px] font-normal leading-[27px]">
                  <span>
                    The Nepal Govt. has introduced policies to encourage adoption of
                    EVs and consequently there has been spurt in import of EVs in
                    the country which requires storage space and for that Chobhar
                    ICD is well equipped with state of art warehouses has adequate
                    space in both EXIM and DOMESTIC sections of terminal to
                    accommodate the growing inventory of EVs and their components.
                  </span>
                  <br /><br />
                  <span>
                    All the terminals are equipped with fire fighting hydrant system
                    and n-number of cylinders have been put thereon to tackle small
                    incident.
                  </span>
                </div>
              </div>
              {/* Right Image */}
              <div className="w-full lg:w-1/3 mt-8 lg:mt-0 flex-shrink-0">
                  <img
                      src="/about/our-purpose/ev.png"
                      alt="EV Storage"
                      className="w-full h-auto max-h-[370px] rounded-[15px] object-cover"
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Storage Solutions Section */}
        <section className="mt-[50px] lg:mt-[72px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#AC3A38] font-inter text-[25px] font-bold mb-[50px] lg:mb-[94px]">
              Advanced Storage Solutions
            </h2>
            <div className="text-[#283B9A] font-poppins text-[17px] font-normal leading-[27px]">
              <span>
                Automated Warehousing Solution like Warehouse Management
                System(WMS) to streamline inventory processing, reducing errors,
                and optimising storage.
              </span>
              <br /><br />
              <span>
                The Company also provides Tailor-Made Storage Solution that are
                designed to align with the specific requirements of business,
                offering a range of benefits which extends beyond basic storage
                services.
              </span>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-[#36427C] py-[40px] lg:py-[54px] mt-[50px] lg:mt-[100px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-poppins text-[25px] font-bold mb-[35px] lg:mb-[55px]">
              Security
            </h2>
            <div className="text-[#D9D9D9] font-poppins text-[17px] font-normal leading-[30px] lg:leading-[40px]">
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
        </section>

        {/* History and Memories Section */}
        <section className="mt-[50px] lg:mt-[72px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#AC3A38] font-poppins text-[25px] font-bold mb-[50px] lg:mb-[80px]">
              History and memories
            </h2>
            <div className="text-[#283B9A] font-poppins text-[17px] font-normal leading-[27px] mb-[40px] lg:mb-[66px]">
              Nepal is a land linked country having China on the northern side and
              India on the southern side. Hence establishment of dry ports were
              got utmost importance to boost trade and transit because port is the
              gateway to trade growth and it further facilitates transit. By the
              year 2002 three ICDs viz Biratnagar, Bhairahawa (both roads based)
              and Birganj (rail based) were ready to be operationalised under PPP
              model and NITDB a regulatory body under the MoICS invited a global
              tender where TransNepal, after being technically qualified and
              tendering highest bid, awarded the operation and management of ICDs
              Biratnagar and Bhairahawa. The company took charge and started
              operation of both the ICDs on 17th April, 2002 from NITDB. A
              ceremony was held on the opening day itself in Biratnagar ICD
              premises where Honorable Minister Mr. Purna Bahadur Khadaka, MoICS
              was the chief guest
            </div>
          </div>
          
          {/* History Full-Width Image that truly spans screen and touches footer */}
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen h-[294px] overflow-hidden mt-10">
            <img
              src="/about/our-purpose/trucks.png"
              alt="Historical Image"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
