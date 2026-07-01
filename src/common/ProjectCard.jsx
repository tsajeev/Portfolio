/*import React from 'react'

function ProjectCard({src,width, height,link, title,p}) {
  return (
    <a href={link} target='_blank'>
        <img className='hover' src={src} width={width} height={height} alt={`${title} logo`} />
        <h3>{title}</h3>
        <p>{p}</p>
    </a>
  )
}

export default ProjectCard */

import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, title, description, liveLink, githubLink, tags = [] }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={src} alt={`${title} preview`} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3 className={styles.title}>{title}</h3>
        </div>

        <p className={styles.description}>{description}</p>
        <div className={styles.footerRow}> 
            <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                {tag.toUpperCase()}
                </span>
            ))}
            </div>

            <div className={styles.links}>
                {githubLink && (
                <a href={githubLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                )}
                {liveLink && (
                <a href={liveLink} target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                </a>
                )}
            </div> 
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
