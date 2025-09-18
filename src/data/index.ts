// Fake data for the recruitment website

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  level: string;
  bio: string;
  image: string;
  specializations: string[];
  education: string;
  experience: number;
  email: string;
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  company: string;
  industry: string;
  content: string;
  rating: number;
  companyLogo?: string;
  projectType: string;
}

export interface JobListing {
  id: string;
  title: string;
  level: 'Junior' | 'Mid' | 'Senior' | 'Executive';
  company: string;
  industry: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salaryMin: number;
  salaryMax: number;
  currency: string;
  description: string;
  requirements: string[];
  benefits: string[];
  skills: string[];
  postedDate: string;
  deadline: string;
  featured: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  duration: string;
  teamSize: number;
  testimonial?: string;
  image: string;
}

export interface CompanyStats {
  yearsInBusiness: number;
  totalPlacements: number;
  clientCompanies: number;
  successRate: number;
  averageTimeToHire: number;
  industriesServed: number;
  teamSize: number;
  activeJobs: number;
}

export interface OfficeLocation {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  isHeadOffice: boolean;
  coordinates: { lat: number; lng: number };
}

// Team Members Data
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Wijaya',
    role: 'Managing Director',
    level: 'Executive',
    bio: 'With over 15 years in talent acquisition, Sarah leads our strategic vision and client relationships. She specializes in C-suite and executive placements across technology and finance sectors.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face',
    specializations: ['Executive Search', 'C-Suite Placement', 'Strategic HR'],
    education: 'MBA from INSEAD, Psychology from UI',
    experience: 15,
    email: 'sarah.wijaya@company.com',
    linkedin: 'sarah-wijaya-recruiter'
  },
  {
    id: '2',
    name: 'Ahmad Pratama',
    role: 'Senior Technology Recruiter',
    level: 'Senior',
    bio: 'Ahmad specializes in tech talent acquisition with deep knowledge of software engineering, data science, and product management roles. He has successfully placed 200+ tech professionals.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    specializations: ['Software Engineering', 'Data Science', 'Product Management'],
    education: 'Computer Science from ITB',
    experience: 8,
    email: 'ahmad.pratama@company.com',
    linkedin: 'ahmad-pratama-tech'
  },
  {
    id: '3',
    name: 'Lisa Chen',
    role: 'Finance & Banking Specialist',
    level: 'Senior',
    bio: 'Lisa brings 10 years of experience in financial services recruitment. She understands the nuances of banking, fintech, and investment management roles.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    specializations: ['Investment Banking', 'Fintech', 'Risk Management'],
    education: 'Finance from NUS, CFA Charter',
    experience: 10,
    email: 'lisa.chen@company.com',
    linkedin: 'lisa-chen-finance'
  },
  {
    id: '4',
    name: 'David Santoso',
    role: 'Healthcare Recruiter',
    level: 'Mid',
    bio: 'David focuses on healthcare and pharmaceutical recruitment, from clinical research to healthcare IT. He has a strong network in Southeast Asian healthcare.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    specializations: ['Clinical Research', 'Healthcare IT', 'Pharmaceutical'],
    education: 'Medicine from UNAIR, MBA from UGM',
    experience: 6,
    email: 'david.santoso@company.com',
    linkedin: 'david-santoso-healthcare'
  },
  {
    id: '5',
    name: 'Priya Sharma',
    role: 'Manufacturing Specialist',
    level: 'Mid',
    bio: 'Priya specializes in manufacturing and engineering recruitment. She has deep experience with automotive, electronics, and industrial manufacturing.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    specializations: ['Automotive', 'Electronics', 'Industrial Engineering'],
    education: 'Mechanical Engineering from IIT Delhi',
    experience: 7,
    email: 'priya.sharma@company.com',
    linkedin: 'priya-sharma-manufacturing'
  },
  {
    id: '6',
    name: 'Ryan Tan',
    role: 'Junior Recruiter',
    level: 'Junior',
    bio: 'Ryan is our rising star in retail and consumer goods recruitment. Despite being early in his career, he has shown exceptional talent in understanding market trends.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    specializations: ['Retail', 'Consumer Goods', 'E-commerce'],
    education: 'Business Administration from NTU',
    experience: 3,
    email: 'ryan.tan@company.com',
    linkedin: 'ryan-tan-retail'
  }
];

