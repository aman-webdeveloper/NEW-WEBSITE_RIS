import React from 'react';
import { motion } from 'motion/react';
import { Rocket, TrendingUp, Users, Globe, Award } from 'lucide-react';

const milestones = [
  {
    year: '2015',
    icon: Rocket,
    title: 'Company Founded',
    description: 'Started our journey with a vision to revolutionize IT support in India',
  },
  {
    year: '2017',
    icon: TrendingUp,
    title: 'Rapid Growth',
    description: 'Expanded services to include cloud computing and rental solutions',
  },
  {
    year: '2019',
    icon: Users,
    title: '500+ Clients',
    description: 'Crossed the milestone of serving 500 satisfied clients nationwide',
  },
  {
    year: '2021',
    icon: Globe,
    title: 'PAN India Presence',
    description: 'Established comprehensive coverage across all major Indian cities',
  },
  {
    year: '2024',
    icon: Award,
    title: 'Industry Leader',
    description: 'Recognized as a leading IT solutions provider with 1200+ clients',
  },
];

export function OurJourney() {
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
          <h2 className="text-[#1A1A1A] mb-4">Our Journey</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            A decade of innovation, growth, and commitment to excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF]/20 via-[#0066FF] to-[#0066FF]/20 transform -translate-y-1/2" />

          {/* Milestones */}
          <div className="relative grid lg:grid-cols-5 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0066FF] rounded-full border-4 border-[#F5F5F7] z-10" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E4E4E7] h-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#004FCC] rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <milestone.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl text-[#0066FF] mb-2">{milestone.year}</div>
                  <h3 className="text-[#1A1A1A] mb-2">{milestone.title}</h3>
                  <p className="text-sm text-[#666666]">{milestone.description}</p>
                </motion.div>

                {/* Mobile Timeline Line */}
                {index < milestones.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#0066FF] to-[#0066FF]/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
