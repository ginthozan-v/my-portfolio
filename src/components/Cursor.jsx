import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Cursor.css'

export default function Cursor() {
  const wrap = useRef(null)
  const tag = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.documentElement.classList.add('has-cursor')

    const xTo = gsap.quickTo(wrap.current, 'x', { duration: 0.38, ease: 'power3' })
    const yTo = gsap.quickTo(wrap.current, 'y', { duration: 0.38, ease: 'power3' })

    let entered = false
    const popIn = () => {
      entered = true
      gsap.fromTo(
        wrap.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2.2)' }
      )
    }

    const docEl = document.documentElement
    const move = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
      docEl.style.setProperty('--mx', `${e.clientX}px`)
      docEl.style.setProperty('--my', `${e.clientY}px`)
      if (!entered) popIn()
    }
    const leave = () => { entered = false; gsap.to(wrap.current, { opacity: 0, scale: 0.6, duration: 0.25 }) }
    const down = () => gsap.to(tag.current, { scale: 0.85, duration: 0.18, ease: 'power2' })
    const up = () => gsap.to(tag.current, { scale: 1, duration: 0.35, ease: 'back.out(3)' })

    // tag label reacts to interactive targets
    let hidden = false
    const over = (e) => {
      const t = e.target.closest('a, button, [data-cursor]')
      if (!t) return
      const label = t.getAttribute('data-cursor') || (t.tagName === 'A' ? 'Open' : 'Click')
      if (label === 'hide') {
        hidden = true
        gsap.to(wrap.current, { opacity: 0, scale: 0.6, duration: 0.2 })
        return
      }
      tag.current.textContent = label
      wrap.current.classList.add('is-hover')
    }
    const out = (e) => {
      const t = e.target.closest('a, button, [data-cursor]')
      if (!t) return
      // ignore moves between children of the same interactive element
      if (e.relatedTarget && t.contains(e.relatedTarget)) return
      if (hidden) {
        hidden = false
        gsap.to(wrap.current, { opacity: 1, scale: 1, duration: 0.25 })
      }
      tag.current.textContent = 'You'
      wrap.current.classList.remove('is-hover')
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return (
    <div ref={wrap} className="cursor-you" aria-hidden>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="cursor-you__arrow">
        <path d="M5 3l14 7-5.8 1.9L10.2 18 5 3z" fill="#f4f4f0" stroke="#0a0a0a" strokeWidth="1.1" strokeLinejoin="round" />
      </svg>
      <span ref={tag} className="cursor-you__tag">You</span>
    </div>
  )
}
