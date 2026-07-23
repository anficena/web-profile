import { useState } from 'react'
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react'
import { experiences } from '../data/experience'

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="bg-surface py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2 text-primary-600">
            <Briefcase size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Pengalaman</span>
          </div>
          <h2 className="section-title">Riwayat Pekerjaan</h2>
          <p className="section-subtitle">
            Perjalanan karier dalam pengembangan solusi perangkat lunak enterprise dan digital.
          </p>
        </div>

        <div className="relative space-y-6">
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-border md:block" />

          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index
            const hasProjects = exp.projects && exp.projects.length > 0

            return (
              <article key={`${exp.company}-${exp.period}`} className="relative md:pl-12">
                <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border-2 border-primary-200 bg-surface md:flex">
                  <div className="h-3 w-3 rounded-full bg-primary-500" />
                </div>

                <div className="glass-card overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 p-6 text-left transition-colors hover:bg-primary-50/50"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                  >
                    <div>
                      <h3 className="font-display text-lg font-bold text-text">{exp.company}</h3>
                      <p className="mt-1 text-sm font-medium text-primary-600">
                        {exp.role ?? 'Developer'} · {exp.period}
                      </p>
                      {exp.description && (
                        <p className="mt-3 text-sm leading-relaxed text-text-muted">
                          {exp.description}
                        </p>
                      )}
                    </div>
                    {hasProjects && (
                      <span className="mt-1 shrink-0 text-text-muted">
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    )}
                  </button>

                  {hasProjects && (
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 border-t border-border px-6 pb-6 pt-4">
                          {exp.projects!.map((project) => (
                            <div
                              key={project.title}
                              className="rounded-xl border border-border bg-surface-muted p-4"
                            >
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="font-semibold text-text">{project.title}</h4>
                                {project.role && (
                                  <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700">
                                    {project.role}
                                  </span>
                                )}
                              </div>
                              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                                {project.description}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded-md bg-white px-2 py-1 text-xs font-medium text-text-muted ring-1 ring-border"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
