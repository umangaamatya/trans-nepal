import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Tariff() {
  return (
    <div className="w-full bg-white min-h-screen">
      <Navigation />
      
      <main className="flex flex-col items-center justify-center py-20 px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-[#233488] font-poppins mb-6">
            Tariff
          </h1>
          <p className="text-lg text-[#36427C] font-inter mb-8">
            This page is coming soon. Please continue prompting to add content for the Tariff page.
          </p>
          <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-400 text-lg font-medium">
              Content Coming Soon
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
