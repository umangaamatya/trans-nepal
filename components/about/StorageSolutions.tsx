export default function StorageSolutions() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* EV Storage Solutions */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-poppins font-bold text-brand-primary">
              EV Storage Solutions
            </h2>
            <p className="text-sm font-poppins text-gray-700 leading-relaxed text-justify">
              The Nepal Govt. has introduced policies to encourage adoption of EVs and consequently there has been spurt in import of EVs in the country which requires storage space and for that Chobhar ICD is well equipped with state of art warehouses has adequate space in both EXIM and DOMESTIC sections of terminal to accommodate the growing inventory of EVs and their components.
            </p>
            <p className="text-sm font-poppins text-gray-700 leading-relaxed text-justify">
              All the terminals are equipped with fire fighting hydrant system and n-number of cylinders have been put thereon to tackle small incident.
            </p>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-xl h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593941707882-a5bac6861d12?w=400&h=300&fit=crop"
                alt="EV Storage Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Advanced Storage Solutions */}
        <div className="space-y-4">
          <h2 className="text-xl font-poppins font-bold text-brand-primary">
            Advanced Storage Solutions
          </h2>
          <p className="text-sm font-poppins text-gray-700 leading-relaxed text-justify">
            Automated Warehousing Solution like Warehouse Management System(WMS) to streamline inventory processing, reducing errors, and optimising storage.
          </p>
          <p className="text-sm font-poppins text-gray-700 leading-relaxed text-justify">
            The Company also provides Tailor-Made Storage Solution that are designed to align with the specific requirements of business, offering a range of benefits which extends beyond basic storage services.
          </p>
        </div>

        {/* Security */}
        <div className="space-y-4">
          <h2 className="text-xl font-poppins font-bold text-brand-primary">
            Security
          </h2>
          <div className="space-y-3 text-sm font-poppins text-gray-700 leading-relaxed text-justify">
            <p>
              These terminals bring the advantages of the gateway ports to the very door-step of exporters /importers across Nepal.With a view to provide 24 hour power supply there is a back up arrangement of Diesel Generator ranging from 82.5 KVA to 450 KVA.These facilities are well connected to the gateway ports of Kolkata/Haldia and Vizag(in India) by road and rail.
            </p>
            <p>
              All the terminals have Grade-A category of warehouse and equipped with Digital Weighbridge.
            </p>
            <p>
              Availability of handling equipment like crane, forklift and pallet trolley etc.
            </p>
            <p>
              Availability of space for warehousing and 3PL operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
