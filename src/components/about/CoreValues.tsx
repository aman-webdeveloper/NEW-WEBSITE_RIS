import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Lightbulb, Heart, Star, Lock } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty and ethical conduct',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Users,
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on 24/7',
    color: 'from-green-500 to-green-700',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing cutting-edge technology to solve complex challenges',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Heart,
    title: 'Customer-First',
    description: 'Your success is our priority in everything we do',
    color: 'from-pink-500 to-red-600',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Striving for perfection in every service we deliver',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Lock,
    title: 'Transparency',
    description: 'Open communication and honest relationships with clients',
    color: 'from-cyan-500 to-blue-600',
  },
];

export function CoreValues() {
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
          <h2 className="text-white mb-4">Our Core Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Neon glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300`} />
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                {/* Icon with neon circle */}
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`relative w-full h-full bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-white text-center mb-3">{value.title}</h3>
                <p className="text-gray-400 text-center leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
