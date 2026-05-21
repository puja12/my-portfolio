import { skills } from '../data/portfolioData'
import TechCard from './TechCard'

import skillsBg from '../assets/skills-bg.jpg'

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative py-20 overflow-hidden"
        >
            {/* BACKGROUND IMAGE */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(
                rgba(255,255,255,0.72),
                rgba(255,255,255,0.78)
            ),
            url(${skillsBg})
        `,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>

            {/* GLOW EFFECTS */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-200/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-indigo-200/20 blur-3xl rounded-full"></div>

            {/* CONTENT */}
            <div className="relative max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}
                <div className="flex items-center gap-4 mb-14">

                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-lg">
                        /
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-purple-600 uppercase tracking-[3px]">
                            Technologies
                        </p>

                        <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">
                            Tech Stack
                        </h2>
                    </div>

                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                    {skills.map((skill, index) => (
                        <TechCard
                            key={index}
                            skill={skill}
                        />
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Skills