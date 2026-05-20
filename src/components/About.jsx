import { motion } from 'framer-motion'

import {
    FaUserAlt,
    FaCode,
    FaServer,
    FaRocket,
} from 'react-icons/fa'

const About = () => {
    return (
        <section
            id="about"
            className="relative py-16 px-4 overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-200/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-200/30 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >

                    <div className="inline-flex items-center gap-3 bg-white border border-purple-100 shadow-sm rounded-full px-5 py-2 mb-6">

                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <FaUserAlt className="text-purple-600" />
                        </div>

                        <span className="text-sm font-semibold text-gray-700">
                            About Me
                        </span>

                    </div>

                    <h2 className="text-[42px] md:text-[58px] font-black leading-[1.1] tracking-[-2px] text-[#0F172A] max-w-4xl">

                        Engineering scalable systems with modern technologies & product-focused thinking.

                    </h2>

                </motion.div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-[55%_45%] gap-10">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[32px] p-10 shadow-xl"
                    >

                        <h3 className="text-3xl font-bold text-[#0F172A] mb-8">
                            Who I Am
                        </h3>

                        <div className="space-y-7 text-gray-600 text-lg leading-9">

                            <p>
                                I am a Senior Backend & Full-Stack Engineer with
                                11+ years of experience building scalable enterprise
                                applications, eCommerce platforms and automation systems.
                            </p>

                            <p>
                                My expertise includes Laravel, React, Vue.js,
                                REST APIs, cloud infrastructure, payment gateway
                                integrations and high-performance backend systems.
                            </p>

                            <p>
                                I specialize in transforming complex business
                                requirements into scalable and maintainable software
                                architectures with strong focus on performance,
                                reliability and user experience.
                            </p>

                            <p>
                                Over the years, I have delivered multi-brand
                                eCommerce platforms, subscription engines,
                                healthcare systems and AI-powered applications.
                            </p>

                        </div>

                    </motion.div>

                    {/* RIGHT SIDE */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        {/* CARD 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[28px] p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                                <FaServer className="text-purple-600 text-2xl" />
                            </div>

                            <h3 className="text-5xl font-black text-[#0F172A] mb-3">
                                11+
                            </h3>

                            <p className="text-xl font-semibold mb-3 text-gray-800">
                                Years Experience
                            </p>

                            <p className="text-gray-600 leading-7">
                                Extensive experience building scalable enterprise systems.
                            </p>

                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-[28px] p-8 text-white shadow-xl hover:-translate-y-2 transition duration-300"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <FaRocket className="text-2xl" />
                            </div>

                            <h3 className="text-5xl font-black mb-3">
                                15+
                            </h3>

                            <p className="text-xl font-semibold mb-3">
                                Projects Delivered
                            </p>

                            <p className="leading-7 text-purple-100">
                                Enterprise applications, SaaS platforms and automation systems.
                            </p>

                        </motion.div>

                        {/* CARD 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="sm:col-span-2 bg-white rounded-[28px] p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300"
                        >

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                                <div>

                                    <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6">
                                        <FaCode className="text-indigo-600 text-2xl" />
                                    </div>

                                    <h3 className="text-4xl font-black text-[#0F172A] mb-3">
                                        10+ Technologies
                                    </h3>

                                    <p className="text-gray-600 leading-8 max-w-xl">
                                        Strong expertise in Laravel, React, Vue.js,
                                        MySQL, Redis, APIs, cloud infrastructure and AI integrations.
                                    </p>

                                </div>

                                {/* Tech Pills */}
                                <div className="flex flex-wrap gap-3">

                                    {[
                                        'Laravel',
                                        'React',
                                        'Vue.js',
                                        'MySQL',
                                        'Redis',
                                        'GCP',
                                    ].map((tech) => (
                                        <div
                                            key={tech}
                                            className="bg-gray-100 hover:bg-purple-100 transition px-4 py-2 rounded-full text-sm font-semibold text-gray-700"
                                        >
                                            {tech}
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About