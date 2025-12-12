import {
  Settings,
  Layout,
  Headphones,
  Truck,
  Users,
  Cloud,
  Laptop,
  Camera,
  Server,
} from 'lucide-react';

export function ServicesGrid() {
  const services = [
    {
      icon: Settings,
      title: 'Services at RIS',
      description: 'Comprehensive IT solutions tailored to meet your business requirements with excellence.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Layout,
      title: 'Web Designing',
      description: 'Modern, responsive websites crafted to enhance your digital presence and user experience.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: Headphones,
      title: 'PAN India IT Support',
      description: 'Round-the-clock technical support across all major cities in India with rapid response.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Truck,
      title: 'PAN India Pickup & Drop Services',
      description: 'Reliable logistics for IT equipment with safe transportation across the country.',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: Users,
      title: 'Staffing Services',
      description: 'Expert IT professionals on demand to scale your team with the right talent.',
      color: 'from-pink-500 to-pink-700',
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Seamless cloud migration, management, and optimization for scalable infrastructure.',
      color: 'from-cyan-500 to-cyan-700',
    },
    {
      icon: Laptop,
      title: 'Rental Laptop & Desktop Services',
      description: 'Flexible rental solutions for laptops and desktops with latest configurations.',
      color: 'from-indigo-500 to-indigo-700',
    },
    {
      icon: Camera,
      title: 'CCTV & Biometric',
      description: 'Advanced security systems with installation, maintenance, and monitoring services.',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: Server,
      title: 'IT Infra Project',
      description: 'Complete IT infrastructure setup from planning to deployment and maintenance.',
      color: 'from-teal-500 to-teal-700',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            What We Offer
          </div>
          <h2 className="mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to empower your business with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Custom Solution
          </a>
        </div>
      </div>
    </section>
  );
}
