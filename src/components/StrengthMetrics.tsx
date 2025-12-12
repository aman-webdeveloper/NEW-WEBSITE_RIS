import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Users, Briefcase } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasStarted]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function StrengthMetrics() {
  const metrics = [
    {
      icon: Award,
      value: 7,
      suffix: '+',
      label: 'Years Experience',
      description: 'Industry Leadership',
    },
    {
      icon: Users,
      value: 2500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Nationwide Trust',
    },
    {
      icon: Briefcase,
      value: 80,
      suffix: '+',
      label: 'Team Members',
      description: 'Expert Professionals',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#1F1F1F] via-[#2A2A2E] to-[#1F1F1F]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #0066FF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
            Our Strength
          </h2>
          <p className="text-[#D6D6D6] text-lg max-w-2xl mx-auto">
            Numbers that define our commitment to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 border border-[#E4E4E7] hover:border-[#0066FF]/50 transition-all duration-300 hover:shadow-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF]/10 to-[#0066FF]/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-[#0066FF]/20">
                    <metric.icon className="w-8 h-8 text-[#0066FF] group-hover:text-[#004FCC] transition-colors" />
                  </div>
                </div>

                {/* Counter */}
                <div className="text-center space-y-2">
                  <div className="text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] group-hover:text-[#0066FF] transition-all duration-300">
                    <Counter end={metric.value} duration={2000} suffix={metric.suffix} />
                  </div>
                  <div className="text-xl sm:text-2xl text-[#2E2E2E] group-hover:text-[#1A1A1A] transition-colors">
                    {metric.label}
                  </div>
                  <div className="text-[#0066FF] text-sm">
                    {metric.description}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/0 to-[#0066FF]/0 group-hover:from-[#0066FF]/5 group-hover:to-[#0066FF]/5 rounded-2xl transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}