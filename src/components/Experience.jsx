import { experiences } from '../data/portfolioData'

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="mb-12">
                    <p className="text-purple-600 font-semibold uppercase tracking-wider mb-3">
                        Career Journey
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900">
                        Professional Experience
                    </h2>
                </div>

                {/* Experience Cards */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5">

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {exp.role}
                                    </h3>

                                    <p className="text-lg text-purple-600 font-semibold mt-2">
                                        {exp.company}
                                    </p>
                                </div>

                                <div className="mt-4 lg:mt-0">
                                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl font-medium">
                                        {exp.duration}
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-8 text-lg">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Experience