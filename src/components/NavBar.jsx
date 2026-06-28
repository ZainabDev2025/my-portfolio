import React, { useState, useEffect } from 'react'
import './NavBar.css'

const links = ['about','experience','projects','skills','contact']

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-brand">zainab.dev</a>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l}`} onClick={() => setOpen(false)}>
              <span className="nav-slash">/</span>{l}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:zainab.javaid2025@gmail.com" className="nav-cta btn-outline" style={{ padding: '8px 22px', fontSize: '.85rem' }}>
        Say hello →
      </a>

      <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
