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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tours', href: '/tours' },
    { name: 'Umrah Packages', href: '/umrah-packages' },
    { name: 'Visa', href: '/visa' },
    { name: 'Destination', href: '/destination' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <footer className="bg-[#003366] text-white pt-12 lg:pt-20 pb-8 border-t-8 border-[#D58267]">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-12 mb-16">

          <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white p-3 rounded-2xl w-fit shadow-xl">
              <h1 className="text-lg lg:text-xl font-black text-[#003366] tracking-tighter uppercase">
                TRAVEL<span className="text-[#D58267]"> OPERATIONS</span>
              </h1>
            </div>
            <p className="text-gray-300 leading-relaxed text-xs lg:text-base font-medium lg:pr-6 uppercase tracking-wider">
              Travel Operations.pk is a premium travel agency in Pakistan, specialized in Umrah, National and International tours.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm lg:text-2xl font-black mb-6 border-l-4 border-[#D58267] pl-3 uppercase tracking-tight text-[#D58267] lg:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 lg:space-y-5">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-[#D58267] transition-all flex items-center gap-2 font-bold text-xs lg:text-lg group uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-[#D58267] rounded-full opacity-0 group-hover:opacity-100 transition-all hidden lg:block"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:pl-4">
            <h3 className="text-sm lg:text-2xl font-black mb-6 border-l-4 border-[#D58267] pl-3 uppercase tracking-tight text-[#D58267] lg:text-white">
              Contact
            </h3>
            <div className="space-y-4 lg:space-y-8">
              <div className="flex items-center gap-3 lg:gap-5">
                <div className="bg-white/10 p-2 lg:p-4 rounded-xl text-[#D58267] shadow-inner">
                  <Phone size={14} className="lg:hidden" />
                  <Phone size={24} className="hidden lg:block" />
                </div>
                <div className="flex flex-col">
                  <span className="hidden lg:block text-[10px] text-[#D58267] font-black uppercase tracking-widest mb-1">Call Us</span>
                  <span className="text-[10px] lg:text-xl font-bold tracking-wide">030 00000000</span>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:gap-5">
                <div className="bg-white/10 p-2 lg:p-4 rounded-xl text-[#D58267] shadow-inner">
                  <Mail size={14} className="lg:hidden" />
                  <Mail size={24} className="hidden lg:block" />
                </div>
                <div className="flex flex-col">
                  <span className="hidden lg:block text-[10px] text-[#D58267] font-black uppercase tracking-widest mb-1">Browser</span>
                  <span className="text-[9px] lg:text-lg font-bold break-all lg:break-normal">traveloperations.pk</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 lg:gap-5">
                <div className="bg-white/10 p-2 lg:p-4 rounded-xl text-[#D58267] shadow-inner shrink-0">
                  <MapPin size={14} className="lg:hidden" />
                  <MapPin size={24} className="hidden lg:block" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="hidden lg:block text-[10px] text-[#D58267] font-black uppercase tracking-widest mb-1">Visit Us</span>
                  <span className="text-[10px] lg:text-base font-bold leading-relaxed lg:max-w-[280px]">
                    Lahore, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-2xl font-black mb-8 border-l-4 border-[#D58267] pl-4 uppercase tracking-tight">
              Follow Us
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="flex items-center gap-4 group w-fit"
                >
                  <div className="bg-white/10 p-3.5 rounded-full text-white group-hover:bg-[#D58267] group-hover:-translate-y-1 transition-all duration-300 shadow-xl border border-white/5">
                    <Icon size={20} />
                  </div>
                  <span className="text-gray-300 font-bold group-hover:text-[#D58267] transition-colors uppercase text-xs tracking-widest">
                    {i === 0 ? 'Facebook' : i === 1 ? 'Instagram' : i === 2 ? 'LinkedIn' : 'Twitter'}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[10px] lg:text-sm font-medium text-center md:text-left uppercase tracking-widest">
            © 2025 Copyrights by <span className="text-white font-black">Travel Operations.pk</span>. All Rights Reserved.
          </p>

          <div className="flex lg:hidden items-center gap-4">
            {socialLinks.map(({ Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                className="bg-white/5 p-3 rounded-full text-white/50 hover:text-[#D58267] transition-all"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;