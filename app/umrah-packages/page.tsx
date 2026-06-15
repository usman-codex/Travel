"use client";
import React from 'react';
import UmrahHero from '@/components/UmrahHero';
import UmrahPackages from '@/components/UmrahPackages'; 
import UmrahFaq from '@/components/UmrahFaq';
import { CheckCircle2, MapPin, Info, Star, Bookmark } from 'lucide-react';
import Footer from '@/components/Footer';

export default function UmrahPage() {
  return (
    <main className="bg-white min-h-screen">
      <UmrahHero />

      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-[#003366] mb-6 uppercase tracking-tighter">
          Travel Operations Offers Cheap Umrah Packages
        </h2>
        <div className="w-24 h-1.5 bg-[#D58267] mx-auto mb-10 rounded-full"></div>
        <p className="max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
          If you are looking for cheap Umrah packages, Travel Operations has many budget-friendly options that still offer quality services at a lower cost. A well-chosen package not only saves you money but also ensures a smooth and stress-free pilgrimage.
        </p>
      </section>

      <UmrahPackages />

      <section className="py-20 bg-[#003366] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase">Essential Umrah Rituals</h2>
          <p className="text-[#D58267] text-center mb-16 font-bold text-xl">Every Pilgrim Must Know</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Ihram", d: "Enter a state of consecration by wearing special garments." },
              { t: "Tawaf", d: "Circumambulate the Kaaba seven times counterclockwise." },
              { t: "Sa'i", d: "Walk seven times between the hills of Safa and Marwah." },
              { t: "Tahallul", d: "Men shave or trim hair; women cut a small portion of hair." },
              { t: "Tawaf al-Wada'", d: "Conduct the Farewell Tawaf before leaving Mecca." },
              { t: "Tawaf al-Ifadah", d: "Perform an additional Tawaf during the days of Hajj." },
            ].map((r, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-3xl border border-white/20 hover:bg-[#D58267] transition-all group">
                <h3 className="text-2xl font-black mb-3 group-hover:text-[#003366]">{r.t}</h3>
                <p className="text-gray-300 group-hover:text-white font-medium">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-[#003366] mb-8 uppercase tracking-tighter">Choosing the Best Package</h2>
            <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed">
              <p>Booking the right Umrah package is essential to ensure a smooth and fulfilling journey. Our guide walks you through different types of packages to suit every budget.</p>
              <div className="grid grid-cols-1 gap-4">
                {["Luxury 5-Star Packages", "Budget Friendly 15 Days", "Extended 21 Days Journey", "Standard Value Options"].map((t, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#003366] font-bold">
                    <CheckCircle2 className="text-[#D58267]" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-50 p-10 rounded-[3rem] border-l-[12px] border-[#D58267]">
            <h3 className="text-2xl font-black text-[#003366] mb-6 flex items-center gap-2 italic">
               <Bookmark fill="#D58267" className="text-[#D58267]" /> Essential Tips
            </h3>
            <ul className="space-y-6">
              <li><strong className="text-[#003366]">Accommodation:</strong> Choose hotels close to Haram for elderly comfort.</li>
              <li><strong className="text-[#003366]">Transportation:</strong> Look for packages with air-conditioned private buses.</li>
              <li><strong className="text-[#003366]">Meals:</strong> Buffet style at hotels is most convenient for long worship days.</li>
              <li><strong className="text-[#003366]">Guidance:</strong> First-timers should ensure a scholar is included in the group.</li>
            </ul>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center text-[#003366] mb-16 uppercase">Must Visit Holy Places</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
               <h3 className="text-3xl font-black text-[#D58267] mb-8 flex items-center gap-3">
                 <MapPin /> MAKKAH SITES
               </h3>
               <div className="space-y-4 font-bold text-[#003366]">
                 <p>• Masjid Al Haram & Kaaba</p>
                 <p>• Mina Tents City</p>
                 <p>• Muzdalifah Open Sky</p>
                 <p>• Cave Hira (Jabal Al Noor)</p>
                 <p>• Well of Tuwa & Masjid e Aisha</p>
               </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl">
               <h3 className="text-3xl font-black text-[#003366] mb-8 flex items-center gap-3">
                 <MapPin className="text-[#D58267]" /> MADINAH SITES
               </h3>
               <div className="space-y-4 font-bold text-[#003366]">
                 <p>• Al Masjid al Nabawi (Green Dome)</p>
                 <p>• Quba Mosque & Masjid Al Qiblatain</p>
                 <p>• Jannat ul Baqi & Mount Uhud</p>
                 <p>• Al Madinah Museum</p>
                 <p>• Garden of Hazrat Salman Farsi (RA)</p>
               </div>
            </div>
          </div>
        </div>
      </section>

     
      <UmrahFaq />
      <Footer />
    </main>
  );
}