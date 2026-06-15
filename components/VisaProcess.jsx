"use client";
import React from 'react';
import { MapPin, FileText, ClipboardCheck, Send } from 'lucide-react';

const VisaProcess = () => {
  const steps = [
    { icon: MapPin, t: "Choose Your Destination", d: "Select the country you want to travel to. We'll guide you with the requirements." },
    { icon: FileText, t: "Share Your Documents", d: "Submit basic documents like your passport, CNIC, photos, and bank statement." },
    { icon: ClipboardCheck, t: "We Handle Application", d: "Our team fills out your visa form, attaches documents, and submits professionally." },
    { icon: Send, t: "Get Your Visa", d: "Once approved, we send you your visa with travel tips — and you're ready to go!" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#003366] mb-16 uppercase">Our Simple 4-Step Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-[#003366] hover:border-[#D58267] transition-all flex flex-col items-center text-center">
              <div className="bg-blue-50 p-5 rounded-2xl mb-6 text-[#003366] group-hover:text-[#D58267]">
                <s.icon size={40} />
              </div>
              <h3 className="text-xl font-black text-[#003366] mb-4 uppercase">{s.t}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default VisaProcess;