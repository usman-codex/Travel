"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import DestinationHero from '@/components/DestinationHero';
import { destinationsData } from '@/data/destinations'; 

export default function DestinationPage() {
  return (
    <main className="bg-white min-h-screen">
      <DestinationHero />

      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="bg-gray-100 px-8 py-3 rounded-xl font-black text-[#003366] text-xs uppercase tracking-[0.2em] shadow-sm">
            Destination lists
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-[#003366] mt-8 uppercase tracking-tighter">
            Explore Destinations
          </h2>
          <div className="w-24 h-2 bg-[#D58267] mx-auto mt-6 rounded-full shadow-sm"></div>
          <p className="max-w-4xl mx-auto text-gray-500 mt-8 text-lg md:text-xl font-medium leading-relaxed">
            Explore the world with Travel Operations and our exciting range of tours. Discover captivating destinations in the United Kingdom, Canada, Singapore, the United States, Turkey, Dubai, Thailand, Italy, and Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {destinationsData.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group relative h-[500px] border-4 border-white"
            >
              <Link href={`/destination/${dest.slug}`} className="h-full w-full block">
                <img 
                  src={dest.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={dest.name} 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
                
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <p className="text-[#D58267] font-black text-sm uppercase tracking-widest mb-2">Travel to</p>
                  <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-tight">
                    {dest.name}
                  </h3>
                  
                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <span className="text-white/80 font-bold text-sm uppercase tracking-widest group-hover:text-[#D58267] transition-colors">
                      View Details
                    </span>
                    <div className="bg-white text-[#003366] p-4 rounded-full group-hover:bg-[#D58267] group-hover:text-white transition-all shadow-xl">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="py-20 bg-[#003366] text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tighter">
                Ready for your next <br /> <span className="text-[#D58267]">Grand Adventure?</span>
              </h2>
           </div>
           <Link href="/book-now">
             <button className="bg-[#D58267] text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-[#003366] transition-all shadow-2xl active:scale-95 uppercase">
               Book Now
             </button>
           </Link>
        </div>
      </section>
    </main>
  );
}