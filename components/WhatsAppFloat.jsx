"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/9230000000", "_blank");
  };

  return (
    <button 
      onClick={handleWhatsApp}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 group flex items-center gap-3"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
        Chat with us
      </span>
      <FaWhatsapp size={32} />
    </button>
  );
};

export default WhatsAppFloat;