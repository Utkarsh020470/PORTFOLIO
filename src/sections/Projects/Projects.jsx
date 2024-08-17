import styles from './ProjectsStyles.module.css';
// import connect4 from '@/assets/connect4game.png';
// import todolist from '@/assets/todolist.png';
// import ecommerce from '@/assets/ecommerce.png';
// import calculator from '@/assets/calculator.png';
import ProjectCard from '@/common/ProjectCard';
import { FaCalculator } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { FaClipboardList } from 'react-icons/fa';
import { IoBagHandle } from 'react-icons/io5';
import { PiArticleMediumFill } from 'react-icons/pi';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          // src={connect4}
          Icon={PiArticleMediumFill}
          link="https://github.com/Utkarsh020470/insights_hub_client"
          h3="Insights Hub"
          p="Blog Website"
        />
        <ProjectCard
          // src={connect4}
          Icon={IoGameController}
          link="https://github.com/Utkarsh020470/CONNECT-4-GAME"
          h3="Connect-4"
          p="Game"
        />
        <ProjectCard
          // src={todolist}
          Icon={FaClipboardList}
          link="https://github.com/Utkarsh020470/TO-DO-LIST"
          h3="To-Do List"
          p="Task Manager"
        />
        <ProjectCard
          // src={ecommerce}
          Icon={IoBagHandle}
          link="https://github.com/Utkarsh020470/E-COMMERCE-CLONE"
          h3="E-Commerce"
          p="Clone Website"
        />
        <ProjectCard
          // src={calculator}
          Icon={FaCalculator}
          link="https://github.com/Utkarsh020470/Calculator"
          h3="Calculator"
          p="Maths Operations"
        />
      </div>
    </section>
  );
}

export default Projects;
