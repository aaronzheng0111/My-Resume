import { profile } from '../data/profile'

// Resolve the resume against the app base URL so it works on GitHub Pages too.
const resumeHref = import.meta.env.BASE_URL + profile.links.resume

/* Google Material-style icons — 18px, geometric, minimal */
const icons = {
  Resume: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  LinkedIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  GitHub: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Projects: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
}

const buttons = [
  { label: 'Resume', href: resumeHref, external: true, download: true },
  { label: 'LinkedIn', href: profile.links.linkedin, external: true },
  { label: 'GitHub', href: profile.links.github, external: true },
  { label: 'Projects', href: '#projects', external: false },
]

export default function Hero() {
  return (
    <section className="section-layer-1 relative flex min-h-[100svh] flex-col justify-center px-6 sm:px-8">
      {/* Bright warm glow behind the terminal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217,119,87,0.12) 0%, rgba(217,119,87,0.04) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="mx-auto w-full max-w-3xl">
        {/* ── Terminal window ── */}
        <div className="rise relative overflow-hidden rounded-xl border border-line/60 bg-[#17171f] shadow-lg shadow-black/30">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 border-b border-line/40 bg-[#14141b] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11px] tracking-wide text-muted">
              ~/welcome.sh
            </span>
          </div>

          {/* Terminal body */}
          <div className="px-5 py-8 sm:px-8 sm:py-10">
            <p className="font-mono text-xs tracking-[0.25em] text-muted uppercase">
              <span className="text-orange">~</span> hello, world
              <span className="cursor-blink ml-0.5 text-orange">_</span>
            </p>

            <h1 className="mt-6 font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl">
              {profile.name}
            </h1>

            <div className="mt-5 flex flex-col gap-1.5">
              <p className="font-sans text-lg font-medium text-accent sm:text-xl">
                {profile.role}
              </p>
              <p className="font-mono text-sm tracking-wide text-dim">
                {profile.tagline}
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target={btn.external ? '_blank' : undefined}
                  rel={btn.external ? 'noopener noreferrer' : undefined}
                  download={btn.download ? '' : undefined}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-line/60 bg-[#1f1f29] px-5 py-3 text-sm font-medium text-accent transition-all duration-200 hover:-translate-y-0.5 hover:border-orange/40 hover:bg-[#262631] hover:text-text"
                >
                  <span className="text-muted transition-colors duration-200 group-hover:text-orange">
                    {icons[btn.label]}
                  </span>
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
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
