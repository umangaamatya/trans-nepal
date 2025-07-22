'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src="logos/header-logo.png" 
                alt="TransNepal Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm px-4 py-1 rounded-full transition-colors ${
                pathname === '/' 
                  ? 'bg-trans-blue text-white font-medium' 
                  : 'text-gray-800 hover:text-trans-blue'
              }`}
            >
              Home
            </Link>
            
            <Link 
              href="/board-of-directors"
              className={`flex items-center space-x-1 cursor-pointer transition-colors ${
                pathname === '/board-of-directors'
                  ? 'bg-trans-blue text-white px-4 py-1 rounded-full font-medium'
                  : 'text-gray-800 hover:text-trans-blue'
              }`}
            >
              <span className="text-sm">About Us</span>
              <ChevronDown className="w-3 h-3" />
            </Link>
            
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
  );
};

export default Navigation;
