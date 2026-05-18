import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-gradient-to-r from-[#0F172A] to-[#111827] text-white mt-20"
        >
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Top Grid */}
                <div className="grid md:grid-cols-3 gap-12">

                    {/* Left */}
                    <div>
                        <h3 className="text-3xl font-bold mb-5">
                            Let's Connect
                        </h3>

                        <p className="text-gray-300 leading-8 mb-6">
                            Open to discussing exciting projects,
                            freelance opportunities and senior engineering roles.
                        </p>

                        <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl font-medium">
                            Get In Touch
                        </button>
                    </div>

                    {/* Center */}
                    <div>
                        <h3 className="text-2xl font-bold mb-5">
                            Quick Links
                        </h3>

                        <div className="space-y-4 text-gray-300">
                            <a href="#home" className="block hover:text-white">
                                Home
                            </a>

                            <a href="#about" className="block hover:text-white">
                                About
                            </a>

                            <a href="#skills" className="block hover:text-white">
                                Skills
                            </a>

                            <a href="#projects" className="block hover:text-white">
                                Projects
                            </a>

                            <a href="#experience" className="block hover:text-white">
                                Experience
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div>
                        <h3 className="text-2xl font-bold mb-5">
                            Contact Info
                        </h3>

                        <div className="space-y-4 text-gray-300">
                            <p>Kalyan, Maharashtra, India</p>

                            <p>+91 9769905263</p>

                            <p>prabhupuja12@gmail.com</p>

                            {/* Social Icons */}
                            <div className="flex gap-5 text-2xl pt-5">

                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    className="hover:text-purple-400 transition"
                                >
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    className="hover:text-purple-400 transition"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="mailto:prabhupuja12@gmail.com"
                                    className="hover:text-purple-400 transition"
                                >
                                    <FaEnvelope />
                                </a>

                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
                    © 2026 Puja P. Patkar. All rights reserved.
                </div>

            </div>
        </footer>
    )
}

export default Footer