
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlaneTakeoff, Globe2 } from 'lucide-react';
import Link from 'next/link';

const visaCountries = [
  { id: 1, name: "MALAYSIA", image: "/images/tour1.jpg", flag: "🇲🇾", price: "15,000", type: "Tourist Visa" },
  { id: 2, name: "SINGAPORE", image: "/images/tour2.jpg", flag: "🇸🇬", price: "22,000", type: "E-Visa" },
  { id: 3, name: "THAILAND", image: "/images/tour3.jpg", flag: "🇹🇭", price: "18,500", type: "Tourist Visa" },
  { id: 4, name: "TURKEY", image: "/images/tour4.jpg", flag: "🇹🇷", price: "45,000", type: "Sticker Visa" },
  { id: 5, name: "DUBAI (UAE)", image: "/images/tour6.jpg", flag: "🇦🇪", price: "35,000", type: "30 Days E-Visa" },
  { id: 6, name: "AZERBAIJAN", image: "/images/tour1.jpg", flag: "🇦🇿", price: "12,000", type: "E-Visa" },
  { id: 7, name: "UNITED KINGDOM", image: "/images/tour2.jpg", flag: "🇬🇧", price: "65,000", type: "Standard Visitor" },
  { id: 8, name: "USA", image: "/images/tour3.jpg", flag: "🇺🇸", price: "75,000", type: "B1/B2 Visa" },
];

const VisaCountryCards = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Globe2 className="text-[#D58267]" size={28} />
             <span className="text-[#D58267] font-black tracking-[0.3em] uppercase text-sm">Explore Destinations</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#003366] uppercase tracking-tighter">
            Apply for Your Next Visa
          </h2>
          <div className="w-24 h-2 bg-[#D58267] mx-auto mt-6 rounded-full shadow-lg"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {visaCountries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 group flex flex-col h-full"
            >
              
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={country.image} 
                  alt={country.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                
                <div className="absolute top-5 left-5 bg-white text-[#003366] text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg tracking-widest uppercase">
                  {country.type}
                </div>

              
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-2 rounded-full text-2xl shadow-xl flex items-center justify-center w-12 h-12 border border-white/50">
                  {country.flag}
                </div>
              </div>

              <div className="p-8 flex flex-col grow text-center">
                <h3 className="text-2xl font-black text-[#003366] mb-2 tracking-tight group-hover:text-[#D58267] transition-colors duration-300 uppercase">
                  {country.name}
                </h3>
                
                <div className="flex items-center justify-center gap-2 mb-6">
                  <PlaneTakeoff size={16} className="text-[#D58267]" />
                  <span className="text-gray-500 font-bold text-sm tracking-wide">Starting from</span>
                </div>

                <div className="mt-auto">
                  <div className="text-3xl font-black text-[#003366] mb-8 tracking-tighter">
                    <span className="text-[#D58267] text-lg mr-1">PKR</span>{country.price}
                  </div>
                  
                  <Link href="/book-now">
                    <button className="w-full bg-[#003366] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest group-hover:bg-[#D58267] transition-all duration-500 shadow-xl active:scale-95 flex items-center justify-center gap-2">
                      Check Documents <ArrowRight size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaCountryCards;