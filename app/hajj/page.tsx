// app/hajj/page.tsx
"use client";
import React from 'react';
import HajjHero from '../../components/HajjHero';
import HajjPackages from '../../components/HajjPackages';
import HajjBookingForm from '../../components/HajjBookingForm';

export default function HajjPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <HajjHero />

      {/* 2. Intro Text */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-[#003366] mb-6 uppercase tracking-tighter">
          Join Us for a Memorable Hajj Journey
        </h2>
        <div className="w-24 h-1.5 bg-[#D58267] mx-auto mb-10 rounded-full"></div>
        <p className="max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
          Looking forward to your Hajj pilgrimage? We’ve got you covered. Our affordable Hajj Packages take care of all the details, so you can focus on your spiritual journey. From handling visas and flights to providing comfortable accommodations and guided tours of the holy sites, we ensure everything goes smoothly.
        </p>
      </section>

      {/* 3. Packages Section */}
      <HajjPackages />

      {/* 4. Booking Form */}
      <HajjBookingForm />
    </main>
  );
}