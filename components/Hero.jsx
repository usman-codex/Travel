
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: "/images/umrah.jpg",
    title: "21 Days Umrah Packages 2025",
    desc: "We offer a 21-days package that offers spiritual fulfillment and great care at every stage of the sublime journey of Umrah.",
    btnText: "Let's Get Started",
    titleColor: "text-white"
  },
  {
    id: 2,
    image: "/images/hajj.jpg", 
    title: "Hajj Packages 2025",
    desc: "In 2025, go on the journey of a lifetime with Travel Operations, your dependable travel companion for a really remarkable Haj.",
    btnText: "Let's Get Started",
    titleColor: "text-white"
  },
  {
    id: 3,
    image: "/images/travel1.jpg", 
    title: "Uzbekistan Tour 8 Days 7 Nights",
    desc: "Explore Tashkent, Samarkand & Bukhara with exclusive flight + hotel packages!",
    btnText: "Let's Get Started",
    titleColor: "text-red-600" 
  },
  {
    id: 4,
    image: "/images/travel1.jpg", 
    title: "Sri Lanka 5 Days 4 Nights Tour",
    desc: "Discover the beauties of Sri Lanka with Travel Operations. Our tour promises unforgettable experiences!",
    btnText: "Let's Get Started",
    titleColor: "text-white"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="relative h-full w-full"
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
          >
           
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>

          <div className="relative z-10 h-full container mx-auto px-6 md:px-16 flex items-center">
            <div className="max-w-2xl text-left">
              
             
              <motion.h1 
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={`text-4xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl ${slides[current].titleColor}`}
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-lg md:text-2xl text-white mb-10 leading-relaxed font-medium drop-shadow-lg"
              >
                {slides[current].desc}
              </motion.p>

            
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <button className="bg-[#0b33ad] text-white px-10 py-4 rounded font-bold text-xl hover:bg-red-600 transition-all duration-300 shadow-2xl active:scale-95">
                  {slides[current].btnText}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 transition-all duration-500 rounded-full ${
              current === index ? "w-10 bg-white" : "w-2.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;