// components/Navbar.jsx
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
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-24">
        
        
        <div className="shrink-0">
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
                className="text-[17px] font-bold text-gray-800 transition-colors duration-300 group-hover:text-red-600"
              >
                {link.name}
              </Link>
              
              <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        
        <button 
          onClick={handleWhatsApp}
          className="bg-[#e31e24] text-white px-6 py-3 rounded flex items-center gap-2 font-bold text-lg hover:bg-red-700 transition shadow-lg"
        >
          <Phone size={22} fill="white" />
          0300 7800017
        </button>

      </div>
    </nav>
  );
};

export default Navbar;