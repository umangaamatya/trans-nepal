import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-brand-dark py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-4">
            Salient Features
          </h1>
          
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center text-white text-xs md:text-sm">
            <span className="font-inter">Home</span>
            <ChevronRight className="mx-2 h-3 w-3" />
            <span className="font-inter">About Us</span>
            <ChevronRight className="mx-2 h-3 w-3" />
            <span className="font-inter">Salient Features</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
