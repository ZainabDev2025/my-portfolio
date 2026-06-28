import React from 'react'
import './About.css'

const tech = [
  'JavaScript / TypeScript',
  'Next.js / React.js',
  'Flutter / Dart',
  'Node.js / Express',
  'Firebase / MongoDB',
  'OpenAI / LangChain',
]

export default function About() {
  return (
    <section id="about">
      <p className="section-label">01. about</p>
      <h2 className="section-title">About <span>Me</span></h2>

      <div className="about-text reveal-left">
        <p>
          I am a <b>Full Stack Developer</b> and <b>Software Engineer</b> based in
          Pakistan, with a Bachelor's in Computer Science from{' '}
          <a href="https://www.comsats.edu.pk/" target="_blank" rel="noreferrer">
            COMSATS University Islamabad
          </a>
          . I build modern web and mobile experiences focused on performance,
          usability, and clean architecture.
        </p>
        <p>
          Outside coding I explore AI tooling, contribute to open source, and enjoy
          learning at the intersection of technology and real-world problem solving.
        </p>
        <p className="tech-label">// technologies I work with</p>
        <div className="tech-grid">
          {tech.map((t, i) => (
            <div
              key={i}
              className="tech-chip"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
