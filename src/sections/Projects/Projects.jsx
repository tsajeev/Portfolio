/*import React from 'react';
import styles from './ProjectsStyles.module.css';
import langaraWebsite from '../../assets/langara-website.png';
import ventureOS from '../../assets/ventureOS.png';
import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
            src={langaraWebsite} width={300} height={200}
            link={"https://www.lsmcc.ca/" }
            title={"Langara Consulting Club Website"}/>
        <ProjectCard 
            src={ventureOS} width={370} height={200}
            link={"https://www.figma.com/make/9VAYx03Tx8X5AIa3ajdTGa/VentureOS?fullscreen=1&t=Wj7i0vM1pGKIbF5Y-1" }
            title={"VentureOS"}
            p="Revamping Overdrive"
        />
       
        </div>
    </section>
  )
}

export default Projects */

import React from 'react';
import styles from './ProjectsStyles.module.css';
import langaraWebsite from '../../assets/langara-website.png';
import ventureOS from '../../assets/ventureOS.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={langaraWebsite} 
          title="Langara Consulting Club Website"
          description="A responsive platform developed to showcase student consulting projects, manage club events, and connect student consultants with local organizations."
          liveLink="https://www.lsmcc.ca/"
          githubLink="https://github.com/your-username/lsmcc"
          tags={["React", "Vite", "CSS Modules"]}
        />
        <ProjectCard 
          src={ventureOS} 
          title="VentureOS"
          description="Revamping Overdrive. Designed an end-to-end operational dashboard streamlining resource allocation and milestone tracking for fast-paced project teams."
          liveLink="https://www.figma.com/make/9VAYx03Tx8X5AIa3ajdTGa/VentureOS?fullscreen=1"
          tags={["Figma", "UI/UX", "Prototyping"]}
        />
      </div>
    </section>
  );
}

export default Projects;