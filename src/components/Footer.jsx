import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaArrowRight,
} from 'react-icons/fa'

import {
    MapPin,
    Phone,
    Mail,
} from 'lucide-react'

const Footer = () => {
    return (
        <footer
            id="contact"
            className="relative overflow-hidden bg-[#050816] text-white mt-0 border-t border-blue-900/30"
        >

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-indigo-600/10 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-16">

                {/* TOP GRID */}
                <div className="grid md:grid-cols-3 gap-12">

                    {/* LEFT */}
                    <div>


                        <h3 className="heading-font text-4xl font-black leading-tight mb-5">
                            Let's{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Connect
                            </span>
                        </h3>

                        <p className="text-slate-400 leading-8 mb-8 max-w-md">
                            Open to discussing exciting projects, freelance opportunities and senior engineering roles.
                        </p>

                        {/*<button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] transition-all duration-300 text-white px-7 py-4 rounded-2xl font-semibold">

                            Get In Touch

                            <FaArrowRight className="group-hover:translate-x-1 transition duration-300 text-sm" />

                        </button>*/}

                        {/* SOCIAL ICONS */}
                        <div className="flex gap-4 pt-4">

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-blue-900/30 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaLinkedin className="text-lg" />
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-blue-900/30 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaGithub className="text-lg" />
                            </a>

                            <a
                                href="mailto:prabhupuja12@gmail.com"
                                className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-blue-900/30 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                            >
                                <FaEnvelope className="text-lg" />
                            </a>

                        </div>

                    </div>

                    {/* CENTER */}
                    <div>

                        <h3 className="heading-font text-2xl font-bold mb-6 text-white">
                            Quick{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Links
                            </span>
                        </h3>

                        <div className="space-y-4">

                            {[
                                'Home',
                                'About',
                                'Skills',
                                'Projects',
                                'Experience',
                            ].map((item) => (

                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-all duration-300"
                                >

                                    <div className="w-2 h-2 rounded-full bg-blue-500/70 group-hover:scale-125 transition duration-300"></div>

                                    {item}

                                </a>

                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div>

                        <h3 className="heading-font text-2xl font-bold mb-6 text-white">
                            Contact{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Info
                            </span>
                        </h3>

                        <div className="space-y-4">

                            {/* LOCATION */}
                            <div className="flex items-center gap-4 bg-white/[0.03] border border-blue-900/30 rounded-2xl px-5 py-4 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-300">

                                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">

                                    <MapPin className="w-5 h-5 text-blue-400" />

                                </div>

                                <p className="text-slate-200 leading-6">
                                    Kalyan, Maharashtra, India
                                </p>

                            </div>

                            {/* PHONE */}
                            <div className="flex items-center gap-4 bg-white/[0.03] border border-blue-900/30 rounded-2xl px-5 py-4 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-300">

                                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">

                                    <Phone className="w-5 h-5 text-blue-400" />

                                </div>

                                <p className="text-slate-200 leading-6">
                                    +91 9769905263
                                </p>

                            </div>

                            {/* EMAIL */}
                            <div className="flex items-center gap-4 bg-white/[0.03] border border-blue-900/30 rounded-2xl px-5 py-4 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-300">

                                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">

                                    <Mail className="w-5 h-5 text-blue-400" />

                                </div>

                                <p className="text-slate-200 break-all leading-6">
                                    prabhupuja12@gmail.com
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-blue-900/30 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2026 Puja P. Patkar. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-sm">
                        Crafted with React, Tailwind & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer