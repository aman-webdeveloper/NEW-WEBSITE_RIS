import React from 'react';
import { motion } from 'motion/react';
import { Server, Laptop, Cloud, Network, Shield, Camera, Headphones } from 'lucide-react';

const expertiseAreas = [
  { icon: Server, label: 'IT Infrastructure' },
  { icon: Laptop, label: 'Laptop/Desktop Rentals' },
  { icon: Cloud, label: 'Cloud Setup' },
  { icon: Network, label: 'Networking' },
  { icon: Shield, label: 'Cybersecurity' },
  { icon: Camera, label: 'CCTV + Surveillance' },
  { icon: Headphones, label: 'Remote Support' },
];

export function ExpertiseStrip() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#F5F5F7] via-white to-[#F5F5F7] overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-[#1A1A1A] mb-4">Our Expertise</h2>
        <p className="text-[#666666]">Comprehensive IT solutions across multiple domains</p>
      </div>

      <div className="relative">
        {/* Animated scrolling strip */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Duplicate the array twice for seamless loop */}
          {[...expertiseAreas, ...expertiseAreas, ...expertiseAreas].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg border border-[#E4E4E7] hover:shadow-xl hover:border-[#0066FF]/50 transition-all duration-300 min-w-[250px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#004FCC] rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-[#1A1A1A]">{item.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5F5F7] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5F5F7] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
