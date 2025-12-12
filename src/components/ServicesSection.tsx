import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Headphones, Truck, Users, Cloud, Laptop, Shield, Network } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Globe,
    title: 'Web Designing',
    description: 'Modern, responsive websites tailored to your brand',
    image: 'https://images.unsplash.com/photo-1612541122840-bf7071c968a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjQwNjU4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Headphones,
    title: 'PAN India IT Support',
    description: '24/7 technical support across all locations',
    image: 'https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjBoZWxwZGVza3xlbnwxfHx8fDE3NjQwNzI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Truck,
    title: 'PAN India Pickup & Drop',
    description: 'Reliable logistics for IT equipment nationwide',
    image: 'https://images.unsplash.com/photo-1760662052295-f84068499a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBkZWxpdmVyeSUyMHNlcnZpY2V8ZW58MXx8fHwxNzY0MDcyNjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Users,
    title: 'Staffing Services',
    description: 'Expert IT professionals for your projects',
    image: 'https://images.unsplash.com/photo-1641122669951-3e2aff778d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFmZmluZyUyMHJlY3J1aXRtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjQwNzI2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Scalable cloud solutions for modern businesses',
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzOTk0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Laptop,
    title: 'Rental Laptop & Desktop',
    description: 'Flexible rental solutions for your workforce',
    image: 'https://images.unsplash.com/photo-1636275133457-b57780aeeab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjByZW50YWwlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjQwNzI2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Shield,
    title: 'CCTV & Biometric',
    description: 'Advanced security and access control systems',
    image: 'https://images.unsplash.com/photo-1566060475410-1159300f046f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY0MDcyNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Network,
    title: 'IT Infra Project',
    description: 'Complete infrastructure setup and management',
    image: 'https://images.unsplash.com/photo-1708481295267-4b1859f4ffc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGluZnJhc3RydWN0dXJlJTIwbmV0d29ya3xlbnwxfHx8fDE3NjQwNzI2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  // Auto-scroll effect with 5-second delay
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Wait 5 seconds before starting auto-scroll
    const delayTimer = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);

    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Slower, more readable speed
    let animationFrameId: number;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset scroll position for infinite loop effect
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isAutoScrolling]);

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#EDEDF0] via-[#F5F5F7] to-[#F7F7F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Sticky Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="space-y-4">
                <span className="text-[#0066FF] tracking-wider uppercase text-sm">
                  What We Offer
                </span>
                <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl lg:text-5xl">
                  Services at RIS
                </h2>
              </div>
              
              <p className="text-[#2E2E2E] text-lg">
                Comprehensive IT solutions tailored to meet your business needs.
              </p>

              <div className="space-y-4">
                <p className="text-[#444444]">
                  From cloud computing to IT infrastructure, we deliver cutting-edge technology 
                  services that drive business growth and operational efficiency.
                </p>
              </div>

              <Button className="bg-[#0066FF] hover:bg-[#004FCC] text-white shadow-md hover:shadow-lg transition-all duration-300 group">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Decorative Element */}
              <div className="hidden lg:block">
                <div className="w-20 h-1 bg-gradient-to-r from-[#0066FF] to-[#004FCC] rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Auto-Scrolling Infinite Carousel */}
          <div className="lg:col-span-8 overflow-hidden">
            <div className="relative">
              {/* Gradient Overlays for Edge Fade */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F5F5F7] to-transparent z-10 pointer-events-none hidden sm:block"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F5F7] to-transparent z-10 pointer-events-none hidden sm:block"></div>

              <div 
                ref={scrollRef}
                className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-4"
              >
                {/* Duplicate services for seamless infinite loop */}
                <div className="flex gap-6 px-2 sm:px-4">
                  {[...services, ...services].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index % services.length) * 0.05 }}
                      className="flex-shrink-0 w-72 sm:w-80 group"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden border border-[#E4E4E7] hover:border-[#0066FF]/50 transition-all duration-300 hover:shadow-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-full">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-[#1F1F1F]/50 to-transparent"></div>
                          
                          {/* Icon Overlay */}
                          <div className="absolute bottom-4 left-4">
                            <div className="w-12 h-12 bg-[#0066FF]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#0066FF]/30 group-hover:bg-[#0066FF]/30 transition-all">
                              <service.icon className="w-6 h-6 text-[#0066FF]" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-3">
                          <h3 className="text-[#1A1A1A] text-xl group-hover:text-[#0066FF] transition-all duration-300">
                            {service.title}
                          </h3>
                          <p className="text-[#444444] group-hover:text-[#2E2E2E] transition-colors">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}