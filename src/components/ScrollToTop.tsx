import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate scroll progress
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-soft-blue hover:bg-steel-blue text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soft-blue hidden lg:flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          {/* Progress ring */}
          <svg 
            className="absolute inset-0 w-12 h-12 transform -rotate-90" 
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-white/30"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
              className="text-white transition-all duration-300"
              strokeLinecap="round"
            />
          </svg>
          
          <ArrowUp className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
        </button>
      )}

      {/* Mobile Emergency Call Button */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <div className="flex flex-col space-y-3">
          {/* Emergency Call */}
          <a
            href="tel:+359888494533"
            className="w-14 h-14 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Emergency call"
          >
            <Phone className="w-6 h-6 group-hover:animate-pulse" />
          </a>
          
          {/* Scroll to Top for Mobile */}
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-soft-blue hover:bg-steel-blue text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soft-blue flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h