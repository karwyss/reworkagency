import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Start' },
    { to: '/oferta', label: 'Oferta' },
    { to: '/blog', label: 'Blog' },
    { to: '/regulamin', label: 'Regulamin' },
  ]

  return (
    <header style={styles.header}>
      <nav style={styles.nav} aria-label="Nawigacja główna">
        <NavLink to="/" style={styles.logo} aria-label="iFitt - strona główna">
          iFITT
        </NavLink>

        <div style={styles.navLinks} className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                ...styles.navLink,
                ...(isActive ? styles.navLinkActive : {}),
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          className="mobile-toggle"
          style={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-nav" style={styles.mobileMenu}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                ...styles.mobileNavLink,
                ...(isActive ? styles.navLinkActive : {}),
              })}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: 'rgba(10, 10, 10, 0.95)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#f97316',
    textDecoration: 'none',
    letterSpacing: '0.1em',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '0.875rem',
    color: '#ffffff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    position: 'relative',
  },
  navLinkActive: {
    color: '#f97316',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    background: '#1a1a1a',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  mobileNavLink: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '0.875rem',
    color: '#ffffff',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '0.75rem 0',
  },
}

export default Header