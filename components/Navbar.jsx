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
   
    <nav className="fixed w-full bg-white shadow-sm z-50 border-b border-gray-100"> 
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-20">
        

        <div className="shrink-0">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-16 w-auto object-contain" 
            />
          </Link>
        </div>

      
        <ul className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link 
                href={link.href} 
                className="text-[15px] font-bold text-[#003366] transition-colors duration-300 group-hover:text-[#D58267] uppercase tracking-wide" 
              > 
                {link.name}
              </Link>
              
       
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D58267] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

    
        <button 
          onClick={handleWhatsApp}
          className="bg-[#D58267] text-white px-5 py-2.5 rounded-full flex items-center gap-2 font-bold text-sm hover:bg-[#003366] transition-all shadow-md active:scale-95"
        > 
          <Phone size={18} fill="white" />
          0300 7800017
        </button>

      </div>
    </nav>
  );
};

export default Navbar;