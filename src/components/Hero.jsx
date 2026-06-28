import React, { useEffect, useState } from 'react'
import profileImg from '/profile.jpg'
import './Hero.css'

const roles = ['Full Stack Developer', 'Software Engineer', 'Flutter Developer', 'React Developer', 'Open Source Contributor']
const rolePills = ['Full Stack Developer', 'Software Engineer', 'Flutter & React', 'AI / ML Tools']

export default function Hero() {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = roles[roleIdx]
    const speed = deleting ? 60 : 110
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(role.slice(0, charIdx + 1))
        if (charIdx + 1 === role.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else setCharIdx(c => c + 1)
      } else {
        setText(role.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setRoleIdx(r => (r + 1) % roles.length)
          setCharIdx(0)
        } else setCharIdx(c => c - 1)
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, roleIdx, charIdx, deleting])

  return (
    <section id="hero">
      {/* Profile photo */}
      <div className="hero-photo-wrap">
        <div className="photo-glow" />
        <div className="photo-ring ring1" />
        <div className="photo-ring ring2" />
        <div className="photo-ring ring3" />
        <img src={profileImg} alt="Zainab Javaid" className="hero-photo" />
      </div>

      {/* Role pills */}
      <div className="hero-pills">
        {rolePills.map((pill, i) => (
          <span key={i} className="role-pill" style={{ animationDelay: `${0.4 + i * 0.12}s` }}>
            {pill}
          </span>
        ))}
      </div>

      {/* Main text */}
      <div className="hero-inner">
        <p className="hero-greeting">// welcome to my portfolio</p>
        <h1 className="hero-name">
          <span className="line1">Hello, I'm</span>
          <span className="line2" data-text="Zainab Javaid">Zainab Javaid</span>
        </h1>
        <p className="hero-role">
          <span>{text}</span>
          <span className="cursor">|</span>
        </p>
        <p className="hero-desc">
          Full Stack Developer &amp; Software Engineer based in Pakistan. I craft modern
          web and mobile experiences — from pixel-perfect frontends to robust, scalable backends.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary"><span>View my work</span></a>
          <a href="mailto:zainab.javaid2025@gmail.com" className="btn-outline">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
