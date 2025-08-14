'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail, Phone, Calendar, MapPin, Send, ArrowLeft, ArrowRight } from 'lucide-react';
import './carousel-animations.css';

// Data for your hero slides with updated image paths
const heroSlides = [
  {
    imagePath: '/home/hero-bg.png',
    title: "Nepal's Leading<br />Dry Port Operations"
  },
  {
    imagePath: '/home/hero-bg-1.png',
    title: "Nepal's Leading<br />Dry Port Operations"
  },
  {
    imagePath: '/home/hero-bg-2.png',
    title: "Nepal's Leading<br />Dry Port Operations"
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrolled = window.pageYOffset;
      const sectionTop = parallaxRef.current.offsetTop;
      const sectionHeight = parallaxRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (scrolled + windowHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
        const parallaxSpeed = 0.5;
        const yPos = -(scrolled - sectionTop) * parallaxSpeed;
        const bgElement = parallaxRef.current.querySelector('.parallax-bg');
        if (bgElement) {
          (bgElement as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoize functions to prevent re-creation on every render
  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === heroSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);
  
  // useEffect hook for the automatic carousel timer
  useEffect(() => {
    const slideInterval = setInterval(goToNext, 5000); // Change slide every 5 seconds
    
    // Clear the interval when the component unmounts or dependencies change
    return () => clearInterval(slideInterval);
  }, [goToNext]);


  // (The form state and handlers remain unchanged)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    details: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Now with Timer and Animation */}
      <section className="relative h-[600px] md:h-[729px] bg-gray-900 overflow-hidden">
        <div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center carousel-fade"
          style={{
            backgroundImage: `url('${heroSlides[currentIndex].imagePath}')`
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 md:left-28 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-trans-blue hover:bg-white transition-colors z-20 shadow-lg">
          <ArrowLeft className="w-8 h-8" strokeWidth={2.5} />
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-4 md:right-28 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-trans-blue hover:bg-white transition-colors z-20 shadow-lg">
          <ArrowRight className="w-8 h-8" strokeWidth={2.5} />
        </button>

        {/* Hero Content */}
        <div className="absolute left-0 right-0 bottom-28 z-10 flex flex-col items-center justify-end text-center px-4">
          <div className="bg-trans-blue text-white px-8 py-3 rounded-xl mb-6">
            <span className="text-lg md:text-2xl font-bold">Welcome to</span>
          </div>
          <h1 
            className="text-white text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight"
            dangerouslySetInnerHTML={{ __html: heroSlides[currentIndex].title }}
          />
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((slide, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`w-16 h-1.5 rounded-full transition-colors duration-300 ${
                currentIndex === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trans-blue text-center mb-16">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Cargo Handling */}
            <div className="bg-trans-blue rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <div className="relative h-64">
                <img 
                  src="/services/cargo-handling.png" 
                  alt="Cargo Handling" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Cargo Handling</h3>
                <p className="text-lg leading-relaxed">
                  Earlier cargoes were being totally handled manually. In the current situation where handling activities difficult
                </p>
              </div>
            </div>

            {/* Storage */}
            <div className="bg-trans-blue rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <div className="relative h-64">
                <img 
                  src="/services/storage.png" 
                  alt="Storage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Storage</h3>
                <p className="text-lg leading-relaxed">
                  Covered Warehouse of 55 x 25 meter with 1.2 meter high level platform in both Biratnagar and Bhairahawa.
                </p>
              </div>
            </div>

            {/* Weighment */}
            <div className="bg-trans-blue rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <div className="relative h-64">
                <img 
                  src="/services/weighment.png" 
                  alt="Weighment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pt-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Weighment</h3>
                <p className="text-lg leading-relaxed">
                  Weighing activities were being carried out at remote locations making it costs ineffective and time consuming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get to Know Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trans-blue text-center mb-16">
            Get to know us
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/home/gtku.png" 
                alt="TransNepal Building" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                TransNepal Freight Services Pvt. Ltd., was incorporated in the year 2002 under the Nepalese Company Act and started operation from 17th April 2002 by taking over the operation and management of the two ICDs' at Biratnagar and Bhairahawa on lease for a period of ten years from Nepal Intermodal Transport Development Board, a body constituted by the Government of Nepal to regulate terminals in Nepal.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                TransNepal Freight Services Pvt. Ltd., was incorporated in the year 2002 under the Nepalese Company Act and started operation from 17th April 2002 by taking over the operation and management of the two ICDs' at Biratnagar and Bhairahawa on lease for a period of ten years from Nepal Intermodal Transport Development Board, a body constituted by the Government of Nepal to regulate terminals in Nepal.
              </p>
              
              <button className="bg-trans-blue text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-trans-blue-800 transition-colors">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Parallax Effect */}
      <section ref={parallaxRef} className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <img 
          src="/home/ship-t.jpg"
          alt="Parallax Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                7<br />Offices
              </h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                3<br />Projects
              </h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                100<br />Staffs
              </h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                19<br />Years
              </h3>
            </div>
          </div>
        </div>
      </section>


      {/* Locations Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-trans-blue text-center mb-16">
            Locations
          </h2>
          
          <div className="space-y-20">
            {/* Biratnagar */}
            <div className="bg-gradient-to-r from-trans-blue-600/80 to-trans-blue/80 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img 
                    src="/locations/biratnagar.png" 
                    alt="Biratnagar" 
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold">Biratnagar</h3>
                    <MapPin className="w-12 h-12 text-white/80 flex-shrink-0" />
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Spread over 129 bighas of land, Biratnagar ICP is equipped with Warehouses for Export and Import separately, Cold Storage, Terminal Building, Restaurant, Customs
                  </p>
                </div>
              </div>
            </div>

            {/* Kakarvita */}
            <div className="bg-gradient-to-r from-trans-blue-600/80 to-trans-blue/80 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img 
                    src="/locations/kakarvita.png" 
                    alt="Kakarvita" 
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold">Kakarvita</h3>
                    <MapPin className="w-12 h-12 text-white/80 flex-shrink-0" />
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed">
                    Earlier cargoes were being totally handled manually. In the current situation where handling activities have been transforming from manual to mechanical.
                  </p>
                </div>
              </div>
            </div>

            {/* Tatopani */}
            <div className="bg-gradient-to-r from-trans-blue-600/80 to-trans-blue/80 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img 
                    src="/locations/tatopani.png" 
                    alt="Tatopani" 
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold">Tatopani</h3>
                    <MapPin className="w-12 h-12 text-white/80 flex-shrink-0" />
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed text-justify">
                    Tatopani ICD is located in Sidhupachowk, Bagmati Province 114 Km north east of Kathmandu. Tatopani and Rasua are two important cross border points of Nepal to China.
                  </p>
                </div>
              </div>
            </div>

            {/* Chobar */}
            <div className="bg-gradient-to-r from-trans-blue-600/80 to-trans-blue/80 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <img 
                    src="/locations/chobar.png" 
                    alt="Chobar" 
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold">Chobar</h3>
                    <MapPin className="w-12 h-12 text-white/80 flex-shrink-0" />
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed text-justify">
                    Earlier cargoes were being totally handled manually. In the current situation where handling activities have been transforming from manual to mechanical.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Contact Info */}
              <div className="bg-gradient-to-br from-trans-blue-600 to-trans-blue p-8 lg:p-16 text-white">
                <div className="flex items-center justify-center mb-8">
                  <Send className="w-16 h-16" />
                </div>
                <h3 className="text-4xl lg:text-5xl text-center font-bold mb-6">Get a quote</h3>
                <p className="text-lg text-white/80 text-center">
                  Fill out the form below and we'll provide you with a personalized quote tailored to your needs
                </p>
              </div>

              {/* Right Side - Form */}
              <div className="p-8 lg:p-16 bg-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-trans-blue text-lg font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full h-16 px-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-trans-blue text-gray-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-trans-blue text-lg font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-16 px-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-trans-blue text-gray-800"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-trans-blue text-lg font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-16 px-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-trans-blue text-gray-800"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-trans-blue text-lg font-medium mb-2">dd/mm/yy</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full h-16 px-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-trans-blue text-gray-800"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-trans-blue text-lg font-medium mb-2">Other Details</label>
                      <input
                        type="text"
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        className="w-full h-16 px-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-trans-blue text-gray-800"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        type="submit"
                        className="w-full h-16 bg-trans-blue-700 text-white rounded-2xl font-bold text-lg hover:bg-trans-blue-800 transition-colors flex items-center justify-center gap-2"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
