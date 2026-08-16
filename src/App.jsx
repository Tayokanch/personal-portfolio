import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './pages/Navbar'
import Skills from './pages/Skills'

const About = lazy(() => import('./pages/About'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Projects = lazy(() => import('./pages/Projects'))

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
    <div className="portfolio-shell min-h-screen">
      <Navbar />
      <RouteScrollManager />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<main><HomePage /><Skills /></main>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
    </div>
  );
}



export default App;
