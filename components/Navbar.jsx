"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tours', href: '/tours' },
    { name: 'Umrah Packages', href: '/umrah-packages' },
    { name: 'Visa', href: '/visa' },
    { name: 'Destination', href: '/destination' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white shadow-sm z-50 border-b border-gray-100"> 
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between h-20">
          <div className="shrink-0">
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </Link>
          </div>

          <ul className="hidden lg:flex items-center space-x-8">
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

          <div className="flex items-center gap-4">
           
            <Link href="/book-now" className="hidden md:flex">
              <button className="bg-[#D58267] text-white px-6 py-2.5 rounded-full flex items-center gap-2 font-black text-sm hover:bg-[#003366] transition-all shadow-md active:scale-95 uppercase tracking-widest"> 
                <CalendarCheck size={18} />
                Book Now
              </button>
            </Link>

            <button 
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-[#003366] hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm lg:hidden"
            />

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="font-black text-[#003366] text-xl tracking-tighter">MENU</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col px-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-bold text-[#003366] hover:text-[#D58267] transition-colors py-4 border-b border-gray-50 uppercase tracking-wider last:border-0"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <Link href="/book-now" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-[#D58267] text-white py-4 rounded-xl flex items-center justify-center gap-3 font-black text-lg shadow-lg active:scale-95 uppercase">
                    <CalendarCheck size={22} />
                    Book Now
                  </button>
                </Link>
                <div className="mt-4 text-center">
                   <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Travel Operations.pk</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;