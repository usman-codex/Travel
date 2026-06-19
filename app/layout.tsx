import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import WhatsAppFloat from "@/components/WhatsAppFloat";
import React from "react"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Operations | Best Travel Agency",
  description: "Explore the world with our exciting range of tours and visa services.",
  icons: {
    icon: "/icon.png", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}