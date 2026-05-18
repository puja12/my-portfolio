import profile from '../assets/profile.png'

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
            <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-sm border border-gray-100 overflow-hidden">

                <div className="grid lg:grid-cols-2 gap-16 items-start px-8 lg:px-14 py-14">

                    {/* LEFT CONTENT */}
                    <div>

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

                            <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-lg shadow-purple-200">
                                View My Work
                                <FaArrowRight />
                            </button>

                            <button className="border border-gray-200 hover:border-purple-300 transition bg-white px-8 py-4 rounded-2xl font-semibold text-gray-700 shadow-sm">
                                Download Resume
                            </button>

                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col xl:flex-row gap-6 text-gray-500 text-sm">

                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-purple-600" />
                                <span>Kalyan, Maharashtra, India</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-purple-600" />
                                <span>+91 9769905263</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MdEmail className="text-purple-600 text-lg" />
                                <span>prabhupuja12@gmail.com</span>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE SECTION */}
                    <div className="flex justify-center lg:justify-end pt-6">

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
                            <div className="relative">

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

                                {/* Online Indicator */}
                                <div className="absolute bottom-10 right-10 w-7 h-7 bg-green-500 border-[5px] border-white rounded-full shadow-lg"></div>

                            </div>

                            {/* EXPERIENCE CARD */}
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-8 py-5 mt-8 min-w-[240px]">

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

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero