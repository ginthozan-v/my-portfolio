import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '../data'
import './Experience.css'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-row', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-list', start: 'top 82%' },
      })
      gsap.fromTo('.exp-line', { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.exp-list', start: 'top 70%', end: 'bottom 70%', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="exp" id="experience" ref={root}>
      <div className="container">
        <span className="eyebrow">Career timeline</span>
        <div className="exp-list">
          <span className="exp-line" />
          {experience.map((e, i) => (
            <div className="exp-row" key={i}>
              <div className="exp-row__meta">
                <span className="exp-row__period">{e.period}</span>
                <span className="exp-row__loc">{e.location}</span>
              </div>
              <div className="exp-row__main">
                <h3>{e.role}</h3>
                <span className="exp-row__company">{e.company}</span>
                {e.summary && <p className="exp-row__summary">{e.summary}</p>}

                <ul className="exp-stack">
                  {e.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>

                <ul className="exp-points">
                  {e.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
