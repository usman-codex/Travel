
"use client";
import React from 'react';
import { Plane, Hotel, Bus, FileText } from 'lucide-react';
import Link from 'next/link';

const packages = [
  { id: 1, title: "15 Days Umrah Package", price: "195,000", image: "/images/umrah.jpg" },
  { id: 2, title: "21 Days Umrah Package", price: "206,300", image: "/images/hajj.jpg" },
  { id: 3, title: "21 Days Umrah Package", price: "217,600", image: "/images/travel1.jpg" },
  { id: 4, title: "21 Days Umrah Package", price: "295,200", image: "/images/travel2.jpg" },
];

const UmrahPackages = () => {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Special offer for Hajj and Umrah</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-medium">
            Enjoy comfortable hotels, easy travel, and personal assistance throughout your trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition">
              <img src={pkg.image} className="h-48 w-full object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{pkg.title}</h3>
                
                <div className="space-y-4 mb-8 text-left inline-block">
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <FileText size={18} className="text-red-600" /> Umrah E-Visa
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm border-t pt-2">
                    <Plane size={18} className="text-red-600" /> Return Air Ticket
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm border-t pt-2">
                    <Hotel size={18} className="text-red-600" /> Hotel Accommodation
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm border-t pt-2">
                    <Bus size={18} className="text-red-600" /> Transport (Sharing By Bus)
                  </div>
                </div>

                <div className="text-2xl font-black text-gray-800 mb-6 uppercase">PKR {pkg.price}</div>
                
                <Link href="/book-now">
                  <button className="w-full bg-[#e31e24] text-white py-3 rounded-lg font-bold hover:bg-black transition shadow-md">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="bg-[#e31e24] text-white px-10 py-3 rounded-md font-bold hover:bg-black transition">
              More Package
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UmrahPackages;