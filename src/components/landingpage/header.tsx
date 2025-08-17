import React, { useState } from 'react';
import { ChevronDown, ChevronRight, X, Instagram, Facebook, Linkedin } from 'lucide-react';

export const HeaderSection = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <div className="text-white font-bold text-lg">C</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">CROISSANCE</div>
                <div className="text-sm text-gray-600">OIL & GAS</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-red-500 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-gray-900"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Oil Exploration</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gas Processing</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Refinery Services</a>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-700 hover:text-gray-900">Gallery</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a>
            </nav>

            {/* Place Order Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Place Order
              <ChevronRight className="inline ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

    </div>
  );
};
