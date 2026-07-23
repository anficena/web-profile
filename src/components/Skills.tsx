import { Code2 } from 'lucide-react'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2 text-primary-600">
            <Code2 size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">Keahlian</span>
          </div>
          <h2 className="section-title">Skills & Teknologi</h2>
          <p className="section-subtitle">
            Stack teknologi yang digunakan dalam pengembangan aplikasi web dan sistem enterprise.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass-card p-6">
              <h3 className="font-display text-lg font-bold text-text">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-800 transition-colors hover:bg-primary-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
