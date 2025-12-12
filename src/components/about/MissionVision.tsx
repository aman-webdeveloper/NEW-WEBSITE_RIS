import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#F5F5F7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0066FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-3xl" />
              </div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#004FCC] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#1A1A1A] mb-4">Our Mission</h3>
                <p className="text-[#444444] leading-relaxed">
                  To empower businesses across India with reliable, secure, and innovative IT solutions that drive 
                  growth and efficiency. We are committed to delivering exceptional service, building lasting 
                  partnerships, and ensuring our clients stay ahead in the digital age.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-[#0066FF]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-3xl" />
              </div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#1A1A1A] mb-4">Our Vision</h3>
                <p className="text-[#444444] leading-relaxed">
                  To be India's most trusted IT solutions partner, recognized for excellence in service delivery, 
                  innovation, and customer satisfaction. We envision a future where every business, regardless of 
                  size, has access to enterprise-grade technology infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
