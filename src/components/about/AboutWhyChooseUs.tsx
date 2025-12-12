import React from 'react';
import { motion } from 'motion/react';
import { Clock, Shield, Zap, Award, Cloud, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance to keep your business running smoothly',
  },
  {
    icon: Shield,
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade security measures to protect your critical data and systems',
  },
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'Quick resolution times with our dedicated technical support team',
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Highly skilled professionals with industry-recognized certifications',
  },
  {
    icon: Cloud,
    title: 'Cloud + Network Experts',
    description: 'Specialized expertise in cloud computing and network infrastructure',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective Solutions',
    description: 'Flexible pricing models designed to maximize your ROI',
  },
];

export function AboutWhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1F1F1F] via-[#2A2A2E] to-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver exceptional IT solutions backed by expertise, reliability, and a commitment to your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#0066FF]/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#0066FF]/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#004FCC] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
