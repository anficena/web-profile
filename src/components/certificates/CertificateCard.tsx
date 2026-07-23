import { Eye, ExternalLink, FileBadge } from 'lucide-react'
import type { Certificate } from '../../types'

interface CertificateCardProps {
  certificate: Certificate
  onPreview: (certificate: Certificate) => void
}

const categoryColors: Record<Certificate['category'], string> = {
  frontend: 'bg-sky-50 text-sky-700 ring-sky-200',
  backend: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  devops: 'bg-violet-50 text-violet-700 ring-violet-200',
  'machine-learning': 'bg-amber-50 text-amber-700 ring-amber-200',
}

const categoryLabels: Record<Certificate['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps',
  'machine-learning': 'Machine Learning',
}

export default function CertificateCard({ certificate, onPreview }: CertificateCardProps) {
  return (
    <article className="glass-card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
            <FileBadge size={22} />
          </div>
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${categoryColors[certificate.category]}`}
          >
            {categoryLabels[certificate.category]}
          </span>
        </div>

        <h3 className="mt-4 font-display text-base font-bold leading-snug text-text">
          {certificate.title}
        </h3>
        <p className="mt-2 text-sm text-text-muted">{certificate.issuer}</p>
      </div>

      <div className="flex gap-2 border-t border-border bg-surface-muted/50 p-4">
        <button
          type="button"
          onClick={() => onPreview(certificate)}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          <Eye size={16} />
          Preview
        </button>
        <a
          href={certificate.filePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-text transition-colors hover:border-primary-300 hover:bg-primary-50"
          aria-label={`Buka ${certificate.title} di tab baru`}
        >
          <ExternalLink size={16} />
        </a>
      </div>
    </article>
  )
}
