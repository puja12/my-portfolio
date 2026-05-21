import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import { FaFolderOpen, FaArrowRight } from 'react-icons/fa'

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-20 px-4"
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-10">

                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                            <FaFolderOpen className="text-purple-600 text-lg" />
                        </div>

                        <h2 className="text-3xl font-bold text-[#111827]">
                            Featured Projects
                        </h2>
                    </div>

                    <button className="flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all duration-300">

                        View All Projects

                        <FaArrowRight className="text-sm" />

                    </button>

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
        </section>
    )
}

export default Projects