import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { profile } from '../data'
import './Preloader.css'

const LETTER = profile.name.charAt(0).toUpperCase() || 'G'

export default function Preloader({ onComplete }) {
  const root = useRef(null)
  const wave = useRef(null)
  const surface = useRef(null)
  const gWrap = useRef(null)
  const countRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

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

    // ── Paint-fill loop ──
    const FILL_MS = 4300 // time to fill the letter (slosh + exit add ~0.7s ≈ 5s)
    const startT = performance.now()
    let level = 0        // 0 (empty) → 1 (full)
    let phase = 0
    let slosh = -1       // -1 = filling; >=0 = sloshing frame counter
    let exited = false
    let rafId

    // builds the wavy surface; returns the closed fill path + open surface line
    const build = (lvl, ph, amp) => {
      const W = 300
      const y = 300 * (1 - lvl)
      let line = ''
      for (let x = -20; x <= W + 20; x += 10) {
        const yy = y + Math.sin(ph + x * 0.035) * amp + Math.sin(ph * 0.6 + x * 0.07) * amp * 0.4
        line += (x === -20 ? 'M' : ' L') + ` ${x} ${yy.toFixed(2)}`
      }
      return { fill: `${line} L ${W + 20} 320 L -20 320 Z`, surface: line }
    }

    const frame = () => {
      let amp
      if (slosh < 0) {
        const elapsed = performance.now() - startT
        let raw = elapsed / FILL_MS               // time-driven fill
        if (!loadDone) raw = Math.min(raw, 0.95)   // hold near top if load lags
        raw = Math.min(raw, 1)
        level += (raw - level) * 0.12
        amp = 9 * (1 - level) + 1.5 // calmer as it fills
        if (loadDone && elapsed >= FILL_MS && level >= 0.985) { slosh = 0 } // brim → slosh
      } else {
        // overshoot + damped slosh at the brim
        const decay = Math.exp(-slosh * 0.07)
        level = 1 + 0.06 * Math.sin(slosh * 0.45) * decay
        amp = 16 * decay + 1.5
        slosh += 1
        if (slosh > 52 && !exited) { exit(); return }
      }
      phase += 0.07
      const { fill, surface: surf } = build(level, phase, amp)
      if (wave.current) wave.current.setAttribute('d', fill)
      if (surface.current) surface.current.setAttribute('d', surf)
      if (countRef.current) {
        const pct = Math.max(0, Math.min(100, Math.round(level * 100)))
        countRef.current.textContent = String(pct).padStart(3, '0')
      }
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
      tl.to(gWrap.current, { scale: 1.12, duration: 0.5, ease: 'power2.in' })
        .to(gWrap.current, { opacity: 0, duration: 0.4 }, '-=0.2')
        .to(root.current, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, '-=0.25')
    }

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(safety)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div ref={root} className="preloader">
      <div className="pl-g" ref={gWrap}>
        <svg viewBox="0 0 300 300" className="pl-svg">
          <defs>
            <clipPath id="pl-clip">
              <text x="150" y="150" className="pl-text" textAnchor="middle" dominantBaseline="central">
                {LETTER}
              </text>
            </clipPath>
            <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#eaffb0" />
              <stop offset="45%" stopColor="#d8ff3e" />
              <stop offset="100%" stopColor="#a6d12c" />
            </linearGradient>
          </defs>

          {/* outline */}
          <text x="150" y="150" className="pl-text pl-outline" textAnchor="middle" dominantBaseline="central">
            {LETTER}
          </text>

          {/* rising paint, clipped to the letter */}
          <g clipPath="url(#pl-clip)">
            <path ref={wave} d="M-20 320 L320 320 L-20 320 Z" className="pl-fill" />
            <path ref={surface} d="" className="pl-surface" />
          </g>
        </svg>
      </div>

      <div className="pl-count">
        <span ref={countRef}>000</span><sup>%</sup>
      </div>
    </div>
  )
}
