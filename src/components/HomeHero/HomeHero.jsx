import img_hero from '../../assets/images/home-hero.png';
import styles from './HomeHero.module.css';
import ResumeButton from '../ResumeButton/ResumeButton';

const HomeHero = () => {
  return (
    <section aria-labelledby='home-hero' className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.textContent}>
          <h1 id='home-hero' className={styles.header}>
            Sara Nenada
          </h1>
          <p className={styles.subtitle}>
            UX designer and instructional designer focused on clarity,
            usability, and solutions shaped by real user insight.
          </p>

          <ResumeButton />
        </div>
        <img className={styles.imgHero} src={img_hero} alt='' />
      </div>
    </section>
  );
};

export default HomeHero;
