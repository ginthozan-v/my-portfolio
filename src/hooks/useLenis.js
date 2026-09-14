import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Wires Lenis smooth scrolling into GSAP's ScrollTrigger ticker so
 * scroll-driven animations stay perfectly in sync with the smoothed scroll.
 */
export default function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    window.__lenis = lenis

    // By the time this hook runs, the preloader has already confirmed fonts
    // and the full page load are done — so this is the first point where
    // every section's real layout (images, the Three.js hero canvas, etc.)
    // is final. ScrollTriggers created earlier (on each section's mount)
    // measured positions against the still-settling layout, so refresh once
    // here to recalculate them all against the real, final page height.
    const refresh = requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      cancelAnimationFrame(refresh)
      gsap.ticker.remove(raf)
      lenis.destroy()
      window.__lenis = null
    }
  }, [enabled])
}
