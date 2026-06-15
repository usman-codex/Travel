// components/WhyChooseUs.jsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Tag, Headphones, CalendarCheck, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: Award, title: "Best Agents" },
    { icon: Tag, title: "Best Prices" },
    { icon: Headphones, title: "Instant Support" },
    { icon: CalendarCheck, title: "Fast Booking" },
    { icon: ShieldCheck, title: "Safety & Trust" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Top Text Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 mb-16 shadow-sm"
        >
          <p className="text-gray-600 text-lg leading-relaxed text-center font-medium italic">
            "We are a full-service best travel agency with a dedicated team of highly skilled and experienced people to assist our valuable clients according to their goals and desired journeys all over the world. We at Travel Operations strive our best to deliver the outstanding service to all our customers. We are always ready to serve you with market competitive rates. Our goal is to make the customer feel the freedom that would make us feel honored."
          </p>
        </motion.div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#003366] uppercase tracking-tighter">
            Why Travel Operations.pk?
          </h2>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Features Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="bg-gray-50 p-6 rounded-full mb-4 group-hover:bg-[#003366] transition-all duration-500 shadow-md">
                <item.icon size={40} className="text-[#D4AF37] group-hover:text-white transition-all duration-500" />
              </div>
              <h4 className="text-[#003366] font-black text-lg uppercase tracking-tight group-hover:text-[#D4AF37] transition-all">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm"
        >
          <p className="text-gray-600 text-lg leading-relaxed text-center font-medium">
            Travel Operations is dedicated to providing its customers' best-travelling facilities, fastest visa processing, cheap air tickets, quick flight reservation, luxurious accommodation and a wide range of transportation throughout the trip. We give the same importance, attention, and care to your every trip for making you very happy as we did in your past trips. This is why; we have an almost 85% bouncing back rate that makes us not only happy but completely satisfied.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;