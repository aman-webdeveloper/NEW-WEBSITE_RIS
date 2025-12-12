import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function CareersHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-[#F5F5F7] to-[#E8F0FE]">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-[#1A1A1A] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Careers at Random IT Solutions
            </motion.h1>
            
            <motion.p
              className="text-xl text-[#444444] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join our mission to deliver world-class IT support across India
            </motion.p>

            <motion.p
              className="text-[#666666] leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We're building a team of passionate individuals who want to make a difference 
              in the IT industry. If you're ready to grow your career with a dynamic, 
              fast-growing company, explore our open positions below.
            </motion.p>
          </motion.div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1624237489159-9dc263f9cc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NjU0NDU3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Office Team Working"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
