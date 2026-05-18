const Navbar = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                        PP
                    </div>

                    <h1 className="font-bold text-lg">
                        Puja P. Patkar
                    </h1>
                </div>

                <nav className="hidden md:flex gap-8 font-medium">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>

                <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg">
                    Contact Me
                </button>
            </div>
        </header>
    )
}

export default Navbar