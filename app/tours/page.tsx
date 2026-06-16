
import React from 'react';
import ToursHero from '@/components/ToursHero';
import ToursListing from '@/components/ToursListing';
import WhyChooseUs from '@/components/WhyChooseUs';


export default function ToursPage() {
  return (
    <main className="bg-white min-h-screen">
      <ToursHero />

     
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-[#003366] mb-6 uppercase tracking-tighter">
          Top International Tour Packages from Pakistan 2025
        </h2>
        <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto mb-10 rounded-full"></div>
        
        <p className="max-w-5xl mx-auto text-gray-600 text-lg leading-relaxed font-medium">
          Discover the best international tour packages from Pakistan with Travel Operations in 2025. 
          We offer a range of travel experiences to suit every budget. Whether you want an exciting trip to Bangkok, 
          an adventure in Sri Lanka, a romantic honeymoon in Istanbul, or a cultural tour of Azerbaijan, 
          we have the perfect package for you.
        </p>
      </section>
      <ToursListing />
      <WhyChooseUs />
     
    </main>
  );
}