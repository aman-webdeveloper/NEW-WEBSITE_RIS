import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { Button } from '../ui/button';

interface ServicesGridProps {
  onServiceClick: (serviceId: string) => void;
}

export function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1A1A1A] mb-4">Our Complete Service Portfolio</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            Explore our comprehensive range of IT solutions designed to accelerate your business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Gradient glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}
              />

              {/* Card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-[#1A1A1A] mb-3 group-hover:text-[#0066FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#666666] mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <Button
                  onClick={() => onServiceClick(service.id)}
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-[#0066FF]/10 transition-all duration-300"
                >
                  <span className="group-hover/btn:text-[#0066FF] transition-colors">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 group-hover/btn:text-[#0066FF] transition-all duration-300" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
