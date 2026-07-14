import React from 'react';
import './Experience.css';
import edifiedLogo from '../../assets/logos/edified.png';
import moriLogo from '../../assets/logos/moriCat.jpeg';
import lsm from '../../assets/logos/lsm.png'; 
const experiences = [
  {
    id: 1,
    role: "Product Management Intern",
    company: "Edified Projects",
    type: "internship",
    duration: "June 2026 - August 2026",
    logo: edifiedLogo
  },
  {
    id: 2,
    role: "Product Research Intern",
    company: "Mori Cat",
    type: "internship",
    duration: "April 2026 - June 2026",
    logo: moriLogo
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Langara School of Management and Consulting Club",
    type: "part-time",
    duration: "June 2025 - August 2025",
    logo: lsm
  }
];

export default function Experience() {
  return (
    <section className="timeline-section">
    <h1 className='sectionTitle'>Experience</h1>      
      {/* The main vertical track container */}
      <div className="timeline-track">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            
            {/* Left side: Logo that centers exactly on the line */}
            <div className="timeline-icon-wrapper">
              <img src={exp.logo} alt={exp.company} className="timeline-logo" />
            </div>
            
            {/* Right side: The content card */}
            <div className="timeline-card">
              <span className={`badge ${exp.type}`}>{exp.type}</span>
              <h3 className="job-title">
                <strong>{exp.role}</strong> 
                <p className="company-at">{exp.company}</p>
              </h3>
              <p className="job-duration">{exp.duration}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}