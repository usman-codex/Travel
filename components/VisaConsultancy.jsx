
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const visaData = [
  { id: 1, country: "UK", type: "Visit Visa", image: "/images/travel1.jpg", slug: "uk-visa-guide" },
  { id: 2, country: "USA", type: "Visit Visa", image: "/images/travel2.jpg", slug: "usa-visa-guide" },
  { id: 3, country: "Dubai", type: "Visit Visa", image: "/images/umrah.jpg", slug: "dubai-visa-guide" },
  { id: 4, country: "Canada", type: "Visit Visa", image: "/images/srilanka.jpg", slug: "canada-visa-guide" },
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Visa Consultancy Services</h2>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">Learn about our comprehensive visa consulting services worldwide.</p>
        </div>

        <div className="relative group">
          <button onClick={handlePrev} className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-md shadow-lg hover:bg-red-600 hover:text-white transition group-hover:opacity-100 opacity-0">
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNext} className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-md shadow-lg hover:bg-red-600 hover:text-white transition group-hover:opacity-100 opacity-0">
            <ChevronRight size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {visibleVisas.map((visa) => (
                <motion.div
                  key={visa.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative h-[450px] rounded-2xl overflow-hidden cursor-pointer group/mainCard"
                >
                  <img src={visa.image} className="w-full h-full object-cover transition-transform duration-700 group-hover/mainCard:scale-110" />
                  
                  <div className="absolute inset-0 bg-black/20 group-hover/mainCard:bg-black/40 transition-all duration-500"></div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white p-6 rounded-xl shadow-2xl relative overflow-hidden transition-all duration-500 transform translate-y-24 group-hover/mainCard:translate-y-0">
                      
                      <p className="text-red-600 font-bold text-lg mb-1">{visa.type}</p>
                      <h3 className="text-3xl font-black text-gray-900 mb-4">{visa.country}</h3>
                      
                      <div className="opacity-0 group-hover/mainCard:opacity-100 transition-opacity duration-500 delay-200">
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                          Experience seamless {visa.country} visa processing with our expert consultancy services.
                        </p>
                      </div>

                      <Link href={`/blog/${visa.slug}`} className="absolute bottom-6 right-6 bg-red-600 text-white p-3 rounded-full hover:bg-blue-800 transition-colors shadow-lg">
                        <ArrowUpRight size={20} />
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