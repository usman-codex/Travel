"use client";
import React from 'react';

const countries = [
  { name: "Malaysia", flag: "🇲🇾" }, { name: "Singapore", flag: "🇸🇬" },
  { name: "Azerbaijan", flag: "🇦🇿" }, { name: "Cambodia", flag: "🇰🇭" },
  { name: "UAE", flag: "🇦🇪" }, { name: "Indonesia", flag: "🇮🇩" },
  { name: "Egypt", flag: "🇪🇬" }, { name: "Sri Lanka", flag: "🇱🇰" },
  { name: "Thailand", flag: "🇹🇭" }, { name: "Turkey", flag: "🇹🇷" },
  { name: "Uzbekistan", flag: "🇺🇿" }, { name: "Vietnam", flag: "🇻🇳" }
];

const CountryGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#003366] mb-4 uppercase">Countries We Offer Visit Visas For</h2>
        <div className="w-24 h-1.5 bg-[#D58267] mx-auto mb-16 rounded-full"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((c, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-3xl flex items-center gap-4 hover:bg-[#D58267] hover:text-white transition-all duration-300 group cursor-default shadow-sm hover:shadow-xl">
              <span className="text-4xl">{c.flag}</span>
              <span className="text-xl font-black group-hover:text-white text-[#003366]">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CountryGrid;