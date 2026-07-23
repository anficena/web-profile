import type { Certificate, CertificateCategory } from '../types'

const ISSUER = 'Dicoding Academy'

function buildCertificate(
  fileName: string,
  title: string,
  category: Exclude<CertificateCategory, 'all'>,
): Certificate {
  return {
    id: fileName.replace('.pdf', ''),
    title,
    issuer: ISSUER,
    category,
    fileName,
    filePath: `/sertifikat/${fileName}`,
  }
}

export const certificates: Certificate[] = [
  buildCertificate('Dicoding_FE_1.pdf', 'Belajar Dasar Pemrograman Web', 'frontend'),
  buildCertificate('Dicoding_FE_3.pdf', 'Belajar Fundamental Aplikasi Web', 'frontend'),
  buildCertificate('Dicoding_FE_4.pdf', 'Belajar Membuat Front-End Web untuk Pemula', 'frontend'),
  buildCertificate('Dicoding_FE_5.pdf', 'Belajar Dasar CSS', 'frontend'),
  buildCertificate('Dicoding_FE_6.pdf', 'Belajar Responsive Web Design', 'frontend'),
  buildCertificate('Dicoding_FE_7.pdf', 'Front-End Web Developer Expert', 'frontend'),
  buildCertificate('Dicoding_React_1.pdf', 'Belajar Fundamental Aplikasi React', 'frontend'),
  buildCertificate('Dicoding_React_2.pdf', 'React Developer', 'frontend'),
  buildCertificate('Dicoding_BE_1.pdf', 'Belajar Dasar Pemrograman Backend', 'backend'),
  buildCertificate('Dicoding_BE_2.pdf', 'Belajar Membuat RESTful API dengan Node.js', 'backend'),
  buildCertificate('Dicoding_BE_3.pdf', 'Belajar Fundamental Aplikasi Backend', 'backend'),
  buildCertificate('Dicoding_BE_4.pdf', 'Back-End Developer Expert', 'backend'),
  buildCertificate('Dicoding_DevOps_1.pdf', 'Belajar Dasar DevOps', 'devops'),
  buildCertificate('Dicoding_DevOps_2.pdf', 'Belajar Fundamental DevOps', 'devops'),
  buildCertificate('Dicoding_DevOps_3.pdf', 'DevOps Engineer', 'devops'),
  buildCertificate('Dicoding_ML_1.pdf', 'Belajar Machine Learning untuk Pemula', 'machine-learning'),
  buildCertificate('Dicoding_ML_2.pdf', 'Belajar Deep Learning untuk Pemula', 'machine-learning'),
  buildCertificate('Dicoding_ML_3.pdf', 'Machine Learning Developer', 'machine-learning'),
]

export const certificateCategories: {
  id: CertificateCategory
  label: string
}[] = [
  { id: 'all', label: 'Semua' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'devops', label: 'DevOps' },
  { id: 'machine-learning', label: 'Machine Learning' },
]

export function getCertificatesByCategory(category: CertificateCategory): Certificate[] {
  if (category === 'all') return certificates
  return certificates.filter((cert) => cert.category === category)
}

export function getCategoryCount(category: CertificateCategory): number {
  return getCertificatesByCategory(category).length
}
