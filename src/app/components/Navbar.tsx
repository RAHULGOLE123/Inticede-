'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('header')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`bg-white sticky top-2 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md border-b border-gray-200' : 'shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          <nav className="hidden lg:flex space-x-8 mt-6">
            <Link 
              href="/about" 
              className="text-[#1f3a93] hover:text-[#2e395f] font-medium transition-all duration-200 hover:underline underline-offset-4 decoration-2"
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="text-[#1f3a93] hover:text-[#2e395f] font-medium transition-all duration-200 hover:underline underline-offset-4 decoration-2"
            >
              Services
            </Link>
            <Link 
              href="/products" 
              className="text-[#1f3a93] hover:text-[#2e395f] font-medium transition-all duration-200 hover:underline underline-offset-4 decoration-2"
            >
              Products
            </Link>
            <Link 
              href="/clients" 
              className="text-[#1f3a93] hover:text-[#2e395f] font-medium transition-all duration-200 hover:underline underline-offset-4 decoration-2"
            >
              Clients
            </Link>
          </nav>
          
          <div className="flex-1 lg:flex-none lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/assets/inticedelogo.png" 
                alt="Logo" 
                width={64}
                height={64}
                className="h-16 w-auto"
              />
            </Link>
          </div> 
          
          <nav className="hidden lg:flex space-x-8 mt-6">
            <Link 
              href="/network" 
              className="text-[#1f3a93] hover:text-[#2e395f]  font-medium transition-all duration-200 hover:underline underline-offset-4 decoration-2"
            >
              Network
            </Link>
            <Link 
              href="/events" 
              className="text-[#1f3a93] hover:text-[#2e395f]  font-medium transition-all duration-200 hover:underline underline-offset-4 decoration-2"
            >
              Events
            </Link>
            <Link 
              href="/connect" 
              className="text-[#1f3a93] hover:text-[#2e395f]  font-medium transition-all duration-200 hover:underline underline-offset-4 decoration-2"
            >
              Connect
            </Link>
            <Link 
              href="/careers" 
              className="text-[#1f3a93] hover:text-[#2e395f]  font-medium transition-all duration-200 hover:underline underline-offset-4 decoration-2"
            >
              Careers
            </Link>
          </nav>
         
          <button
            type="button"
            className="lg:hidden hover:bg-gray-100 transition-colors duration-200 p-2 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#1f3a93]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1f3a93]" />
            )}
          </button>
        </div>
        
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-100 bg-gray-50/50">
            <nav className="flex flex-col space-y-1">
              <Link 
                href="/about" 
                className="px-4 py-3 text-[#1f3a93] hover:text-[#2e395f]  hover:bg-white rounded-lg mx-2 transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="px-4 py-3 text-[#1f3a93] hover:text-[#2e395f]  hover:bg-white rounded-lg mx-2 transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link 
                href="#products" 
                className="px-4 py-3 text-[#1f3a93] hover:text-[#2e395f]  hover:bg-white rounded-lg mx-2 transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Products
              </Link>
              <Link 
                href="#clients" 
                className="px-4 py-3 text-[#1f3a93] hover:text-[#2e395f]  hover:bg-white rounded-lg mx-2 transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Clients
              </Link>
              <div className="border-t border-gray-200 my-2 mx-2"></div>
              <Link 
                href="#network" 
                className="px-4 py-3 text-[#1f3a93] hover:text-[#2e395f]  hover:bg-white rounded-lg mx-2 transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Network
              </Link>
              <Link 
                href="#events" 
                className="px-4 py-3 text-[#1f3a93] hover:text-[#2e395f]  hover:bg-white rounded-lg mx-2 transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Events
              </Link>
              <Link 
                href="#connect" 
                className="px-4 py-3 text-[#1f3a93] hover:text-[#2e395f]  hover:bg-white rounded-lg mx-2 transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Connect
              </Link>
              <Link 
                href="#careers" 
                className="px-4 py-3 text-[#1f3a93] hover:text-[#2e395f]  hover:bg-white rounded-lg mx-2 transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Careers
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;