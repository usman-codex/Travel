"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react'; 
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaInstagram, href: "#" },
    { Icon: FaLinkedinIn, href: "#" },
    { Icon: FaTwitter, href: "#" },
  ];

  return (
    <footer className="bg-[#003366] text-white pt-20 pb-10 border-t-8 border-[#D58267]">
      <div className="container mx-auto px-6 lg:px-12">
        
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
         
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-3 rounded-2xl w-fit shadow-xl">
               <h1 className="text-xl font-black text-[#003366] tracking-tighter uppercase">
                 TRAVEL<span className="text-[#D58267]">OPERATIONS</span>
               </h1>
            </div>
            <p className="text-gray-300 leading-relaxed text-base font-medium pr-6">
              Travel Operations.pk is a premium travel agency in Pakistan, specialized in Hajj, Umrah, and international tours. We ensure a seamless spiritual and vacation experience with luxury and comfort.
            </p>
          </div>

         
          <div className="lg:col-span-3 lg:pl-10">
            <h3 className="text-2xl font-black mb-8 border-l-4 border-[#D58267] pl-4 uppercase tracking-tight">
              Quick Pages
            </h3>
            <ul className="space-y-5">
              {['About Us', 'Contact Us', 'Privacy Policy', 'Terms & conditions', 'Sitemap'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-[#D58267] transition-all duration-300 flex items-center gap-3 group font-bold text-lg">
                    <div className="w-1.5 h-1.5 bg-[#D58267] rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-black mb-8 border-l-4 border-[#D58267] pl-4 uppercase tracking-tight">
              Contact Details
            </h3>
            
            <div className="space-y-8">
             
              <div className="flex items-center gap-5 group">
                <div className="bg-white/10 p-4 rounded-2xl text-[#D58267] group-hover:bg-[#D58267] group-hover:text-white transition-all duration-300 shadow-inner">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#D58267] font-black uppercase tracking-widest mb-1">Call Us Now</span>
                  <span className="text-xl font-bold tracking-wide">0321 9886680</span>
                </div>
              </div>

             
              <div className="flex items-center gap-5 group">
                <div className="bg-white/10 p-4 rounded-2xl text-[#D58267] group-hover:bg-[#D58267] group-hover:text-white transition-all duration-300 shadow-inner">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#D58267] font-black uppercase tracking-widest mb-1">Send Email</span>
                  <span className="text-xl font-bold tracking-wide break-all lg:break-normal">contact@traveloperations.pk</span>
                </div>
              </div>

              
              <div className="flex items-start gap-5 group">
                <div className="bg-white/10 p-4 rounded-2xl text-[#D58267] group-hover:bg-[#D58267] group-hover:text-white transition-all duration-300 shadow-inner shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-xs text-[#D58267] font-black uppercase tracking-widest mb-1">Visit Office</span>
                  <span className="text-lg font-bold leading-snug max-w-[280px]">
                    Twonship, Lahore
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

       
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 text-sm font-medium">
            © 2025 Copyrights by <span className="text-white font-black uppercase tracking-widest">Travel Operations.pk</span>. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href }, i) => (
              <Link 
                key={i} 
                href={href} 
                className="bg-white/10 p-4 rounded-full text-white hover:bg-[#D58267] hover:-translate-y-1.5 transition-all duration-300 shadow-xl border border-white/5"
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