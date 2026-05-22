import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

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

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

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

                {/* DESKTOP NAV */}
                <nav
                    className={`hidden lg:flex items-center gap-10 font-medium transition-colors duration-300 ${scrolled
                        ? 'text-gray-300'
                        : 'text-slate-700'
                        }`}
                >

                    <a
                        href="#home"
                        className={`${scrolled
                            ? 'hover:text-blue-400'
                            : 'hover:text-indigo-600'
                            } transition duration-300`}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className={`${scrolled
                            ? 'hover:text-blue-400'
                            : 'hover:text-indigo-600'
                            } transition duration-300`}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className={`${scrolled
                            ? 'hover:text-blue-400'
                            : 'hover:text-indigo-600'
                            } transition duration-300`}
                    >
                        Skills
                    </a>

                    <a
                        href="#experience"
                        className={`${scrolled
                            ? 'hover:text-blue-400'
                            : 'hover:text-indigo-600'
                            } transition duration-300`}
                    >
                        Experience
                    </a>

                    <a
                        href="#projects"
                        className={`${scrolled
                            ? 'hover:text-blue-400'
                            : 'hover:text-indigo-600'
                            } transition duration-300`}
                    >
                        Projects
                    </a>

                </nav>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">

                    {/* CONTACT BUTTON */}
                    <button
                        className={`hidden md:block transition-all duration-300 px-6 py-3 rounded-2xl font-medium ${scrolled
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border border-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]'
                            : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 hover:scale-105'
                            }`}
                    >

                        Contact Me

                    </button>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className={`lg:hidden w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${scrolled
                            ? 'bg-white/10 border border-white/10 text-white'
                            : 'bg-slate-100 text-slate-700'
                            }`}
                    >

                        {mobileMenu
                            ? <X size={22} />
                            : <Menu size={22} />
                        }

                    </button>

                </div>

            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>

                {mobileMenu && (

                    <>

                        {/* BACKDROP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setMobileMenu(false)}
                            className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 lg:hidden"
                        />

                        {/* SLIDE MENU */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 28,
                                stiffness: 260,
                            }}
                            className="fixed top-0 right-0 h-screen w-full bg-gradient-to-br from-[#EAF2FF] via-[#F5F9FF] to-[#E0ECFF] z-50 lg:hidden shadow-2xl">

                            {/* TOP BAR */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-blue-100 bg-white/40 backdrop-blur-xl">

                                <div>

                                    <h2 className="heading-font text-slate-900 text-lg font-bold">
                                        Navigation
                                    </h2>

                                    <p className="text-sm text-slate-600">
                                        Explore portfolio
                                    </p>

                                </div>

                                <button
                                    onClick={() => setMobileMenu(false)}
                                    className="w-11 h-11 rounded-xl bg-white/70 border border-blue-100 flex items-center justify-center text-[#0F172A] shadow-sm"
                                >

                                    <X size={22} />

                                </button>

                            </div>

                            {/* MENU ITEMS */}
                            <div className="flex flex-col px-6 py-8 h-full">

                                {[
                                    'Home',
                                    'About',
                                    'Skills',
                                    'Experience',
                                    'Projects',
                                ].map((item) => (

                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setMobileMenu(false)}
                                        className="group flex items-center justify-between text-[#0F172A] hover:text-blue-700 text-lg font-semibold py-5 border-b border-blue-100 transition-all duration-300"
                                    >

                                        <span>
                                            {item}
                                        </span>

                                        <span className="translate-x-0 group-hover:translate-x-1 transition duration-300 text-blue-500">
                                            →
                                        </span>

                                    </a>

                                ))}

                                {/* CONTACT BUTTON */}
                                <button className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)] transition-all duration-300 text-white py-4 rounded-2xl font-semibold">

                                    Contact Me

                                </button>

                            </div>

                        </motion.div>

                    </>

                )}

            </AnimatePresence>

        </motion.header>
    )
}

export default Navbar