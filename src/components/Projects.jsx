import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import { FaFolderOpen, FaArrowRight } from 'react-icons/fa'

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative py-20 md:py-24 px-4 overflow-hidden bg-[#F8FAFC]"
        >

            {/* BACKGROUND GLOWS */}
            <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/40 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-indigo-200/40 blur-3xl rounded-full"></div>

            {/* GRID PATTERN */}
            <div className="absolute inset-0 opacity-[0.04]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                ></div>
            </div>

            <div className="relative max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">

                    {/* LEFT */}
                    <div>

                        {/* BADGE */}
                        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-blue-100 rounded-full px-4 py-2 mb-6 shadow-sm">

                            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">

                                <FaFolderOpen className="text-blue-700 text-sm" />

                            </div>

                            <span className="text-sm font-semibold text-slate-700">
                                Portfolio
                            </span>

                        </div>

                        <h2 className="text-[34px] md:text-[52px] leading-[1.05] tracking-[-2px] font-black text-slate-900 max-w-4xl">

                            Featured projects showcasing scalable engineering solutions.

                        </h2>

                        <p className="text-slate-600 text-lg mt-6 max-w-3xl leading-8">

                            Enterprise applications, eCommerce platforms,
                            AI-powered systems and modern digital products
                            built with Laravel, React, Vue.js and cloud technologies.

                        </p>

                    </div>

                    {/* RIGHT BUTTON */}
                    <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-all duration-300 text-white px-7 py-4 rounded-2xl font-semibold self-start">

                        View All Projects

                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition duration-300" />

                    </button>

                </div>

                {/* PROJECT GRID */}
                <div className="grid md:grid-cols-2 gap-8">

                    {projects.map((project, index) => (

                        <div
                            key={index}
                            className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-[30px] shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)] hover:border-blue-200 transition-all duration-500"
                        >

                            <ProjectCard project={project} />

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Projects