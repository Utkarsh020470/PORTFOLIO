import styles from './ProjectsStyles.module.css';
import ProjectCard from '@/common/ProjectCard';
import { FaCalculator } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { FaClipboardList } from 'react-icons/fa';
import { IoBagHandle } from 'react-icons/io5';
import { PiArticleMediumFill } from 'react-icons/pi';
import { MdOutlineMarkUnreadChatAlt } from 'react-icons/md';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          Icon={PiArticleMediumFill}
          link="https://github.com/Utkarsh020470/insights_hub_client"
          h3="Insights Hub"
          p="Blog Website"
        />
        <ProjectCard
          Icon={MdOutlineMarkUnreadChatAlt}
          link="https://github.com/Utkarsh020470/chat_space"
          h3="Chat Space"
          p="Chat Website"
        />
        <ProjectCard
          Icon={IoGameController}
          link="https://github.com/Utkarsh020470/CONNECT-4-GAME"
          h3="Connect-4"
          p="Game"
        />
        <ProjectCard
          Icon={FaClipboardList}
          link="https://github.com/Utkarsh020470/TO-DO-LIST"
          h3="To-Do List"
          p="Task Manager"
        />
        <ProjectCard
          Icon={IoBagHandle}
          link="https://github.com/Utkarsh020470/E-COMMERCE-CLONE"
          h3="E-Commerce"
          p="Clone Website"
        />
        <ProjectCard
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
