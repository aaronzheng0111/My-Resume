import { projects } from '../data/profile'

function ProjectCard({ project }) {
  const hasLink = Boolean(project.href)

  const inner = (
    <div className="flex items-start gap-4">
      <span className="font-mono text-xs text-orange">{project.id}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-medium text-text">
            {project.name}
          </h3>
          {hasLink && (
            <span className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-orange">
              ↗
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-dim">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-line-soft px-2 py-1 font-mono text-[11px] tracking-wide text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  if (!hasLink) {
    return (
      <div className="block rounded-xl border border-line-soft bg-elevated/20 p-5 sm:p-6">
        {inner}
      </div>
    )
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-line bg-elevated/30 p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:border-orange/50 sm:p-6"
    >
      {inner}
    </a>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
            Featured Projects
          </h2>
          <span className="font-mono text-xs tracking-[0.2em] text-orange uppercase">
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <ul className="flex flex-col gap-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
