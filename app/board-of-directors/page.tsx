import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BoardOfDirectors() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Title */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-trans-blue">
            Board of<br />Directors
          </h1>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Chairman - Adarsh Hegde */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-400 to-trans-blue-700 rounded-t-2xl p-1">
              <div className="bg-trans-blue rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <img 
                      src="https://cdn.builder.io/api/v1/image/assets%2F36b81f40e8314a76bb9d588bf23840f5%2F7fbc86fb5d3c4b79a7e88117c28a249a?format=webp&width=800" 
                      alt="Adarsh Hegde" 
                      className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl object-cover mx-auto border-4 border-white"
                    />
                  </div>
                  <div className="lg:col-span-2 text-white">
                    <div className="mb-6">
                      <div className="bg-red-400 text-white px-6 py-2 rounded-full inline-block text-lg font-bold mb-4">
                        Chairman
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold mb-2">Adarsh Hegde</h2>
                      <div className="w-full h-px bg-white/30 mb-6"></div>
                    </div>
                    <p className="text-lg leading-relaxed text-justify">
                      Mr. Adarsh Hegde has been associated with Allcargo Logistics since its inception. With over two and half decades of experience in the field of logistics, he has been instrumental in the success of Allcargo Logistics' growth story. Under his leadership, Allcargo Logistics established 6 CFS & ICD facilities PAN India, making Allcargo CFS & ICD division one of the largest private players in the country. He continues to lead the think tank and strategy for the division. With his extensive experience & proficiency in transportation, he has contributed to the set-up the Allcargo Logistics' Project & Engineering Division (APEPL), making it the preferred logistics solution provider in handling project cargo shipments within India & ECU-Line with respect to driving international procurement initiative and organisation-wide planning. And finishing his mechanical engineering from Nitte Education Trust, Mangalore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Managing Director - Mukesh Kumar Rathi */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-400 to-trans-blue-700 rounded-t-2xl p-1">
              <div className="bg-white rounded-2xl p-8 lg:p-12 border-l-8 border-trans-blue">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 text-gray-800">
                    <div className="mb-6">
                      <h2 className="text-3xl lg:text-4xl font-bold text-trans-blue mb-2">Mukesh Kumar Rathi</h2>
                      <div className="w-full h-px bg-gray-300 mb-6"></div>
                    </div>
                    <p className="text-lg leading-relaxed text-justify mb-6">
                      Mr. Mukesh Kumar Rathi has been holding the position as Managing Director of TransNepal Freight Services Pvt. Ltd., since 2002. He is a young and dynamic businessman. He played a key role in developing and implementing various systems and procedures which helps the organisation in achieving and establishing its benchmark in ICD/CFS operation in Nepal. He was very instrumental in renewing the contract for operation and management of ICDs with Nepal Intermodal Transport Development Board in the year 2012. His vision is to be the market leader in Nepal's logistics and transportation leader. He is a Group Director of Rathi Group a leading business house in Nepal having its presence in Trading, Manufacturing and Service sector across the board.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <img 
                        src="https://cdn.builder.io/api/v1/image/assets%2F36b81f40e8314a76bb9d588bf23840f5%2F7fbc86fb5d3c4b79a7e88117c28a249a?format=webp&width=800" 
                        alt="Mukesh Kumar Rathi" 
                        className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl object-cover mx-auto border-4 border-gray-200"
                      />
                      <div className="absolute -bottom-4 -right-4">
                        <div className="bg-red-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                          Managing Director
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Director - Bhim Raj Joshi */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-400 to-trans-blue-700 rounded-t-2xl p-1">
              <div className="bg-trans-blue rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <img 
                        src="https://cdn.builder.io/api/v1/image/assets%2F36b81f40e8314a76bb9d588bf23840f5%2F7fbc86fb5d3c4b79a7e88117c28a249a?format=webp&width=800" 
                        alt="Bhim Raj Joshi" 
                        className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl object-cover mx-auto border-4 border-white"
                      />
                      <div className="absolute -bottom-4 -right-4">
                        <div className="bg-red-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                          Director
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 text-white">
                    <div className="mb-6">
                      <h2 className="text-3xl lg:text-4xl font-bold mb-2">Bhim Raj Joshi</h2>
                      <div className="w-full h-px bg-white/30 mb-6"></div>
                    </div>
                    <p className="text-lg leading-relaxed text-justify">
                      "Mr. Bhim Raj Joshi is on board since the formation of this company. He is a self made man and has a very vast experience in the field of transport and supply chain management in Nepal. He involves in policy formulation and provides strategic support to the management. He belongs to an enterprising business family of Rathi Group, a pioneer in the field of transportation in Nepal and this is his vision and sincere effort which made JBT strengthen day by day and today is a reputed name and market leader in transportation sector of Nepal."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Director - Pankaj Rathi */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-400 to-trans-blue-700 rounded-t-2xl p-1">
              <div className="bg-white rounded-2xl p-8 lg:p-12 border-l-8 border-trans-blue">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 text-gray-800">
                    <div className="mb-6">
                      <h2 className="text-3xl lg:text-4xl font-bold text-trans-blue mb-2">Pankaj Rathi</h2>
                      <div className="w-full h-px bg-gray-300 mb-6"></div>
                    </div>
                    <p className="text-lg leading-relaxed text-justify mb-6">
                      Mr. Pankaj Rathi, the youngest director in the board is an MBA (International Business and Finance)and leading the BAGMATI PLASTIC INDUSTRIES PVT.LTD as its chairman. He has an understanding of the macroeconomic Dynamics of Nepal due to exposure to various international markets. He has an analytical bent of mind with a passion for entrepreneurship and financial markets.
                    </p>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <img 
                        src="https://cdn.builder.io/api/v1/image/assets%2F36b81f40e8314a76bb9d588bf23840f5%2F7fbc86fb5d3c4b79a7e88117c28a249a?format=webp&width=800" 
                        alt="Pankaj Rathi" 
                        className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl object-cover mx-auto border-4 border-gray-200"
                      />
                      <div className="absolute -bottom-4 -right-4">
                        <div className="bg-red-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                          Director
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
