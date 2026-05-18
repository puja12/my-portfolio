import { FaUserAlt } from 'react-icons/fa'

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <FaUserAlt className="text-purple-600 text-xl" />
                    </div>

                    <div>
                        <p className="text-purple-600 font-semibold uppercase tracking-wider">
                            About Me
                        </p>

                        <h2 className="text-4xl font-bold text-gray-900">
                            Senior Backend & Full-Stack Engineer
                        </h2>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div className="bg-white rounded-3xl p-10 shadow-sm">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">
                            Who I Am
                        </h3>

                        <div className="space-y-6 text-gray-600 leading-8 text-lg">
                            <p>
                                I am a Senior Backend & Full-Stack Engineer with 11+
                                years of experience building scalable enterprise
                                applications, eCommerce systems and automation
                                platforms.
                            </p>

                            <p>
                                I specialize in Laravel, Vue.js, REST APIs,
                                subscription systems, payment gateway integrations
                                and database optimization.
                            </p>

                            <p>
                                I enjoy solving complex business problems and
                                transforming requirements into scalable and
                                efficient software solutions.
                            </p>

                            <p>
                                Over the years, I have worked on multi-brand
                                eCommerce platforms, Razorpay subscription systems,
                                hospital management systems and enterprise
                                automation solutions.
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300">
                            <h3 className="text-5xl font-bold text-purple-600 mb-3">
                                11+
                            </h3>

                            <p className="text-xl font-semibold mb-2">
                                Years Experience
                            </p>

                            <p className="text-gray-600 leading-7">
                                Extensive experience in developing scalable web
                                applications and backend systems.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300">
                            <h3 className="text-5xl font-bold text-purple-600 mb-3">
                                15+
                            </h3>

                            <p className="text-xl font-semibold mb-2">
                                Projects Delivered
                            </p>

                            <p className="text-gray-600 leading-7">
                                Successfully delivered enterprise applications,
                                eCommerce platforms and automation systems.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300">
                            <h3 className="text-5xl font-bold text-purple-600 mb-3">
                                10+
                            </h3>

                            <p className="text-xl font-semibold mb-2">
                                Technologies
                            </p>

                            <p className="text-gray-600 leading-7">
                                Strong expertise in Laravel, Vue.js, React,
                                MySQL, Redis, APIs and cloud platforms.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg">
                            <h3 className="text-3xl font-bold mb-4">
                                Building Reliable Systems
                            </h3>

                            <p className="leading-8 text-lg">
                                Passionate about designing scalable architectures,
                                improving performance and delivering high-quality
                                software solutions.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About