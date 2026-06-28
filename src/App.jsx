import React, { useEffect, useRef } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const PARTICLES = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  vx: (Math.random() - 0.5) * 0.08,
  vy: (Math.random() - 0.5) * 0.08,
  r: Math.random() * 1.8 + 0.4,
  alpha: Math.random() * 0.5 + 0.1,
  color: Math.random() < 0.5 ? '168,85,247' : '232,121,249',
}))

export default function App() {
  const canvasRef = useRef(null)
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mx = useRef(0), my = useRef(0), rx = useRef(0), ry = useRef(0)

  useEffect(() => {
    // Progress bar
    const bar = document.getElementById('progress-bar')
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100
      if (bar) bar.style.width = pct + '%'
      // scroll dots
      const secs = ['hero','about','experience','projects','skills','contact']
      const dots = document.querySelectorAll('.scroll-dot')
      const y = window.scrollY + window.innerHeight / 2
      secs.forEach((id, i) => {
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          dots.forEach(d => d.classList.remove('active'))
          if (dots[i]) dots[i].classList.add('active')
        }
      })
      // nav active
      const navLinks = document.querySelectorAll('.nav-links a')
      secs.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) {
          navLinks.forEach(a => { a.style.color = a.getAttribute('href') === '#' + id ? 'var(--p)' : '' })
        }
      })
    }
    window.addEventListener('scroll', onScroll)

    // Cursor
    const onMove = e => {
      mx.current = e.clientX; my.current = e.clientY
      if (cursorRef.current) { cursorRef.current.style.left = e.clientX + 'px'; cursorRef.current.style.top = e.clientY + 'px' }
    }
    document.addEventListener('mousemove', onMove)
    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current) { ringRef.current.style.left = rx.current + 'px'; ringRef.current.style.top = ry.current + 'px' }
      requestAnimationFrame(animRing)
    }
    animRing()

    // Canvas
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H
    const particles = PARTICLES.map(p => ({ ...p, x: p.x / 100, y: Math.random() }))
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.vx / W * 100; p.y += p.vy / H * 100
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`; ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = (particles[i].x - particles[j].x) * W
          const dy = (particles[i].y - particles[j].y) * H
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x * W, particles[i].y * H)
            ctx.lineTo(particles[j].x * W, particles[j].y * H)
            ctx.strokeStyle = `rgba(168,85,247,${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.6; ctx.stroke()
          }
        }
      }
      requestAnimationFrame(draw)
    }
    draw()

    // Reveal observer
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.section-label,.section-title,.tech-chip,.project-card,.skill-group,.contact-link-card').forEach(el => obs.observe(el))

    // Magnetic buttons
    document.querySelectorAll('.btn-primary,.btn-outline').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect()
        const x = (e.clientX - r.left - r.width / 2) * 0.25
        const y = (e.clientY - r.top - r.height / 2) * 0.25
        btn.style.transform = `translate(${x}px,${y}px) translateY(-3px)`
      })
      btn.addEventListener('mouseleave', () => btn.style.transform = '')
    })

    // Scroll hint
    const hint = document.createElement('div')
    hint.innerHTML = '&#8964;'
    hint.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%);color:rgba(168,85,247,.5);font-size:1.8rem;animation:bounceDown 1.5s ease-in-out infinite;z-index:50;pointer-events:none;transition:opacity .4s'
    document.body.appendChild(hint)
    const hideHint = () => { hint.style.opacity = window.scrollY > 100 ? '0' : '1' }
    window.addEventListener('scroll', hideHint)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', hideHint)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMove)
      hint.remove()
    }
  }, [])

  return (
    <>
      <div id="progress-bar" />
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
      <div className="aurora aurora1" /><div className="aurora aurora2" /><div className="aurora aurora3" />
      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      <div className="scroll-indicator">
        {['hero','about','experience','projects','skills','contact'].map((s, i) => (
          <div key={s} className={`scroll-dot${i === 0 ? ' active' : ''}`}
            onClick={() => document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' })} />
        ))}
      </div>

      <NavBar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
