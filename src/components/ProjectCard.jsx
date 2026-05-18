const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-3">
                {project.title}
            </h3>

            <p className="text-gray-600 leading-7 mb-5">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((item, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 px-3 py-1 rounded-lg text-sm"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard