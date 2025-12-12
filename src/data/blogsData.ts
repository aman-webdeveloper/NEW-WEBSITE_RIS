export interface Blog {
  id: string;
  title: string;
  category: string;
  intro: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  content?: {
    sections: {
      heading: string;
      text: string;
    }[];
  };
}

export const blogsData: Blog[] = [
  {
    id: 'why-startups-prefer-renting-laptops',
    title: 'Why Startups Prefer Renting Laptops',
    category: 'Business',
    intro: 'Discover how laptop rentals help startups save costs, scale faster, and maintain flexibility in their operations.',
    image: 'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmxvZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzY1NTEzMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 10, 2025',
    author: 'Random IT Solutions',
    readTime: '5 min read',
    content: {
      sections: [
        {
          heading: 'Cost Efficiency',
          text: 'For startups operating on tight budgets, purchasing laptops for every employee can be a significant upfront investment. Laptop rentals eliminate this barrier by offering flexible payment plans that align with cash flow.',
        },
        {
          heading: 'Scalability',
          text: 'As your team grows, so do your hardware needs. Rental services allow you to scale up or down based on project requirements without being stuck with unused equipment.',
        },
        {
          heading: 'Latest Technology',
          text: 'Technology evolves rapidly. Renting ensures your team always has access to the latest hardware without the depreciation costs associated with ownership.',
        },
      ],
    },
  },
  {
    id: 'benefits-of-amc-for-it-equipment',
    title: 'Benefits of AMC for IT Equipment',
    category: 'Maintenance',
    intro: 'Learn why Annual Maintenance Contracts (AMC) are essential for keeping your IT infrastructure running smoothly and efficiently.',
    image: 'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGVuZ2luZWVyJTIwc2VydmVyfGVufDF8fHx8MTc2NTUxNTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 8, 2025',
    author: 'Random IT Solutions',
    readTime: '6 min read',
    content: {
      sections: [
        {
          heading: 'Predictable Costs',
          text: 'AMC contracts provide fixed annual costs, making budgeting easier and eliminating surprise repair expenses that can disrupt financial planning.',
        },
        {
          heading: 'Priority Support',
          text: 'AMC customers receive priority service with faster response times and dedicated support teams, minimizing downtime and productivity loss.',
        },
        {
          heading: 'Preventive Maintenance',
          text: 'Regular checkups and preventive maintenance help identify potential issues before they become major problems, extending equipment lifespan.',
        },
      ],
    },
  },
  {
    id: 'top-10-it-support-challenges',
    title: 'Top 10 IT Support Challenges',
    category: 'IT Support',
    intro: 'Explore the most common challenges faced by IT support teams and practical solutions to overcome them effectively.',
    image: 'https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc2NTQyNjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 6, 2025',
    author: 'Random IT Solutions',
    readTime: '8 min read',
    content: {
      sections: [
        {
          heading: 'Managing Multiple Tickets',
          text: 'Prioritizing and resolving multiple support tickets efficiently requires robust ticketing systems and skilled team coordination.',
        },
        {
          heading: 'Remote Troubleshooting',
          text: 'With distributed teams, remote support tools and clear communication protocols are essential for effective problem resolution.',
        },
        {
          heading: 'Knowledge Management',
          text: 'Maintaining up-to-date documentation and knowledge bases helps support teams resolve issues faster and more consistently.',
        },
      ],
    },
  },
  {
    id: 'how-to-choose-business-laptop',
    title: 'How to Choose a Business Laptop',
    category: 'Hardware',
    intro: 'A comprehensive guide to selecting the perfect laptop for your business needs, considering performance, durability, and budget.',
    image: 'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmxvZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzY1NTEzMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 5, 2025',
    author: 'Random IT Solutions',
    readTime: '7 min read',
  },
  {
    id: 'cctv-installation-guide',
    title: 'CCTV Installation Guide',
    category: 'Security',
    intro: 'Everything you need to know about planning and installing a CCTV system for your business premises.',
    image: 'https://images.unsplash.com/photo-1672073311074-f60c4a5e7b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NjUzNDAzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 3, 2025',
    author: 'Random IT Solutions',
    readTime: '10 min read',
  },
  {
    id: 'new-vs-refurbished-laptops',
    title: 'Comparing New vs Refurbished Laptops',
    category: 'Hardware',
    intro: 'Understanding the pros and cons of new versus refurbished laptops to make an informed purchasing decision.',
    image: 'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmxvZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzY1NTEzMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Dec 1, 2025',
    author: 'Random IT Solutions',
    readTime: '6 min read',
  },
  {
    id: 'cybersecurity-basics',
    title: 'Cybersecurity Basics for Small Business',
    category: 'Security',
    intro: 'Essential cybersecurity practices every small business should implement to protect their data and systems.',
    image: 'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGVuZ2luZWVyJTIwc2VydmVyfGVufDF8fHx8MTc2NTUxNTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Nov 28, 2025',
    author: 'Random IT Solutions',
    readTime: '9 min read',
  },
  {
    id: 'pan-india-it-support',
    title: 'Benefits of PAN India IT Support',
    category: 'IT Support',
    intro: 'How nationwide IT support services help businesses maintain consistent operations across multiple locations.',
    image: 'https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc2NTQyNjM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Nov 25, 2025',
    author: 'Random IT Solutions',
    readTime: '5 min read',
  },
  {
    id: 'office-setup-it-infrastructure',
    title: 'Office Setup IT Infrastructure Guide',
    category: 'Infrastructure',
    intro: 'A complete guide to planning and implementing IT infrastructure for your new office space.',
    image: 'https://images.unsplash.com/photo-1624237489159-9dc263f9cc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NjU0NDU3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'Nov 22, 2025',
    author: 'Random IT Solutions',
    readTime: '12 min read',
  },
];
