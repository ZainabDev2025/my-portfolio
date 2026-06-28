import React from 'react'
import './Skills.css'

const skillGroups = [
  {
    label: '// languages',
    items: ['JavaScript', 'TypeScript', 'Dart', 'Python'],
  },
  {
    label: '// frontend',
    items: ['Next.js', 'React.js', 'HTML / CSS', 'SASS', 'Redux', 'Tailwind CSS'],
  },
  {
    label: '// mobile & backend',
    items: ['Flutter', 'GetX', 'Node.js', 'Express.js', 'Firebase', 'MongoDB'],
  },
  {
    label: '// ai / other',
    items: ['OpenAI', 'LangChain', 'Claude API', 'Hugging Face', 'PyTorch', 'AWS S3'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-label">04. skills</p>
      <h2 className="section-title">Tech <span>Stack</span></h2>

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="skill-group"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <p className="skill-group-label">{group.label}</p>
            <div className="skill-items">
              {group.items.map((item, j) => (
                <span
                  key={j}
                  className="skill-item"
                  style={{ animationDelay: `${j * 0.06}s` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
