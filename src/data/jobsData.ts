export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  image: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
}

export const jobsData: Job[] = [
  {
    id: 'it-support-engineer',
    title: 'IT Support Engineer',
    department: 'Technical Support',
    location: 'Gurgaon, Haryana',
    type: 'Full-time',
    experience: '2-4 years',
    image: 'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGVuZ2luZWVyJTIwc2VydmVyfGVufDF8fHx8MTc2NTUxNTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    skills: [
      'Hardware & Software Troubleshooting',
      'Network Configuration',
      'Windows & Linux Administration',
      'Remote Support Tools',
      'ITIL Framework',
    ],
    responsibilities: [
      'Provide technical support to clients across PAN India',
      'Troubleshoot hardware, software, and network issues',
      'Install, configure, and maintain IT equipment',
      'Document support activities and maintain service records',
      'Coordinate with vendors for warranty and repair services',
      'Train end-users on IT systems and best practices',
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '2-4 years of experience in IT support',
      'Strong knowledge of Windows/Linux operating systems',
      'Experience with networking protocols and configurations',
      'Excellent problem-solving and communication skills',
      'Willingness to travel for on-site support',
    ],
  },
  {
    id: 'tele-caller',
    title: 'Tele Caller',
    department: 'Sales & Support',
    location: 'Gurgaon, Haryana',
    type: 'Full-time',
    experience: '0-2 years',
    image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsJTIwY2VudGVyJTIwYWdlbnR8ZW58MXx8fHwxNzY1NTE1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    skills: [
      'Excellent Communication',
      'Customer Service',
      'CRM Software',
      'Sales Techniques',
      'Time Management',
    ],
    responsibilities: [
      'Make outbound calls to potential and existing customers',
      'Explain our IT services and solutions to prospects',
      'Schedule appointments for the sales team',
      'Follow up on leads and maintain customer database',
      'Handle customer inquiries and provide information',
      'Achieve monthly calling and conversion targets',
    ],
    requirements: [
      'High school diploma or equivalent',
      'Excellent verbal communication skills in English and Hindi',
      'Previous experience in telecalling or customer service (preferred)',
      'Ability to handle rejection and maintain positivity',
      'Good computer skills and CRM familiarity',
      'Target-oriented mindset',
    ],
  },
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing Executive',
    department: 'Business Development',
    location: 'Gurgaon, Haryana / Remote',
    type: 'Full-time',
    experience: '3-5 years',
    image: 'https://images.unsplash.com/photo-1616587224026-668840f26916?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBzYWxlc3xlbnwxfHx8fDE3NjU1MTU0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    skills: [
      'B2B Sales',
      'Digital Marketing',
      'Client Relationship Management',
      'Proposal Development',
      'Market Research',
    ],
    responsibilities: [
      'Identify and develop new business opportunities',
      'Build and maintain relationships with corporate clients',
      'Create and present sales proposals and presentations',
      'Develop marketing strategies to promote IT services',
      'Coordinate with technical team for solution delivery',
      'Achieve revenue targets and business growth goals',
    ],
    requirements: [
      'Bachelor\'s degree in Business, Marketing, or related field',
      '3-5 years of B2B sales experience in IT industry',
      'Proven track record of meeting sales targets',
      'Strong presentation and negotiation skills',
      'Knowledge of IT products and services',
      'Self-motivated with excellent interpersonal skills',
    ],
  },
];
