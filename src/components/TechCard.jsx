const TechCard = ({ skill }) => {
    const Icon = skill.icon

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 flex flex-col items-center gap-4">
            <Icon className="text-4xl text-purple-600" />

            <p className="font-medium">{skill.name}</p>
        </div>
    )
}

export default TechCard