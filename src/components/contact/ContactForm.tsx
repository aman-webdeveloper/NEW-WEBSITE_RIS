import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send to raghav@randomitsolutions.com
    // For now, we'll show a success message
    console.log('Form submitted:', formData);
    console.log('This would be sent to: raghav@randomitsolutions.com');
    
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <section className="py-20 bg-[#F5F5F7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1A1A1A] mb-4">Send Us a Message</h2>
          <p className="text-[#666666]">
            Fill out the form below and we'll get back to you shortly
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-[#E4E4E7]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm text-[#444444] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all bg-[#F5F5F7] text-[#1A1A1A]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm text-[#444444] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all bg-[#F5F5F7] text-[#1A1A1A]"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm text-[#444444] mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all bg-[#F5F5F7] text-[#1A1A1A]"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="block text-sm text-[#444444] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all bg-[#F5F5F7] text-[#1A1A1A]"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label htmlFor="service" className="block text-sm text-[#444444] mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all bg-[#F5F5F7] text-[#1A1A1A]"
                    >
                      <option value="">Select a service</option>
                      <option value="web-designing">Web Designing</option>
                      <option value="pan-india-it-support">PAN India IT Support</option>
                      <option value="pickup-drop">Pickup & Drop Services</option>
                      <option value="staffing">Staffing Services</option>
                      <option value="cloud-computing">Cloud Computing</option>
                      <option value="rental">Rental Laptop & Desktop</option>
                      <option value="cctv-biometric">CCTV & Biometric</option>
                      <option value="it-infra">IT Infra Project</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-[#444444] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all bg-[#F5F5F7] text-[#1A1A1A] resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white py-6 group transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-[#1A1A1A] mb-4"
                  >
                    Thank You!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-[#666666] text-lg"
                  >
                    We have received your details. Our team will contact you shortly.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