// Client Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Jennifer Wong',
    clientTitle: 'VP of Engineering',
    company: 'TechFlow Indonesia',
    industry: 'Technology',
    content: 'The team found us a phenomenal Staff Frontend Engineer in just two weeks. Their understanding of technical requirements and cultural fit was impressive.',
    rating: 5,
    projectType: 'Staff-level Engineering Hire'
  },
  {
    id: '2',
    clientName: 'Michael Kusuma',
    clientTitle: 'CEO',
    company: 'FinanceFirst',
    industry: 'Financial Services',
    content: 'Exceptional service for our C-suite search. They delivered three outstanding candidates within our tight timeline. Highly recommend for executive placements.',
    rating: 5,
    projectType: 'Executive Search'
  },
  {
    id: '3',
    clientName: 'Dr. Sari Indah',
    clientTitle: 'Chief Medical Officer',
    company: 'HealthTech Solutions',
    industry: 'Healthcare',
    content: 'Their healthcare recruitment expertise is unmatched. They understand both clinical and technology requirements for our hybrid roles.',
    rating: 5,
    projectType: 'Healthcare Technology Roles'
  },
  {
    id: '4',
    clientName: 'Robert Lim',
    clientTitle: 'Head of Manufacturing',
    company: 'AutoParts Indonesia',
    industry: 'Manufacturing',
    content: 'Found us a brilliant Manufacturing Director who transformed our operations. The embedded recruitment model worked perfectly for our scale-up phase.',
    rating: 5,
    projectType: 'Director-level Manufacturing Hire'
  },
  {
    id: '5',
    clientName: 'Amanda Silva',
    clientTitle: 'HR Director',
    company: 'RetailCorp',
    industry: 'Retail',
    content: 'The mass hiring solution for our 50+ store expansion was flawless. They maintained quality while meeting our aggressive timeline.',
    rating: 5,
    projectType: 'Mass Hiring (50+ positions)'
  }
];

// Job Listings Data
export const jobListings: JobListing[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    level: 'Senior',
    company: 'TechInnovate',
    industry: 'Technology',
    location: 'Jakarta',
    type: 'Full-time',
    salaryMin: 25000000,
    salaryMax: 40000000,
    currency: 'IDR',
    description: 'Join our product team to build scalable backend systems serving millions of users. Work with modern tech stack and contribute to architectural decisions.',
    requirements: [
      '5+ years of backend development experience',
      'Strong proficiency in Java/Python/Go',
      'Experience with microservices architecture',
      'Database optimization skills',
      'Leadership and mentoring experience'
    ],
    benefits: [
      'Competitive salary + equity',
      'Health insurance for family',
      'Flexible working hours',
      'Annual learning budget',
      'Stock options'
    ],
    skills: ['Java', 'Python', 'Microservices', 'PostgreSQL', 'AWS'],
    postedDate: '2025-01-15',
    deadline: '2025-02-15',
    featured: true
  },
  {
    id: '2',
    title: 'Product Manager',
    level: 'Mid',
    company: 'StartupUnicorn',
    industry: 'Technology',
    location: 'Bandung',
    type: 'Full-time',
    salaryMin: 20000000,
    salaryMax: 30000000,
    currency: 'IDR',
    description: 'Lead product strategy for our B2B SaaS platform. Work closely with engineering and design teams to deliver user-centric solutions.',
    requirements: [
      '3+ years of product management experience',
      'B2B SaaS experience preferred',
      'Strong analytical and data-driven mindset',
      'Excellent communication skills',
      'Experience with agile methodologies'
    ],
    benefits: [
      'Competitive salary',
      'Health & dental insurance',
      'Remote work flexibility',
      'Conference budget',
      'Equity participation'
    ],
    skills: ['Product Strategy', 'Data Analysis', 'Agile', 'User Research', 'B2B SaaS'],
    postedDate: '2025-01-12',
    deadline: '2025-02-12',
    featured: true
  },
  {
    id: '3',
    title: 'Chief Financial Officer',
    level: 'Executive',
    company: 'Growth Capital',
    industry: 'Financial Services',
    location: 'Jakarta',
    type: 'Full-time',
    salaryMin: 80000000,
    salaryMax: 120000000,
    currency: 'IDR',
    description: 'Lead financial strategy for our expanding investment firm. Oversee all financial operations, risk management, and investor relations.',
    requirements: [
      '10+ years of senior finance experience',
      'CPA or CFA certification required',
      'Investment management experience',
      'Team leadership experience (20+ people)',
      'Strong regulatory knowledge'
    ],
    benefits: [
      'Executive compensation package',
      'Performance bonus up to 100%',
      'Health insurance premium',
      'Car allowance',
      'Stock options'
    ],
    skills: ['Financial Planning', 'Risk Management', 'Investment Analysis', 'Regulatory Compliance', 'Team Leadership'],
    postedDate: '2025-01-10',
    deadline: '2025-02-28',
    featured: true
  }
];

