const SectionBadge = ({
    title,
    icon,
}) => {

    return (

        <div className="relative inline-flex rounded-full p-[1px] overflow-hidden">

            {/* MOVING BORDER */}
            <div className="absolute inset-0 rounded-full overflow-hidden">

                <div className="absolute inset-[-250%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_310deg,#60a5fa_330deg,transparent_360deg)]"></div>

            </div>

            {/* INNER CONTENT */}
            <div className="relative z-10 inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl rounded-full px-4 py-2">

                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">

                    {icon}

                </div>

                <span className="text-sm font-semibold text-slate-700">
                    {title}
                </span>

            </div>

        </div>

    )
}

export default SectionBadge