import FadeInElement from '../FadeInElement/FadeInElement';
import styles from './Challenge.module.css';

const Challenge = ({ children }) => {
  return (
    <section className={styles.challenge}>
      <FadeInElement>
        <div className={`${styles.challengeContainer} container mb-80`}>
          <h2 className={styles.challengeHeader}>The Challenge</h2>
          {children}
        </div>
      </FadeInElement>
    </section>
  );
};

export default Challenge;
