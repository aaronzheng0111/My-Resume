/**
 * Infinite horizontal ticker — edit the text via profile.marquee in profile.js.
 */
export default function ScrollMarquee({ text }) {
  if (!text) return null

  return (
    <div
      className="marquee overflow-hidden border-t border-orange/25 py-3"
      aria-label={text}
    >
      <div className="marquee-track flex w-max">
        <span className="marquee-item shrink-0 px-8 font-mono text-sm tracking-wide text-orange">
          {text}
        </span>
        <span className="marquee-item shrink-0 px-8 font-mono text-sm tracking-wide text-orange" aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  )
}
