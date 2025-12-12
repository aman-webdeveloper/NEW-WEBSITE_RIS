import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Users, MapPin, Wrench, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  {
    icon: Users,
    label: '80+ IT Experts',
    description: 'Skilled professionals',
  },
  {
    icon: MapPin,
    label: 'PAN India Support',
    description: 'Nationwide coverage',
  },
  {
    icon: Wrench,
    label: 'Dedicated Infra Team',
    description: 'Specialized expertise',
  },
  {
    icon: Clock,
    label: '24×7 Support Options',
    description: 'Round-the-clock assistance',
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F7F7F9] to-[#EDEDF0] overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl lg:text-5xl">
            Why Choose Random IT Solutions?
          </h2>
          <p className="text-[#444444] text-lg max-w-3xl mx-auto">
            Random IT Solutions Pvt. Ltd. stands as India's premier provider of comprehensive IT services, 
            delivering cutting-edge technology solutions with unwavering commitment to excellence. With a 
            robust PAN India presence and a dedicated team of skilled professionals, we transform businesses 
            through innovative IT infrastructure and support services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Engaging Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-500/30 border border-blue-500/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MDgyMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="IT Infrastructure Technology"
                className="w-full h-[450px] sm:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-transparent to-cyan-500/20"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-blue-500/30 shadow-xl">
                <div className="text-3xl text-white">7+</div>
                <div className="text-sm text-blue-400">Years Experience</div>
              </div>

              <div className="absolute bottom-6 right-6 bg-slate-900/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-cyan-500/30 shadow-xl">
                <div className="text-3xl text-white">2500+</div>
                <div className="text-sm text-cyan-400">Happy Clients</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-blue-400 tracking-widest uppercase text-sm bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Your Trusted Partner for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">IT Excellence</span>
              </h2>
            </div>

            {/* Mini Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white group-hover:text-blue-400 transition-colors">{highlight.label}</div>
                      <div className="text-gray-400 text-sm">{highlight.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}