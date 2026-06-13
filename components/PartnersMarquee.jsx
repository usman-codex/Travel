
"use client";
import React from 'react';

const partners = [
  "/images/marq-1.png", 
  "/images/marq-2.png", 
  "/images/marq-3.png", 
  "/images/marq-4.png", 
  "/images/marq-5.png", 
  "/images/marq-6.png", 
  "/images/marq-7.png", 
  "/images/marq-8.png"
];

const PartnersMarquee = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          
          <h2 className="text-4xl md:text-5xl font-black text-[#003366] uppercase tracking-tighter">
            Our Partners
          </h2>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

     
      <div className="relative flex overflow-hidden group">
        <div className="flex space-x-20 animate-marquee py-5 whitespace-nowrap">
         
          {[...partners, ...partners].map((logo, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center h-20 w-auto">
              <img 
                src={logo} 
                alt="Partner Logo" 
                className="h-full w-auto object-contain transition-transform duration-300 hover:scale-110" 
               
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        /* Hover karne par marquee ruk jaye gi */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersMarquee;