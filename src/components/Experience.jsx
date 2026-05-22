import { motion } from 'framer-motion'

import {
    FaBriefcase,
    FaCalendarAlt,
    FaGraduationCap,
    FaUniversity,
} from 'react-icons/fa'

import { experiences } from '../data/portfolioData'

const education = [
    {
        degree: 'Bachelor of Engineering (B.E.)',
        field: 'Computer Engineering',
        institute: 'Mumbai University, India',
        year: '2011 - 2014',
    },
    {
        degree: 'Diploma in Computer Engineering',
        field: 'Computer Engineering',
        institute: 'MSBTE, India',
        year: '2008 - 2011',
    },
]

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative py-20 md:py-24 px-4 overflow-hidden bg-[#050816]"
        >

            {/* BACKGROUND GLOWS */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-500/15 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/15 blur-3xl rounded-full"></div>

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

            <div className="relative max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >

                    <div className="inline-flex items-center gap-3 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 mb-6">

                        <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <FaBriefcase className="text-blue-400 text-sm" />
                        </div>

                        <span className="text-sm font-semibold text-gray-300">
                            Career Journey
                        </span>

                    </div>

                    <h2 className="text-[34px] md:text-[52px] leading-[1.05] tracking-[-2px] font-black text-white max-w-5xl">

                        Experience & education shaping my engineering journey.

                    </h2>

                    <p className="text-gray-400 text-lg mt-6 max-w-3xl leading-8">
                        A decade of building scalable digital products,
                        enterprise platforms and modern web applications
                        across multiple industries.
                    </p>

                </motion.div>

                {/* MAIN GRID */}
                <div className="relative grid lg:grid-cols-[1fr_80px_1fr] gap-8">

                    {/* CENTER LINE */}
                    <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 justify-center">

                        <div className="w-[2px] bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-500 h-full"></div>

                    </div>

                    {/* LEFT SIDE */}
                    <div>

                        {/* SECTION TITLE */}
                        <div className="mb-8">

                            <p className="text-sm uppercase tracking-[4px] text-blue-400 font-semibold mb-3">
                                Career
                            </p>

                            <h3 className="text-4xl font-black text-white">
                                Experience
                            </h3>

                        </div>

                        <div className="space-y-8">

                            {experiences.map((exp, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >

                                    {/* TIMELINE DOT */}
                                    <div className="hidden lg:flex absolute -right-[53px] top-10 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#050816] shadow-[0_0_20px_rgba(59,130,246,0.8)] z-20"></div>

                                    {/* CARD */}
                                    <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[30px] p-7 md:p-8 shadow-xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-500">

                                        {/* TOP */}
                                        <div className="flex flex-col gap-6 mb-6">

                                            <div>

                                                <div className="flex items-center gap-3 text-xs uppercase tracking-[3px] text-blue-400 mb-5">

                                                    <span>EXP</span>

                                                    <span>•</span>

                                                    <span>
                                                        0{index + 1}
                                                    </span>

                                                </div>

                                                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">

                                                    {exp.company}

                                                </h3>

                                                <p className="text-lg text-gray-400 mt-3">

                                                    {exp.role}

                                                </p>

                                            </div>

                                            {/* DURATION */}
                                            <div className="inline-flex items-center gap-3 text-sm font-medium text-gray-400">

                                                <FaCalendarAlt className="text-xs text-blue-400" />

                                                {exp.duration}

                                            </div>

                                        </div>

                                        {/* DESCRIPTION */}
                                        <p className="text-gray-400 leading-8 text-[15px] md:text-[16px]">

                                            {exp.description}

                                        </p>

                                    </div>

                                </motion.div>

                            ))}

                        </div>

                    </div>

                    {/* CENTER EMPTY */}
                    <div className="hidden lg:block"></div>

                    {/* RIGHT SIDE */}
                    <div>

                        {/* SECTION TITLE */}
                        <div className="mb-8">

                            <p className="text-sm uppercase tracking-[4px] text-indigo-400 font-semibold mb-3">
                                Studies
                            </p>

                            <h3 className="text-4xl font-black text-white">
                                Education
                            </h3>

                        </div>

                        <div className="space-y-8">

                            {education.map((edu, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >

                                    {/* TIMELINE DOT */}
                                    <div className="hidden lg:flex absolute -left-[53px] top-10 w-5 h-5 rounded-full bg-indigo-500 border-4 border-[#050816] shadow-[0_0_20px_rgba(99,102,241,0.8)] z-20"></div>

                                    {/* CARD */}
                                    <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[30px] p-7 md:p-8 shadow-xl hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-500">

                                        <div className="flex items-start justify-between gap-5 mb-6">

                                            <div>

                                                <div className="flex items-center gap-3 text-xs uppercase tracking-[3px] text-indigo-400 mb-5">

                                                    <span>EDU</span>

                                                    <span>•</span>

                                                    <span>
                                                        0{index + 1}
                                                    </span>

                                                </div>

                                                <h3 className="text-2xl font-black text-white leading-tight">

                                                    {edu.degree}

                                                </h3>

                                                <p className="text-lg text-gray-400 mt-3">

                                                    {edu.field}

                                                </p>

                                            </div>

                                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">

                                                <FaGraduationCap className="text-indigo-400 text-xl" />

                                            </div>

                                        </div>

                                        <div className="flex items-center gap-3 text-gray-400 text-sm mb-5">

                                            <FaUniversity className="text-xs text-indigo-400" />

                                            {edu.institute}

                                        </div>

                                        <div className="inline-flex items-center gap-3 text-sm font-medium text-gray-400">

                                            <FaCalendarAlt className="text-xs text-indigo-400" />

                                            {edu.year}

                                        </div>

                                    </div>

                                </motion.div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Experience