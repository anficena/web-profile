import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { profile } from '../../data/profile'

const navLinks = [
  { to: '/#about', label: 'Tentang' },
  { to: '/#experience', label: 'Pengalaman' },
  { to: '/#skills', label: 'Keahlian' },
  { to: '/#education', label: 'Pendidikan' },
  { to: '/sertifikat', label: 'Sertifikat' },
  { to: '/#contact', label: 'Kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const handleNavClick = (hash: string) => {
    if (location.pathname !== '/') return
    const element = document.querySelector(hash)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border bg-surface/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-display text-lg font-bold text-text transition-colors hover:text-primary-600"
        >
          {profile.name.split(' ')[0]}
          <span className="text-primary-600">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.to.startsWith('/#') ? (
              <li key={link.to}>
                <a
                  href={link.to}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault()
                      handleNavClick(link.to.replace('/', ''))
                    }
                  }}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-text-muted hover:bg-primary-50 hover:text-primary-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-text-muted transition-colors hover:bg-primary-50 hover:text-primary-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 border-b border-border bg-surface' : 'max-h-0'
        }`}
      >
        <ul className="section-container flex flex-col gap-1 py-4">
          {navLinks.map((link) =>
            link.to.startsWith('/#') ? (
              <li key={link.to}>
                <a
                  href={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-text-muted hover:bg-primary-50 hover:text-primary-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>
      </div>
    </header>
  )
}
