import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import HomePage from './pages/HomePage'
import Navbar from './pages/Navbar'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function RouteScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const sectionId = location.state?.scrollTo

    if (sectionId) {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.state])

  return null
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <RouteScrollManager />
      <Routes>
        <Route path="/" element={<main><HomePage /><Skills /></main>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}



export default App;
