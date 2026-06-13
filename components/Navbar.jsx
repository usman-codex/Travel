"use client";
import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tours', href: '/tours' },
    { name: 'Hajj', href: '/hajj' },
    { name: 'Umrah Packages', href: '/umrah-packages' },
    { name: 'Visa', href: '/visa' },
    { name: 'Destination', href: '/destination' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/923007800017", "_blank"); 
  };

  return (
    <nav className="fixed w-full bg-[#003366] shadow-lg z-50"> 
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-24">
        
      
        <div className="shrink-0 bg-white p-2 rounded-lg shadow-sm">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-16 w-auto"
            />
          </Link>
        </div>

        
        <ul className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link 
                href={link.href} 
                className="text-[17px] font-bold text-white transition-colors duration-300 group-hover:text-[#FFD700]" 
              > 
                {link.name}
              </Link>
              
             
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

      
        <button 
          onClick={handleWhatsApp}
          className="bg-[#D4AF37] text-[#003366] px-6 py-3 rounded flex items-center gap-2 font-black text-lg hover:bg-[#FFD700] transition-all shadow-xl active:scale-95"
        > 
          <Phone size={22} fill="#003366" />
          0300 7800017
        </button>

      </div>
    </nav>
  );
};

export default Navbar;