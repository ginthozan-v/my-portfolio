import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { profile } from '../data'
import './Preloader.css'

const NAME = profile.fullName || profile.name || 'Ginthozan Varnakulasingam'

export default function Preloader({ onComplete }) {
  const root = useRef(null)
  const nameRef = useRef(null)
  const progressRef = useRef(null)
  const barRef = useRef(null)
  const countRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    // binary decode reveal — each letter flickers through 0s and 1s
    // before locking to its real character
    const chars = NAME.split('')
    const POOL = '01'
    const STAGGER_MS = 30
    const SCRAMBLE_MS = 460
    const letters = nameRef.current?.querySelectorAll('.pl-char') ?? []
    const settleAt = (chars.length - 1) * STAGGER_MS + SCRAMBLE_MS
    const scrambleStart = performance.now()
    let scrambleRaf

    const scrambleTick = () => {
      const now = performance.now() - scrambleStart
      letters.forEach((el, i) => {
        if (chars[i] === ' ') { el.style.opacity = 1; return }
        const t = now - i * STAGGER_MS
        if (t <= 0) {
          el.style.opacity = 0
        } else if (t < SCRAMBLE_MS) {
          el.style.opacity = 1
          el.textContent = POOL[Math.floor(Math.random() * POOL.length)]
        } else {
          el.style.opacity = 1
          el.textContent = chars[i]
        }
      })
      if (now < settleAt) scrambleRaf = requestAnimationFrame(scrambleTick)
    }
    scrambleRaf = requestAnimationFrame(scrambleTick)

    // ── Real load signals ──
    const ready = Promise.all([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((res) => {
        if (document.readyState === 'complete') res()
        else window.addEventListener('load', res, { once: true })
      }),
    ])
    let loadDone = false
    ready.then(() => { loadDone = true })
    const safety = setTimeout(() => { loadDone = true }, 6000)

    // ── progress loop ──
    const FILL_MS = 2200
    const startT = performance.now()
    let level = 0
    let exited = false
    let rafId

    const frame = () => {
      const elapsed = performance.now() - startT
      let raw = elapsed / FILL_MS
      if (!loadDone) raw = Math.min(raw, 0.94)
      raw = Math.min(raw, 1)
      level += (raw - level) * 0.14

      if (barRef.current) barRef.current.style.transform = `scaleX(${level})`
      if (countRef.current) {
        const pct = Math.max(0, Math.min(100, Math.round(level * 100)))
        countRef.current.textContent = String(pct).padStart(3, '0')
      }

      if (loadDone && level >= 0.995 && !exited) { exit(); return }
      rafId = requestAnimationFrame(frame)
    }
    rafId = requestAnimationFrame(frame)

    function exit() {
      exited = true
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = ''
          onComplete?.()
        },
      })
      tl.to([nameRef.current, progressRef.current], {
        opacity: 0,
        y: -14,
        duration: 0.4,
        ease: 'power2.in',
      })
        .to(root.current, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, '-=0.1')
    }

    return () => {
      cancelAnimationFrame(rafId)
      cancelAnimationFrame(scrambleRaf)
      clearTimeout(safety)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div ref={root} className="preloader">
      <div className="pl-name" ref={nameRef} aria-label={NAME}>
        {NAME.split('').map((ch, i) => (
          <span className="pl-char" key={i}>{ch === ' ' ? ' ' : ch}</span>
        ))}
      </div>

      <div className="pl-progress" ref={progressRef}>
        <span className="pl-track">
          <span className="pl-track__fill" ref={barRef} />
        </span>
        <span className="pl-progress__count">
          <span ref={countRef}>000</span><sup>%</sup>
        </span>
      </div>
    </div>
  )
}
