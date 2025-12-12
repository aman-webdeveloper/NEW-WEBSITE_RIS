import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import risLogo from 'figma:asset/a295dce35b026ce22eb89db4baeb91c69c5e6936.png';

interface FooterProps {
  currentPage?: 'home' | 'about' | 'services' | 'contact' | 'careers' | 'blog';
  setCurrentPage?: (page: 'home' | 'about' | 'services' | 'contact' | 'careers' | 'blog') => void;
}

export function Footer({ currentPage, setCurrentPage }: FooterProps = {}) {
  const scrollToSection = (id: string) => {
    // If we have page navigation functions, navigate to home first if needed
    if (setCurrentPage && currentPage !== 'home') {
      setCurrentPage('home');
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
  };

  const navigateToAbout = () => {
    if (setCurrentPage) {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    if (setCurrentPage) {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToServices = () => {
    if (setCurrentPage) {
      setCurrentPage('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToContact = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToCareers = () => {
    if (setCurrentPage) {
      setCurrentPage('careers');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToBlog = () => {
    if (setCurrentPage) {
      setCurrentPage('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative bg-[#1F1F1F] border-t border-[#2A2A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={risLogo} alt="RIS Logo" className="w-12 h-12 object-contain" />
              <div>
                <div className="text-white">Random IT Solutions</div>
                <div className="text-xs text-[#0066FF]">Pvt. Ltd.</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-[#0066FF] mt-1 flex-shrink-0 group-hover:text-[#004FCC] transition-colors" />
                <div>
                  <a
                    href="mailto:raghav@randomitsolutions.com"
                    className="text-[#D9D9D9] hover:text-white transition-colors break-all"
                  >
                    raghav@randomitsolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-[#0066FF] mt-1 flex-shrink-0 group-hover:text-[#004FCC] transition-colors" />
                <div className="space-y-1">
                  <a
                    href="tel:+918448870418"
                    className="block text-[#D9D9D9] hover:text-white transition-colors"
                  >
                    +91 8448870418
                  </a>
                  <a
                    href="tel:+918507541015"
                    className="block text-[#D9D9D9] hover:text-white transition-colors"
                  >
                    +91 8507541015
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#0066FF] mt-1 flex-shrink-0 group-hover:text-[#004FCC] transition-colors" />
                <address className="text-gray-400 not-italic group-hover:text-white transition-colors">
                  2nd Floor, M46, Block M, Old DLF Colony,<br />
                  Sector 14, Gurugram, Haryana 122001
                </address>
              </div>
            </div>
          </div>

          {/* Center Column - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-xl">Quick Links</h3>
            <nav className="space-y-3">
              <button
                onClick={navigateToHome}
                className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-200"
              >
                Home
              </button>
              <button
                onClick={navigateToAbout}
                className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-200"
              >
                About
              </button>
              <button
                onClick={navigateToServices}
                className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-200"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-200"
              >
                Contact
              </button>
              <button
                onClick={navigateToCareers}
                className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-200"
              >
                Careers
              </button>
              <button
                onClick={navigateToBlog}
                className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-200"
              >
                Blog
              </button>
            </nav>
          </div>

          {/* Right Column - Follow Us */}
          <div className="space-y-6">
            <h3 className="text-white text-xl">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-slate-900/50 backdrop-blur-sm rounded-full border border-blue-500/20 hover:border-blue-500/50 flex items-center justify-center group transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-900/50 backdrop-blur-sm rounded-full border border-blue-500/20 hover:border-pink-500/50 flex items-center justify-center group transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-900/50 backdrop-blur-sm rounded-full border border-blue-500/20 hover:border-red-500/50 flex items-center justify-center group transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-slate-900/50 backdrop-blur-sm rounded-full border border-blue-500/20 hover:border-sky-500/50 flex items-center justify-center group transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-sky-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-500/20">
          <div className="space-y-3">
            <p className="text-center text-gray-500">
              © 2025 Random IT Solutions Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-center text-gray-600 text-sm italic">
              Note: All logo images will be updated using only the exact images provided by the client.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </footer>
  );
}