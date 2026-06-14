import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { profile } from '../data'
import './Hero.css'

const Handles = () => (
  <>
    <span className="handle handle--tl" />
    <span className="handle handle--tr" />
    <span className="handle handle--bl" />
    <span className="handle handle--br" />
  </>
)

export default function Hero({ start }) {
  const root = useRef(null)

  // Hold hidden from first mount so nothing flashes behind the loader.
  useEffect(() => {
    const q = root.current.querySelectorAll('.hero-line > *')
    gsap.set(q, { yPercent: 110 })
    gsap.set(root.current.querySelectorAll('.sel, .ghost, .cmd'), { opacity: 0 })
  }, [])

  useEffect(() => {
    if (!start) return
    const r = root.current
    const lines = r.querySelectorAll('.hero-line > *')

    const tl = gsap.timeline({
      defaults: { ease: 'power4.out' },
      // lock the final visible state so nothing can revert it back to hidden
      onComplete: () => {
        gsap.set(lines, { clearProps: 'transform' })
        gsap.set(r.querySelectorAll('.sel, .cmd'), { clearProps: 'opacity' })
      },
    })
    tl.to(r.querySelector('.sel--title'), { opacity: 1, duration: 0.5 }, 0)
      .to(lines, { yPercent: 0, duration: 1.1, stagger: 0.12 }, 0.05)
      .to(r.querySelector('.sel--sub'), { opacity: 1, duration: 0.5 }, '-=0.7')
      .to(r.querySelectorAll('.ghost'), { opacity: 1, duration: 0.6, stagger: 0.15 }, '-=0.5')
      .to(r.querySelector('.cmd'), { opacity: 1, duration: 0.5 }, '-=0.3')

    // gentle drift for the collaborator cursor
    const drift = gsap.to(r.querySelector('.ghost--b'), {
      x: -22, y: 16, duration: 5, ease: 'sine.inOut', repeat: -1, yoyo: true,
    })

    const parallax = gsap.to(r.querySelector('.hero-stage'), {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: r, start: 'top top', end: 'bottom top', scrub: true },
    })

    return () => {
      tl.kill()
      drift.kill()
      parallax.scrollTrigger?.kill()
      parallax.kill()
    }
  }, [start])

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-stage">
        {/* TITLE selection box */}
        <div className="sel sel--title">
          <span className="sel__label">h1 / Heading</span>
          <h1 className="hero-title">
            <span className="hero-line"><span>Frontend</span></span>
            <span className="hero-line hero-line--outline"><span>&amp; Shopify</span></span>
            <span className="hero-line"><span>Developer</span></span>
          </h1>
          <Handles />
        </div>

        {/* SUBTITLE selection box (active / editing) */}
        <div className="sel sel--sub is-active">
          <span className="sel__label sel__label--active">p / Subtitle</span>
          <p className="hero-sub">{profile.tagline}<span className="hero-caret" /></p>
          <Handles />
        </div>
      </div>

      {/* a second collaborator drifting on the canvas */}
      <div className="ghost ghost--b" aria-hidden>
        <Arrow />
        <span className="ghost__tag">{profile.name}</span>
      </div>

      {/* command pill */}
      <a className="cmd" href={`mailto:${profile.email}`}>
        ✦ Ask my work <kbd>⌘K</kbd>
      </a>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M5 3l13 6.5-5.5 1.8L9.5 17 5 3z" fill="currentColor" stroke="#0a0a0a" strokeWidth="1" />
    </svg>
  )
}
