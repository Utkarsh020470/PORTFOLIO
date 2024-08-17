import styles from './ProjectsStyles.module.css';
import connect4 from '@/assets/connect4game.png';
import todolist from '@/assets/todolist.png';
import ecommerce from '@/assets/ecommerce.png';
import calculator from '@/assets/calculator.png';
import ProjectCard from '@/common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={connect4}
          link="https://github.com/Utkarsh020470/CONNECT-4-GAME"
          h3="Connect-4"
          p="Game"
        />
        <ProjectCard
          src={todolist}
          link="https://github.com/Utkarsh020470/TO-DO-LIST"
          h3="To-Do List"
          p="Task Manager"
        />
        <ProjectCard
          src={ecommerce}
          link="https://github.com/Utkarsh020470/E-COMMERCE-CLONE"
          h3="E-Commerce"
          p="Clone Website"
        />
        <ProjectCard
          src={calculator}
          link="https://github.com/Utkarsh020470/Calculator"
          h3="Calculator"
          p="Maths Operations"
        />
      </div>
    </section>
  );
}

export default Projects;
