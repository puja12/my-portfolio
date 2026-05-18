import profile from '../assets/profile.png'
import { motion } from 'framer-motion'
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaArrowRight,
} from 'react-icons/fa'

import { MdEmail } from 'react-icons/md'

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-10 pb-20 px-4"
        >
            <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-sm border border-gray-100">

                <div className="grid lg:grid-cols-2 gap-16 items-start px-8 lg:px-14 py-14">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Small Heading */}
                        <p className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-6">
                            Senior Backend / Full-Stack Engineer
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-[42px] lg:text-[64px] leading-[1.1] font-bold text-[#0F172A] mb-8">
                            Building Scalable
                            <br />
                            Systems. Solving
                            <br />
                            Real Business
                            <span className="text-purple-600">
                                {' '}Problems.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-500 text-lg leading-9 max-w-xl mb-10">
                            11+ years of experience building robust backend systems
                            and full-stack applications using Laravel, Vue.js and
                            modern technologies. Specialized in eCommerce,
                            subscription systems, payment integrations and business
                            automation.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-5 mb-12">

                            <button className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition duration-300 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-lg shadow-purple-200">
                                View My Work
                                <FaArrowRight />
                            </button>

                            <button className="border border-gray-200 hover:border-purple-300 hover:scale-105 transition duration-300 bg-white px-8 py-4 rounded-2xl font-semibold text-gray-700 shadow-sm">
                                Download Resume
                            </button>

                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap lg:flex-nowrap items-center gap-8 text-gray-500 text-sm w-full">

                            <div className="flex items-center gap-3 min-w-max">
                                <FaMapMarkerAlt className="text-purple-600" />
                                <span>Kalyan, Maharashtra, India</span>
                            </div>

                            <div className="flex items-center gap-3 min-w-max">
                                <FaPhoneAlt className="text-purple-600" />
                                <span>+91 9769905263</span>
                            </div>

                            <div className="flex items-center gap-3 min-w-max">
                                <MdEmail className="text-purple-600 text-lg" />
                                <span>prabhupuja12@gmail.com</span>
                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT IMAGE SECTION */}
                    <motion.div
                        className="flex justify-center lg:justify-end pt-6"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >

                        <div className="flex flex-col items-center relative pt-10">

                            {/* Decorative Dots */}
                            <div className="absolute top-0 right-0 grid grid-cols-4 gap-3 opacity-40">
                                {[...Array(16)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-3 h-3 rounded-full bg-purple-400"
                                    ></div>
                                ))}
                            </div>

                            {/* IMAGE WRAPPER */}
                            <motion.div
                                className="relative"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >

                                {/* Outer Circle */}
                                <div className="w-[360px] h-[360px] rounded-full bg-[#F3F0FF] flex items-center justify-center">

                                    {/* Inner Circle */}
                                    <div className="w-[280px] h-[280px] rounded-full overflow-hidden border-[12px] border-white shadow-xl">

                                        <img
                                            src={profile}
                                            alt="profile"
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                </div>


                            </motion.div>

                            {/* EXPERIENCE CARD */}
                            <motion.div
                                className="bg-white rounded-3xl shadow-xl border border-gray-100 px-8 py-5 mt-8 min-w-[240px]"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >

                                <div className="flex items-center gap-4">

                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
                                        <span className="text-2xl">
                                            🏅
                                        </span>
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h3 className="text-4xl font-bold text-purple-600 leading-none">
                                            11+
                                        </h3>

                                        <p className="text-gray-500 mt-2">
                                            Years of Experience
                                        </p>
                                    </div>

                                </div>

                            </motion.div>

                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Hero