import { motion } from 'framer-motion'
import {
    FaBriefcase,
    FaCalendarAlt,
    FaArrowRight,
} from 'react-icons/fa'

import { experiences } from '../data/portfolioData'

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative py-20 md:py-24 px-4 overflow-hidden"
        >

            {/* BACKGROUND */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-200/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-200/20 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >

                    {/* BADGE */}
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-purple-100 rounded-full px-4 py-2 shadow-sm mb-6">

                        <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center">
                            <FaBriefcase className="text-purple-600 text-sm" />
                        </div>

                        <span className="text-sm font-semibold text-gray-700">
                            Career Journey
                        </span>

                    </div>

                    {/* TITLE */}
                    <h2 className="text-[34px] md:text-[48px] leading-[1.1] tracking-[-2px] font-black text-[#0F172A] max-w-4xl">

                        Professional experience building scalable products & enterprise systems.

                    </h2>

                </motion.div>

                {/* TIMELINE */}
                <div className="relative">

                    {/* CENTER LINE */}
                    <div className="hidden md:block absolute left-[24px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-300 via-indigo-200 to-transparent"></div>

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
                                className="relative md:pl-20"
                            >

                                {/* TIMELINE DOT */}
                                <div className="hidden md:flex absolute left-0 top-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white items-center justify-center shadow-lg">

                                    <FaBriefcase className="text-sm" />

                                </div>

                                {/* CARD */}
                                <div className="group relative bg-white/75 backdrop-blur-2xl border border-white/60 rounded-[30px] p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">

                                    {/* HOVER GLOW */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50/0 via-purple-50/40 to-indigo-50/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                    <div className="relative z-10">

                                        {/* TOP */}
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">

                                            {/* ROLE */}
                                            <div>

                                                <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] leading-tight">

                                                    {exp.role}

                                                </h3>

                                                <p className="text-lg font-semibold text-purple-600 mt-3">

                                                    {exp.company}

                                                </p>

                                            </div>

                                            {/* DURATION */}
                                            <div className="inline-flex items-center gap-3 bg-purple-50 border border-purple-100 rounded-2xl px-5 py-3 text-sm font-semibold text-purple-700 w-fit">

                                                <FaCalendarAlt className="text-xs" />

                                                {exp.duration}

                                            </div>

                                        </div>

                                        {/* DESCRIPTION */}
                                        <p className="text-gray-600 leading-8 text-[16px] md:text-lg">

                                            {exp.description}

                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Experience