import { motion } from 'framer-motion'

import {
    FaUserAlt,
    FaCode,
    FaServer,
    FaRocket,
    FaCheckCircle,
} from 'react-icons/fa'

const About = () => {

    const technologies = [
        'Laravel',
        'React',
        'Vue.js',
        'MySQL',
        'Redis',
        'GCP',
        'REST APIs',
        'AI Integration',
    ]

    return (
        <section
            id="about"
            className="relative py-24 px-4 overflow-hidden"
        >

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/30 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >

                    <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-purple-100 shadow-md rounded-full px-5 py-2 mb-7">

                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <FaUserAlt className="text-purple-600" />
                        </div>

                        <span className="text-sm font-semibold text-gray-700">
                            About Me
                        </span>

                    </div>

                    <h2 className="text-[38px] md:text-[56px] font-black leading-[1.05] tracking-[-2px] text-[#0F172A] max-w-5xl mx-auto">

                        Building high-performance digital products with scalable architecture & modern technologies.

                    </h2>

                    <p className="text-gray-600 text-lg md:text-xl leading-9 max-w-3xl mx-auto mt-8">
                        Senior Backend & Full-Stack Engineer focused on enterprise applications,
                        scalable backend systems, cloud infrastructure and AI-powered experiences.
                    </p>

                </motion.div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-[58%_42%] gap-10 items-start">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[36px] p-8 md:p-12 shadow-2xl overflow-hidden"
                    >

                        {/* INNER GLOW */}
                        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-purple-100/40 blur-3xl rounded-full"></div>

                        <div className="relative z-10">

                            <div className="flex items-center gap-4 mb-10">

                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg">
                                    <FaCode className="text-2xl" />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-black text-[#0F172A]">
                                        Who I Am
                                    </h3>

                                    <p className="text-gray-500 mt-1">
                                        Senior Backend & Full-Stack Engineer
                                    </p>
                                </div>

                            </div>

                            <div className="space-y-7 text-gray-600 text-lg leading-9">

                                <p>
                                    I specialize in designing scalable backend systems,
                                    enterprise applications and high-performance eCommerce platforms
                                    with strong focus on architecture, performance and maintainability.
                                </p>

                                <p>
                                    Over the past 11+ years, I have built subscription engines,
                                    healthcare systems, automation platforms and multi-brand
                                    eCommerce applications used across different markets.
                                </p>

                                <p>
                                    My core expertise includes Laravel, React, Vue.js,
                                    cloud infrastructure, REST APIs, payment integrations,
                                    Redis caching and AI-powered web applications.
                                </p>

                            </div>

                            {/* HIGHLIGHTS */}
                            <div className="grid md:grid-cols-2 gap-5 mt-12">

                                {[
                                    'Scalable System Design',
                                    'Enterprise Applications',
                                    'AI Integration',
                                    'Cloud Infrastructure',
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 bg-white/70 border border-gray-100 rounded-2xl px-5 py-4 shadow-sm"
                                    >

                                        <FaCheckCircle className="text-purple-600 text-lg" />

                                        <span className="font-semibold text-gray-700">
                                            {item}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">

                        {/* TOP STATS */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            {/* EXPERIENCE */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                                    <FaServer className="text-purple-600 text-2xl" />
                                </div>

                                <h3 className="text-6xl font-black text-[#0F172A] mb-3">
                                    11+
                                </h3>

                                <p className="text-xl font-bold text-gray-800 mb-2">
                                    Years Experience
                                </p>

                                <p className="text-gray-600 leading-7">
                                    Delivering scalable enterprise systems & platforms.
                                </p>

                            </motion.div>

                            {/* PROJECTS */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-[30px] p-8 text-white shadow-2xl"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                    <FaRocket className="text-2xl" />
                                </div>

                                <h3 className="text-6xl font-black mb-3">
                                    15+
                                </h3>

                                <p className="text-xl font-bold mb-2">
                                    Projects Delivered
                                </p>

                                <p className="leading-7 text-purple-100">
                                    Enterprise products, SaaS platforms & automation systems.
                                </p>

                            </motion.div>

                        </div>

                        {/* TECH STACK CARD */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-[30px] p-8 shadow-xl border border-gray-100"
                        >

                            <div className="flex items-center gap-4 mb-8">

                                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
                                    <FaCode className="text-indigo-600 text-2xl" />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-black text-[#0F172A]">
                                        Tech Expertise
                                    </h3>

                                    <p className="text-gray-500 mt-1">
                                        Modern backend & frontend technologies
                                    </p>
                                </div>

                            </div>

                            <div className="flex flex-wrap gap-4">

                                {technologies.map((tech) => (
                                    <div
                                        key={tech}
                                        className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 hover:scale-105 transition duration-300 px-5 py-3 rounded-2xl text-sm font-semibold text-gray-700 shadow-sm"
                                    >
                                        {tech}
                                    </div>
                                ))}

                            </div>

                        </motion.div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About