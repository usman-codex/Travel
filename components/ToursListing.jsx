"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Star, MapPin } from 'lucide-react';
import Link from 'next/link';


const TourCard = ({ tour }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 group h-full"
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img 
          src={tour.image} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          alt={tour.title} 
        />
        <div className="absolute top-4 left-4 bg-[#003366] text-white text-[10px] font-black px-3 py-1 rounded-sm tracking-widest">
          FEATURED
        </div>
     
        <div className="absolute bottom-[-2px] w-full">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-12 md:h-14 w-full fill-white">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
          </svg>
        </div>
      </div>

      <div className="p-5 md:p-8 text-center grow flex flex-col">
        <h4 className="text-[#D4AF37] font-black text-xs uppercase tracking-widest mb-2">
          {tour.country}
        </h4>
        <p className="text-[#003366] font-black text-base md:text-lg mb-4 h-12 md:h-14 line-clamp-2 leading-tight uppercase">
          {tour.title}
        </p>
        
        <div className="mt-auto border-t pt-4 flex justify-between items-center text-xs font-bold text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-[#D4AF37]" /> {tour.duration}
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={14} fill="currentColor" /> 4.9
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 gap-2">
           <div className="text-[#003366] font-black text-lg md:text-xl whitespace-nowrap">
             PKR {tour.price}
           </div>
           <Link 
             href={`/tours/${tour.id}`} 
             className="bg-[#003366] text-white p-3 rounded-full hover:bg-[#D4AF37] transition-all active:scale-90 shadow-lg"
           >
             <ArrowRight size={20} />
           </Link>
        </div>
      </div>
    </motion.div>
  );
};


const TourRow = ({ title, data }) => {
  const [index, setIndex] = useState(0);
  

  const next = () => setIndex((prev) => (prev + 1 >= data.length - 3 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? data.length - 4 : prev - 1));

  return (
    <div className="mb-16 md:mb-24 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-l-8 border-[#D4AF37] pl-4 md:pl-6">
        <h3 className="text-2xl md:text-4xl font-black text-[#003366] uppercase tracking-tighter">
          {title}
        </h3>
        
        <div className="flex gap-3 self-end sm:self-auto">
          <button 
            onClick={prev} 
            className="p-3 rounded-xl border-2 border-[#003366] text-[#003366] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all shadow-md active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next} 
            className="p-3 rounded-xl border-2 border-[#003366] text-[#003366] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-all shadow-md active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <AnimatePresence mode="wait">
          {data.slice(index, index + 4).map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};


const ToursListing = () => {
  const asiaTours = [
    { id: "1", country: "THAILAND", title: "Bangkok & Pattaya | Premium", price: "195,000", image: "/images/tour1.jpg", duration: "5 Days" },
    { id: "2", country: "MALAYSIA", title: "Kuala Lumpur Special", price: "185,000", image: "/images/tour2.jpg", duration: "5 Days" },
    { id: "3", country: "SRI LANKA", title: "Colombo & Kandy Tour", price: "175,000", image: "/images/tour3.jpg", duration: "6 Days" },
    { id: "4", country: "UZBEKISTAN", title: "Samarkand Cultural Hub", price: "280,000", image: "/images/tour4.jpg", duration: "8 Days" },
    { id: "5", country: "VIETNAM", title: "Ha Long Bay Adventure", price: "230,000", image: "/images/tour6.jpg", duration: "6 Days" },
    { id: "11", country: "SINGAPORE", title: "Modern City Escape", price: "210,000", image: "/images/tour1.jpg", duration: "4 Days" },
  ];

  const middleEastTours = [
    { id: "6", country: "TURKEY", title: "Istanbul Honeymoon", price: "350,000", image: "/images/tour4.jpg", duration: "7 Days" },
    { id: "7", country: "DUBAI", title: "Luxury Desert Safari", price: "220,000", image: "/images/tour1.jpg", duration: "5 Days" },
    { id: "8", country: "AZERBAIJAN", title: "Baku Modern City Tour", price: "215,000", image: "/images/tour2.jpg", duration: "6 Days" },
    { id: "9", country: "EGYPT", title: "Pyramids & Nile Cruise", price: "390,000", image: "/images/tour3.jpg", duration: "7 Days" },
    { id: "10", country: "QATAR", title: "Doha Heritage Luxury", price: "160,000", image: "/images/tour6.jpg", duration: "4 Days" },
    { id: "12", country: "SAUDI ARABIA", title: "Al Ula Historical", price: "410,000", image: "/images/tour4.jpg", duration: "5 Days" },
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <TourRow title="Asia Best Sellers" data={asiaTours} />
        <TourRow title="Middle East & Europe" data={middleEastTours} />
      </div>
    </section>
  );
};

export default ToursListing;