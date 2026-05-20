import profile from '../assets/profile.png'

import { motion } from 'framer-motion'

import {
    FaArrowRight,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa'

import {
    MdEmail,
} from 'react-icons/md'

const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden pt-10 pb-14 px-4"
        >

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-200/40 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200/40 blur-3xl rounded-full"></div>

            {/* Main Container */}
            <div className="relative max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-[70%_30%] gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >

                        {/* Badge */}


                        {/* Heading */}
                        <h1 className="text-[44px] md:text-[60px] lg:text-[74px] leading-[0.95] font-black tracking-[-3px] text-[#0F172A]">

                            Building

                            <br />

                            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Scalable
                            </span>

                            <br />

                            Digital Products.

                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-lg md:text-xl leading-9 mt-10 max-w-3xl">

                            Senior Backend & Full-Stack Engineer with 11+ years of
                            experience building enterprise systems, eCommerce
                            platforms, subscription engines and AI-powered web
                            applications using Laravel, React, Vue.js and cloud
                            technologies.

                        </p>

                        {/* CTA BUTTONS */}
                        <div className="flex flex-wrap gap-5 mt-12">

                            <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-2xl hover:shadow-purple-300 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3">

                                View Projects

                                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />

                            </button>

                            <button className="bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-gray-700">

                                Download Resume

                            </button>

                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="flex flex-wrap items-center gap-8 mt-10">

                            <a
                                href="mailto:prabhupuja12@gmail.com"
                                className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition"
                            >
                                <MdEmail className="text-xl" />

                                <span className="font-medium">
                                    Email Me
                                </span>
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition"
                            >
                                <FaGithub className="text-xl" />

                                <span className="font-medium">
                                    GitHub
                                </span>
                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition"
                            >
                                <FaLinkedin className="text-xl" />

                                <span className="font-medium">
                                    LinkedIn
                                </span>
                            </a>

                        </div>

                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end -mt-16"
                    >

                        {/* Decorative Ring */}
                        <div className="absolute inset-0 flex items-center justify-center">

                            <div className="w-[280px] h-[280px] rounded-full border border-purple-100"></div>

                        </div>

                        {/* Floating Experience Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute top-2 -left-5 bg-white shadow-lg rounded-2xl px-4 py-3 border border-gray-100 z-20"
                        >

                            <p className="text-gray-500 text-xs mb-1">
                                Experience
                            </p>

                            <h3 className="text-xl font-bold text-purple-600">
                                11+
                            </h3>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -top-8 right-6 bg-white/90 backdrop-blur-md border border-purple-100 shadow-xl rounded-full px-5 py-3 z-30"
                        >

                            <div className="flex items-center gap-3">

                                <div className="relative">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>

                                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                                </div>

                                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                                    Available for opportunities
                                </span>

                            </div>

                        </motion.div>

                        {/* Profile Image */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="relative z-10"
                        >

                            {/* Gradient Circle */}
                            <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-br from-purple-100 via-indigo-50 to-purple-200 flex items-center justify-center shadow-xl">

                                {/* Image Circle */}
                                <div className="w-[210px] h-[210px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-[8px] border-white shadow-lg">

                                    <img
                                        src={profile}
                                        alt="profile"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                </div>

            </div>

        </section>
    )
}

export default Hero