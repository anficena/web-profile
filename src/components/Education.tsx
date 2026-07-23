import { GraduationCap } from 'lucide-react'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="bg-surface py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2 text-primary-600">
            <GraduationCap size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Pendidikan</span>
          </div>
          <h2 className="section-title">Latar Belakang Pendidikan</h2>
          <p className="section-subtitle">
            Riwayat pendidikan formal dan non-formal yang membentuk fondasi keahlian teknis.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <article key={`${item.institution}-${item.period}`} className="glass-card p-6">
              <p className="text-sm font-semibold text-primary-600">{item.period}</p>
              <h3 className="mt-2 font-display text-lg font-bold text-text">
                {item.institution}
              </h3>
              {item.degree && (
                <p className="mt-2 text-sm font-medium text-text">{item.degree}</p>
              )}
              {item.concentration && (
                <p className="mt-1 text-sm text-text-muted">{item.concentration}</p>
              )}
              {item.gpa && (
                <p className="mt-3 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                  GPA: {item.gpa}
                </p>
              )}
              {item.note && (
                <p className="mt-2 text-sm italic text-text-muted">{item.note}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
