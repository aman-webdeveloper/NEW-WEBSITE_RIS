import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const highlights = [
  { icon: Award, label: '8+ Years', sublabel: 'Experience' },
  { icon: Users, label: '1200+', sublabel: 'Clients' },
  { icon: MapPin, label: 'PAN India', sublabel: 'Coverage' },
];

export function WhoWeAre() {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image with overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWFtfGVufDF8fHx8MTc2NTM1NzcxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Random IT Solutions Team"
                className="w-full h-[500px] object-cover"
              />
              {/* Animated grid overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/20 via-transparent to-transparent" />
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0066FF" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#1A1A1A] mb-6">Who We Are</h2>
            <p className="text-[#444444] mb-6 leading-relaxed">
              Random IT Solutions Pvt. Ltd. is a leading IT infrastructure and services company based in 
              Gurugram, serving businesses across India. We specialize in comprehensive IT support, cloud 
              computing, rental services, CCTV solutions, and much more.
            </p>
            <p className="text-[#666666] mb-8 leading-relaxed">
              Our team of certified professionals is committed to delivering excellence, ensuring your 
              technology infrastructure runs smoothly and securely 24/7.
            </p>

            {/* Mini highlight cards */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-white/50"
                >
                  <item.icon className="w-8 h-8 text-[#0066FF] mb-2" />
                  <div className="text-[#1A1A1A] mb-1">{item.label}</div>
                  <div className="text-sm text-[#666666]">{item.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
