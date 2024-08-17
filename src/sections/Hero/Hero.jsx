import styles from './HeroStyles.module.css';
import heroImg from '@/assets/Utkarsh_DP.png';
import sun from '@/assets/sun.svg';
import moon from '@/assets/moon.svg';
import CV from '@/assets/Utkarsh Saxena Resume SD.pdf';
import { useTheme } from '@/common/ThemeContext';
import { SiLeetcode } from 'react-icons/si';
import { IoLogoGithub } from 'react-icons/io';
import { ImLinkedin } from 'react-icons/im';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Utkarsh Saxena"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Utkarsh
          <br />
          Saxena
        </h1>
        <h2>Software engineer & Data Analyst</h2>
        <span>
          <a href="https://leetcode.com/u/Utkarsh_Saxena_28/" target="_blank">
            <SiLeetcode className="hero-icon" />
          </a>
          <a href="https://github.com/Utkarsh020470" target="_blank">
            <IoLogoGithub className="hero-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/utkarsh-2807-saxena/"
            target="_blank"
          >
            <ImLinkedin className="hero-icon" />
          </a>
        </span>
        <p className={styles.description}>
          As a motivated undergraduate with a strong academic foundation, I am
          eager to apply my knowledge in real-world contexts. I seek
          opportunities to contribute effectively, gain insights, and
          demonstrate adaptability. Dedicated to growth, I am excited to immerse
          myself in a dynamic job environment that fosters development and
          achievement.
        </p>
        <a href={CV}>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
