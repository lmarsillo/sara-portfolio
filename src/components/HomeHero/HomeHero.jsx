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

          <ResumeButton>
            <span>Resume</span>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.0217 19.805 18.5507 20.0007 18 20H6Z' />
            </svg>
          </ResumeButton>
        </div>
        <img className={styles.imgHero} src={img_hero} alt='' />
      </div>
    </section>
  );
};

export default HomeHero;
