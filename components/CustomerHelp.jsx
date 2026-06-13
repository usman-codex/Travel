"use client";
import React from 'react';
import { motion } from 'framer-motion';

const helpPoints = [
  "Personalized Trip Planning", "Expert Destination Advice", "Hassle-Free Booking", 
  "Budget-Friendly Options", "24/7 Customer Support", "Local Expertise", 
  "Exclusive Deals and Discounts", "Visa and Documentation Assistance", 
  "Language Support", "Group Travel Coordination", "Memorable Experiences", 
  "Insider Tips", "Safety Assurance", "Seamless Transfers"
];

const CustomerHelp = () => {
  return (
    <section className="py-24 bg-white"> 
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
         
          <h2 className="text-4xl md:text-5xl font-black text-[#003366] uppercase tracking-tighter">
            How We Help Our Customer
          </h2>
         
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            At Travel Operations, we are dedicated to making your travel experiences seamless and memorable.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-6">
          {helpPoints.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center gap-5 group cursor-pointer bg-gray-50 p-4 rounded-xl hover:bg-[#003366] transition-all duration-300"
            >
             
              <div className="w-3 h-3 rounded-full bg-[#D4AF37] group-hover:scale-125 group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_#D4AF37]"></div>
              
             
              <span className="text-xl font-bold text-gray-700 group-hover:text-white transition-colors duration-300">
                {point}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerHelp;