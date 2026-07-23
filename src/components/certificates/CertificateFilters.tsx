import type { CertificateCategory } from '../../types'
import { certificateCategories, getCategoryCount } from '../../data/certificates'

interface CertificateFiltersProps {
  activeCategory: CertificateCategory
  onCategoryChange: (category: CertificateCategory) => void
}

export default function CertificateFilters({
  activeCategory,
  onCategoryChange,
}: CertificateFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {certificateCategories.map((category) => {
        const isActive = activeCategory === category.id
        const count = getCategoryCount(category.id)

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onCategoryChange(category.id)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? 'bg-primary-600 text-white shadow-md shadow-primary-600/25'
                : 'border border-border bg-surface text-text-muted hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700'
            }`}
          >
            {category.label}
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                isActive ? 'bg-white/20 text-white' : 'bg-surface-muted text-text-muted'
              }`}
            >
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
