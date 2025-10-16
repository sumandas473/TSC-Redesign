"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left content */}
          <div className="space-y-8">
            {/* Date and Time */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
              <div className="text-black">
                <span className="text-sm font-medium text-blue-600 border-b border-blue-600 pb-1">
                  {isClient ? formatDate(currentTime) : "Loading..."}
                </span>
                {isClient && (
                  <div className="text-lg font-bold text-blue-600 mt-2">
                    {formatTime(currentTime)}
                  </div>
                )}
              </div>
              <div className="text-black text-sm">
                Bhidhan Nagar Kolkata - 700091
              </div>
            </div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                TRANSCENDENCE
                <br />
                <span className="text-blue-600">CODE, CREATE</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl text-blue-600 leading-relaxed">
              "Great dreams of dreamers are always
              Transcended" - A.P.J Abdul Kalam
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Building intelligent software solutions that power innovation, scale ideas, and shape the future.
              </p>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span>Contact Us</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </button>
            </motion.div>
          </div>

          {/* Right side - B1.png Image */}
          <div className="relative lg:block hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative w-full h-96 flex items-center justify-center"
            >
              <motion.img
                src="/assets/B1.png"
                alt="Transcendence Software"
                className="max-w-full max-h-full object-contain"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { left: 10, top: 20, duration: 3.2, delay: 0.5 },
          { left: 25, top: 60, duration: 4.1, delay: 1.2 },
          { left: 40, top: 15, duration: 3.8, delay: 0.8 },
          { left: 60, top: 80, duration: 4.5, delay: 1.5 },
          { left: 75, top: 35, duration: 3.5, delay: 0.3 },
          { left: 85, top: 70, duration: 4.2, delay: 1.8 },
          { left: 15, top: 45, duration: 3.9, delay: 0.7 },
          { left: 35, top: 85, duration: 4.3, delay: 1.1 },
          { left: 50, top: 25, duration: 3.6, delay: 0.9 },
          { left: 70, top: 55, duration: 4.0, delay: 1.3 },
          { left: 90, top: 40, duration: 3.7, delay: 0.6 },
          { left: 5, top: 75, duration: 4.4, delay: 1.6 },
          { left: 30, top: 10, duration: 3.3, delay: 0.4 },
          { left: 55, top: 65, duration: 4.1, delay: 1.4 },
          { left: 80, top: 30, duration: 3.8, delay: 0.2 },
          { left: 95, top: 85, duration: 4.6, delay: 1.7 },
          { left: 20, top: 50, duration: 3.4, delay: 1.0 },
          { left: 45, top: 5, duration: 4.2, delay: 0.1 },
          { left: 65, top: 90, duration: 3.9, delay: 1.9 },
          { left: 85, top: 15, duration: 3.5, delay: 0.5 }
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
