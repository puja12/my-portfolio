import { motion } from 'framer-motion'

import {
    FaUserAlt,
    FaCheckCircle,
} from 'react-icons/fa'

const About = () => {

    const highlights = [
        'Scalable System Design',
        'Enterprise Applications',
        'AI Integration',
        'Cloud Infrastructure',
    ]

    return (
        <section
            id="about"
            className="relative py-20 md:py-24 px-4 overflow-hidden bg-[#050816]"
        >

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-600/10 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-indigo-600/10 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >

                    {/* SMALL BADGE */}
                    <div className="inline-flex items-center gap-3 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-sm mb-6">

                        <div className="w-9 h-9 rounded-full bg-blue-500/15 flex items-center justify-center">
                            <FaUserAlt className="text-blue-400 text-sm" />
                        </div>

                        <span className="text-sm font-semibold text-gray-300">
                            About Me
                        </span>

                    </div>

                </motion.div>

                {/* MAIN CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.4)] overflow-hidden"
                >

                    {/* INNER GLOW */}
                    <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-blue-500/10 blur-3xl rounded-full"></div>

                    <div className="relative z-10">

                        {/* TOP CONTENT */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

                            {/* LEFT CONTENT */}
                            <div className="max-w-3xl">

                                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">

                                    Senior Backend & Full-Stack Engineer

                                </h3>

                                <div className="space-y-4 text-gray-400 text-[15px] md:text-[17px] leading-7">

                                    <p>
                                        I specialize in building scalable enterprise applications,
                                        high-performance eCommerce platforms and automation systems
                                        with strong focus on architecture, performance and maintainability.
                                    </p>

                                    <p>
                                        My expertise includes Laravel, React, Vue.js, REST APIs,
                                        Redis caching, payment integrations, cloud infrastructure
                                        and AI-powered web applications.
                                    </p>

                                    <p>
                                        Over the past 11+ years, I have delivered multi-brand
                                        eCommerce platforms, subscription engines, healthcare systems
                                        and business automation products across multiple industries.
                                    </p>

                                </div>

                            </div>

                            {/* RIGHT STATS */}
                            <div className="grid grid-cols-2 gap-4 min-w-[240px]">

                                {/* EXPERIENCE */}
                                <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-5 text-center backdrop-blur-xl">

                                    <h3 className="text-4xl font-black text-blue-400 mb-1">
                                        11+
                                    </h3>

                                    <p className="text-sm text-gray-400 leading-5">
                                        Years
                                        <br />
                                        Experience
                                    </p>

                                </div>

                                {/* PROJECTS */}
                                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl px-5 py-5 text-center text-white shadow-lg shadow-blue-500/20">

                                    <h3 className="text-4xl font-black mb-1">
                                        15+
                                    </h3>

                                    <p className="text-sm text-blue-100 leading-5">
                                        Projects
                                        <br />
                                        Delivered
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* HIGHLIGHTS */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

                            {highlights.map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ y: -4 }}
                                    className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-4 backdrop-blur-xl hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300"
                                >

                                    <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0">

                                        <FaCheckCircle className="text-blue-400 text-sm" />

                                    </div>

                                    <span className="font-semibold text-gray-200 text-sm leading-6">
                                        {item}
                                    </span>

                                </motion.div>
                            ))}

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    )
}

export default About