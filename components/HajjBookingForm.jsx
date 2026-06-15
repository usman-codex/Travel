"use client";
import React, { useState } from 'react';

const HajjBookingForm = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-5xl md:text-7xl font-black text-center text-[#D58267] mb-16 uppercase tracking-tighter">
          Book Now Package
        </h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border-t-[12px] border-[#003366]">
          <div className="flex flex-col">
            <label className="font-black text-[#003366] mb-2 uppercase text-sm">First Name *</label>
            <input type="text" placeholder="Enter First Name" className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#D58267] outline-none font-bold" />
          </div>
          <div className="flex flex-col">
            <label className="font-black text-[#003366] mb-2 uppercase text-sm">Last Name *</label>
            <input type="text" placeholder="Last Name" className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#D58267] outline-none font-bold" />
          </div>
          <div className="flex flex-col">
            <label className="font-black text-[#003366] mb-2 uppercase text-sm">Email *</label>
            <input type="email" placeholder="Enter Your Email" className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#D58267] outline-none font-bold" />
          </div>
          <div className="flex flex-col">
            <label className="font-black text-[#003366] mb-2 uppercase text-sm">Telephone *</label>
            <input type="text" placeholder="Telephone" className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#D58267] outline-none font-bold" />
          </div>
          <div className="flex flex-col">
            <label className="font-black text-[#003366] mb-2 uppercase text-sm">Package Type *</label>
            <select className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#D58267] outline-none font-bold">
              <option>Silver Package</option>
              <option>Golden Package</option>
              <option>Platinum Package</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-black text-[#003366] mb-2 uppercase text-sm">Person *</label>
            <select className="p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#D58267] outline-none font-bold">
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3+ Persons</option>
            </select>
          </div>
          
          <div className="md:col-span-2 text-center mt-6">
            <button className="bg-[#D58267] text-white px-16 py-5 rounded-2xl font-black text-2xl hover:bg-[#003366] transition-all shadow-xl active:scale-95 uppercase tracking-widest">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default HajjBookingForm;