import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Magnetic from './Magnetic'
import { profile, socials } from '../data'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-line > *', {
        yPercent: 110, duration: 1, stagger: 0.1, ease: 'power4.out',
        scrollTrigger: { trigger: '.contact-cta', start: 'top 80%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const year = new Date().getFullYear()

  return (
    <section className="contact" id="contact" ref={root}>
      <div className="container">
        <span className="eyebrow">Get in touch</span>

        <a className="contact-cta" href={`mailto:${profile.email}`}>
          <h2>
            <span className="contact-line"><span>Let’s build</span></span>
            <span className="contact-line contact-line--accent"><span>something</span></span>
            <span className="contact-line"><span>unforgettable.</span></span>
          </h2>
        </a>

        <div className="contact-foot">
          <Magnetic strength={0.25}>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          </Magnetic>

          <div className="contact-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                {s.label} <span>↗</span>
              </a>
            ))}
          </div>
        </div>

        <footer className="footer">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span>Built with React · GSAP · Three.js</span>
          <button className="footer-top" onClick={() => window.__lenis?.scrollTo(0)}>
            Back to top ↑
          </button>
        </footer>
      </div>
    </section>
  )
}
