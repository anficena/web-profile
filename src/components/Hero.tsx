import { ArrowDown, Download, Mail, Linkedin, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary-300/30 blur-3xl" />
      </div>

      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            Portfolio & Curriculum Vitae
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-text sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl font-semibold text-primary-600 sm:text-2xl">
            {profile.title}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-xl sm:w-auto"
            >
              <Mail size={18} />
              Hubungi Saya
            </a>
            <a
              href={profile.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-all hover:border-primary-300 hover:bg-primary-50 sm:w-auto"
            >
              <Download size={18} />
              Unduh CV
            </a>
            <Link
              to="/sertifikat"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-all hover:border-primary-300 hover:bg-primary-50 sm:w-auto"
            >
              Lihat Sertifikat
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary-600"
            >
              <Github size={18} />
              GitHub
            </a>
            <span className="hidden text-border sm:inline">|</span>
            <a
              href={profile.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary-600"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <span className="hidden text-border sm:inline">|</span>
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-sm text-text-muted transition-colors hover:text-primary-600"
            >
              {profile.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="animate-bounce text-text-muted transition-colors hover:text-primary-600"
            aria-label="Scroll ke bagian tentang"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
