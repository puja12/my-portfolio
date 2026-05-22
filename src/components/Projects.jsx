import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import { FaFolderOpen, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-20 px-4"
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-10">
                    {/* SECTION HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12">
                        {/* SMALL BADGE */}
                        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-blue-100 rounded-full px-4 py-2 shadow-sm mb-6">

                            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                                <FaFolderOpen className="text-blue-700 text-sm" />
                            </div>

                            <span className="text-sm font-semibold text-slate-700">
                                Featured Projects
                            </span>

                        </div>
                    </motion.div>

                </div>

                {/* PROJECT GRID */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>

            </div>
        </section >
    )
}

export default Projects