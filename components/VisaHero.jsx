"use client";
import React from 'react';
import { motion } from 'framer-motion';

const VisaHero = () => {
  return (
    <section className="pt-32 pb-20 bg-[#f0f7ff]">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-black text-[#003366] leading-tight mb-6">
            Visit Visa Consultant in <span className="text-[#D58267]">Pakistan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-8">Fast & Reliable Services</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium">
            Looking for a trusted visit visa consultant? We are a professional visa agency helping clients get visit visas for top destinations like Malaysia, Singapore, Azerbaijan, Cambodia, and more. Our experienced team provides expert guidance, quick processing, and full support at every step.
          </p>
          <button className="bg-[#D58267] text-white px-10 py-4 rounded-full font-black text-xl hover:bg-[#003366] transition-all shadow-xl active:scale-95">
            GET A FREE CONSULTATION
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          className="lg:w-1/2"
        >
          <img src="/images/tour1.jpg" alt="Visa Consultant" className="rounded-[3rem] shadow-2xl border-[15px] border-white" />
        </motion.div>
      </div>
    </section>
  );
};
export default VisaHero;