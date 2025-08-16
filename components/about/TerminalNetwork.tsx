export default function TerminalNetwork() {
  return (
    <section className="bg-brand-light py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-xl font-poppins font-bold text-brand-primary mb-8">
            Terminal Network
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
            {/* Map Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f1a17fa6f3ad56ea25aa168ee23c07e25b78fb0b?width=938"
                alt="Nepal Terminal Network Map"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Border Terminals */}
              <div>
                <h3 className="text-base font-poppins font-bold text-brand-secondary mb-3">
                  Border Terminals
                </h3>
                <p className="text-sm font-poppins text-gray-700 leading-relaxed">
                  TransNepal has been managing two terminals at Nepal-India border{" "}
                  <span className="font-bold">Biratnagar & Kakarbitta</span>: Located in the plains of Eastern Nepal
                </p>
              </div>
              
              {/* Joint Venture */}
              <div>
                <h3 className="text-base font-poppins font-bold text-brand-secondary mb-3">
                  Joint venture
                </h3>
                <p className="text-sm font-poppins text-gray-700 leading-relaxed">
                  Through joint ventures, TransNepal acquired two ICDs:<br />
                  <span className="font-bold">Tatopani ICD:</span> Located at Nepal-China border<br />
                  <span className="font-bold">Chobhar ICD:</span> Located at Kirtipur, Kathmandu Valley
                </p>
              </div>
              
              {/* Unique Capabilities */}
              <div>
                <h3 className="text-base font-poppins font-bold text-brand-secondary mb-3">
                  Unique Capabilities
                </h3>
                <p className="text-sm font-poppins text-gray-700 leading-relaxed">
                  <span className="font-bold">Chobhar ICD:</span> A unique facility handling both EXIM and DOMESTIC cargo. These facilities cut down overhead expenses of exporters/importers significantly and eliminate business uncertainties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
