import profile from '../assets/profile.png'
import heroBg from '../assets/hero-bg.jpg'
import { motion } from 'framer-motion'
import resume from '../assets/Puja-Patkar-Full-Stack-Engineer.pdf'

import {
    FaArrowRight,
    FaGithub,
    FaLinkedin,
    FaAws,
} from 'react-icons/fa'

import {
    MdEmail,
} from 'react-icons/md'

import {
    SiLaravel,
    SiVuedotjs,
    SiReact,
    SiMysql,
    SiRedis,
} from 'react-icons/si'

const Hero = () => {

    const techStack = [
        {
            icon: <SiLaravel />,
            name: 'Laravel',
            color: 'text-red-500',
        },
        {
            icon: <SiVuedotjs />,
            name: 'Vue.js',
            color: 'text-green-500',
        },
        {
            icon: <SiReact />,
            name: 'React',
            color: 'text-cyan-500',
        },
        {
            icon: <SiMysql />,
            name: 'MySQL',
            color: 'text-blue-500',
        },
    ]

    return (
        <section
            id="home"
            className="relative overflow-hidden pt-10 pb-14 px-4"
        >

            {/* FULL BACKGROUND */}
            <div
                className="absolute inset-0 bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: window.innerWidth < 768 ? 'contain' : 'cover',
                    backgroundPosition: window.innerWidth < 768
                        ? 'center top'
                        : 'center',
                }}
            ></div>

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
                        {/* HERO TOP CONTENT */}
                        <div className="flex flex-col lg:flex-row items-start gap-10">

                            {/* LEFT SIDE - HEADING */}
                            <div className="flex-1">

                                <h1 className="text-[42px] md:text-[56px] lg:text-[68px] leading-[0.92] font-black tracking-[-3px] text-[#0F172A]">

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
                            </div>

                            {/* RIGHT SIDE - CODE BLOCK */}
                            <div className="hidden lg:block min-w-[260px] pt-3">

                                <div className="bg-white/40 backdrop-blur-md border border-purple-100 rounded-3xl px-6 py-5 shadow-lg">

                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>

                                    <div className="text-[13px] leading-7 font-mono text-purple-400">

                                        <p>{`// Building scalable solutions`}</p>

                                        <p>{`const developer = {`}</p>

                                        <p className="ml-4">{`passion: 'solving problems',`}</p>

                                        <p className="ml-4">{`code: 'clean & efficient',`}</p>

                                        <p className="ml-4">{`focus: 'impact',`}</p>

                                        <p>{`}`}</p>

                                        <br />

                                        <p>{`function createImpact() {`}</p>

                                        <p className="ml-4">{`return 'digital products';`}</p>

                                        <p>{`}`}</p>

                                    </div>

                                </div>

                            </div>

                        </div>



                        {/* CTA BUTTONS */}
                        <div className="flex flex-wrap gap-5 mt-6">

                            <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-2xl hover:shadow-purple-300 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3">

                                View Projects

                                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />

                            </button>

                            <a
                                href={resume}
                                download="Puja-Patkar-Full-Stack-Engineer.pdf"
                                className="bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-gray-700 inline-flex items-center"
                            >
                                Download Resume
                            </a>

                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="flex flex-wrap items-center gap-10 mt-12">

                            <a
                                href="mailto:prabhupuja12@gmail.com"
                                className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition"
                            >

                                <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center">
                                    <MdEmail className="text-lg" />
                                </div>

                                <span className="font-semibold">
                                    Email Me
                                </span>

                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition"
                            >

                                <div className="w-11 h-11 rounded-full bg-gray-900 text-white flex items-center justify-center">
                                    <FaGithub className="text-lg" />
                                </div>

                                <span className="font-semibold">
                                    GitHub
                                </span>

                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition"
                            >

                                <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center">
                                    <FaLinkedin className="text-lg" />
                                </div>

                                <span className="font-semibold">
                                    LinkedIn
                                </span>

                            </a>

                        </div>

                        {/* TECH STACK */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-20 flex flex-wrap justify-center gap-5"
                        >

                            {techStack.map((tech, index) => (
                                <div
                                    key={index}
                                    className="bg-white/90 backdrop-blur-md border border-white rounded-2xl px-8 py-4 flex items-center gap-4 shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >

                                    <div className={`text-3xl ${tech.color}`}>
                                        {tech.icon}
                                    </div>

                                    <span className="font-semibold text-gray-700 text-lg">
                                        {tech.name}
                                    </span>

                                </div>
                            ))}

                        </motion.div>

                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end mt-14 lg:mt-0"
                    >

                        {/* FIXED WRAPPER */}
                        <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px] flex items-center justify-center -mt-10 md:-mt-16">

                            {/* DOTTED OUTER RING */}
                            <div className="absolute inset-0 flex items-center justify-center">

                                <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-purple-300/70"></div>

                            </div>

                            {/* EXPERIENCE CARD */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute top-[95px] left-[5px] md:left-[10px] bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl px-5 py-4 border border-white z-30 min-w-[125px]"
                            >

                                <h3 className="text-3xl font-bold text-purple-600 leading-none">
                                    11+
                                </h3>

                                <p className="text-xs text-gray-500 mt-2 leading-4">
                                    Years
                                    <br />
                                    Experience
                                </p>

                            </motion.div>

                            {/* AVAILABILITY CARD */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute bottom-[70px] right-[0px] md:right-[10px] bg-white/95 backdrop-blur-xl border border-white shadow-xl rounded-2xl px-5 py-4 z-30"
                            >

                                <div className="flex items-center gap-3">

                                    <div className="relative">

                                        <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>

                                        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>

                                    </div>

                                    <span className="text-sm font-semibold text-gray-700 leading-5">
                                        Available for
                                        <br />
                                        opportunities
                                    </span>

                                </div>

                            </motion.div>

                            {/* PROFILE IMAGE */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="relative z-20"
                            >

                                {/* THIN OUTER RING */}
                                <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full border border-purple-200/60 flex items-center justify-center">

                                    {/* GRADIENT CIRCLE */}
                                    <div className="w-[228px] h-[228px] md:w-[275px] md:h-[275px] rounded-full bg-gradient-to-br from-purple-100 via-indigo-50 to-purple-200 flex items-center justify-center shadow-xl">

                                        {/* IMAGE */}
                                        <div className="w-[205px] h-[205px] md:w-[245px] md:h-[245px] rounded-full overflow-hidden border-[4px] border-white shadow-2xl">

                                            <img
                                                src={profile}
                                                alt="profile"
                                                className="w-full h-full object-cover"
                                            />

                                        </div>

                                    </div>

                                </div>

                            </motion.div>

                        </div>

                    </motion.div>
                </div>

            </div>

        </section>
    )
}

export default Hero