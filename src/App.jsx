import { useState, useCallback } from 'react'
import useLenis from './hooks/useLenis'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useLenis(loaded)

  const handleLoaded = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Preloader onComplete={handleLoaded} />
      <Cursor />
      <div className="blueprint" aria-hidden />
      <div className="grain" aria-hidden />
      <Navbar />
      <main>
        <Hero start={loaded} />
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Certificates />
        <Contact />
      </main>
    </>
  )
}
