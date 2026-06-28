import React, { useState } from 'react'
import './Experience.css'

const experiences = [
  {
    tab: 'COMSATS Uni',
    title: "Bachelor's in Computer Science",
    company: 'COMSATS University Islamabad',
    duration: 'MAR 2020 – FEB 2024',
    points: [
      'Completed Bachelor\'s with focus on Software Engineering, Data Structures, and Algorithms.',
      'Relevant coursework: OOP, DBMS, Web Technologies, Operating Systems, Computer Networks, AI.',
      'Developed a full-stack mobile application using React Native and Firebase for the final year project.',
      'Implemented machine learning models for data analysis; participated in hackathons and programming competitions.',
    ],
  },
  {
    tab: 'Own & Want',
    title: 'Final Year Project',
    company: 'Own & Want App',
    duration: 'MAR 2023 – FEB 2024',
    points: [
      'Developed a community trading mobile app allowing users to list, discover, and trade items locally.',
      'Implemented Google and Facebook OAuth for streamlined user registration.',
      'Added image upload, in-app messaging, and location services for a seamless local experience.',
      'Used Firebase for real-time data sync and secure user data storage.',
    ],
  },
  {
    tab: 'AI LLM Tool',
    title: 'Personal Project',
    company: 'AI LLM Comparison Tool',
    duration: '2024',
    points: [
      'Built a web app to compare responses from GPT-4 and Claude side-by-side.',
      'Designed a classification system to organize user prompts into categories.',
      'Integrated multiple AI APIs with response caching to reduce redundant calls.',
      'Implemented secure API key handling and user data protection throughout.',
    ],
  },
  {
    tab: 'Minerex',
    title: 'Personal Project',
    company: 'Minerex Platform',
    duration: '2024',
    points: [
      'Built a full-stack crypto mining marketplace with Next.js, Express.js, and MongoDB.',
      'Integrated social authentication, share-based purchasing flows, and profit tracking dashboards.',
      'Implemented advanced admin controls for managing mining machine listings and orders.',
      'Deployed at theminerex.com with a fully responsive UI built on Tailwind CSS and ShadCN.',
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section id="experience">
      <p className="section-label">02. experience</p>
      <h2 className="section-title">My <span>Journey</span></h2>

      <div className="exp-wrap reveal">
        <div className="exp-tabs">
          {experiences.map((e, i) => (
            <button
              key={i}
              className={`exp-tab ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {e.tab}
            </button>
          ))}
        </div>

        <div className="exp-panel">
          <div className="exp-header">
            <h3 className="exp-title">
              {experiences[active].title}{' '}
              <span className="exp-company">@ {experiences[active].company}</span>
            </h3>
            <p className="exp-duration">{experiences[active].duration}</p>
          </div>
          <ul className="exp-list">
            {experiences[active].points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
