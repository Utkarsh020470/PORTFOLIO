import React from 'react';
import styles from '@/sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <section id="projects" className={styles.container}>
      <a href={link} className="project-card">
        <img className="project-card-img" src={src} alt={`${h3} Logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </section>
  );
}

export default ProjectCard;
