import { currentFocus } from '../data/profile'

export default function CurrentFocus() {
  return (
    <section id="focus" className="section-layer-2 px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <div className="glass-warm relative overflow-hidden rounded-xl shadow-sm shadow-black/25">
          {/* Glass inner rim highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/[0.03]" aria-hidden="true" />
          {/* terminal title bar */}
          <div className="flex items-center gap-2 border-b border-orange/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-orange/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-3 font-mono text-xs tracking-wide text-muted">
              focus.sh
            </span>
          </div>

          {/* terminal body */}
          <div className="px-5 py-6 font-mono text-sm leading-relaxed sm:px-6 sm:py-7">
            <p className="text-muted">
              <span className="text-orange">$</span> cat current_focus
            </p>
            <p className="mt-3 text-xs tracking-[0.25em] text-muted uppercase">
              Current Focus
            </p>
            <ul className="mt-4 space-y-2.5">
              {currentFocus.map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-accent">
                  <span className="text-orange">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-muted">
              <span className="text-orange">$</span>
              <span className="cursor-blink ml-1 text-orange">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
