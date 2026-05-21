import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">

                    <div className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg">
                        PP
                    </div>

                    <div>
                        <h1 className="font-bold text-lg text-gray-900">
                            Puja P. Patkar
                        </h1>

                        <p className="text-xs text-gray-500">
                            Full-Stack Engineer
                        </p>
                    </div>

                </div>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-10 font-medium text-gray-700">

                    <a
                        href="#home"
                        className="hover:text-purple-600 transition duration-300"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="hover:text-purple-600 transition duration-300"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="hover:text-purple-600 transition duration-300"
                    >
                        Skills
                    </a>
                    <a
                        href="#experience"
                        className="hover:text-purple-600 transition duration-300"
                    >
                        Experience
                    </a>

                    <a
                        href="#projects"
                        className="hover:text-purple-600 transition duration-300"
                    >
                        Projects
                    </a>
                </nav>

                {/* Button */}
                <button className="hidden md:block bg-purple-600 hover:bg-purple-700 hover:scale-105 transition duration-300 text-white px-6 py-3 rounded-xl shadow-lg shadow-purple-200 font-medium">
                    Contact Me
                </button>

            </div>
        </motion.header>
    )
}

export default Navbar