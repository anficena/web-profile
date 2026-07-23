import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-primary-600">
            <Send size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Kontak</span>
          </div>
          <h2 className="section-title">Mari Terhubung</h2>
          <p className="section-subtitle mx-auto">
            Tertarik untuk berkolaborasi atau membahas peluang kerja? Hubungi saya melalui
            saluran berikut.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`mailto:${profile.contact.email}`}
            className="glass-card group flex flex-col items-center p-6 text-center transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
              <Mail size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-text">Email</h3>
            <p className="mt-2 break-all text-sm text-text-muted">{profile.contact.email}</p>
          </a>

          <a
            href={`tel:${profile.contact.phone}`}
            className="glass-card group flex flex-col items-center p-6 text-center transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
              <Phone size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-text">Telepon</h3>
            <p className="mt-2 text-sm text-text-muted">{profile.contact.phone}</p>
          </a>

          <a
            href={profile.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex flex-col items-center p-6 text-center transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
              <Github size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-text">GitHub</h3>
            <p className="mt-2 text-sm text-text-muted">{profile.contact.github}</p>
          </a>

          <a
            href={profile.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card group flex flex-col items-center p-6 text-center transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
              <Linkedin size={22} />
            </div>
            <h3 className="mt-4 font-semibold text-text">LinkedIn</h3>
            <p className="mt-2 text-sm text-text-muted">{profile.contact.linkedin}</p>
          </a>
        </div>
      </div>
    </section>
  )
}
