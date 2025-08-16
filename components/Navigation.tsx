'use client';

import { useState, FC, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';

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
        className={`flex items-center space-x-1 cursor-pointer transition-colors px-3 py-1 rounded-full whitespace-nowrap ${
          isActive
            ? 'bg-[#36427C] text-white font-medium' 
            : 'text-gray-800 hover:text-brand-blue'
        }`}
      >
        <span className="text-sm">{title}</span>
        <ChevronDown 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </Link>
      
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-44 bg-white rounded-md shadow-lg z-20 border border-gray-200">
          <div className="py-1 flex flex-col gap-0">
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
          : 'text-gray-800 hover:text-brand-blue'
      }`}
    >
      {children}
    </Link>
  );
};

// Terminal Management Side Dropdown Component
const TerminalManagementSideDropdown: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors cursor-pointer">
        <span>Terminal Management</span>
        <ChevronRight className="w-4 h-4" />
      </div>
      
      {isHovered && (
        <div className="absolute top-0 left-full ml-1 w-40 bg-white rounded-md shadow-lg z-30 border border-gray-200">
          <div className="py-1">
            <Link href="/services/terminal-management/biratnagar" className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-brand-blue transition-colors">Biratnagar</Link>
            <Link href="/services/terminal-management/kakarbitta" className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-brand-blue transition-colors">Kakarbitta</Link>
            <Link href="/services/terminal-management/tatopani" className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-brand-blue transition-colors">Tatopani</Link>
            <Link href="/services/terminal-management/chobar" className="block px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-brand-blue transition-colors">Chobar</Link>
          </div>
        </div>
      )}
    </div>
  );
};


// --- MAIN NAVIGATION COMPONENT ---
const Navigation: FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false,
    services: false,
    terminalManagement: false,
    associates: false
  });

  const toggleMobileDropdown = (dropdown: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

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
            
            <NavDropdown title="About Us" href="/board-of-directors" isActive={pathname.startsWith('/about') || pathname === '/board-of-directors' || pathname === '/management-team' || pathname === '/calendar'}>
              <Link href="/board-of-directors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">Board of Directors</Link>
              <Link href="/management-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">Management Team</Link>
              <Link href="/vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">Vision</Link>
              <Link href="/features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">Features</Link>
              <Link href="/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">History</Link>
              <Link href="/qa-code-of-conduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">QAC</Link>
              <Link href="/calendar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">Holiday Calendar</Link>
            </NavDropdown>

            <NavDropdown title="Services" href="/services" isActive={pathname.startsWith('/services')}>
              {/* Terminal Management with Side Dropdown */}
              <TerminalManagementSideDropdown />
              
              {/* Other Services */}
              <Link href="/services/agency" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">Agency Services</Link>
              <Link href="/services/rental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">Rental Services</Link>
              <Link href="/services/transportation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">Transportation</Link>
            </NavDropdown>
            
            <NavLink href="/tariff">Tariff</NavLink>
            
            <NavDropdown title="Associates" href="/associates" isActive={pathname.startsWith('/associates')}>
               <Link href="/associates/transik-terminals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">Transik Terminals Pvt. Ltd.</Link>
               <Link href="/associates/trs-logipark" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors">TransNepal TRS Logipark Pvt. Ltd.</Link>
            </NavDropdown>
            
            <NavLink href="/contact">Contact Us</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/news">News & Events</NavLink>
            <NavLink href="/csr">CSR</NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 hover:text-brand-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 border-t border-gray-200">
          <div className="px-4 space-y-2">
            <Link href="/" className="block text-gray-800 hover:text-brand-blue py-2 transition-colors">Home</Link>
            
            {/* About Us Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('about')}
                className="flex items-center justify-between w-full text-gray-800 hover:text-brand-blue py-2 transition-colors"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdowns.about ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdowns.about && (
                <div className="pl-4 space-y-1">
                  <Link href="/board-of-directors" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">Board of Directors</Link>
                  <Link href="/management-team" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">Management Team</Link>
                  <Link href="/vision" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">Vision</Link>
                  <Link href="/features" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">Features</Link>
                  <Link href="/history" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">History</Link>
                  <Link href="/qa-code-of-conduct" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">QAC</Link>
                  <Link href="/calendar" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">Holiday Calendar</Link>
                </div>
              )}
            </div>

            {/* Services Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('services')}
                className="flex items-center justify-between w-full text-gray-800 hover:text-brand-blue py-2 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdowns.services ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdowns.services && (
                <div className="pl-4 space-y-1">
                  {/* Terminal Management Mobile Submenu */}
                  <div>
                    <button 
                      onClick={() => toggleMobileDropdown('terminalManagement')}
                      className="flex items-center justify-between w-full text-gray-600 hover:text-brand-blue py-1 transition-colors"
                    >
                      <span>Terminal Management</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${mobileDropdowns.terminalManagement ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileDropdowns.terminalManagement && (
                      <div className="pl-4 space-y-1">
                        <Link href="/services/terminal-management/biratnagar" className="block text-gray-500 hover:text-brand-blue py-1 transition-colors">Biratnagar</Link>
                        <Link href="/services/terminal-management/kakarbitta" className="block text-gray-500 hover:text-brand-blue py-1 transition-colors">Kakarbitta</Link>
                        <Link href="/services/terminal-management/tatopani" className="block text-gray-500 hover:text-brand-blue py-1 transition-colors">Tatopani</Link>
                        <Link href="/services/terminal-management/chobar" className="block text-gray-500 hover:text-brand-blue py-1 transition-colors">Chobar</Link>
                      </div>
                    )}
                  </div>
                  
                  <Link href="/services/agency" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">Agency Services</Link>
                  <Link href="/services/rental" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">Rental Services</Link>
                  <Link href="/services/transportation" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">Transportation</Link>
                </div>
              )}
            </div>

            <Link href="/tariff" className="block text-gray-800 hover:text-brand-blue py-2 transition-colors">Tariff</Link>
            
            {/* Associates Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('associates')}
                className="flex items-center justify-between w-full text-gray-800 hover:text-brand-blue py-2 transition-colors"
              >
                <span>Associates</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdowns.associates ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdowns.associates && (
                <div className="pl-4 space-y-1">
                  <Link href="/associates/transik-terminals" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">Transik Terminals Pvt. Ltd.</Link>
                  <Link href="/associates/transnepal-trs-logipark" className="block text-gray-600 hover:text-brand-blue py-1 transition-colors">TransNepal TRS Logipark Pvt. Ltd.</Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="block text-gray-800 hover:text-brand-blue py-2 transition-colors">Contact Us</Link>
            <Link href="/gallery" className="block text-gray-800 hover:text-brand-blue py-2 transition-colors">Gallery</Link>
            <Link href="/news" className="block text-gray-800 hover:text-brand-blue py-2 transition-colors">News & Events</Link>
            <Link href="/csr" className="block text-gray-800 hover:text-brand-blue py-2 transition-colors">CSR</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
