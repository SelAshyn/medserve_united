'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React, { useState } from 'react';

const HealthcareHeroSections = () => {
    useEffect(() => {
      AOS.init({ duration: 1900 });
    }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Health for",
      titleHighlight: "All.",
      description: "Our vision aligns with the goal of \"Health for All\" as conceived by the WHO (World Health Organization). We believe that health is a fundamental right and that accessible healthcare can be achieved by empowering the healthcare system.",
      image: "/api/placeholder/800/400",
      bgColor: "bg-gradient-to-br from-blue-50 to-white"
    },
    {
      id: 2,
      title: "Connecting Medical Excellence.",
      titleHighlight: "Bridging the Gap.",
      description: "As one of the nation's fastest-growing medical recruitment firms, we have proudly placed over 500 highly skilled doctors nationwide. Bridging the gap between leading healthcare institutions and exceptional medical talent, Medserve United is your trusted partner in medical recruitment.",
      image: "/api/placeholder/800/400",
      bgColor: "bg-gradient-to-br from-teal-50 to-white"
    },
    {
      id: 3,
      title: "Excellence in",
      titleHighlight: "Patient Care.",
      description: "Delivering world-class healthcare services through innovation, compassion, and dedication. Our team of experienced professionals works tirelessly to ensure every patient receives personalized attention and the highest quality medical care available.",
      image: "/api/placeholder/800/400",
      bgColor: "bg-gradient-to-br from-purple-50 to-white"
    },
    {
      id: 4,
      title: "Building Healthier",
      titleHighlight: "Communities.",
      description: "We're committed to transforming healthcare delivery in underserved areas. Through community outreach programs, preventive care initiatives, and accessible medical services, we're making a lasting impact on public health and wellness across the nation.",
      image: "/api/placeholder/800/400",
      bgColor: "bg-gradient-to-br from-rose-50 to-white"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAnimating(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAnimating(true);
  };

  // Auto-slide effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  // Reset animation on slide change
  React.useEffect(() => {
    setIsAnimating(false);
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className=" bg-white" data-aos="fade-up">
      {/* Header/Navbar placeholder */}

      {/* Hero Slider */}
      <div className="relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
          >
            <div className={`flex items-center`}>
              <div className="max-w-8xl mx-auto px-8 py-20 w-full">
                {/* Centered Content with Background Image */}
                <div className="relative min-h-[600px] flex items-center justify-center">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    {slide.id === 1 ? (
                      <div className="h-full w-full flex items-center justify-center">
                        <img className='w-full' src="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg" alt="" />
                      </div>
                    ) : slide.id === 2 ? (
                      <div className=" h-full w-full flex items-center justify-center relative">
                          <img className='w-full' src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" alt="" />
                      </div>
                    ) : slide.id === 3 ? (
                      <div className="h-full w-full flex items-center justify-center relative">
                            <img className='w-full' src="https://pxl-mayoedu.terminalfour.net/fit-in/1024x2000/filters:quality(75)/prod01/channel_2/media/mccms/content-assets/academics/explore-health-care-careers/diagnostic-medical-sonographer-1024X512.jpg" alt="" />
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-rose-100 to-rose-200 h-full w-full flex items-center justify-center relative">
                              <img className='w-full' src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2025/news/PHOTO-1740891335.jpg&w=900&height=601" alt="" />
                      </div>
                    )}
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-black/60"></div>
                  </div>

                  {/* Centered Text Content */}
                  <div className="relative z-10 text-center max-w-4xl px-8 space-y-6">
                    <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${isAnimating ? 'animate-slide-in-left' : 'opacity-0'}`}>
                      {slide.id === 1 ? (
                        <>
                          <span className="text-white inline-block" style={{ animationDelay: '0.1s' }}>Health for </span>
                          <span className="text-green-400 inline-block" style={{ animationDelay: '0.3s' }}>All.</span>
                        </>
                      ) : (
                        <>
                          <div className="text-white" style={{ animationDelay: '0.1s' }}>{slide.title}</div>
                          <div className="text-green-400" style={{ animationDelay: '0.3s' }}>{slide.titleHighlight}</div>
                        </>
                      )}
                    </h1>

                    <p className={`text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${isAnimating ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                      {slide.description}
                    </p>

                    <div className={`${isAnimating ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
                      <a href="#learn-more" style={{ cursor: 'pointer' }} className="group inline-flex items-center space-x-2 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        <span className="font-semibold">Learn More</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-15 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all duration-300 z-40 group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-gray-700 group-hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-15 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all duration-300 z-40 group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-gray-700 group-hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                  ? 'w-12 h-3 bg-green-400'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.7s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default HealthcareHeroSections;
