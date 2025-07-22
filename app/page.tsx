"use client";

import { useState } from "react";
import { ChevronDown, Mail, Phone, Calendar, MapPin, Send, ArrowLeft, ArrowRight, Facebook, Linkedin, Youtube } from "lucide-react";

const Index = () => {
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
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7308b7c1ed2e9dab51754b94b898b565697ff230?width=330" 
                alt="TransNepal Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="bg-trans-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                Home
              </div>
              <div className="flex items-center space-x-1 text-gray-800 hover:text-trans-blue cursor-pointer">
                <span className="text-sm">About Us</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              <div className="flex items-center space-x-1 text-gray-800 hover:text-trans-blue cursor-pointer">
                <span className="text-sm">Services</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              <span className="text-gray-800 hover:text-trans-blue cursor-pointer text-sm">Tariff</span>
              <div className="flex items-center space-x-1 text-gray-800 hover:text-trans-blue cursor-pointer">
                <span className="text-sm">Associates</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              <span className="text-gray-800 hover:text-trans-blue cursor-pointer text-sm">Services</span>
              <span className="text-gray-800 hover:text-trans-blue cursor-pointer text-sm">Contact Us</span>
              <span className="text-gray-800 hover:text-trans-blue cursor-pointer text-sm">Gallery</span>
              <span className="text-gray-800 hover:text-trans-blue cursor-pointer text-sm">News & Events</span>
              <span className="text-gray-800 hover:text-trans-blue cursor-pointer text-sm">CSR</span>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-800 hover:text-trans-blue">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[729px] bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/624d99410381bf7b4c371fb61cc22024a4d111cc?width=3078')`
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Navigation Arrows */}
        <button className="absolute left-4 md:left-28 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full border border-white/80 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-4 md:right-28 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full border border-white/80 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="bg-trans-blue text-white px-8 py-3 rounded-xl mb-6">
            <span className="text-lg md:text-2xl font-bold">Welcome to</span>
          </div>
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Nepal's Leading<br />
            Dry Port Operations
          </h1>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <div className="w-16 h-1.5 bg-white rounded-full"></div>
          <div className="w-16 h-1.5 bg-white/50 rounded-full"></div>
          <div className="w-16 h-1.5 bg-white/50 rounded-full"></div>
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
            <div className="bg-trans-blue rounded-2xl overflow-hidden shadow-lg h-[525px]">
              <div className="relative h-64">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5c6f8927ffe83a2c6806d09d9fe6c7cd30789d8a?width=726" 
                  alt="Cargo Handling" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/aabad066a036f6bc491652f45d145c7b9d90a195?width=104" 
                    alt="Container Icon" 
                    className="w-12 h-11"
                  />
                </div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">CARGO HANDLING</h3>
                <p className="text-lg leading-relaxed">
                  Earlier cargoes were being totally handled manually. In the current situation where handling activities difficult
                </p>
              </div>
            </div>

            {/* Storage */}
            <div className="bg-trans-blue rounded-2xl overflow-hidden shadow-lg h-[525px]">
              <div className="relative h-64">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6e67c949055779edd4ba92b657313118d67350e8?width=726" 
                  alt="Storage" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-trans-blue" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M2.3999 4.79999H37.5999V8.79999H2.3999V4.79999ZM4.7999 10.4V36.8H35.1999V10.4H4.7999ZM25.5999 17.6H13.5999V15.2H25.5999V17.6Z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">STORAGE</h3>
                <p className="text-lg leading-relaxed">
                  Covered Warehouse of 55 x 25 meter with 1.2 meter high level platform in both Biratnagar and Bhairahawa.
                </p>
              </div>
            </div>

            {/* Weighment */}
            <div className="bg-trans-blue rounded-2xl overflow-hidden shadow-lg h-[525px]">
              <div className="relative h-64">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a079af32c2f007877bd0f98569714d470a4ae32f?width=726" 
                  alt="Weighment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-11 h-11 text-trans-blue" viewBox="0 0 45 46" fill="currentColor">
                    <path d="M32 12.8725H38L44 21.4881V34.1142H39.93C39.6892 35.8838 38.8561 37.5021 37.5834 38.6725C36.3107 39.843 34.6835 40.4872 33 40.4872C31.3165 40.4872 29.6893 39.843 28.4166 38.6725C27.1439 37.5021 26.3108 35.8838 26.07 34.1142H15.93C15.6922 35.8864 14.8604 37.5079 13.5874 38.681C12.3143 39.8541 10.6854 40.5 9 40.5C7.31456 40.5 5.68571 39.8541 4.41264 38.681C3.13957 37.5079 2.30776 35.8864 2.07 34.1142H0V8.62417C0 8.0608 0.210714 7.52051 0.585786 7.12215C0.960859 6.7238 1.46957 6.5 2 6.5H30C30.5304 6.5 31.0391 6.7238 31.4142 7.12215C31.7893 7.52051 32 8.0608 32 8.62417V12.8725ZM32 17.1208V23.4933H40V22.888L35.984 17.1208H32Z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">WEIGHMENT</h3>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-trans-blue text-center mb-16" style={{ fontFamily: 'Poly' }}>
            Get to know us
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/7b28cf89b9d2d459980c9157d95a3add8ecc8371?width=1010" 
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

      {/* Statistics Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/ad75e17b4c67a6ddff841fbba3e3f5502e68084c?width=2898')`
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">7<br />Offices</h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">3<br />Projects</h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">100<br />Staffs</h3>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">19<br />Years</h3>
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
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b37593dfff5b7ce7158fb64506a34054e6bcf3b5?width=1166" 
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
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1e43a3e86e947fafc6b37f226e8d1266647fe71a?width=1168" 
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
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9372a6975619bafeeda79ae36434bf85019275ca?width=1172" 
                    alt="Tatopani" 
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold">Tatopani</h3>
                    <MapPin className="w-12 h-12 text-white/80 flex-shrink-0" />
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed">
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
                    src="https://api.builder.io/api/v1/image/assets/TEMP/6eaa0aed33a72a404a27c4763b164b62e53a39cb?width=1168" 
                    alt="Chobar" 
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold">Chobar</h3>
                    <svg className="w-8 h-10 text-white/80 flex-shrink-0" viewBox="0 0 35 42" fill="currentColor">
                      <path d="M29.5884 4.99362C22.8197 -1.66454 11.8455 -1.66454 5.07686 4.99362C3.4698 6.56367 2.19282 8.43913 1.32097 10.5098C0.449124 12.5804 0 14.8044 0 17.0511C0 19.2978 0.449124 21.5219 1.32097 23.5925C2.19282 25.6631 3.4698 27.5386 5.07686 29.1086L17.3315 41.1661L29.5884 29.1086C31.1954 27.5386 32.4724 25.6631 33.3442 23.5925C34.2161 21.5219 34.6652 19.2978 34.6652 17.0511C34.6652 14.8044 34.2161 12.5804 33.3442 10.5098C32.4724 8.43913 31.1954 6.56367 29.5884 4.99362ZM17.3315 22.7495C15.8842 22.7495 14.5257 22.1861 13.5009 21.1635C12.4863 20.1467 11.9165 18.7691 11.9165 17.3328C11.9165 15.8965 12.4863 14.5188 13.5009 13.5021C14.5235 12.4795 15.8842 11.9161 17.3315 11.9161C18.7789 11.9161 20.1395 12.4795 21.1622 13.5021C22.1767 14.5188 22.7465 15.8965 22.7465 17.3328C22.7465 18.7691 22.1767 20.1467 21.1622 21.1635C20.1395 22.1861 18.7789 22.7495 17.3315 22.7495Z" />
                    </svg>
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
                <h3 className="text-4xl lg:text-5xl font-bold mb-6">Get a quote</h3>
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
                      <label className="block text-trans-blue text-lg font-medium mb-2">E-mail</label>
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

      {/* Footer */}
      <footer className="bg-trans-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Connect with us */}
            <div>
              <h4 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-white">CONNECT WITH US</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>info@transnepaldryport.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+977 21 501470</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+977 21 501441</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span>Office Hours</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <Facebook className="w-10 h-10 p-2 rounded-full border hover:bg-white/10 cursor-pointer" />
                <Linkedin className="w-10 h-10 p-2 rounded-full border hover:bg-white/10 cursor-pointer" />
                <Youtube className="w-10 h-10 p-2 rounded-full border hover:bg-white/10 cursor-pointer" />
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-white">USEFUL LINKS</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Department Of Customs</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">NITDB Board</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">FNCCI</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Indian Embassy Nepal</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Check Email</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-white">QUICK LINKS</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Management Team</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Biratnagar ICP</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Kakarbhitta ICD</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Tariff</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">News & Events</a></li>
              </ul>
            </div>

            {/* Logo */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center mb-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d921f0fcc0591cea034c7eb890e054057eb15ea1?width=448" 
                  alt="TransNepal Logo" 
                  className="w-48 h-28 object-contain"
                />
              </div>
              <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-trans-blue transition-colors">
                Back to top
              </button>
            </div>
          </div>

          <div className="border-t border-white/30 mt-12 pt-8">
            <p className="text-center text-white/80">
              All rights Reserved | Copyright © 2024 Trans Nepal Freight Services Pvt. Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

