"use client";
import React from 'react';
import { Plane, Hotel, Bus, FileText } from 'lucide-react';
import Link from 'next/link';

const packages = [
  { id: 1, title: "15 Days Umrah Package", price: "195,000", image: "/images/umrah.jpg" },
  { id: 2, title: "21 Days Umrah Package", price: "206,300", image: "/images/hajj.jpg" },
  { id: 3, title: "21 Days Umrah Package", price: "217,600", image: "/images/tour1.jpg" },
  { id: 4, title: "21 Days Umrah Package", price: "295,200", image: "/images/tour2.jpg" },
];

const UmrahPackages = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-black text-[#003366] uppercase tracking-tighter">
            Special offers for Hajj and Umrah
          </h2>
          
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-bold text-lg">
            Enjoy comfortable hotels, easy travel, and personal assistance throughout your trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xloverflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <img src={pkg.image} className="h-56 w-full object-cover" alt={pkg.title} />
              
              <div className="p-8 text-center">
               
                <h3 className="text-2xl font-black text-[#003366] mb-6 leading-tight h-14 flex items-center justify-center">
                  {pkg.title}
                </h3>
                
                <div className="space-y-4 mb-8 text-left inline-block w-full">
                  
                  <div className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                    <FileText size={20} className="text-[#D4AF37]" /> Umrah E-Visa
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-bold text-sm border-t border-gray-100 pt-3">
                    <Plane size={20} className="text-[#D4AF37]" /> Return Air Ticket
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-bold text-sm border-t border-gray-100 pt-3">
                    <Hotel size={20} className="text-[#D4AF37]" /> Hotel Accommodation
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-bold text-sm border-t border-gray-100 pt-3">
                    <Bus size={20} className="text-[#D4AF37]" /> Transport (Sharing By Bus)
                  </div>
                </div>

                
                <div className="text-2xl font-black text-[#003366] mb-8 uppercase tracking-tighter">
                  PKR <span className="text-[#D4AF37]">{pkg.price}</span>
                </div>
                
                
                <Link href="/book-now">
                  <button className="w-full bg-[#D4AF37] text-[#003366] py-4 rounded-xl font-black text-lg hover:bg-[#003366] hover:text-white transition-all duration-300 shadow-lg active:scale-95">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-16">
          <Link href="/blog">
            <button className="bg-[#003366] text-white px-12 py-4 rounded-xl font-black text-lg hover:bg-[#D4AF37] hover:text-[#003366] transition-all duration-300 shadow-xl">
              View More Packages
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UmrahPackages;