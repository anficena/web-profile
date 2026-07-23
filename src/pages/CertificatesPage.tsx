import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileBadge } from 'lucide-react'
import CertificateCard from '../components/certificates/CertificateCard'
import CertificateFilters from '../components/certificates/CertificateFilters'
import CertificateModal from '../components/certificates/CertificateModal'
import { getCertificatesByCategory } from '../data/certificates'
import type { Certificate, CertificateCategory } from '../types'

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState<CertificateCategory>('all')
  const [previewCertificate, setPreviewCertificate] = useState<Certificate | null>(null)

  const filteredCertificates = useMemo(
    () => getCertificatesByCategory(activeCategory),
    [activeCategory],
  )

  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="section-container">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-primary-600"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>

          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2 text-primary-600">
              <FileBadge size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider">Galeri</span>
            </div>
            <h1 className="section-title">Sertifikat Dicoding Academy</h1>
            <p className="section-subtitle">
              Koleksi sertifikat profesional yang dikelompokkan berdasarkan bidang keahlian.
              Klik Preview untuk melihat sertifikat secara interaktif.
            </p>
          </div>

          <CertificateFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div
            key={activeCategory}
            className="certificate-grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onPreview={setPreviewCertificate}
              />
            ))}
          </div>

          {filteredCertificates.length === 0 && (
            <div className="mt-16 text-center">
              <p className="text-text-muted">Tidak ada sertifikat dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      <CertificateModal
        certificate={previewCertificate}
        onClose={() => setPreviewCertificate(null)}
      />
    </>
  )
}
