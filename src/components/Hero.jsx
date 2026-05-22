import profile from '../assets/profile.png'
import heroBg from '../assets/hero-bg.jpg'
import { motion } from 'framer-motion'
import resume from '../assets/Puja-Patkar-Full-Stack-Engineer.pdf'

import {
    FaArrowRight,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa'

import {
    MdEmail,
} from 'react-icons/md'

import {
    SiLaravel,
    SiVuedotjs,
    SiReact,
    SiMysql,
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
            color: 'text-cyan-400',
        },
        {
            icon: <SiMysql />,
            name: 'MySQL',
            color: 'text-blue-400',
        },
    ]

    return (
        <section
            id="home"
            className="relative overflow-hidden pt-28 md:pt-32 pb-14 px-4 bg-[#050816]"
        >

            {/* FULL BACKGROUND IMAGE */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.42]"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
            ></div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#050816]/72 via-[#0b1023]/68 to-[#050816]/72"></div>

            {/* BLUE / INDIGO LIGHT GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.16),transparent_35%)]"></div>

            {/* TOP LEFT BLUE GLOW */}
            <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-blue-500/18 blur-3xl rounded-full"></div>

            {/* BOTTOM RIGHT INDIGO GLOW */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-500/18 blur-3xl rounded-full"></div>

            {/* GRID PATTERN */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                ></div>
            </div>

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

                            {/* LEFT SIDE */}
                            <div className="flex-1">

                                <h1 className="heading-font text-[42px] md:text-[56px] lg:text-[68px] leading-[0.92] font-black tracking-[-3px] text-white">

                                    Building

                                    <br />

                                    <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                                        Scalable
                                    </span>

                                    <br />

                                    Digital Products.

                                </h1>

                                {/* Description */}
                                <p className="text-gray-300 text-lg md:text-xl leading-9 mt-10 max-w-3xl">

                                    Senior Backend & Full-Stack Engineer with 11+ years of
                                    experience building enterprise systems, eCommerce
                                    platforms, subscription engines and AI-powered web
                                    applications using Laravel, React, Vue.js and cloud
                                    technologies.

                                </p>

                            </div>

                            {/* RIGHT SIDE - CODE BLOCK */}
                            <div className="hidden lg:block min-w-[260px] pt-3">

                                <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-5 shadow-2xl">

                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>

                                    <div className="text-[13px] leading-7 font-mono text-blue-300">

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

                            <button className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-[0_0_40px_rgba(59,130,246,0.45)] transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3">

                                View Projects

                                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />

                            </button>

                            <a
                                href={resume}
                                download="Puja-Patkar-Full-Stack-Engineer.pdf"
                                className="bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-white inline-flex items-center"
                            >
                                Download Resume
                            </a>

                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="flex flex-wrap items-center gap-10 mt-12">

                            <a
                                href="mailto:prabhupuja12@gmail.com"
                                className="flex items-center gap-3 text-gray-300 hover:text-blue-300 transition"
                            >

                                <div className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                                    <MdEmail className="text-lg" />
                                </div>

                                <span className="font-semibold">
                                    Email Me
                                </span>

                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-gray-300 hover:text-blue-300 transition"
                            >

                                <div className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                                    <FaGithub className="text-lg" />
                                </div>

                                <span className="font-semibold">
                                    GitHub
                                </span>

                            </a>

                            <a
                                href="#"
                                className="flex items-center gap-3 text-gray-300 hover:text-blue-300 transition"
                            >

                                <div className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                                    <FaLinkedin className="text-lg text-blue-400" />
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
                                    className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 flex items-center gap-4 shadow-xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300"
                                >

                                    <div className={`text-3xl ${tech.color}`}>
                                        {tech.icon}
                                    </div>

                                    <span className="font-semibold text-gray-200 text-lg">
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

                        <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px] flex items-center justify-center -mt-10 md:-mt-16">

                            {/* DOTTED RING */}
                            <div className="absolute inset-0 flex items-center justify-center">

                                <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-blue-500/40"></div>

                            </div>

                            {/* EXPERIENCE CARD */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="absolute top-[95px] left-[5px] md:left-[10px] bg-white/[0.06] backdrop-blur-2xl shadow-2xl rounded-2xl px-5 py-4 border border-white/10 z-30 min-w-[125px]"
                            >

                                <h3 className="heading-font text-3xl font-bold text-blue-400 leading-none">
                                    11+
                                </h3>

                                <p className="text-xs text-gray-400 mt-2 leading-4">
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
                                className="absolute bottom-[70px] right-[0px] md:right-[10px] bg-white/[0.06] backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl px-5 py-4 z-30"
                            >

                                <div className="flex items-center gap-3">

                                    <div className="relative">

                                        <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>

                                        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>

                                    </div>

                                    <span className="text-sm font-semibold text-gray-200 leading-5">
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

                                <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full border border-blue-500/20 flex items-center justify-center">

                                    <div className="w-[228px] h-[228px] md:w-[275px] md:h-[275px] rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-cyan-500/20 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.18)]">

                                        <div className="w-[205px] h-[205px] md:w-[245px] md:h-[245px] rounded-full overflow-hidden border-[4px] border-white/10 shadow-2xl">

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