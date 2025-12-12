import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: '#',
    color: 'from-blue-600 to-blue-500',
    hoverColor: 'group-hover:text-blue-400',
  },
  {
    icon: Instagram,
    name: 'Instagram',
    url: '#',
    color: 'from-pink-600 to-purple-500',
    hoverColor: 'group-hover:text-pink-400',
  },
  {
    icon: Youtube,
    name: 'YouTube',
    url: '#',
    color: 'from-red-600 to-red-500',
    hoverColor: 'group-hover:text-red-400',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    url: '#',
    color: 'from-sky-600 to-sky-500',
    hoverColor: 'group-hover:text-sky-400',
  },
];

export function DigitalCommunity() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#EDEDF0] via-[#2A2A2E] to-[#1F1F1F]">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl">
              Be a Part of Our Digital Community
            </h2>
            <p className="text-[#D6D6D6] text-lg max-w-2xl mx-auto">
              Connect with us on social media for the latest updates, insights, and innovations
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.1 }}
                className="group relative"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/90 rounded-full border border-[#E4E4E7] group-hover:border-[#0066FF]/50 transition-all duration-300 flex items-center justify-center overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-2xl">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <social.icon className={`w-10 h-10 sm:w-12 sm:h-12 text-[#444444] ${social.hoverColor} transition-colors duration-300 relative z-10`} />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full shadow-lg shadow-[#0066FF]/0 group-hover:shadow-[#0066FF]/50 transition-shadow duration-300"></div>
                </div>

                {/* Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#D6D6D6] group-hover:text-[#0066FF] transition-colors whitespace-nowrap opacity-0 group-hover:opacity-100">
                  {social.name}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent mx-auto"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}