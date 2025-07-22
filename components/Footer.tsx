import { Mail, Phone, Calendar, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
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
                src="/logos/all-cargo.png" 
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
  );
};

export default Footer;
