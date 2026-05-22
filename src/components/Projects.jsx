import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import SectionBadge from './SectionBadge'
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

                        <SectionBadge
                            title="Featured Projects"
                            icon={
                                <FaFolderOpen className="text-blue-700 text-sm" />
                            }
                        />
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