"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "How early should I book my Umrah package?", a: "It is recommended to book at least 2-3 months in advance to secure the best hotels and flight rates, especially during peak seasons like Ramadan." },
  { q: "How do I determine the right Umrah package for me?", a: "Consider your budget, preferred hotel distance from Haram, and duration of stay. We offer Economy, Standard, and Luxury options to fit every need." },
  { q: "What should I consider when budgeting for an Umrah package?", a: "Besides the package cost, budget for daily meals (if not included), Ziyarat tips, and personal shopping in Makkah and Madinah." },
  { q: "What are the key factors to look for in an Umrah package?", a: "Check for Visa processing, Return Airfare, Hotel distance from the Holy Mosques, and the availability of a local guide." },
];

const UmrahFaq = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#003366] mb-12 uppercase">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-6 text-left flex justify-between items-center transition-all hover:bg-gray-50">
                <span className="font-bold text-[#003366] text-lg">{faq.q}</span>
                {open === i ? <Minus className="text-[#D58267]" /> : <Plus className="text-[#D58267]" />}
              </button>
              {open === i && <div className="px-6 pb-6 text-gray-600 font-medium leading-relaxed animate-fadeIn">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default UmrahFaq;