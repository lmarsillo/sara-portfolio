import FadeInElement from '../FadeInElement/FadeInElement';
import styles from './HowMightWe.module.css';

const HowMightWe = ({ intro, statement }) => {
  return (
    <FadeInElement>
      <p className={styles.intro}>{intro}</p>
      <h4 className={styles.statement}>{statement}</h4>
    </FadeInElement>
  );
};

export default HowMightWe;
