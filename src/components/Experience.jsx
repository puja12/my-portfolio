import { motion } from 'framer-motion'
import SectionBadge from './SectionBadge'

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
            className="relative py-20 md:py-24 px-4 md:px-6 overflow-hidden bg-[#050816]"
        >
            {/* BACKGROUND GLOWS */}
            <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-500/12 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-indigo-500/12 blur-3xl rounded-full"></div>

            {/* GRID PATTERN */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <SectionBadge
                        title="Career Journey"
                        icon={<FaBriefcase className="text-blue-700 text-sm" />}
                    />

                    <h2 className="mt-4 heading-font text-2xl md:text-3xl font-black text-white leading-tight max-w-3xl">
                        Experience & education shaping my engineering journey.
                    </h2>

                    <p className="text-gray-400 text-base md:text-lg mt-5 max-w-3xl leading-8">
                        A decade of building scalable digital products, enterprise
                        platforms and modern web applications across multiple industries.
                    </p>
                </motion.div>

                {/* MAIN GRID */}
                <div className="relative grid lg:grid-cols-[1fr_48px_1fr] gap-6">
                    {/* CENTER LINE */}
                    <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 justify-center">
                        <div className="w-[2px] bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-500 h-full"></div>
                    </div>

                    {/* EXPERIENCE */}
                    <div>
                        <div className="mb-6">
                            <p className="text-xs uppercase tracking-[4px] text-blue-400 font-semibold mb-2">
                                Career
                            </p>

                            <h3 className="heading-font text-3xl font-black text-white">
                                Experience
                            </h3>
                        </div>

                        <div className="space-y-5">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    {/* TIMELINE DOT */}
                                    <div className="hidden lg:flex absolute -right-[38px] top-8 w-4 h-4 rounded-full bg-blue-500 border-[3px] border-[#050816] shadow-[0_0_18px_rgba(59,130,246,0.75)] z-20"></div>

                                    {/* CARD */}
                                    <div className="group bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[24px] p-5 md:p-6 shadow-xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-500">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                                <FaBriefcase className="text-blue-400 text-sm" />
                                            </div>

                                            <div className="flex-1">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-semibold mb-3">
                                                    EXPERIENCE
                                                </span>

                                                <h4 className="heading-font text-xl md:text-2xl font-bold text-white leading-tight">
                                                    {exp.company}
                                                </h4>

                                                <p className="text-base text-blue-300 mt-2 font-medium">
                                                    {exp.role}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="inline-flex items-center gap-3 text-sm font-medium text-gray-400 mb-4">
                                            <FaCalendarAlt className="text-xs text-blue-400" />
                                            {exp.duration}
                                        </div>

                                        <p className="text-gray-400 leading-7 text-[14px] md:text-[15px]">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CENTER EMPTY */}
                    <div className="hidden lg:block"></div>

                    {/* EDUCATION */}
                    <div>
                        <div className="mb-6">
                            <p className="text-xs uppercase tracking-[4px] text-indigo-400 font-semibold mb-2">
                                Studies
                            </p>

                            <h3 className="heading-font text-3xl font-black text-white">
                                Education
                            </h3>
                        </div>

                        <div className="space-y-5">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    {/* TIMELINE DOT */}
                                    <div className="hidden lg:flex absolute -left-[38px] top-8 w-4 h-4 rounded-full bg-indigo-500 border-[3px] border-[#050816] shadow-[0_0_18px_rgba(99,102,241,0.75)] z-20"></div>

                                    {/* CARD */}
                                    <div className="group bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[24px] p-5 md:p-6 shadow-xl hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-500">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                                <FaGraduationCap className="text-indigo-400 text-base" />
                                            </div>

                                            <div className="flex-1">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-semibold mb-3">
                                                    EDUCATION
                                                </span>

                                                <h4 className="heading-font text-xl md:text-2xl font-bold text-white leading-tight">
                                                    {edu.degree}
                                                </h4>

                                                <p className="text-base text-indigo-300 mt-2 font-medium">
                                                    {edu.field}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
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