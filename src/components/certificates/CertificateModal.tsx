import { useEffect } from 'react'
import { X, ExternalLink, Download } from 'lucide-react'
import type { Certificate } from '../../types'

interface CertificateModalProps {
  certificate: Certificate | null
  onClose: () => void
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (certificate) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [certificate, onClose])

  if (!certificate) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Tutup modal"
      />

      <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-4 sm:px-6">
          <div className="min-w-0">
            <h2 id="certificate-modal-title" className="truncate font-display text-lg font-bold text-text">
              {certificate.title}
            </h2>
            <p className="text-sm text-text-muted">{certificate.issuer}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={certificate.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-text transition-colors hover:bg-primary-50 sm:inline-flex"
            >
              <ExternalLink size={16} />
              Tab Baru
            </a>
            <a
              href={certificate.filePath}
              download={certificate.fileName}
              className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-text transition-colors hover:bg-primary-50 sm:inline-flex"
            >
              <Download size={16} />
              Unduh
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-text-muted transition-colors hover:bg-primary-50 hover:text-primary-700"
              aria-label="Tutup"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden bg-slate-100">
          <iframe
            src={`${certificate.filePath}#toolbar=1&navpanes=0`}
            title={certificate.title}
            className="h-[70vh] w-full"
          />
        </div>
      </div>
    </div>
  )
}
