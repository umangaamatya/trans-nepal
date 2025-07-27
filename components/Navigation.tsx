'use client';

import { useState, FC, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface NavDropdownProps {
  title: string;
  children: ReactNode;
  href: string;
  isActive: boolean;
}

interface NavLinkProps {
  href: string;
  children: ReactNode;
}


// --- HELPER COMPONENTS ---

const NavDropdown: FC<NavDropdownProps> = ({ title, children, href, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        href={href}
        className={`flex items-center space-x-1 cursor-pointer transition-colors px-4 py-1 rounded-full whitespace-nowrap ${
          isActive
            ? 'bg-[#36427C] text-white font-medium' 
            : 'text-gray-800 hover:text-trans-blue'
        }`}
      >
        <span className="text-sm">{title}</span>
        <ChevronDown 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </Link>
      
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white rounded-md shadow-lg z-20">
          <div className="py-1">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
    const pathname = usePathname();
    return (
      <Link 
        href={href}
        className={`text-sm px-4 py-1 rounded-full transition-colors whitespace-nowrap ${
          pathname === href 
            ? 'bg-[#36427C] text-white font-medium' 
            : 'text-gray-800 hover:text-trans-blue'
        }`}
      >
        {children}
      </Link>
    );
};


// --- MAIN NAVIGATION COMPONENT ---

const Navigation: FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src="/logos/header-logo.png" 
                alt="TransNepal Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            
            <NavDropdown title="About Us" href="/board-of-directors" isActive={pathname.startsWith('/about') || pathname === '/board-of-directors' || pathname === '/our-purpose'}>
              <Link href="/board-of-directors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Board of Directors</Link>
              <Link href="/our-purpose" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Purpose</Link>
            </NavDropdown>

            <NavDropdown title="Services" href="/services" isActive={pathname.startsWith('/services')}>
               <Link href="/services/cargo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cargo Handling</Link>
               <Link href="/services/storage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Storage</Link>
            </NavDropdown>
            
            <NavLink href="/tariff">Tariff</NavLink>
            
            <NavDropdown title="Associates" href="/associates" isActive={pathname.startsWith('/associates')}>
               <Link href="/associates/partner-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Partner One</Link>
            </NavDropdown>
            
            <NavLink href="/contact">Contact Us</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/news">News & Events</NavLink>
            <NavLink href="/csr">CSR</NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 hover:text-trans-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="/" className="block text-gray-800 hover:text-trans-blue py-2">Home</Link>
            <Link href="/board-of-directors" className="block text-gray-800 hover:text-trans-blue py-2">About Us</Link>
            <Link href="/services" className="block text-gray-800 hover:text-trans-blue py-2">Services</Link>
            <Link href="/contact" className="block text-gray-800 hover:text-trans-blue py-2">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
