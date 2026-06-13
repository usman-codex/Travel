
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const row1Tours = [
  { id: 1, country: "THAILAND", title: "Bangkok Tour Package | 4 Days", price: "$199", location: "Bangkok", image: "/images/travel1.jpg", flag: "🇹🇭" },
  { id: 2, country: "AZERBAIJAN", title: "Baku Tour Package | 5 Days", price: "$310", location: "Baku", image: "/images/travel2.jpg", flag: "🇦🇿" },
  { id: 3, country: "SRI LANKA", title: "Colombo Tour Package | 5 Days", price: "$282", location: "Colombo", image: "/images/tour1.jpg", flag: "🇱🇰" },
  { id: 4, country: "MALDIVES", title: "Luxury Resort Stay", price: "$1200", location: "Male", image: "/images/tour2.jpg", flag: "🇲🇻" },
];

const row2Tours = [
  { id: 5, country: "TURKEY", title: "Istanbul Honeymoon Package", price: "$450", location: "Istanbul", image: "/images/tour3.jpg", flag: "🇹🇷" },
  { id: 6, country: "MALAYSIA", title: "Kuala Lumpur Special", price: "$250", location: "Kuala Lumpur", image: "/images/tour4.jpg", flag: "🇲🇾" },
  { id: 7, country: "UZBEKISTAN", title: "Tashkent & Samarkand", price: "$399", location: "Tashkent", image: "/images/tour6.jpg", flag: "🇺🇿" },
  { id: 8, country: "DUBAI", title: "Luxury Desert Safari", price: "$550", location: "Dubai", image: "/images/tour6.jpg", flag: "🇦🇪" },
];


const TourRow = ({ title, toursData }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 3 >= toursData.length ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? toursData.length - 3 : prev - 1));

  const visibleTours = toursData.slice(index, index + 3);

  return (
    <div className="relative group mb-16">
    
      <button onClick={prev} className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl text-gray-400 hover:text-red-600 transition opacity-0 group-hover:opacity-100">
        <ChevronLeft size={28} />
      </button>
      <button onClick={next} className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl text-gray-400 hover:text-red-600 transition opacity-0 group-hover:opacity-100">
        <ChevronRight size={28} />
      </button>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {visibleTours.map((tour) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 group/card flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={tour.image} className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-blue-800 text-white text-[10px] font-bold px-3 py-1 rounded-sm">FEATURED</div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-xl shadow-md">{tour.flag}</div>
              
                <div className="absolute bottom-[-2px] w-full">
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-14 w-full fill-white">
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6 text-center grow">
                <h4 className="text-red-600 font-extrabold text-xl mb-1 uppercase tracking-tighter">{tour.country}</h4>
                <p className="text-gray-800 font-bold text-lg mb-4 h-12 line-clamp-2">{tour.title}</p>
                <div className="flex justify-between items-center border-t pt-4 text-sm font-semibold">
                  <div className="flex items-center gap-1 text-gray-500"><MapPin size={14} className="text-red-600" /> {tour.location}</div>
                  <div className="text-blue-800 italic font-bold">From {tour.price}</div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1 text-gray-400 font-bold"><Users size={16} /> 10</div>
                  <button className="flex items-center gap-1 text-gray-800 font-extrabold hover:text-red-600 transition">
                    Explore <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const PopularTours = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Travel Air Offer Most Popular Tours</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        
        <TourRow toursData={row1Tours} />


        <TourRow toursData={row2Tours} />
      </div>
    </section>
  );
};

export default PopularTours;