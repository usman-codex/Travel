"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MessageCircle, ArrowRight } from 'lucide-react';
import { blogsData } from '@/data/blogs';
import DestinationHero from '@/components/DestinationHero';

export default function BlogPage() {
 
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; 
 
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

 
  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 500, behavior: 'smooth' }); 
  };
 

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/tour2.jpg')" }}>
          <div className="absolute inset-0 bg-[#003366]/70"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Blog</motion.h1>
          <nav className="flex gap-2 text-lg font-bold mt-4">
            <Link href="/" className="hover:text-[#D58267]">Home</Link>
            <span>/</span>
            <span className="text-[#D58267]">Blog</span>
          </nav>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-gray-100 px-6 py-2 rounded-lg font-bold text-[#003366] text-sm uppercase">Recent news feed</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#003366] mt-6 uppercase tracking-tighter">Latest News & Blogs</h2>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[600px]">
          <AnimatePresence mode="wait">
            {currentBlogs.map((blog, i) => (
              <motion.div 
                key={blog.slug} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ y: -10 }} 
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-50 group flex flex-col h-full"
              >
                
                <div className="relative h-64 overflow-hidden">
                  <img src={blog.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={blog.title} />
                  <div className="absolute top-0 right-0 bg-[#D58267] text-white p-4 rounded-bl-3xl text-center font-black leading-tight shadow-lg">
                    {blog.date.split(' ')[0]} <br /> {blog.date.split(' ')[1]}
                  </div>
                </div>

                <div className="p-8 grow flex flex-col">
                  <div className="flex gap-4 text-sm font-bold text-gray-400 mb-4">
                    <span className="flex items-center gap-1 text-[#D58267] uppercase"><User size={16} /> {blog.author}</span>
                    <span className="flex items-center gap-1 uppercase"><MessageCircle size={16} /> 0 Comments</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#003366] mb-4 uppercase leading-tight group-hover:text-[#D58267] transition-colors line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-500 font-medium mb-6 line-clamp-3 leading-relaxed">{blog.excerpt}</p>
                  <Link href={`/blog/${blog.slug}`} className="mt-auto flex items-center gap-2 font-black text-[#003366] hover:text-[#D58267] transition-all uppercase tracking-widest text-sm">
                    Read More <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-20">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button 
                key={number} 
                onClick={() => paginate(number)}
                className={`w-14 h-14 rounded-2xl font-black flex items-center justify-center border-2 transition-all shadow-md active:scale-90 ${
                  currentPage === number 
                  ? 'bg-[#003366] border-[#003366] text-white' 
                  : 'bg-white border-gray-100 text-[#003366] hover:bg-[#D58267] hover:border-[#D58267] hover:text-white'
                }`}
              >
                {number}
              </button>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}