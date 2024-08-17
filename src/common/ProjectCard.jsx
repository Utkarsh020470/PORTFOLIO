import React from 'react';
import styles from '@/sections/Projects/ProjectsStyles.module.css';
import { useTheme } from '@/common/ThemeContext';

function ProjectCard({ Icon, link, h3, p }) {
  const { theme } = useTheme();
  return (
    <section id="projects" className={styles.container}>
      <a href={link} className="project-card">
        <Icon
          style={{
            width: '100px',
            height: '100px',
            // color: theme === 'light' ? 'black' : 'white',
          }}
          className="project-card-icon"
        />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </section>
  );
}

export default ProjectCard;
