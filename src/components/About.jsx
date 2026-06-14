import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { about, stats } from '../data'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // word-by-word reveal of the big statement
      const words = gsap.utils.toArray('.about-statement .word')
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1, stagger: 0.035, ease: 'none',
          scrollTrigger: { trigger: '.about-statement', start: 'top 80%', end: 'bottom 62%', scrub: true },
        }
      )

      gsap.from('.about-card', {
        y: 50, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-card', start: 'top 85%' },
      })
      gsap.from('.about-card__row', {
        opacity: 0, x: -10, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.about-card', start: 'top 78%' },
      })
      gsap.from('.now-item', {
        opacity: 0, scale: 0.97, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: { trigger: '.about-now', start: 'top 88%' },
      })
      gsap.from('.tool', {
        y: 16, opacity: 0, duration: 0.45, stagger: 0.04, ease: 'power2.out',
        scrollTrigger: { trigger: '.about-toolkit', start: 'top 88%' },
      })

      // count-up stats
      gsap.utils.toArray('.stat').forEach((el) => {
        const valEl = el.querySelector('.stat__value')
        const raw = valEl.dataset.value
        const m = raw.match(/^(\d+)/)
        gsap.from(el, {
          y: 36, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
        })
        if (!m) return
        const end = +m[1]
        const suffix = raw.slice(m[1].length)
        const o = { v: 0 }
        valEl.textContent = '0' + suffix
        gsap.to(o, {
          v: end, duration: 1.6, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
          onUpdate: () => { valEl.textContent = Math.round(o.v) + suffix },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="about" id="about" ref={root}>
      <div className="container">
        <span className="eyebrow">about</span>

        <p className="about-statement">
          {about.statement.split(' ').map((w, i) => (
            <span className="word" key={i}>{w} </span>
          ))}
        </p>

        <div className="about-grid">
          <div className="about-story">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="about-toolkit">
              <h3>// toolkit</h3>
              <ul>
                {about.toolkit.map((t) => (
                  <li className="tool" key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* IDE-style profile card */}
          <aside className="about-card">
            <div className="about-card__bar">
              <span className="dot-r" /><span className="dot-y" /><span className="dot-g" />
              <span className="about-card__file">about.json</span>
            </div>
            <div className="about-card__body">
              <span className="ac-brace">{'{'}</span>
              {about.facts.map((f) => (
                <div className="about-card__row" key={f.k}>
                  <span className="ac-key">"{f.k}"</span>
                  <span className="ac-colon">:</span>
                  <span className="ac-val">{f.v}</span>
                  <span className="ac-comma">,</span>
                </div>
              ))}
              <span className="ac-brace">{'}'}</span>
            </div>
          </aside>
        </div>

        {/* CURRENTLY strip */}
        <h3 className="about-subhead">// currently</h3>
        <div className="about-now">
          {about.now.map((n, i) => (
            <div className="now-item" key={n.label}>
              <span className="now-item__no">0{i + 1}</span>
              <span className="now-item__label"><i className="now-dot" /> {n.label}</span>
              <span className="now-item__value">{n.value}</span>
            </div>
          ))}
        </div>

        <div className="about-stats">
          {stats.map((s, i) => (
            <div className="stat" key={s.label}>
              <span className="stat__no">({String(i + 1).padStart(2, '0')})</span>
              <span className="stat__value" data-value={s.value}>{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
