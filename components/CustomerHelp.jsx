
"use client";
import React from 'react';
import { motion } from 'framer-motion';

const helpPoints = [
  "Personalized Trip Planning", "Expert Destination Advice", "Hassle-Free Booking", 
  "Budget-Friendly Options", "24/7 Customer Support", "Local Expertise", 
  "Exclusive Deals and Discounts", "Visa and Documentation Assistance", 
  "Language Support", "Group Travel Coordination", "Memorable Experiences", 
  "Insider Tips", "Safety Assurance", "Seamless Transfers"
];

const CustomerHelp = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">How We Help Our Customer</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            At Travel Operations, we are dedicated to making your travel experiences seamless and memorable.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {helpPoints.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <div className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-150 transition-transform"></div>
              <span className="text-lg font-bold text-gray-700 hover:text-red-600 transition-colors cursor-default">
                {point}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerHelp;