import { useEffect, useState } from 'react'
import Magnetic from './Magnetic'
import { profile } from '../data'
import './Navbar.css'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Certs', id: 'certs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [clock, setClock] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Europe/Amsterdam' })
      setClock(t)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -20 })
    else el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#" className="nav__logo" onClick={go('top')}>
        {profile.name}<span>®</span>
      </a>
      <span className="nav__clock">{profile.location} — {clock}</span>
      <nav className="nav__links">
        {links.map((l) => (
          <Magnetic key={l.id} strength={0.3}>
            <a href={`#${l.id}`} onClick={go(l.id)}>{l.label}</a>
          </Magnetic>
        ))}
      </nav>
    </header>
  )
}
