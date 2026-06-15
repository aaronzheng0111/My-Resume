import { profile } from '../data/profile'

// Resolve the resume against the app base URL so it works on GitHub Pages too.
const resumeHref = import.meta.env.BASE_URL + profile.links.resume

const buttons = [
  { label: 'Resume', href: resumeHref, external: true, download: true },
  { label: 'LinkedIn', href: profile.links.linkedin, external: true },
  { label: 'GitHub', href: profile.links.github, external: true },
  { label: 'Projects', href: '#projects', external: false },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center px-6 sm:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <p className="rise font-mono text-xs tracking-[0.25em] text-muted uppercase">
          <span className="text-orange">~</span> hello, world
          <span className="cursor-blink ml-0.5 text-orange">_</span>
        </p>

        <h1
          className="rise mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl"
          style={{ animationDelay: '60ms' }}
        >
          {profile.name}
        </h1>

        <div
          className="rise mt-5 flex flex-col gap-1.5"
          style={{ animationDelay: '120ms' }}
        >
          <p className="font-display text-lg font-medium text-accent sm:text-xl">
            {profile.role}
          </p>
          <p className="font-mono text-sm tracking-wide text-dim">
            {profile.tagline}
          </p>
        </div>

        <p
          className="rise mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg"
          style={{ animationDelay: '180ms' }}
        >
          {profile.intro}
        </p>

        <div
          className="rise mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: '240ms' }}
        >
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.external ? '_blank' : undefined}
              rel={btn.external ? 'noopener noreferrer' : undefined}
              download={btn.download ? '' : undefined}
              className="group inline-flex items-center gap-2 rounded-lg border border-line bg-elevated/40 px-4 py-2.5 text-sm font-medium text-accent transition-transform duration-200 hover:-translate-y-0.5 hover:border-orange/50 hover:text-text"
            >
              {btn.label}
              <span className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-orange">
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      <a
        href="#focus"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-muted uppercase transition-colors hover:text-dim"
      >
        scroll ↓
      </a>
    </section>
  )
}
