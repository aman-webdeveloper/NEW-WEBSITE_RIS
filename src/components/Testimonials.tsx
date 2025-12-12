import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    position: 'IT Director',
    company: 'TechCorp India',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA1OTI2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    review: 'Random IT Solutions has been our trusted partner for over 3 years. Their PAN India support and quick response time have been crucial for our operations.',
  },
  {
    name: 'Priya Sharma',
    position: 'CEO',
    company: 'InnovateX Solutions',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA1OTI2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    review: 'Outstanding service quality and professionalism. Their cloud computing solutions transformed our business operations completely.',
  },
  {
    name: 'Amit Patel',
    position: 'Operations Manager',
    company: 'DataSys Enterprise',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA1OTI2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    review: 'Excellent IT infrastructure services. They handled our complete setup seamlessly with minimal downtime. Highly recommended!',
  },
  {
    name: 'Sneha Reddy',
    position: 'HR Head',
    company: 'CloudNet Technologies',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA1OTI2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    review: 'Their staffing services helped us find the right IT talent quickly. Professional team with deep industry knowledge.',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (currentIndex + 1) % testimonials.length;

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#1F1F1F] via-[#2A2A2E] to-[#1F1F1F] overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl">
            See What Our Clients Say About Us
          </h2>
          <p className="text-[#D6D6D6] text-lg max-w-2xl mx-auto">
            Real experiences from businesses we've partnered with
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: 3 Cards Layout with Center Phone Focus */}
          <div className="hidden lg:flex items-center justify-center gap-8 min-h-[550px]">
            {/* Left Card - Blurred */}
            <motion.div
              key={`left-${getPrevIndex()}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 max-w-sm blur-[2px] scale-90 opacity-40"
            >
              <TestimonialCard testimonial={testimonials[getPrevIndex()]} />
            </motion.div>

            {/* Center Card - Phone Mockup Focus */}
            <div className="flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`center-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Phone Frame */}
                  <div className="relative w-[380px] h-[650px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[50px] border-[12px] border-slate-950 shadow-2xl shadow-blue-500/30">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-950 rounded-b-3xl"></div>
                    
                    {/* Phone Screen */}
                    <div className="absolute inset-3 bg-gradient-to-br from-slate-900 to-slate-950 rounded-[38px] overflow-hidden">
                      <div className="h-full flex flex-col justify-center p-8">
                        <TestimonialCard testimonial={testimonials[currentIndex]} isCenter />
                      </div>
                    </div>

                    {/* Phone Button */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-700 rounded-full"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Card - Blurred */}
            <motion.div
              key={`right-${getNextIndex()}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 max-w-sm blur-[2px] scale-90 opacity-40"
            >
              <TestimonialCard testimonial={testimonials[getNextIndex()]} />
            </motion.div>
          </div>

          {/* Mobile: Single Phone Card */}
          <div className="lg:hidden flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-sm"
              >
                {/* Phone Frame for Mobile */}
                <div className="relative w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-[40px] border-[10px] border-slate-950 shadow-2xl shadow-blue-500/30 p-6">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-b-3xl"></div>
                  
                  <div className="pt-4">
                    <TestimonialCard testimonial={testimonials[currentIndex]} isCenter />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 lg:-translate-x-16 bg-slate-900/70 backdrop-blur-md hover:bg-slate-900/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-blue-500/20 hover:border-blue-500/50 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 lg:translate-x-16 bg-slate-900/70 backdrop-blur-md hover:bg-slate-900/90 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-blue-500/20 hover:border-blue-500/50 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial, isCenter = false }: { testimonial: typeof testimonials[0]; isCenter?: boolean }) {
  return (
    <div className={`${isCenter ? 'bg-transparent' : 'bg-slate-900/50 backdrop-blur-sm'} rounded-2xl p-6 space-y-4`}>
      {/* Quote Icon */}
      {isCenter && (
        <div className="flex justify-center">
          <Quote className="w-10 h-10 text-blue-500/30" />
        </div>
      )}

      {/* Review Text */}
      <p className={`text-gray-300 ${isCenter ? 'text-base text-center' : 'text-sm'} leading-relaxed`}>
        "{testimonial.review}"
      </p>

      {/* Rating */}
      <div className={`flex gap-1 ${isCenter ? 'justify-center' : ''}`}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Client Info */}
      <div className={`flex items-center gap-3 pt-3 ${isCenter ? 'justify-center border-t border-blue-500/20' : ''}`}>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30 flex-shrink-0">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className={isCenter ? 'text-center' : ''}>
          <div className="text-white">
            {testimonial.name}
          </div>
          <div className="text-gray-400 text-sm">
            {testimonial.position}
          </div>
          <div className="text-blue-400 text-sm">
            {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}