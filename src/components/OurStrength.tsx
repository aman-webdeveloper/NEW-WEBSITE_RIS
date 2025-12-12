import { useEffect, useRef, useState } from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

export function OurStrength() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ experience: 0, clients: 0, team: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    const targets = { experience: 7, clients: 2500, team: 80 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        experience: Math.floor(targets.experience * progress),
        clients: Math.floor(targets.clients * progress),
        team: Math.floor(targets.team * progress),
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, increment);
  };

  const metrics = [
    {
      icon: TrendingUp,
      value: `${counters.experience}+`,
      label: 'Years Experience',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Users,
      value: `${counters.clients}+`,
      label: 'Happy Clients',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Award,
      value: `${counters.team}+`,
      label: 'Team Members',
      color: 'from-green-500 to-green-700',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Strength</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built on years of excellence, powered by a dedicated team, and trusted by thousands
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${metric.color} rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <p className="text-gray-600 text-lg">{metric.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
