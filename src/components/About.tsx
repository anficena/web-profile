import { User } from 'lucide-react'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2 text-primary-600">
            <User size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Tentang Saya</span>
          </div>
          <h2 className="section-title">Profil Singkat</h2>
          <p className="section-subtitle">
            Ringkasan latar belakang profesional dan fokus pengembangan perangkat lunak.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="glass-card p-8 lg:col-span-3">
            <p className="text-base leading-relaxed text-text-muted sm:text-lg">
              {profile.summary}
            </p>
          </div>

          <div className="glass-card p-8 lg:col-span-2">
            <h3 className="font-display text-lg font-bold text-text">Informasi Kontak</h3>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Telepon
                </dt>
                <dd className="mt-1 text-sm font-medium text-text">
                  <a href={`tel:${profile.contact.phone}`} className="hover:text-primary-600">
                    {profile.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Email
                </dt>
                <dd className="mt-1 text-sm font-medium text-text">
                  <a href={`mailto:${profile.contact.email}`} className="hover:text-primary-600">
                    {profile.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  GitHub
                </dt>
                <dd className="mt-1 text-sm font-medium text-text">
                  <a
                    href={profile.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600"
                  >
                    {profile.contact.github}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  LinkedIn
                </dt>
                <dd className="mt-1 text-sm font-medium text-text">
                  <a
                    href={profile.contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600"
                  >
                    {profile.contact.linkedin}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
