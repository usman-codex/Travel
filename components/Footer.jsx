"use client";
import React from 'react';
import Link from 'next/link';
// Lucide icons for contact info
import { Phone, Mail, MapPin } from 'lucide-react'; 
// React Icons for Social Media
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  // Social icons array
  const socialLinks = [
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaInstagram, href: "#" },
    { Icon: FaLinkedinIn, href: "#" },
    { Icon: FaTwitter, href: "#" },
  ];

  return (
    <footer className="bg-[#003366] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="flex flex-col gap-6">
            <div className="bg-white p-2 rounded-lg w-fit">
               <h1 className="text-xl font-black text-[#003366] tracking-tighter uppercase">
                 TRAVEL<span className="text-[#D4AF37]">OPERATIONS</span>
               </h1>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Travel Operations.pk is one of the leading travel companies in Pakistan, providing specialized Hajj, Umrah, and international tour services. We are dedicated to making your spiritual and vacation journeys unforgettable with premium services.
            </p>
          </div>

          <div className="md:ml-12">
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-[#D4AF37] pl-3">Pages</h3>
            <ul className="space-y-4">
              {['About Us', 'Contact Us', 'Privacy Policy', 'Terms & conditions', 'Sitemap'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 border-l-4 border-[#D4AF37] pl-3">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Phone size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Phone:</p>
                  <p className="font-bold text-lg">03219886680</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Mail size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Email Address:</p>
                  <p className="font-medium">contact@traveloperations.pk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <MapPin size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">Visit office:</p>
                  <p className="text-sm leading-relaxed">Sf-6 hill view Arcade, 5 Davis Road, Shimla Hill, Lahore</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © 2025 Copyrights by <span className="text-white font-bold">Travel Operations.pk</span>. All Rights Reserved
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href }, i) => (
              <Link 
                key={i} 
                href={href} 
                className="bg-white/10 p-3 rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#003366] transition-all duration-300"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;