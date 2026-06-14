import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { certificates } from '../data'
import './Certificates.css'

gsap.registerPlugin(ScrollTrigger)

const Seal = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="cert-seal">
    <path
      d="M20 2l4.3 3.1 5.3-.3 1.6 5 4.3 3.1-1.6 5 1.6 5-4.3 3.1-1.6 5-5.3-.3L20 38l-4.3-3.1-5.3.3-1.6-5L4.5 27l1.6-5-1.6-5 4.3-3.1 1.6-5 5.3.3L20 2z"
      fill="currentColor"
      opacity="0.14"
    />
    <path d="M14 20l4 4 8-8.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Certificates() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cert-card', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.cert-grid', start: 'top 85%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="certs" id="certs" ref={root}>
      <div className="container">
        <div className="certs-head">
          <span className="eyebrow">certifications</span>
          <span className="certs-count">{certificates.length} Shopify certs</span>
        </div>

        <div className="cert-grid">
          {certificates.map((c) => {
            const Tag = c.url && c.url !== '#' ? 'a' : 'div'
            return (
              <Tag
                key={c.title}
                className="cert-card"
                {...(Tag === 'a' ? { href: c.url, target: '_blank', rel: 'noreferrer' } : {})}
              >
                <div className="cert-card__top">
                  {c.badge
                    ? <img className="cert-card__badge" src={c.badge} alt={`${c.title} badge`} loading="lazy" />
                    : <Seal />}
                  <span className="cert-card__verified">● verified</span>
                </div>
                <h3 className="cert-card__title">{c.title}</h3>
                <div className="cert-card__meta">
                  <span>{c.issuer}</span>
                  {c.issued && <span className="cert-card__year">Issued {c.issued}</span>}
                </div>
                {c.expires && <span className="cert-card__code">Valid through {c.expires}</span>}
                <span className="cert-card__cta">View credential ↗</span>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
