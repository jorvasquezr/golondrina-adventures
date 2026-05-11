import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Navbar.module.css'

export default function Navbar({ theme, onToggleTheme }) {
  const { t, i18n } = useTranslation('common')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  const navLinks = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/blog', label: t('nav.blog') },
    { to: '/tours', label: t('nav.tours') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ]

  function toggleMenu() {
    setMenuOpen(o => !o)
  }

  function closeMenu() {
    setMenuOpen(false)
    toggleRef.current?.focus()
  }

  useEffect(() => {
    if (!menuOpen) return
    function handleKey(e) {
      if (e.key === 'Escape') closeMenu()
    }
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  function toggleLang() {
    i18n.changeLanguage(i18n.language.startsWith('es') ? 'en' : 'es')
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation" ref={menuRef}>
        <Link to="/" className={styles.logo} aria-label="Golondrina Adventures — home">
          <span className={styles.logoIcon} aria-hidden="true">🐦</span>
          <span className={styles.logoText}>Golondrina</span>
        </Link>

        {/* Desktop nav */}
        <ul className={styles.links} role="list">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.linkActive : ''}`
                }
                aria-current={undefined}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button
            className={styles.iconBtn}
            onClick={toggleLang}
            aria-label={`Switch to ${i18n.language.startsWith('es') ? 'English' : 'Español'}`}
          >
            {i18n.language.startsWith('es') ? 'EN' : 'ES'}
          </button>
          <button
            className={styles.iconBtn}
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            ref={toggleRef}
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul
            id="mobile-menu"
            className={styles.mobileMenu}
            role="list"
          >
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
