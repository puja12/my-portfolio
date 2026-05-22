import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 30)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'backdrop-blur-2xl bg-[#050816]/75 border-b border-white/10 shadow-2xl'
                : 'bg-white/85 backdrop-blur-xl border-b border-gray-200/60'
                }`}
        >

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-3 cursor-pointer">

                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-500/20">
                        PP
                    </div>

                    <div>

                        <h1
                            className={`font-bold text-lg tracking-wide transition-colors duration-300 ${scrolled
                                ? 'text-white'
                                : 'text-[#1E293B]'
                                }`}
                        >
                            Puja P. Patkar
                        </h1>

                        <p
                            className={`text-xs transition-colors duration-300 ${scrolled
                                ? 'text-gray-400'
                                : 'text-slate-500'
                                }`}
                        >
                            Full-Stack Engineer
                        </p>

                    </div>

                </div>

                {/* NAVIGATION */}
                <nav
                    className={`hidden lg:flex items-center gap-10 font-medium transition-colors duration-300 ${scrolled
                        ? 'text-gray-300'
                        : 'text-slate-700'
                        }`}
                >

                    <a
                        href="#home"
                        className={`transition duration-300 ${scrolled
                            ? 'hover:text-blue-400'
                            : 'hover:text-indigo-600'
                            }`}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className={`transition duration-300 ${scrolled
                            ? 'hover:text-blue-400'
                            : 'hover:text-indigo-600'
                            }`}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className={`transition duration-300 ${scrolled
                            ? 'hover:text-blue-400'
                            : 'hover:text-indigo-600'
                            }`}
                    >
                        Skills
                    </a>

                    <a
                        href="#experience"
                        className={`transition duration-300 ${scrolled
                            ? 'hover:text-blue-400'
                            : 'hover:text-indigo-600'
                            }`}
                    >
                        Experience
                    </a>

                    <a
                        href="#projects"
                        className={`transition duration-300 ${scrolled
                            ? 'hover:text-blue-400'
                            : 'hover:text-indigo-600'
                            }`}
                    >
                        Projects
                    </a>

                </nav>

                {/* BUTTON */}
                <button
                    className={`hidden md:block transition-all duration-300 px-6 py-3 rounded-2xl font-medium ${scrolled
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border border-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 hover:scale-105'
                        }`}
                >

                    Contact Me

                </button>

            </div>

        </motion.header>
    )
}

export default Navbar