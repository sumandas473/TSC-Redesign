"use client";
import React from "react";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-amber-700 to-amber-900 min-h-screen">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          {/* Main Heading */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Innovative Software for a Limitless Tomorrow
            </h1>
          </div>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Book a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-800 hover:bg-amber-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-amber-700 mb-16"></div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand & Social */}
          <div className="space-y-6">
            {/* Brand Identity */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-amber-900 rounded-full"></div>
              </div>
              <span className="text-white font-bold text-lg">Transcendence</span>
            </div>

             {/* Social Media Links */}
             <div className="space-y-4">
               <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
                 <h3 className="text-white font-bold text-lg mb-1">Facebook</h3>
                 <p className="text-gray-300 text-sm">Connect with our community</p>
               </a>
               <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
                 <h3 className="text-white font-bold text-lg mb-1">YouTube</h3>
                 <p className="text-gray-300 text-sm">Subscribe for tutorials</p>
               </a>
               <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
                 <h3 className="text-white font-bold text-lg mb-1">LinkedIn</h3>
                 <p className="text-gray-300 text-sm">Professional networking</p>
               </a>
               <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
                 <h3 className="text-white font-bold text-lg mb-1">Twitter/X</h3>
                 <p className="text-gray-300 text-sm">Stay in the pulse</p>
               </a>
               <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
                 <h3 className="text-white font-bold text-lg mb-1">Discord</h3>
                 <p className="text-gray-300 text-sm">Chat with peers and other developers</p>
               </a>
             </div>
          </div>

          {/* Column 2 - Services */}
          <div className="space-y-4">
            <h2 className="text-white font-bold text-xl mb-4">Services</h2>
            <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
              <h3 className="text-white font-bold text-lg mb-1">Software Development</h3>
              <p className="text-gray-300 text-sm">Custom software solutions for your business</p>
            </a>
            <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
              <h3 className="text-white font-bold text-lg mb-1">Website and Digital Marketing</h3>
              <p className="text-gray-300 text-sm">Web development and online presence optimization</p>
            </a>
            <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
              <h3 className="text-white font-bold text-lg mb-1">Mobile App Development</h3>
              <p className="text-gray-300 text-sm">iOS and Android applications for all platforms</p>
            </a>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="space-y-4">
            <h2 className="text-white font-bold text-xl mb-4">Quick Links</h2>
            <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
              <h3 className="text-white font-bold text-lg mb-1">Home</h3>
            </a>
            <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
              <h3 className="text-white font-bold text-lg mb-1">Industry</h3>
            </a>
            <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
              <h3 className="text-white font-bold text-lg mb-1">Contact</h3>
            </a>
            <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
              <h3 className="text-white font-bold text-lg mb-1">Products and Pricing</h3>
            </a>
            <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
              <h3 className="text-white font-bold text-lg mb-1">Terms and Conditions</h3>
            </a>
            <a href="#" className="block hover:opacity-80 transition-opacity cursor-pointer">
              <h3 className="text-white font-bold text-lg mb-1">Privacy Policy</h3>
            </a>
          </div>

           {/* Column 4 - Contact & Address */}
           <div className="space-y-4">
             <div>
               <h3 className="text-white font-bold text-lg mb-1">Address</h3>
               <p className="text-gray-300 text-sm">
                 Module 704, 7th Floor, Webel Tower 2<br />
                 BN-9, Salt Lake, Sector 5<br />
                 Bhidhan Nagar Kolkata - 700091
               </p>
             </div>
             <div>
               <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
               <p className="text-gray-300 text-sm">+91 86975 75521 (Enquiry)</p>
             </div>
             <div>
               <h3 className="text-white font-bold text-lg mb-1">Email</h3>
               <p className="text-gray-300 text-sm">info@transcendencesoft.in</p>
             </div>
           </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-amber-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2024 Transcendence Software. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
