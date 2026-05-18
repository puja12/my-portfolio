import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#F5F7FF] min-h-screen overflow-x-hidden pt-24">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills / Tech Stack */}
        <Skills />

        {/* Featured Projects */}
        <Projects />

        {/* Professional Experience */}
        <Experience />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default App