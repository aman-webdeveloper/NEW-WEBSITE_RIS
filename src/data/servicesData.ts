import { 
  Settings, 
  Palette, 
  Headphones, 
  Package, 
  Users, 
  Cloud, 
  Laptop, 
  Camera, 
  Server,
  Zap,
  Shield,
  Globe,
  Truck,
  UserCheck,
  Database,
  Monitor,
  Lock,
  Network
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  gradient: string;
  features: {
    icon: any;
    title: string;
    description: string;
  }[];
  detailedDescription: string;
  whyChoose: string[];
  image: string;
}

export const servicesData: Service[] = [
  {
    id: 'services-at-ris',
    title: 'Services at RIS',
    subtitle: 'All IT needs under one roof',
    description: 'Comprehensive IT solutions tailored for businesses of all sizes across India',
    icon: Settings,
    gradient: 'from-blue-500 to-blue-700',
    features: [
      {
        icon: Zap,
        title: 'Faster Support',
        description: 'Quick response times with dedicated technical assistance',
      },
      {
        icon: Shield,
        title: 'Enterprise-Grade Service',
        description: 'Professional solutions designed for business reliability',
      },
      {
        icon: Settings,
        title: 'Affordable Plans',
        description: 'Flexible pricing models to fit your budget',
      },
    ],
    detailedDescription: 'Random IT Solutions provides end-to-end IT services including infrastructure setup, cloud computing, hardware rentals, security solutions, and comprehensive support. Our integrated approach ensures all your technology needs are met under one roof with consistent quality and reliable service.',
    whyChoose: [
      'Single point of contact for all IT requirements',
      'Proven track record with 1200+ satisfied clients',
      'PAN India presence with local support',
      'Cost-effective bundled service packages',
      '24/7 availability for critical issues',
    ],
    image: 'https://images.unsplash.com/photo-1763674640452-4d6161cbe55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc2NTQzMzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'web-designing',
    title: 'Web Designing',
    subtitle: 'Modern, responsive websites that convert',
    description: 'Professional web design and development services for powerful online presence',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-600',
    features: [
      {
        icon: Monitor,
        title: 'Responsive Websites',
        description: 'Perfect display on all devices and screen sizes',
      },
      {
        icon: Globe,
        title: 'SEO-Optimized',
        description: 'Built for search engine visibility and rankings',
      },
      {
        icon: Zap,
        title: 'Fast Loading',
        description: 'Optimized performance for better user experience',
      },
      {
        icon: Palette,
        title: 'Modern UI/UX Layouts',
        description: 'Beautiful designs that engage your audience',
      },
    ],
    detailedDescription: 'Our web design team creates stunning, functional websites that help your business stand out online. We combine creative design with the latest web technologies to deliver responsive, SEO-friendly sites that drive results and provide exceptional user experiences.',
    whyChoose: [
      'Custom designs tailored to your brand identity',
      'Mobile-first approach for maximum reach',
      'SEO best practices implemented from the start',
      'Fast loading times for better engagement',
      'Ongoing support and maintenance available',
    ],
    image: 'https://images.unsplash.com/photo-1613211431746-aacbe481a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU0MTE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'pan-india-it-support',
    title: 'PAN India IT Support',
    subtitle: 'Nationwide technical support at your doorstep',
    description: 'Comprehensive IT support services across all major cities in India',
    icon: Headphones,
    gradient: 'from-green-500 to-emerald-700',
    features: [
      {
        icon: Headphones,
        title: 'Remote + On-site Support',
        description: 'Flexible support options based on your needs',
      },
      {
        icon: Network,
        title: 'Network Troubleshooting',
        description: 'Expert diagnosis and resolution of network issues',
      },
      {
        icon: Settings,
        title: 'Hardware Repair',
        description: 'Professional repair services for all IT equipment',
      },
      {
        icon: Shield,
        title: 'Corporate IT Maintenance',
        description: 'Proactive maintenance for business continuity',
      },
    ],
    detailedDescription: 'Our PAN India IT Support ensures your business operations run smoothly with comprehensive technical assistance. From remote troubleshooting to on-site visits, our certified technicians provide rapid response and effective solutions across India.',
    whyChoose: [
      'Coverage in all major Indian cities',
      'Both remote and on-site support options',
      'Certified and experienced technicians',
      'Fast response times with SLA commitments',
      'Preventive maintenance programs available',
    ],
    image: 'https://images.unsplash.com/photo-1763674640452-4d6161cbe55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc2NTQzMzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'pickup-drop-services',
    title: 'PAN India Pickup & Drop',
    subtitle: 'Safe and reliable device transportation',
    description: 'Secure pickup and delivery services for laptops, desktops, and IT equipment',
    icon: Package,
    gradient: 'from-orange-500 to-red-600',
    features: [
      {
        icon: Truck,
        title: 'Courier for Laptops/Desktops',
        description: 'Specialized handling for delicate IT equipment',
      },
      {
        icon: Shield,
        title: 'Safe Packaging',
        description: 'Professional packaging for damage-free transit',
      },
      {
        icon: Zap,
        title: 'Same-day Pickup Possible',
        description: 'Express pickup service when you need it urgently',
      },
      {
        icon: Globe,
        title: 'Tracking Support',
        description: 'Real-time tracking for peace of mind',
      },
    ],
    detailedDescription: 'Our PAN India Pickup & Drop service ensures safe transportation of your valuable IT equipment. With professional packaging, secure handling, and tracking capabilities, we make device logistics hassle-free across India.',
    whyChoose: [
      'Specialized IT equipment handling',
      'Insurance coverage for valuable items',
      'Same-day pickup in major cities',
      'Real-time shipment tracking',
      'Nationwide coverage with local expertise',
    ],
    image: 'https://images.unsplash.com/photo-1763674640452-4d6161cbe55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc2NTQzMzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'staffing-services',
    title: 'Staffing Services',
    subtitle: 'Expert IT professionals when you need them',
    description: 'On-demand IT staffing solutions for temporary and permanent positions',
    icon: Users,
    gradient: 'from-cyan-500 to-blue-600',
    features: [
      {
        icon: UserCheck,
        title: 'On-demand IT Manpower',
        description: 'Skilled professionals available when you need them',
      },
      {
        icon: Shield,
        title: 'Certified Professionals',
        description: 'Pre-vetted experts with verified certifications',
      },
      {
        icon: Users,
        title: 'Short-term & Long-term Hiring',
        description: 'Flexible contracts based on your requirements',
      },
    ],
    detailedDescription: 'Our IT Staffing Services connect you with qualified professionals for project-based work, temporary assignments, or permanent positions. We maintain a pool of certified technicians, developers, and IT specialists ready to support your business needs.',
    whyChoose: [
      'Pre-screened and certified IT professionals',
      'Flexible hiring options (contract/permanent)',
      'Quick deployment to meet urgent needs',
      'Specialized skills across all IT domains',
      'Cost-effective alternative to full-time hiring',
    ],
    image: 'https://images.unsplash.com/photo-1763674640452-4d6161cbe55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc2NTQzMzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    subtitle: 'Scalable cloud solutions for modern businesses',
    description: 'Complete cloud migration, hosting, and management services',
    icon: Cloud,
    gradient: 'from-sky-500 to-indigo-600',
    features: [
      {
        icon: Cloud,
        title: 'Cloud Migration',
        description: 'Seamless transition to cloud infrastructure',
      },
      {
        icon: Server,
        title: 'Server Hosting',
        description: 'Reliable hosting with 99.9% uptime guarantee',
      },
      {
        icon: Database,
        title: 'Backup & DR Solutions',
        description: 'Automated backups and disaster recovery planning',
      },
      {
        icon: Network,
        title: 'Scalable Cloud Architecture',
        description: 'Infrastructure that grows with your business',
      },
    ],
    detailedDescription: 'Transform your business with our comprehensive cloud computing solutions. We help you migrate to the cloud, optimize your infrastructure, and ensure data security while reducing IT costs and improving scalability.',
    whyChoose: [
      'Expert guidance through cloud transformation',
      'Multi-cloud and hybrid cloud support',
      'Cost optimization and resource management',
      'Robust security and compliance measures',
      'Ongoing monitoring and optimization',
    ],
    image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzY1NDMzODgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'rental-services',
    title: 'Rental Laptop & Desktop Services',
    subtitle: 'Flexible IT equipment rental solutions',
    description: 'Short-term and long-term laptop and desktop rentals for businesses',
    icon: Laptop,
    gradient: 'from-violet-500 to-purple-700',
    features: [
      {
        icon: Laptop,
        title: 'Short-term and Long-term Rental',
        description: 'Flexible rental periods to match your needs',
      },
      {
        icon: Monitor,
        title: 'Corporate Laptop Rentals',
        description: 'Enterprise-grade equipment for professionals',
      },
      {
        icon: Package,
        title: 'Bulk Rental Orders',
        description: 'Scalable solutions for large deployments',
      },
      {
        icon: Truck,
        title: 'Doorstep Delivery All Over India',
        description: 'Nationwide delivery and pickup service',
      },
    ],
    detailedDescription: 'Our rental services provide access to high-quality laptops and desktops without the capital investment. Perfect for temporary projects, events, training sessions, or business expansion with flexible terms and full technical support.',
    whyChoose: [
      'Latest hardware models available',
      'No upfront capital investment required',
      'Technical support included',
      'Flexible rental terms and easy upgrades',
      'PAN India delivery and pickup',
    ],
    image: 'https://images.unsplash.com/photo-1763674640452-4d6161cbe55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc2NTQzMzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'cctv-biometric',
    title: 'CCTV & Biometric',
    subtitle: 'Advanced security and surveillance solutions',
    description: 'Professional CCTV installation and biometric access control systems',
    icon: Camera,
    gradient: 'from-red-500 to-rose-700',
    features: [
      {
        icon: Camera,
        title: 'CCTV Installation',
        description: 'High-definition surveillance camera setup',
      },
      {
        icon: Lock,
        title: 'Access Control Systems',
        description: 'Secure entry management solutions',
      },
      {
        icon: UserCheck,
        title: 'Biometric Attendance Setup',
        description: 'Automated attendance tracking systems',
      },
      {
        icon: Settings,
        title: 'AMC Support',
        description: 'Annual maintenance contracts for peace of mind',
      },
    ],
    detailedDescription: 'Protect your premises with our comprehensive security solutions. We design, install, and maintain CCTV surveillance systems and biometric access controls to ensure the safety of your people and assets.',
    whyChoose: [
      'Latest HD and IP camera technology',
      'Professional installation by certified technicians',
      'Remote viewing capabilities via mobile/web',
      'Integrated biometric and access control',
      'Comprehensive AMC support packages',
    ],
    image: 'https://images.unsplash.com/photo-1672073311074-f60c4a5e7b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NjUzNDAzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'it-infra-project',
    title: 'IT Infra Project',
    subtitle: 'Complete IT infrastructure setup and deployment',
    description: 'End-to-end IT infrastructure project management and implementation',
    icon: Server,
    gradient: 'from-teal-500 to-cyan-700',
    features: [
      {
        icon: Server,
        title: 'Server Room Setup',
        description: 'Professional data center and server room design',
      },
      {
        icon: Network,
        title: 'Network Infrastructure',
        description: 'Complete network design and implementation',
      },
      {
        icon: Settings,
        title: 'Structured Cabling',
        description: 'Organized cable management for reliability',
      },
      {
        icon: Shield,
        title: 'Firewall + Router Configuration',
        description: 'Secure network perimeter setup',
      },
    ],
    detailedDescription: 'We handle complete IT infrastructure projects from planning to deployment. Our experienced team designs, implements, and configures server rooms, networks, cabling, and security systems to meet your business requirements.',
    whyChoose: [
      'End-to-end project management',
      'Experienced infrastructure architects',
      'Quality equipment from trusted vendors',
      'Proper documentation and handover',
      'Post-implementation support included',
    ],
    image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzY1NDMzODgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];
