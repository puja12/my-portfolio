import { skills } from '../data/portfolioData'
import TechCard from './TechCard'

const Skills = () => {
    return (
        <section id="skills" className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                        /
                    </div>

                    <h2 className="text-3xl font-bold">Tech Stack</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <TechCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills