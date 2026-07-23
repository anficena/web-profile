import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-text-muted">
          © {year} {profile.name}. Dibangun dengan React, Vite & Tailwind CSS.
        </p>
        <div className="flex gap-4 text-sm">
          <Link
            to="/"
            className="text-text-muted transition-colors hover:text-primary-600"
          >
            Beranda
          </Link>
          <Link
            to="/sertifikat"
            className="text-text-muted transition-colors hover:text-primary-600"
          >
            Sertifikat
          </Link>
          <a
            href={profile.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-primary-600"
          >
            GitHub
          </a>
          <a
            href={profile.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-primary-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
