import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ChevronDown } from 'lucide-react';

export const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Olabisi Thompson",
      title: "H.O.D - Prime diesel",
      rating: 4.5,
      content: "We've been working with Croissance Oil and Gas for nearly a decade, and I can confidently say they've become more than just a supplier they're a strategic partner. As a power generation facility, our operations depend on a consistent and high-quality supply of fuel oil and lubricants. From day one, Croissance Oil and Gas impressed us with"
    },
    {
      name: "Nathan Obiigwe",
      title: "C.E.O - Neobi Inc",
      rating: 4.5,
      content: "Running a chain of retail fuel stations requires dependable supply, strong branding, and exceptional customer experience — and that's exactly what Croissance Oil and Gas delivers. We've been franchise partners for over five years, and they've supported our growth every step of the"
    },
    {
      name: "Charles Uzobi",
      title: "HR - Athletic group",
      rating: 5.0,
      content: "What really stands out is their proactive approach. During a period of unexpected demand spike last year, they ensured to meet up with our increased fuel requirements without delay. Their logistics team is incredibly well-coordinated, and we've never experienced a delay or shortage."
    },
    {
      name: "Sarah Mitchell",
      title: "Operations Manager - PowerGen",
      rating: 4.8,
      content: "Exceptional service quality and reliability. Their technical support team goes above and beyond to ensure our operations run smoothly. The consistency in fuel quality and timely deliveries has made them our preferred partner for over 8 years."
    },
    {
      name: "Ahmed Hassan",
      title: "Fleet Manager - Trans Logistics",
      rating: 4.7,
      content: "Managing a fleet of over 200 vehicles requires a dependable fuel partner. Croissance not only provides high-quality fuel but also offers flexible payment terms and excellent customer service that keeps our operations running smoothly."
    },
    {
      name: "Jennifer Cole",
      title: "Director - Marine Solutions",
      rating: 4.9,
      content: "In the marine industry, fuel quality is non-negotiable. Croissance consistently delivers premium marine fuel that meets all international standards. Their technical support team is also exceptional in helping us optimize our fuel consumption."
    }
  ];

  const cardsPerView = 3;
  const totalSlides = testimonials.length - cardsPerView + 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        <span className="text-yellow-400 font-bold text-lg ml-1">
          {rating}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            What Our Customer Say
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Our success depends on happy clients and we always look<br />
            forward to hearing from you. Hear what others are<br />
            saying about us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 bg-white/10 hover:bg-white/20 rounded-full p-4 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 bg-white/10 hover:bg-white/20 rounded-full p-4 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
                width: `${(testimonials.length / cardsPerView) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none px-3"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-2xl overflow-hidden h-[420px] hover:bg-slate-800/60 transition-all duration-300 flex flex-col">
                    {/* Top section for even cards */}
                    {index % 2 === 0 && (
                      <div className="bg-slate-700/30 p-6 border-b border-slate-600/50">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {testimonial.title}
                            </p>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Testimonial Content Section */}
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <p className="text-gray-300 leading-relaxed text-sm mb-4">
                        {testimonial.content}
                      </p>
                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                        View more
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                    </div>

                    {/* Bottom section for odd cards */}
                    {index % 2 === 1 && (
                      <div className="bg-slate-700/30 p-6 border-t border-slate-600/50">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {testimonial.title}
                            </p>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots with Arrows */}
        <div className="flex justify-center items-center space-x-6 mt-16">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Dots */}
          <div className="flex items-center space-x-4">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-white w-12'
                  : 'bg-white/40 hover:bg-white/60 w-3'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

