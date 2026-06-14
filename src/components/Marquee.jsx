import './Marquee.css'

export default function Marquee() {
  const items = ['Shopify', 'Shopify Headless', 'Shopify Apps', 'Next.js', 'TypeScript', 'TailwindCSS']
  const row = [...items, ...items, ...items, ...items]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {row.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t} <span className="marquee__star">&lt;/&gt;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
