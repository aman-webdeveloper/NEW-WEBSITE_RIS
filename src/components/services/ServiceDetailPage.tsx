import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Service } from '../../data/servicesData';

interface ServiceDetailPageProps {
  service: Service;
  onBack: () => void;
}

export function ServiceDetailPage({ service, onBack }: ServiceDetailPageProps) {
  return (
    <div className="bg-[#F5F5F7] min-h-screen">
      {/* Service Header */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-[#F5F5F7] to-[#E8F0FE]">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-br ${service.gradient} rounded-full opacity-20`}
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
              }}
              animate={{
                x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              onClick={onBack}
              variant="ghost"
              className="group hover:bg-white/50 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <service.icon className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-[#1A1A1A] mb-4">{service.title}</h1>
            <p className="text-xl text-[#444444]">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer - Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#1A1A1A] text-center mb-12"
          >
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-[#F5F5F7] rounded-2xl p-6 border border-[#E4E4E7] hover:border-[#0066FF]/50 hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-[#1A1A1A] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#666666]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Image + Detailed Description */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image - slide from right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            {/* Text - slide from left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-[#1A1A1A] mb-6">About This Service</h2>
              <p className="text-[#444444] leading-relaxed text-lg">
                {service.detailedDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose This Service */}
      <section className="py-20 bg-gradient-to-br from-[#1F1F1F] via-[#2A2A2E] to-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">Why Choose This Service</h2>
            <p className="text-gray-400">Key benefits that set us apart</p>
          </motion.div>

          <div className="space-y-4">
            {service.whyChoose.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#0066FF]/50 transition-all duration-300 group"
              >
                <motion.div
                  className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
            
            {/* Animated circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 text-center py-16 px-8">
              <motion.h2
                className="text-white mb-4"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ready to Get Started?
              </motion.h2>
              <p className="text-white/90 mb-8 text-lg">
                Contact us today to learn more about our {service.title} service
              </p>
              <Button className="bg-white text-[#0066FF] hover:bg-gray-100 px-8 py-6 shadow-2xl">
                Contact Us for This Service
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
