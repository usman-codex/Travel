"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const visaData = [
  { id: 1, country: "UK", type: "Visit Visa", image: "/images/travel1.jpg", slug: "uk-visa-guide" },
  { id: 2, country: "USA", type: "Visit Visa", image: "/images/travel2.jpg", slug: "usa-visa-guide" },
  { id: 3, country: "Dubai", type: "Visit Visa", image: "/images/umrah.jpg", slug: "dubai-visa-guide" },
  { id: 4, country: "Canada", type: "Visit Visa", image: "/images/tour1.jpg", slug: "canada-visa-guide" },
];

const VisaConsultancy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 3 >= visaData.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? visaData.length - 3 : prev - 1));
  };

  const visibleVisas = visaData.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-black text-[#003366] uppercase tracking-tighter">
            Visa Consultancy Services
          </h2>
          
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-lg font-medium">
            Learn about our comprehensive visa consulting services, which we provide worldwide.
          </p>
        </div>

        <div className="relative group">
         
          <button onClick={handlePrev} className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white text-[#003366] p-4 rounded-xl shadow-xl hover:bg-[#D4AF37] hover:text-white transition-all duration-300 group-hover:opacity-100 opacity-0 border border-gray-100">
            <ChevronLeft size={28} />
          </button>
          <button onClick={handleNext} className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white text-[#003366] p-4 rounded-xl shadow-xl hover:bg-[#D4AF37] hover:text-white transition-all duration-300 group-hover:opacity-100 opacity-0 border border-gray-100">
            <ChevronRight size={28} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {visibleVisas.map((visa) => (
                <motion.div
                  key={visa.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative h-[500px] rounded-3xl overflow-hidden cursor-pointer group/mainCard shadow-2xl"
                >
                  <img src={visa.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover/mainCard:scale-110" alt={visa.country} />
                  
                 
                  <div className="absolute inset-0 bg-[#003366]/20 group-hover/mainCard:bg-[#003366]/50 transition-all duration-500"></div>

                  <div className="absolute bottom-8 left-6 right-6">
                   
                    <div className="bg-white p-8 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-700 transform translate-y-33 group-hover/mainCard:translate-y-0 border-b-8 border-[#D4AF37]">
                      
                     
                      <p className="text-[#D4AF37] font-black text-sm uppercase tracking-[0.2em] mb-2">{visa.type}</p>
                      
                      
                      <h3 className="text-3xl font-black text-[#003366] mb-4">{visa.country}</h3>
                      
                      <div className="opacity-0 group-hover/mainCard:opacity-100 transition-opacity duration-500 delay-300">
                        <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">
                          Experience seamless {visa.country} visa processing with our expert consultancy services and documentation support.
                        </p>
                      </div>

                     
                      <Link href={`/blog/${visa.slug}`} className="absolute bottom-8 right-8 bg-[#003366] text-white p-3 rounded-full hover:bg-[#D4AF37] hover:scale-110 transition-all duration-300 shadow-lg">
                        <ArrowUpRight size={24} strokeWidth={3} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaConsultancy;