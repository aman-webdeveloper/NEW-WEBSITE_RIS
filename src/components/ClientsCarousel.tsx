import { useEffect, useState } from 'react';

interface ClientsCarouselProps {
  title: string;
  type: 'clients' | 'partners';
}

export function ClientsCarousel({ title, type }: ClientsCarouselProps) {
  const [currentRow, setCurrentRow] = useState(0);

  // Mock client/partner logos with company names
  const logos = [
    { name: 'TechCorp', color: 'from-blue-600 to-blue-800' },
    { name: 'InnovateLabs', color: 'from-purple-600 to-purple-800' },
    { name: 'DataSystems', color: 'from-green-600 to-green-800' },
    { name: 'CloudFirst', color: 'from-red-600 to-red-800' },
    { name: 'SecureNet', color: 'from-indigo-600 to-indigo-800' },
    { name: 'FastTrack', color: 'from-orange-600 to-orange-800' },
    { name: 'SmartBiz', color: 'from-teal-600 to-teal-800' },
    { name: 'GlobalTech', color: 'from-pink-600 to-pink-800' },
    { name: 'NextGen', color: 'from-cyan-600 to-cyan-800' },
    { name: 'ProActive', color: 'from-amber-600 to-amber-800' },
    { name: 'DigiWorld', color: 'from-lime-600 to-lime-800' },
    { name: 'MegaSoft', color: 'from-rose-600 to-rose-800' },
    { name: 'TechHub', color: 'from-violet-600 to-violet-800' },
    { name: 'BizSolutions', color: 'from-fuchsia-600 to-fuchsia-800' },
    { name: 'InfoTech', color: 'from-sky-600 to-sky-800' },
    { name: 'ConnectPro', color: 'from-emerald-600 to-emerald-800' },
    { name: 'VisionIT', color: 'from-blue-500 to-purple-600' },
    { name: 'CoreTech', color: 'from-green-500 to-teal-600' },
  ];

  // Split logos into rows of 6
  const rows: typeof logos[][] = [];
  for (let i = 0; i < logos.length; i += 6) {
    rows.push(logos.slice(i, i + 6));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRow((prev) => (prev + 1) % rows.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [rows.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proud to work with leading organizations across various industries
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Carousel Container */}
          <div className="flex flex-col gap-6">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-all duration-700 ${
                  rowIndex === currentRow
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-50 scale-95'
                }`}
              >
                {row.map((logo, logoIndex) => (
                  <div
                    key={`${rowIndex}-${logoIndex}`}
                    className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group min-h-[120px]"
                  >
                    <div
                      className={`bg-gradient-to-br ${logo.color} bg-clip-text text-transparent text-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-2xl">{logo.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {rows.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentRow(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentRow
                    ? 'bg-blue-600 w-8 h-2'
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to row ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Infinite Scroll Animation */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-infiniteScroll gap-8">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg px-8 py-4 min-w-[180px] text-center"
              >
                <div className={`bg-gradient-to-br ${logo.color} bg-clip-text text-transparent`}>
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
