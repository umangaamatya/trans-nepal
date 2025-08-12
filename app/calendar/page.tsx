import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function Holiday() {
  const mainHolidays = [
    { sn: 1, holiday: "1st Baisakh", days: 1 },
    { sn: 2, holiday: "19th Baisakh(Labour Day)", days: 1 },
    { sn: 3, holiday: "3rd Ashoj (Constitution Day)", days: 1 },
    { sn: 4, holiday: "24th, 25th, 26th, 27th & 28th Kartik(Dashain)", days: 5 },
    { sn: 5, holiday: "15th, 16th, 17th & 18th Kartik(Dipawali)", days: 4 },
    { sn: 6, holiday: "22th Mangsir (Chhath)", days: 1 },
    { sn: 7, holiday: "14th Falgun (Mahashivaratri)", days: 1 },
    { sn: 8, holiday: "1st Chaitra (Holi)", days: 1 },
  ];

  const womenHolidays = [
    { sn: 1, holiday: "21st Ashoj (Teej)", days: 1 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-holiday-blue h-40 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold font-poppins">
            Holiday
          </h1>
        </div>
      </div>

      <Breadcrumb 
        items={[
          { label: "About Us", href: "/about" },
          { label: "Contact Us" }
        ]} 
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Total Holidays Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-poppins text-holiday-text mb-8">
            Total Holidays: 15 days
          </h2>

          {/* Main Holidays Table */}
          <div className="border border-holiday-text overflow-hidden max-w-5xl mx-auto">
            {/* Main Table Header */}
            <div className="bg-holiday-blue bg-opacity-90 text-white">
              <div className="grid grid-cols-12 gap-4 px-6 py-3">
                <div className="col-span-2">
                  <h3 className="font-bold font-poppins text-xl">S.N</h3>
                </div>
                <div className="col-span-7">
                  <h3 className="font-bold font-poppins text-xl">Holidays</h3>
                </div>
                <div className="col-span-3 text-right">
                  <h3 className="font-bold font-poppins text-xl">Days</h3>
                </div>
              </div>
            </div>

            {/* Main Table Body */}
            <div className="bg-white">
              {mainHolidays.map((holiday, index) => (
                <div 
                  key={holiday.sn} 
                  className={`grid grid-cols-12 gap-4 px-6 py-4 ${
                    index < mainHolidays.length - 1 ? 'border-b border-black/20' : ''
                  }`}
                >
                  <div className="col-span-2">
                    <span className="font-poppins text-black text-base">{holiday.sn}</span>
                  </div>
                  <div className="col-span-7">
                    <span className="font-poppins text-black text-base">{holiday.holiday}</span>
                  </div>
                  <div className="col-span-3 text-right">
                    <span className="font-poppins text-black text-base">{holiday.days}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* For Women Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-poppins text-holiday-red mb-8">
            For Women
          </h2>

          {/* Women Holidays Table */}
          <div className="border border-holiday-text overflow-hidden max-w-5xl mx-auto">
            {/* Women Table Header */}
            <div className="bg-holiday-blue bg-opacity-90 text-white">
              <div className="grid grid-cols-12 gap-4 px-6 py-3">
                <div className="col-span-2">
                  <h3 className="font-bold font-poppins text-xl">S.N</h3>
                </div>
                <div className="col-span-7">
                  <h3 className="font-bold font-poppins text-xl">Holidays</h3>
                </div>
                <div className="col-span-3 text-right">
                  <h3 className="font-bold font-poppins text-xl">Days</h3>
                </div>
              </div>
            </div>

            {/* Women Table Body */}
            <div className="bg-white">
              {womenHolidays.map((holiday) => (
                <div 
                  key={holiday.sn} 
                  className="grid grid-cols-12 gap-4 px-6 py-4"
                >
                  <div className="col-span-2">
                    <span className="font-poppins text-black text-base">{holiday.sn}</span>
                  </div>
                  <div className="col-span-7">
                    <span className="font-poppins text-black text-base">{holiday.holiday}</span>
                  </div>
                  <div className="col-span-3 text-right">
                    <span className="font-poppins text-black text-base">{holiday.days}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
