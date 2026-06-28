import React from 'react'
import './Projects.css'

const projects = [
  {
    title: 'The Minerex',
    desc: 'A full-stack crypto mining marketplace with social auth, share-based purchases, profit tracking dashboards, and advanced admin controls.',
    tech: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/ZainabDev2025',
    live: 'https://theminerex.com',
  },
  {
    title: 'Omniplex Claude Integration',
    desc: 'Platform comparing GPT-4 and Claude side-by-side with web search, weather, and stock data integrations built on Next.js.',
    tech: ['Next.js', 'OpenAI API', 'Claude API'],
    github: 'https://github.com/ZainabDev2025',
    live: 'https://omniplex.ai/',
  },
  {
    title: 'Real-time Stock Analysis',
    desc: 'Stock data analysis platform with AWS S3 integration, rich data visualization charts, and Keras-powered price predictions.',
    tech: ['React.js', 'Python', 'AWS S3', 'Keras'],
    github: 'https://github.com/ZainabDev2025',
  },
  {
    title: 'Own & Want',
    desc: 'Community trading mobile app with Google/Facebook auth, real-time Firebase sync, in-app messaging and location-based discovery.',
    tech: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/ZainabDev2025',
  },
  {
    title: 'AI LLM Comparison Tool',
    desc: 'Web app to compare LLM responses with prompt categorization, response caching, and secure API key handling.',
    tech: ['Next.js', 'OpenAI', 'Anthropic'],
    github: 'https://github.com/ZainabDev2025',
  },
  {
    title: 'Zainab Portfolio',
    desc: 'This portfolio — built with Vite + React, animated particle canvas, custom cursor, 3D tilt cards, and scroll reveals.',
    tech: ['React.js', 'Vite', 'CSS Animations'],
    github: 'https://github.com/ZainabDev2025',
  },
]

export default function Projects() {
  const handleCardMove = (e, card) => {
    const r = card.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const cx = r.width / 2, cy = r.height / 2
    card.style.transform = `perspective(800px) rotateX(${(y - cy) / cy * -7}deg) rotateY(${(x - cx) / cx * 7}deg) translateY(-8px)`
    card.style.setProperty('--mx', (x / r.width * 100) + '%')
    card.style.setProperty('--my', (y / r.height * 100) + '%')
  }
  const handleCardLeave = (card) => {
    card.style.transform = ''
  }

  return (
    <section id="projects">
      <p className="section-label">03. projects</p>
      <h2 className="section-title">What I've <span>Built</span></h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-card"
            style={{ transitionDelay: `${i * 0.08}s` }}
            onMouseMove={e => handleCardMove(e, e.currentTarget)}
            onMouseLeave={e => handleCardLeave(e.currentTarget)}
          >
            {/* glow layer */}
            <div className="card-glow" />

            <div className="card-top">
              <span className="folder-icon">📁</span>
              <div className="card-links">
                <a href={p.github} target="_blank" rel="noreferrer" title="GitHub">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" title="Live">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <h3 className="card-title">{p.title}</h3>
            <p className="card-desc">{p.desc}</p>
            <div className="card-tech">
              {p.tech.map((t, j) => <span key={j}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <a href="https://github.com/ZainabDev2025" target="_blank" rel="noreferrer" className="btn-outline">
          View all on GitHub →
        </a>
      </div>
    </section>
  )
}
