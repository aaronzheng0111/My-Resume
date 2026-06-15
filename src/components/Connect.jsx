import { profile } from '../data/profile'

const channels = [
  {
    label: 'LinkedIn',
    value: 'in/your-handle',
    href: profile.links.linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: '@aaronzheng0111',
    href: profile.links.github,
    external: true,
  },
  {
    label: 'Email',
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
    external: false,
  },
]

export default function Connect() {
  return (
    <section id="connect" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
          Let&apos;s Connect
        </h2>

        <div className="mt-8 divide-y divide-line-soft border-y border-line-soft">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between py-5 transition-colors"
            >
              <span className="font-display text-xl font-medium text-text transition-transform duration-200 group-hover:translate-x-1 sm:text-2xl">
                {c.label}
              </span>
              <span className="flex items-center gap-3 font-mono text-sm text-muted transition-colors group-hover:text-dim">
                <span className="hidden sm:inline">{c.value}</span>
                <span className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-orange">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-12 font-mono text-xs tracking-wide text-muted">
          © {new Date().getFullYear()} {profile.name}
          <span className="cursor-blink ml-1 text-orange">_</span>
        </p>
      </div>
    </section>
  )
}
