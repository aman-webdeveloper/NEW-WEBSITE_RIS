import React from 'react';
import { motion } from 'motion/react';

// Mock partner logos - in production these would be real partner logos
const partnerLogos = [
  { name: 'Microsoft', logo: 'MS' },
  { name: 'Amazon AWS', logo: 'AWS' },
  { name: 'Google Cloud', logo: 'GC' },
  { name: 'IBM', logo: 'IBM' },
  { name: 'Oracle', logo: 'ORC' },
  { name: 'Cisco', logo: 'CSC' },
  { name: 'Dell', logo: 'DELL' },
  { name: 'HP', logo: 'HP' },
  { name: 'Intel', logo: 'INT' },
  { name: 'VMware', logo: 'VM' },
  { name: 'SAP', logo: 'SAP' },
  { name: 'Adobe', logo: 'ADB' },
];

// Divide into 3 rows
const row1 = partnerLogos.slice(0, 4);
const row2 = partnerLogos.slice(4, 8);
const row3 = partnerLogos.slice(8, 12);

export function TrustedPartners() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#F7F7F9] via-[#F5F5F7] to-[#EDEDF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl lg:text-5xl mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-[#444444] text-lg">
            Collaborating with global technology leaders
          </p>
        </motion.div>

        <div className="space-y-6 overflow-hidden">
          {/* Row 1 - Scroll Left */}
          <div className="relative">
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-6"
            >
              {[...row1, ...row1, ...row1].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-[#E4E4E7] hover:border-[#0066FF]/50 transition-all duration-300 flex items-center justify-center group hover:shadow-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="text-center">
                    <div className="text-4xl text-[#0066FF] group-hover:text-[#004FCC] transition-colors mb-2">
                      {partner.logo}
                    </div>
                    <div className="text-sm text-[#444444] group-hover:text-[#1A1A1A] transition-colors">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="relative">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-6"
            >
              {[...row2, ...row2, ...row2].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-[#E4E4E7] hover:border-[#0066FF]/50 transition-all duration-300 flex items-center justify-center group hover:shadow-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="text-center">
                    <div className="text-4xl text-[#0066FF] group-hover:text-[#004FCC] transition-colors mb-2">
                      {partner.logo}
                    </div>
                    <div className="text-sm text-[#444444] group-hover:text-[#1A1A1A] transition-colors">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 - Scroll Left */}
          <div className="relative">
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-6"
            >
              {[...row3, ...row3, ...row3].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-[#E4E4E7] hover:border-[#0066FF]/50 transition-all duration-300 flex items-center justify-center group hover:shadow-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="text-center">
                    <div className="text-4xl text-[#0066FF] group-hover:text-[#004FCC] transition-colors mb-2">
                      {partner.logo}
                    </div>
                    <div className="text-sm text-[#444444] group-hover:text-[#1A1A1A] transition-colors">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}