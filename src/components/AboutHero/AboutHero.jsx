import img_email from '../../assets/icons/email.svg';
import img_linkedin from '../../assets/icons/linkedin-filled.svg';
import img_hero from '../../assets/images/aboutMe/aboutme-hero.png';
import styles from './AboutHero.module.css';

const Hero = () => {
  return (
    <section aria-labelledby='about-hero' className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.textContainer}>
          <h2 id='about-hero' className={styles.header}>
            Making Complex Feel Simple
          </h2>
          <p className={styles.intro}>
            Hi, I'm Sara, a UX designer, instructional designer, and data-loving
            problem-solver with a background in biomedical sciences. I've always
            been obsessed with understanding how things work, why people behave
            the way they do, and how smart systems can make life easier. That
            curiosity led me from science to eLearning, and eventually into UX,
            where I get to blend research, creativity, and analytical thinking
            every day. I love turning messy information into intuitive
            experiences, collaborating with people to uncover real needs, and
            building solutions that feel clean, intentional, and human.
            <br />
            <br />
            Are you interested in collaborating on a project? Let's connect!
          </p>
          <div className={styles.connects}>
            <div className={styles.connectItem}>
              <img src={img_email} alt='' />
              <p className={styles.connectText}>saranenada@gmail.com</p>
            </div>
            <div className={styles.connectItem}>
              <img src={img_linkedin} alt='' />
              <a
                href='https://linkedin.com/in/sara-nenada/'
                className={styles.connectText}
              >
                linkedin.com/in/sara-nenada/
              </a>
            </div>
          </div>
        </div>

        <img
          className={styles.heroImage}
          src={img_hero}
          alt='Picture of Sara Nenada and Phineas the Cat'
        />
      </div>
    </section>
  );
};

export default Hero;
