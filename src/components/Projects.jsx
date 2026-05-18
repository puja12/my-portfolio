import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section id="projects" className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold">
                        Featured Projects
                    </h2>

                    <button className="text-purple-600 font-semibold">
                        View All Projects
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects