"use client";
import React from 'react';
import VisaHero from '@/components/VisaHero';
import VisaCountryCards from '@/components/VisaCountryCards';
import CountryGrid from '@/components/CountryGrid';
import VisaProcess from '@/components/VisaProcess';


import { ArrowRight } from 'lucide-react';

export default function VisaPage() {
  return (
    <main className="min-h-screen bg-white">
      <VisaHero />
      <VisaCountryCards />
      <CountryGrid />
      <VisaProcess />
     

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "Pakistan Tourist Visa", d: "Your main point of reference is going to be NADRA – the National Database & Registration Authority." },
              { t: "Upper Dir Destinations", d: "Exploring the warm-summer humid continental climate regions during the middle of the year." },
              { t: "Exploring Hidden Gems", d: "Pakistan — a country of rich heritage with threads from many faiths woven through its fabric." },
            ].map((card, i) => (
              <div key={i} className="bg-[#003366] text-white p-10 rounded-[2.5rem] shadow-2xl hover:bg-[#D58267] transition-all duration-500 group">
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{card.t}</h3>
                <p className="text-gray-200 mb-8 font-medium leading-relaxed group-hover:text-white">{card.d}</p>
                <button className="flex items-center gap-2 font-black text-sm uppercase tracking-widest border-b-2 border-[#D58267] group-hover:border-[#003366] pb-1">
                  READ MORE <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-[#D58267]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">Start Your Journey Today</h2>
          <button className="bg-[#003366] text-white px-12 py-5 rounded-full font-black text-2xl hover:bg-white hover:text-[#003366] transition-all shadow-2xl">
            CONTACT OUR EXPERTS
          </button>
        </div>
      </section>

    </main>
  );
}