import {
  FaLaravel,
  FaVuejs,
  FaPhp,
  FaJs,
  FaBootstrap,
  FaGitAlt,
} from 'react-icons/fa'

import {
  SiMysql,
  SiRedis,
  SiGooglecloud,
  SiRazorpay,
} from 'react-icons/si'

export const skills = [
  {
    name: 'Laravel',
    icon: FaLaravel,
  },
  {
    name: 'PHP',
    icon: FaPhp,
  },
  {
    name: 'Vue.js',
    icon: FaVuejs,
  },
  {
    name: 'MySQL',
    icon: SiMysql,
  },
  {
    name: 'Redis',
    icon: SiRedis,
  },
  {
    name: 'JavaScript',
    icon: FaJs,
  },
  {
    name: 'Bootstrap',
    icon: FaBootstrap,
  },
  {
    name: 'GCP',
    icon: SiGooglecloud,
  },
  {
    name: 'Git',
    icon: FaGitAlt,
  },
  {
    name: 'Razorpay',
    icon: SiRazorpay,
  },
]

export const projects = [
  {
    title: 'Multi-Brand eCommerce Platform',
    description:
      'Built scalable multi-brand eCommerce platforms using Laravel and Vue.js.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
  },

  {
    title: 'Subscription Platform',
    description:
      'Implemented Razorpay auto-debit subscription system with add-ons and member management.',
    tech: ['Laravel', 'Vue.js', 'Razorpay'],
  },

  {
    title: 'Hospital Management System',
    description:
      'Developed OPD/IPD management and billing system with reporting.',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
  },
]

export const experiences = [
  {
    company: 'Orion Solution',
    role: 'Senior Backend Engineer',
    duration: 'Aug 2014 - Present',
    description:
      'Working on enterprise applications, eCommerce systems and automation platforms.',
  },

  {
    company: 'Katapult Technologies Pvt Ltd',
    role: 'Web Designer',
    duration: 'Jul 2013 - May 2014',
    description:
      'Worked on front-end development and client projects.',
  },
]