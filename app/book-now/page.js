"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ChevronDown } from 'lucide-react'; 

export default function BookNow() {
 
  const [formData, setFormData] = useState({
    tourPackage: '', 
    fullName: '',
    phone: '',
    email: '',
    cnic: '',
    departureCity: '',
    travelDate: '',
    numTravelers: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.tourPackage) {
        alert("Please select a package first!");
        return;
    }

    emailjs.send(
      "service_91tbymr", 
      "template_olmc70l", 
      formData, 
      "Dj-ZkPX-kgxZhX2Cj"
    )
    .then(() => {
       alert("Booking Request Sent Successfully! Admin will contact you soon.");
       setFormData({
         tourPackage: '', fullName: '', phone: '', email: '', 
         cnic: '', departureCity: '', travelDate: '', 
         numTravelers: '', additionalNotes: ''
       });
    }, (err) => {
       alert("Failed to send booking. Error: " + err.text);
    });
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h1 className="text-3xl md:text-6xl font-black text-center text-[#003366] mb-4 uppercase tracking-tighter text-balance">
          Tour Booking System
        </h1>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-lg font-bold">Please fill in the details below to confirm your booking.</p>
        
        <form onSubmit={handleSubmit} className="bg-white p-5 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-6 border-t-[10px] md:border-t-[12px] border-[#e31e24]">
          
          <div className="md:col-span-2 bg-red-50 p-4 md:p-6 rounded-2xl border border-red-100 mb-2 md:mb-4 relative">
            <label className="block text-red-800 font-black mb-2 text-[10px] md:text-xs uppercase tracking-widest">Select Your Package</label>
            <div className="relative">
                <select 
                name="tourPackage" 
                value={formData.tourPackage} 
                onChange={handleChange}
                required
                className="w-full bg-transparent text-lg md:text-2xl font-black text-gray-800 outline-none cursor-pointer appearance-none pr-10"
                >
                <option value="" disabled className="text-gray-900 font-bold bg-white">--- SELECT A PACKAGE ---</option>
                <optgroup label="Umrah Packages" className="font-bold bg-white">
                    <option value="15 Days Umrah Package">15 Days Umrah Package</option>
                    <option value="21 Days Umrah Package">21 Days Umrah Package</option>
                    <option value="Standard Umrah Package">Standard Umrah Package</option>
                    <option value="Premium Umrah Package">Premium Umrah Package</option>
                </optgroup>
                <optgroup label="International Tours" className="font-bold bg-white">
                    <option value="Thailand Tour">Thailand Tour</option>
                    <option value="Malaysia Special">Malaysia Special</option>
                    <option value="Turkey Honeymoon">Turkey Honeymoon</option>
                    <option value="Dubai Desert Safari">Dubai Desert Safari</option>
                    <option value="Uzbekistan Cultural Tour">Uzbekistan Cultural Tour</option>
                    <option value="Sri Lanka Nature Tour">Sri Lanka Nature Tour</option>
                </optgroup>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-red-600">
                    <ChevronDown size={28} strokeWidth={4} />
                </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[#003366] font-black mb-1.5 text-xs md:text-sm uppercase ml-1">Full Name *</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 focus:border-[#D58267] focus:bg-white outline-none transition-all font-bold placeholder:text-gray-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-[#003366] font-black mb-1.5 text-xs md:text-sm uppercase ml-1">Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 focus:border-[#D58267] focus:bg-white outline-none transition-all font-bold placeholder:text-gray-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-[#003366] font-black mb-1.5 text-xs md:text-sm uppercase ml-1">Phone Number *</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="03xx xxxxxxx" className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 focus:border-[#D58267] focus:bg-white outline-none transition-all font-bold placeholder:text-gray-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-[#003366] font-black mb-1.5 text-xs md:text-sm uppercase ml-1">CNIC / Passport *</label>
            <input type="text" name="cnic" value={formData.cnic} onChange={handleChange} required placeholder="Identity Number" className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 focus:border-[#D58267] focus:bg-white outline-none transition-all font-bold placeholder:text-gray-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-[#003366] font-black mb-1.5 text-xs md:text-sm uppercase ml-1">Departure City *</label>
            <input type="text" name="departureCity" value={formData.departureCity} onChange={handleChange} required placeholder="e.g. Lahore, Karachi" className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 focus:border-[#D58267] focus:bg-white outline-none transition-all font-bold placeholder:text-gray-400" />
          </div>

          <div className="flex flex-col">
            <label className="text-[#003366] font-black mb-1.5 text-xs md:text-sm uppercase ml-1">Travel Date *</label>
            <div className="relative">
                <input 
                  type={formData.travelDate ? "date" : "text"}
                  name="travelDate" 
                  value={formData.travelDate} 
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => { if (!e.target.value) e.target.type = "text" }}
                  onChange={handleChange} 
                  required 
                  placeholder="Select Travel Date"
                  className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 focus:border-[#D58267] focus:bg-white outline-none transition-all font-bold text-gray-700 placeholder:text-gray-400" 
                />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[#003366] font-black mb-1.5 text-xs md:text-sm uppercase ml-1">Number of Travelers *</label>
            <input type="number" name="numTravelers" placeholder="How many people?" value={formData.numTravelers} onChange={handleChange} required className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 focus:border-[#D58267] focus:bg-white outline-none transition-all font-bold placeholder:text-gray-400" />
          </div>

          <div className="md:col-span-2 mt-2">
            <label className="text-[#003366] font-black mb-1.5 text-xs md:text-sm uppercase ml-1">Additional Notes</label>
            <textarea name="additionalNotes" rows={4} value={formData.additionalNotes} onChange={handleChange} placeholder="Any special requirements or messages..." className="w-full p-5 border-2 border-gray-100 rounded-[1.5rem] md:rounded-[2rem] bg-gray-50 focus:border-[#D58267] focus:bg-white outline-none transition-all font-bold placeholder:text-gray-400"></textarea>
          </div>

          <div className="md:col-span-2 pt-4">
            <button type="submit" className="bg-[#e31e24] text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-2xl hover:bg-black transition-all shadow-xl w-full active:scale-95 uppercase tracking-widest">
              CONFIRM BOOKING
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}