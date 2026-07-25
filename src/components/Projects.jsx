import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import SectionBadge from './SectionBadge'
import { FaFolderOpen } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-20 md:py-24 px-4 md:px-6"
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <SectionBadge
                        title="Featured Projects"
                        icon={
                            <FaFolderOpen className="text-blue-700 text-sm" />
                        }
                    />
                </motion.div>

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
        </section>
    )
}

export default Projects