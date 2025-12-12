import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F5F7] via-white to-[#E8F0FE]">
      {/* Animated Tech Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#0066FF]/20 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#1A1A1A] mb-6">About Random IT Solutions</h1>
          <p className="text-xl text-[#444444] mb-8 max-w-3xl mx-auto">
            Empowering India's Businesses with Reliable IT Solutions
          </p>
          <p className="text-[#666666] max-w-2xl mx-auto mb-10 leading-relaxed">
            Since 2015, we've been delivering cutting-edge IT infrastructure, cloud solutions, and comprehensive 
            technology services across India. Our mission is to transform businesses through innovation, 
            reliability, and exceptional customer service.
          </p>
          <Button className="bg-[#0066FF] hover:bg-[#004FCC] text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
            Know Our Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
