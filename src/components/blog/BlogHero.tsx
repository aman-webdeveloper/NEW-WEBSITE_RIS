import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, TrendingUp, Lightbulb } from 'lucide-react';

const floatingIcons = [
  { Icon: BookOpen, delay: 0 },
  { Icon: TrendingUp, delay: 0.5 },
  { Icon: Lightbulb, delay: 1 },
];

export function BlogHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-[#F5F5F7] to-[#E8F0FE]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay }, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
              y: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: delay,
              ease: 'linear',
            }}
          >
            <Icon className="w-16 h-16 text-[#0066FF]" />
          </motion.div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Tech Insights & IT Guides
          </motion.h1>
          
          <motion.p
            className="text-xl text-[#444444] mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Latest blogs on laptops, IT support, security, rentals & more
          </motion.p>

          <motion.p
            className="text-[#666666] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Stay informed with expert insights, practical guides, and industry trends 
            to help you make better IT decisions for your business.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
