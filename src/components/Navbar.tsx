import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import risLogo from 'figma:asset/a295dce35b026ce22eb89db4baeb91c69c5e6936.png';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'services' | 'contact' | 'careers' | 'blog';
  setCurrentPage: (page: 'home' | 'about' | 'services' | 'contact' | 'careers' | 'blog') => void;
}

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Services at RIS',
    'Web Designing',
    'PAN India IT Support',
    'PAN India Pickup & Drop Services',
    'Staffing Services',
    'Cloud Computing',
    'Rental Laptop & Desktop Services',
    'CCTV & Biometric',
    'IT Infra Project',
  ];

  const scrollToSection = (id: string) => {
    // First navigate to home page if not already there
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for page to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const navigateToServices = () => {
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const navigateToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const navigateToCareers = () => {
    setCurrentPage('careers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const navigateToBlog = () => {
    setCurrentPage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAFAFA]/95 backdrop-blur-xl shadow-md'
            : 'bg-[#FAFAFA]/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3">
                <img src={risLogo} alt="RIS Logo" className="w-12 h-12 object-contain" />
                <div className="hidden sm:block">
                  <div className="text-[#1A1A1A]">Random IT Solutions</div>
                  <div className="text-xs text-[#0066FF]">Pvt. Ltd.</div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={navigateToHome}
                className="text-[#1A1A1A] hover:text-[#0066FF] transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={navigateToAbout}
                className="text-[#1A1A1A] hover:text-[#0066FF] transition-colors duration-200"
              >
                About
              </button>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  onClick={navigateToServices}
                  className="flex items-center gap-1 text-[#1A1A1A] hover:text-[#0066FF] transition-colors duration-200"
                >
                  Our Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isServicesOpen && (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-[#E4E4E7] py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={navigateToServices}
                        className="w-full text-left px-4 py-2.5 text-[#444444] hover:text-[#0066FF] hover:bg-[#F5F5F7] transition-all duration-200"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={navigateToContact}
                className="text-[#1A1A1A] hover:text-[#0066FF] transition-colors duration-200"
              >
                Contact
              </button>

              <button
                onClick={navigateToCareers}
                className="text-[#1A1A1A] hover:text-[#0066FF] transition-colors duration-200"
              >
                Careers
              </button>

              <button
                onClick={navigateToBlog}
                className="text-[#1A1A1A] hover:text-[#0066FF] transition-colors duration-200"
              >
                Blog
              </button>

              <Button
                className="bg-[#0066FF] hover:bg-[#004FCC] text-white shadow-md transition-all duration-300"
              >
                Shop Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[#1A1A1A] p-2 hover:bg-[#F5F5F7] rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-[#E4E4E7]">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={navigateToHome}
                className="block w-full text-left py-2 text-[#1A1A1A] hover:text-[#0066FF] transition-colors"
              >
                Home
              </button>
              <button
                onClick={navigateToAbout}
                className="block w-full text-left py-2 text-[#1A1A1A] hover:text-[#0066FF] transition-colors"
              >
                About
              </button>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-2 text-[#1A1A1A] hover:text-[#0066FF] transition-colors"
                >
                  Our Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection('services')}
                        className="block w-full text-left py-2 text-[#444444] hover:text-[#0066FF] transition-colors"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={navigateToContact}
                className="block w-full text-left py-2 text-[#1A1A1A] hover:text-[#0066FF] transition-colors"
              >
                Contact
              </button>

              <button
                onClick={navigateToCareers}
                className="block w-full text-left py-2 text-[#1A1A1A] hover:text-[#0066FF] transition-colors"
              >
                Careers
              </button>

              <button
                onClick={navigateToBlog}
                className="block w-full text-left py-2 text-[#1A1A1A] hover:text-[#0066FF] transition-colors"
              >
                Blog
              </button>

              <Button
                className="w-full bg-[#0066FF] hover:bg-[#004FCC] text-white shadow-md"
              >
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </nav>
      <div className="h-20"></div>
    </>
  );
}