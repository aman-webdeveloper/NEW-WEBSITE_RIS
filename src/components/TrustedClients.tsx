import React from 'react';
import { motion } from 'motion/react';

// Mock client logos - in production these would be real client logos
const clientLogos = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateX', logo: 'IX' },
  { name: 'DataSys', logo: 'DS' },
  { name: 'CloudNet', logo: 'CN' },
  { name: 'SecureIT', logo: 'SI' },
  { name: 'InfoTech', logo: 'IT' },
  { name: 'WebPro', logo: 'WP' },
  { name: 'SysSol', logo: 'SS' },
  { name: 'NetCore', logo: 'NC' },
  { name: 'DigiFlow', logo: 'DF' },
  { name: 'SmartHub', logo: 'SH' },
  { name: 'TechWave', logo: 'TW' },
];

// Divide into 3 rows
const row1 = clientLogos.slice(0, 4);
const row2 = clientLogos.slice(4, 8);
const row3 = clientLogos.slice(8, 12);

export function TrustedClients() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#1F1F1F] via-[#2A2A2E] to-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
            Our Trusted Clients
          </h2>
          <p className="text-[#D6D6D6] text-lg">
            Partnering with industry leaders across India
          </p>
        </motion.div>

        <div className="space-y-6 overflow-hidden">
          {/* Row 1 - Scroll Right */}
          <div className="relative">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-6"
            >
              {[...row1, ...row1, ...row1].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-[#E4E4E7] hover:border-[#0066FF]/50 transition-all duration-300 flex items-center justify-center group hover:shadow-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="text-center">
                    <div className="text-4xl text-[#0066FF] group-hover:text-[#004FCC] transition-colors mb-2">
                      {client.logo}
                    </div>
                    <div className="text-sm text-[#444444] group-hover:text-[#1A1A1A] transition-colors">
                      {client.name}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Scroll Left */}
          <div className="relative">
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-6"
            >
              {[...row2, ...row2, ...row2].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-[#E4E4E7] hover:border-[#0066FF]/50 transition-all duration-300 flex items-center justify-center group hover:shadow-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="text-center">
                    <div className="text-4xl text-[#0066FF] group-hover:text-[#004FCC] transition-colors mb-2">
                      {client.logo}
                    </div>
                    <div className="text-sm text-[#444444] group-hover:text-[#1A1A1A] transition-colors">
                      {client.name}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 - Scroll Right */}
          <div className="relative">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-6"
            >
              {[...row3, ...row3, ...row3].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-[#E4E4E7] hover:border-[#0066FF]/50 transition-all duration-300 flex items-center justify-center group hover:shadow-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="text-center">
                    <div className="text-4xl text-[#0066FF] group-hover:text-[#004FCC] transition-colors mb-2">
                      {client.logo}
                    </div>
                    <div className="text-sm text-[#444444] group-hover:text-[#1A1A1A] transition-colors">
                      {client.name}
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