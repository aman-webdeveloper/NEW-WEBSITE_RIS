import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Glossy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-[#0052CC] to-purple-700" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <h2 className="text-white mb-6">
              Let's Build Something Powerful Together
            </h2>
          </motion.div>
          
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Ready to transform your IT infrastructure? Our team is here to help you succeed.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-white text-[#0066FF] hover:bg-gray-100 px-8 py-6 shadow-2xl group transition-all duration-300">
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Subtle glow effect on button */}
          <motion.div
            className="mt-8 text-white/80"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Available 24/7 • PAN India Support
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </section>
  );
}
