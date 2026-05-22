import { skills } from '../data/portfolioData'
import TechCard from './TechCard'
import { motion } from 'framer-motion'
import skillsBg from '../assets/skills-bg.jpg'
import {
    FaUserAlt,
    FaCheckCircle,
} from 'react-icons/fa'

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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >

                    {/* SMALL BADGE */}
                    <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-blue-100 rounded-full px-4 py-2 shadow-sm mb-6">

                        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                            <FaUserAlt className="text-blue-700 text-sm" />
                        </div>

                        <span className="text-sm font-semibold text-slate-700">
                            Tech Stack
                        </span>

                    </div>

                </motion.div>


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