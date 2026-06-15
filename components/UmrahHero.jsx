"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UmrahHero = () => {
  const [index, setIndex] = useState(0);
  const images = ["/images/umrah.jpg", "/images/hajj.jpg"];

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center pt-24 bg-black">
      <AnimatePresence mode="wait">
        <motion.div key={index} className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.3 }} animate={{ scale: 1 }} transition={{ duration: 6 }}
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
          <div className="absolute inset-0 bg-[#003366]/60"></div>
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1 initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} className="text-5xl md:text-8xl font-black uppercase mb-4 tracking-tighter">
          Umrah Packages
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="text-xl md:text-3xl font-bold italic text-[#D58267]">
          Journey to Umrah, Find Spiritual Peace
        </motion.p>
      </div>
    </section>
  );
};
export default UmrahHero;