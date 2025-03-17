import { PortfolioItem } from '../types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'street-patrol',
    title: 'Street Patrol',
    shortDescription: 'A comprehensive web application for managing street patrols with real-time tracking and analytics.',
    description: 'A comprehensive web application for managing street patrols, built with React and TypeScript. Features include real-time patrol tracking, detailed statistics, contact matrix reporting, and extensive data export capabilities.',
    primaryImage: 'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-app-landing-page.png',
    imageUrls: [
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-app-landing-page.png',
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-new-patrol.png',
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-patrol-history.png',
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-reports.png',
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-patrol-notes.png',
      'https://portfolio-street-patrol.s3.us-east-1.amazonaws.com/street-patrol-export-options.png'
    ],
    features: [
      'Real-time patrol management with active patrol tracking',
      'Comprehensive statistics and reporting system',
      'Monthly, quarterly, and annual report generation',
      'Contact matrix for demographic tracking',
      'Detailed notes system for each patrol',
      'Export functionality to CSV, HTML, and PDF formats',
      'Team management with leader and member tracking',
      'Police CAD number integration'
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'Real-time', 'Data Analytics'],
    link: 'https://street-patrol.netlify.app/',
    githubUrl: 'https://github.com/philanderson888/street-patrol',
    technicalDetails: {
      architecture: [
        'React for frontend UI components',
        'TypeScript for type-safe development',
        'Supabase for real-time database and authentication',
        'TailwindCSS for responsive styling',
        'React Router for client-side routing'
      ],
      technologies: [
        'React 18 with hooks for state management',
        'TypeScript for enhanced developer experience',
        'Supabase real-time subscriptions',
        'PDF.js for report generation',
        'Chart.js for statistical visualizations'
      ],
      challenges: [
        'Real-time synchronization of patrol data',
        'Complex statistical calculations and reporting',
        'Offline data persistence',
        'User authentication and authorization'
      ],
      solutions: [
        'Implemented Supabase real-time subscriptions for live updates',
        'Created a robust caching system for offline functionality',
        'Developed a comprehensive reporting engine',
        'Built a flexible authentication system with role-based access'
      ]
    }
  },
  {
    id: 'jesus-is-lord',
    title: 'Jesus Is Lord - Christian Clothing Store',
    shortDescription: 'A modern e-commerce platform offering Christian-themed clothing and accessories, built in collaboration with family.',
    description: 'Jesus Is Lord is a faith-focused clothing store that combines style with Christian values. This e-commerce platform offers a curated collection of Christian-themed clothing including t-shirts, hoodies, and accessories. Built using Wix\'s advanced e-commerce capabilities, the store provides a seamless shopping experience while spreading the message of faith.',
    primaryImage: 'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-home-page-01.png',
    imageUrls: [
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-home-page-01.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-all-products.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-all-womens.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-product-page.png',
      'https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/jesus-is-lord-checkout.png'
    ],
    features: [
      'Full e-commerce functionality with secure checkout',
      'Curated collection of Christian-themed clothing',
      'Custom t-shirt and apparel designs',
      'Mobile-responsive design',
      'Integrated inventory management',
      'Secure payment processing',
      'Order tracking and management',
      'Customer account management'
    ],
    tags: ['E-commerce', 'Wix', 'Fashion', 'Christian', 'Family Business'],
    link: 'https://jesusislord.uk',
    technicalDetails: {
      architecture: [
        'Wix e-commerce platform',
        'Integrated payment processing',
        'Automated inventory management',
        'Mobile-first responsive design',
        'SEO optimization'
      ],
      technologies: [
        'Wix Store Editor',
        'Wix Payment Systems',
        'Custom Design Tools',
        'Analytics Integration',
        'Social Media Integration'
      ],
      challenges: [
        'Creating a user-friendly shopping experience',
        'Implementing secure payment processing',
        'Managing inventory across multiple product categories',
        'Ensuring mobile responsiveness',
        'Optimizing for search engines'
      ],
      solutions: [
        'Utilized Wix\'s advanced e-commerce features for seamless shopping',
        'Implemented secure payment gateways',
        'Created an efficient inventory management system',
        'Optimized design for all device sizes',
        'Integrated SEO best practices'
      ]
    }
  },
  {
    id: 'software-projects',
    title: 'Software Development Projects',
    description: 'A collection of modern web applications built with React, TypeScript, and other cutting-edge technologies. These projects demonstrate my expertise in creating efficient, scalable solutions.',
    tags: ['React', 'TypeScript', 'Node.js', 'Web Development'],
    githubUrl: 'https://github.com/philanderson888'
  },
  {
    id: 'technical-writing',
    title: 'Technical Writing & Documentation',
    description: 'Comprehensive documentation and technical guides covering various programming concepts and best practices. These resources help other developers learn and grow in their journey.',
    tags: ['Technical Writing', 'Documentation', 'Programming Guides'],
    link: 'https://github.com/philanderson888'
  }
];

export const archivedItems: PortfolioItem[] = [
  {
    id: 'legacy-project',
    title: 'Legacy Project',
    description: 'A placeholder for archived projects. This section contains older work that, while no longer actively maintained, demonstrates the evolution of my development journey.',
    tags: ['Archive', 'Legacy'],
    archived: true
  }
];