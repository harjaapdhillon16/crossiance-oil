import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, X, Instagram, Facebook, Linkedin } from 'lucide-react';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of background images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce',
    'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a',
    'https://images.unsplash.com/photo-1629540946404-ebe133e99f49'
  ];

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Handle manual slide change
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white md:px-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Images with Transitions */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#00000080]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Unbeatable Prices With<br />
              Croissance Oil and Gas
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Through flexible pricing models, we balance market responsiveness with
              strategic stability—delivering consistent value across diverse operations.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors inline-flex items-center">
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider Dots - Bottom Left */}
        <div className="absolute bottom-8 left-8 flex space-x-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${index === currentSlide
                ? 'w-8 h-3 rounded-full bg-white'
                : 'w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-300'
                }`}
            />
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <X className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">T</span>
            </div>
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our production is defined by efficiency, precision, and responsibility. We leverage
              advanced technologies and best-in-class practices to ensure safe, reliable,
              and high-quality output.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};