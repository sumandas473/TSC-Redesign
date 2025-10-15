"use client";
import { cn } from "@/lib/utils";

export const Footer = ({ className }) => {
  return (
    <footer className={cn("bg-black text-white py-16 relative", className)}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Address</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-300 text-sm leading-relaxed">
                  <p>Address: Module 704, 7th Floor,</p>
                  <p>Webel Tower 2 BN-9, Salt Lake,</p>
                  <p>Sector 5, Bhidhan Nagar</p>
                  <p>Kolkata - 700091</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 text-sm">+91 86975 75521 (Enquiry)</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 text-sm">info@transcendencesoft.in</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">&gt;</span>
                <a href="/service" className="text-gray-300 hover:text-white transition-colors text-sm">Software Development</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">&gt;</span>
                <a href="/service" className="text-gray-300 hover:text-white transition-colors text-sm">Website & Digital Marketing</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">&gt;</span>
                <a href="/service" className="text-gray-300 hover:text-white transition-colors text-sm">Mobile App Development</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">&gt;</span>
                <a href="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">&gt;</span>
                <a href="/industry" className="text-gray-300 hover:text-white transition-colors text-sm">Industry</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">&gt;</span>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">&gt;</span>
                <a href="/service" className="text-gray-300 hover:text-white transition-colors text-sm">Product & Pricing</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">&gt;</span>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms & Condition</a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">&gt;</span>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Our Location Section */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Our Location</h3>
            <p className="text-gray-300 text-sm mb-4">Please Free Feel to Find Us</p>
            
            {/* Google Maps Embed */}
            <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm">Interactive Map</p>
                <p className="text-xs">Kolkata, West Bengal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © transcendencesoft.in, All Right Reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed By <span className="underline">Transcendence</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
