
"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function BookNow() {
 
  const [formData, setFormData] = useState({
    tourPackage: 'Standard Umrah Package',
    fullName: '',
    phone: '',
    email: '',
    cnic: '',
    departureCity: '',
    travelDate: '',
    numTravelers: '1',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
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
         numTravelers: '1', additionalNotes: ''
       });
    }, (err) => {
       alert("Failed to send booking. Error: " + err.text);
    });
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 uppercase tracking-tighter">
          Tour Booking System
        </h1>
        <p className="text-center text-gray-600 mb-12">Please fill in the details below to confirm your booking.</p>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 border-t-8 border-[#e31e24]">
          
         
          <div className="md:col-span-2 bg-red-50 p-4 rounded-xl border border-red-100 mb-4">
            <label className="block text-red-800 font-bold mb-1 text-sm uppercase">Selected Tour Package</label>
            <input 
              type="text" 
              name="tourPackage" 
              value={formData.tourPackage} 
              onChange={handleChange}
              className="w-full bg-transparent text-xl font-bold text-gray-800 outline-none" 
            />
          </div>

  
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">Full Name *</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" className="w-full p-4 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-600 outline-none transition" />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" className="w-full p-4 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-600 outline-none transition" />
          </div>

     
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">Phone Number *</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="03xx xxxxxxx" className="w-full p-4 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-600 outline-none transition" />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">CNIC / Passport Number *</label>
            <input type="text" name="cnic" value={formData.cnic} onChange={handleChange} required placeholder="42xxx-xxxxxxx-x" className="w-full p-4 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-600 outline-none transition" />
          </div>

         
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">Departure City *</label>
            <input type="text" name="departureCity" value={formData.departureCity} onChange={handleChange} required placeholder="e.g. Lahore, Karachi" className="w-full p-4 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-600 outline-none transition" />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">Travel Date *</label>
            <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required className="w-full p-4 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-600 outline-none transition" />
          </div>

         
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm">Number of Travelers *</label>
            <input type="number" name="numTravelers" min="1" value={formData.numTravelers} onChange={handleChange} required className="w-full p-4 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-600 outline-none transition" />
          </div>

    
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-bold mb-2 text-sm">Additional Notes</label>
            <textarea name="additionalNotes" rows={4} value={formData.additionalNotes} onChange={handleChange} placeholder="Any special requirements?" className="w-full p-4 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-red-600 outline-none transition"></textarea>
          </div>

          <div className="md:col-span-2 pt-4">
            <button type="submit" className="bg-[#e31e24] text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-black transition-all shadow-xl w-full active:scale-95">
              CONFIRM BOOKING
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}