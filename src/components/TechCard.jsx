import { motion } from 'framer-motion'

const TechCard = ({ skill }) => {

    const Icon = skill.icon

    return (
        <motion.div
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            transition={{ duration: 0.25 }}
            className="group relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[24px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-4 overflow-hidden"
        >

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-50 to-indigo-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">

                    <Icon
                        className="text-4xl"
                        style={{
                            color: skill.color,
                        }}
                    />

                </div>

                <p className="font-semibold text-gray-700 text-sm md:text-base">
                    {skill.name}
                </p>

            </div>

        </motion.div>
    )
}

export default TechCard