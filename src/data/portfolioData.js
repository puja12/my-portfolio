import {
    SiLaravel,
    SiReact,
    SiVuedotjs,
    SiMysql,
    SiRedis,
    SiPhp,
    SiJavascript,
    SiTailwindcss,
    SiGit,
    SiRazorpay,
    SiBootstrap,
    SiPython,
    SiOpenai,
} from 'react-icons/si'

import { FaCcAmazonPay } from 'react-icons/fa'
import { BiMoney } from 'react-icons/bi'


export const skills = [
    {
        name: 'PHP',
        icon: SiPhp,
        color: '#777BB4',
    },
    {
        name: 'Laravel',
        icon: SiLaravel,
        color: '#FF2D20',
    },
    {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
    },
    {
        name: 'Vue.js',
        icon: SiVuedotjs,
        color: '#42B883',
    },
    {
        name: 'MySQL',
        icon: SiMysql,
        color: '#00758F',
    },
    {
        name: 'Redis',
        icon: SiRedis,
        color: '#DC382D',
    },
    {
        name: 'Inertia.js',
        icon: SiJavascript, // No official icon in react-icons
        color: '#9553E9',
    },
    {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#F7DF1E',
    },
    {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#06B6D4',
    },
    {
        name: 'Git',
        icon: SiGit,
        color: '#F05032',
    },
    {
        name: 'Razorpay',
        icon: SiRazorpay,
        color: '#0C2451',
    },
    {
        name: 'Braintree',
        icon: FaCcAmazonPay, // Closest available alternative
        color: '#222D65',
    },
    {
        name: 'CCAvenue',
        icon: BiMoney, // Generic payment icon
        color: '#FF6B00',
    },
    {
        name: 'Bootstrap',
        icon: SiBootstrap,
        color: '#7952B3',
    },
    {
        name: 'Python',
        icon: SiPython,
        color: '#3776AB',
    },
    /*{
        name: 'OpenAI',
        icon: SiOpenai,
        color: '#10A37F',
    },*/
]

export const projects = [
    {
        title: 'Multi-Brand eCommerce Platform',

        description:
            'Collaborated on scalable multi-brand eCommerce platforms for Brooks Running, RH Sports & JanSport Australia using Laravel and Vue.js.',

        tech: [
            'Laravel',
            'Vue.js',
            'MySQL',
            'Redis',
            'GCP',
        ],

        image: '/projects/project1.jpg',
    },

    {
        title: 'FIFA India Subscription Platform',

        description:
            'Worked as part of the development team to implement subscription workflows, Razorpay auto-debit and member management features.',

        tech: [
            'Laravel',
            'Vue.js',
            'MySQL',
            'Razorpay',
        ],

        image: '/projects/project2.jpg',
    },

    {
        title: 'Hospital Admin System (SMHH)',

        description:
            'Contributed to OPD/IPD management modules including billing, admission workflows and medical reporting systems.',

        tech: [
            'Laravel',
            'Vue.js',
            'MySQL',
        ],

        image: '/projects/project3.jpg',
    },

    {
        title: 'Price Revision & Automation',

        description:
            'Helped develop pricing automation tools with bulk updates, scheduled revisions and cron-based processing.',

        tech: [
            'Laravel',
            'MySQL',
        ],

        image: '/projects/project4.jpg',
    },

    {
        title: 'AI Powered Support Chatbot',

        description:
            'Integrated AI-powered support workflows and real-time chatbot communication within customer support systems.',

        tech: [
            'Laravel',
            'React',
            'OpenAI',
            'Redis',
        ],

        image: '/projects/project5.jpg',
    },

    {
        title: 'Enterprise CRM Dashboard',

        description:
            'Worked on analytics dashboards, reporting modules and customer engagement tracking features for enterprise clients.',

        tech: [
            'React',
            'Laravel',
            'MySQL',
            'Tailwind',
        ],

        image: '/projects/project6.jpg',
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