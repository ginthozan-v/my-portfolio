import { useRef } from 'react'
import gsap from 'gsap'

/** Wraps any element to give it a magnetic pull toward the cursor. */
export default function Magnetic({ children, strength = 0.4 }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - (left + width / 2)) * strength
    const y = (e.clientY - (top + height / 2)) * strength
    gsap.to(el, { x, y, duration: 0.6, ease: 'power3.out' })
  }
  const onLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ display: 'inline-block', willChange: 'transform' }}
    >
      {children}
    </span>
  )
}
