import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 8448870418',
    subtitle: 'Available 9 AM – 9 PM',
    gradient: 'from-blue-500 to-blue-700',
    delay: 0.1,
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'raghav@randomitsolutions.com',
    subtitle: 'We usually reply in 30 minutes',
    gradient: 'from-purple-500 to-purple-700',
    delay: 0.2,
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Gurgaon, Haryana, India',
    subtitle: '2nd Floor, M46, Old DLF Colony',
    gradient: 'from-teal-500 to-teal-700',
    delay: 0.3,
  },
];

export function ContactCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-[#1A1A1A] mb-4">{item.title}</h3>
                  <p className="text-[#0066FF] mb-2 break-all">{item.value}</p>
                  <p className="text-sm text-[#666666]">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
