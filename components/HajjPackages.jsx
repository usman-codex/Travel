
"use client";
import React from 'react';
import { CheckCircle2, FileText, Star } from 'lucide-react';

const hajjData = [
  {
    name: "SILVER PACKAGE",
    image: "/images/tour1.jpg",
    prices: { quad: "2,250,000", double: "2,425,000", triple: "2,325,000" },
    highlights: ["Maktab A Category Makkah", "Swissotel Makkah near Jamarat", "3 time Buffet meal", "Azizia Accommodation"],
    docs: ["Machine Readable Passport", "Valid Nadra CNIC Copy", "4x3 Photographs", "Blood Group Report"]
  },
  {
    name: "GOLDEN PACKAGE",
    image: "/images/tour2.jpg",
    prices: { quad: "2,375,000", double: "2,625,000", triple: "2,475,000" },
    highlights: ["Makkah Clock Tower Stay", "Luxury Madinah Hotel", "VIP Transport", "Dedicated Guide"],
    docs: ["Passport Valid till 2026", "Nadra CNIC Copy", "Next of Kin Details", "Medical Certificate"]
  }
];

const HajjPackages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {hajjData.map((pkg, idx) => (
          <div key={idx} className="mb-20 bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              <div className="bg-[#003366] p-10 md:p-16 text-white flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="text-[#D58267]" fill="#D58267" />
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{pkg.name}</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="text-center p-4 border border-white/20 rounded-2xl bg-white/5">
                    <p className="text-xs uppercase font-bold text-gray-300">Quad</p>
                    <p className="text-lg font-black text-[#D58267]">{pkg.prices.quad}</p>
                  </div>
                  <div className="text-center p-4 border border-white/20 rounded-2xl bg-white/5 scale-110 shadow-xl">
                    <p className="text-xs uppercase font-bold text-gray-300">Double</p>
                    <p className="text-lg font-black text-[#D58267]">{pkg.prices.double}</p>
                  </div>
                  <div className="text-center p-4 border border-white/20 rounded-2xl bg-white/5">
                    <p className="text-xs uppercase font-bold text-gray-300">Triple</p>
                    <p className="text-lg font-black text-[#D58267]">{pkg.prices.triple}</p>
                  </div>
                </div>
                <p className="text-sm italic text-gray-400">Per Person Makkah + Madinah (All Inclusive)</p>
              </div>

           
              <div className="relative h-64 lg:h-auto">
                <img src={pkg.image} className="w-full h-full object-cover" alt={pkg.name} />
              </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-16 bg-white">
              <div>
                <h4 className="inline-block bg-[#003366] text-white px-6 py-2 rounded-lg font-black mb-6 uppercase">Package Highlights</h4>
                <ul className="space-y-4">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 font-bold text-gray-700">
                      <CheckCircle2 className="text-[#D58267] shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="inline-block bg-[#003366] text-white px-6 py-2 rounded-lg font-black mb-6 uppercase">Document Requirements</h4>
                <ul className="space-y-4">
                  {pkg.docs.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 font-bold text-gray-600">
                      <FileText className="text-[#003366] shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HajjPackages;