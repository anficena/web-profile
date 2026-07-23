import { Award, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { awards, onlineCourses } from '../data/awards'

export default function Awards() {
  return (
    <section id="awards" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2 text-primary-600">
            <Award size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Penghargaan & Kursus
            </span>
          </div>
          <h2 className="section-title">Penghargaan & Pembelajaran</h2>
          <p className="section-subtitle">
            Sertifikasi profesional, penghargaan kompetisi, dan kursus online yang sedang diikuti.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-6">
            <h3 className="font-display text-lg font-bold text-text">Penghargaan & Sertifikat</h3>
            <ul className="mt-4 space-y-3">
              {awards.map((award) => (
                <li
                  key={award.title}
                  className="flex items-start gap-3 rounded-lg border border-border bg-surface-muted p-3"
                >
                  <Award size={18} className="mt-0.5 shrink-0 text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-text">{award.title}</p>
                    <p className="text-xs text-text-muted">
                      {award.issuer}
                      {award.year && ` · ${award.year}`}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/sertifikat"
              className="mt-6 inline-flex text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              Lihat galeri sertifikat Dicoding →
            </Link>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-primary-500" />
              <h3 className="font-display text-lg font-bold text-text">Online Course</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {onlineCourses.map((course) => (
                <li
                  key={course.title}
                  className="rounded-lg border border-border bg-surface-muted p-3"
                >
                  <p className="text-sm font-medium text-text">{course.title}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <p className="text-xs text-text-muted">{course.provider}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        course.status === 'in-progress'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      {course.status === 'in-progress' ? 'In Progress' : 'Completed'}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
