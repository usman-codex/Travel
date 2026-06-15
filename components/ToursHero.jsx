
"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const toursSlides = [
  { id: 1, image: "/images/tour1.jpg", title: "Global Adventures", subtitle: "Explore the World with Travel Operations Tours" },
  { id: 2, image: "/images/tour2.jpg", title: "Unforgettable Journeys", subtitle: "Crafting Memories That Last a Lifetime" },
  { id: 3, image: "/images/tour3.jpg", title: "Discover New Horizons", subtitle: "Premium International Tour Packages Just For You" },
];

const ToursHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === toursSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div key={current} className="relative h-full w-full">
          
          
          <motion.div
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${toursSlides[current].image})` }}
          >
           
            <div className="absolute inset-0 bg-[#003366]/40"></div>
          </motion.div>

       
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black text-white mb-4 drop-shadow-2xl uppercase tracking-tighter"
            >
              {toursSlides[current].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-3xl text-[#D4AF37] font-bold drop-shadow-lg italic"
            >
              {toursSlides[current].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

     
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {toursSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 transition-all duration-500 rounded-full ${
              current === index ? "w-10 bg-[#D4AF37]" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ToursHero;