// Case Studies Data
export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Scaling Engineering Team for Fintech Unicorn',
    client: 'PaymentFlow',
    industry: 'Financial Technology',
    challenge: 'Rapid expansion requiring 25 engineers in 3 months while maintaining quality and cultural fit.',
    solution: 'Implemented embedded recruitment model with dedicated team, structured interview process, and cultural assessment framework.',
    results: [
      'Hired 28 engineers in 10 weeks',
      'Achieved 96% offer acceptance rate',
      '100% of hires passed 6-month review',
      'Reduced average time-to-hire by 40%'
    ],
    metrics: [
      { label: 'Positions Filled', value: '28/25' },
      { label: 'Time to Hire', value: '18 days avg' },
      { label: 'Offer Acceptance', value: '96%' },
      { label: 'Retention Rate', value: '94%' }
    ],
    duration: '3 months',
    teamSize: 4,
    testimonial: 'The embedded model felt like having an extension of our internal team. Quality and speed were exceptional.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Executive Search for Healthcare Transformation',
    client: 'MedTech Solutions',
    industry: 'Healthcare Technology',
    challenge: 'Finding a Chief Medical Officer with both clinical expertise and technology product experience.',
    solution: 'Comprehensive executive search across APAC region, leveraging our healthcare and tech networks with rigorous evaluation process.',
    results: [
      'Identified 12 qualified candidates',
      'Successful placement in 6 weeks',
      'New CMO exceeded performance targets',
      'Led successful product launch'
    ],
    metrics: [
      { label: 'Candidates Sourced', value: '45' },
      { label: 'Qualified Candidates', value: '12' },
      { label: 'Time to Hire', value: '42 days' },
      { label: 'Performance Rating', value: 'Exceeds' }
    ],
    duration: '6 weeks',
    teamSize: 2,
    testimonial: 'They found the perfect blend of clinical and tech expertise that we thought was impossible to find.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
  }
];

// Company Statistics
export const companyStats: CompanyStats = {
  yearsInBusiness: 8,
  totalPlacements: 2500,
  clientCompanies: 150,
  successRate: 92,
  averageTimeToHire: 21,
  industriesServed: 12,
  teamSize: 25,
  activeJobs: 180
};

// Office Locations
export const officeLocations: OfficeLocation[] = [
  {
    id: '1',
    city: 'Jakarta',
    name: 'Head Office',
    address: 'Sudirman Central Business District, Jl. Jend. Sudirman No. 1, Jakarta 12190',
    phone: '+62-21-5555-0001',
    email: 'jakarta@company.com',
    isHeadOffice: true,
    coordinates: { lat: -6.2088, lng: 106.8456 }
  },
  {
    id: '2',
    city: 'Surabaya',
    name: 'East Java Office',
    address: 'Tunjungan Plaza 5, Jl. Embong Malang No. 15-31, Surabaya 60261',
    phone: '+62-31-5555-0002',
    email: 'surabaya@company.com',
    isHeadOffice: false,
    coordinates: { lat: -7.2575, lng: 112.7521 }
  },
  {
    id: '3',
    city: 'Bandung',
    name: 'West Java Office',
    address: 'Jl. Ir. H. Djuanda No. 15, Dago, Bandung 40135',
    phone: '+62-22-5555-0003',
    email: 'bandung@company.com',
    isHeadOffice: false,
    coordinates: { lat: -6.9175, lng: 107.6191 }
  }
];

// Industry Expertise Data
export const industryExpertise = [
  { name: 'Technology & IT', percentage: 35, color: 'bg-blue-500' },
  { name: 'Finance & Banking', percentage: 20, color: 'bg-green-500' },
  { name: 'Healthcare & Pharmaceuticals', percentage: 15, color: 'bg-red-500' },
  { name: 'Manufacturing & Engineering', percentage: 12, color: 'bg-orange-500' },
  { name: 'Retail & Consumer Goods', percentage: 10, color: 'bg-purple-500' },
  { name: 'Other Sectors', percentage: 8, color: 'bg-gray-500' }
];
