const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            {/* TITLE */}
            <h3 className="text-[22px] font-bold text-[#111827] mb-4 leading-tight">
                {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-7 text-[15px] mb-6">
                {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2">

                {project.tech.map((item, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg font-medium"
                    >
                        {item}
                    </span>
                ))}

            </div>

        </div>
    )
}

export default ProjectCard