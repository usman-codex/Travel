"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const HajjHero = () => {
  const [index, setIndex] = useState(0);
  const images = ["/images/hajj.jpg", "/images/umrah.jpg"];

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center pt-24">
      <AnimatePresence mode="wait">
        <motion.div key={index} className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.3 }} animate={{ scale: 1 }} transition={{ duration: 5 }}
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </AnimatePresence>
     
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1 initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} className="text-5xl md:text-9xl font-black uppercase mb-4 tracking-tighter">
          Hajj Packages 2025
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="text-xl md:text-4xl font-bold italic text-[#D58267]">
          A Journey of Faith, Unity, and Togetherness
        </motion.p>
      </div>
    </section>
  );
};
export default HajjHero;