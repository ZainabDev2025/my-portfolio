import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <p>
        Built with <span className="heart">♥</span> by <span className="name">Zainab Javaid</span>
        &nbsp;·&nbsp; All rights reserved ©{new Date().getFullYear()}
      </p>
    </footer>
  )
}
