import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LogiparkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trans-blue text-center mb-8">
            Logipark
          </h1>
          <div className="text-center text-gray-600">
            <p>This page is under construction.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}