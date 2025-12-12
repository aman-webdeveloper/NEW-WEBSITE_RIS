import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDA1OTkxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Transform Your Business with IT Excellence',
    description: 'Leading provider of comprehensive IT solutions across India',
    cta: 'Get Started',
  },
  {
    image: 'https://images.unsplash.com/photo-1762341123207-534f965910df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDA1OTkxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: '7+ Years of Industry Leadership',
    description: 'Trusted by 2500+ clients nationwide for innovative technology solutions',
    cta: 'Learn More',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbXxlbnwxfHx8fDE3NjQwNzI1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Expert IT Support & Infrastructure',
    description: 'PAN India coverage with dedicated team of 80+ professionals',
    cta: 'Contact Us',
  },
  {
    image: 'https://images.unsplash.com/photo-1761195689615-9469b65dac01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHNvbHV0aW9uc3xlbnwxfHx8fDE3NjQwNzI1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Cloud Computing & Digital Transformation',
    description: 'Empowering businesses with cutting-edge cloud solutions and IT infrastructure',
    cta: 'Explore Services',
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1F1F1F] via-[#2A2A2E] to-[#1F1F1F]">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => 
          index === currentSlide ? (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/95 via-[#1F1F1F]/85 to-[#1F1F1F]/40"></div>
              </div>

              {/* Content */}
              <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center">
                <div className="max-w-2xl space-y-6 py-8 sm:py-12 pr-16 sm:pr-20 lg:pr-24">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-[#D6D6D6] text-sm sm:text-lg md:text-xl max-w-xl"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <Button className="bg-[#0066FF] hover:bg-[#004FCC] text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300">
                      {slide.cta}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation Arrows - Smaller, just icons */}
      <button
        onClick={prevSlide}
        className="absolute left-1 sm:left-4 bottom-24 sm:top-1/2 sm:-translate-y-1/2 text-white/80 hover:text-white p-1 transition-all duration-300 hover:scale-125 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 sm:right-4 bottom-24 sm:top-1/2 sm:-translate-y-1/2 text-white/80 hover:text-white p-1 transition-all duration-300 hover:scale-125 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-500 w-6 sm:w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}