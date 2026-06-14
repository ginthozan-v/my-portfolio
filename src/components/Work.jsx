import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data'
import './Work.css'

gsap.registerPlugin(ScrollTrigger)

export default function Work() {
  const root = useRef(null)
  const preview = useRef(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-row', {
        y: 60, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.work-list', start: 'top 80%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const xTo = gsap.quickTo(preview.current, 'x', { duration: 0.5, ease: 'power3' })
    const yTo = gsap.quickTo(preview.current, 'y', { duration: 0.5, ease: 'power3' })
    const move = (e) => { xTo(e.clientX); yTo(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section className="work" id="work" ref={root}>
      <div className="container">
        <div className="work-head">
          <span className="eyebrow">Worked with</span>
          <span className="work-count">{projects.length} projects</span>
        </div>

        <div className="work-list">
          {projects.map((p) => (
            <a
              key={p.id}
              href="#"
              className="work-row"
              data-cursor="hide"
              onMouseEnter={() => setActive(p)}
              onMouseLeave={() => setActive(null)}
              onClick={(e) => e.preventDefault()}
            >
              <span className="work-row__id">{p.id}</span>
              <span className="work-row__title">{p.title}</span>
              <span className="work-row__cat">{p.category}</span>
              <span className="work-row__arrow">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div
        ref={preview}
        className={`work-preview ${active ? 'is-active' : ''}`}
        style={{ '--c': active?.color || 'var(--accent)' }}
      >
        <div className="work-preview__inner">
          <span className="work-preview__title">{active?.title}</span>
          <span className="work-preview__desc">{active?.description}</span>
        </div>
      </div>
    </section>
  )
}
