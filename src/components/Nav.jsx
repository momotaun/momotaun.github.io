import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  [
    'text-label-mono font-label-mono transition-all pb-1',
    isActive
      ? 'text-primary border-b-2 border-primary font-bold'
      : 'text-on-surface-variant font-medium hover:text-primary',
  ].join(' ')

export default function Nav({ onBookMeeting }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter py-4 bg-surface/80 backdrop-blur-md border-b border-outline-variant transition-all duration-300">
      <div className="flex items-center gap-4">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/images/nav-logo.jpg"
            alt="Moeketsi Motaung Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="hidden sm:inline text-headline-md font-headline-md font-bold text-primary">
            Moeketsi Motaung
          </span>
        </NavLink>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={onBookMeeting}
          className="inline-flex items-center justify-center border border-primary text-primary px-6 py-2 rounded-lg text-label-mono font-label-mono font-semibold hover:bg-primary/10 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Book a Meeting
        </button>
        <NavLink
          to="/contact"
          className="inline-flex items-center justify-center bg-primary text-on-primary px-6 py-2 rounded-lg text-label-mono font-label-mono font-semibold hover:bg-primary/90 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Get in Touch
        </NavLink>
      </div>

      <button
        aria-label="Open Menu"
        className="md:hidden p-2 text-on-surface rounded-full hover:bg-surface-variant transition-colors"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant shadow-lg flex flex-col p-gutter gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false)
              onBookMeeting()
            }}
            className="inline-flex items-center justify-center border border-primary text-primary px-6 py-2 rounded-lg text-label-mono font-label-mono font-semibold"
          >
            Book a Meeting
          </button>
        </div>
      )}
    </nav>
  )
}
