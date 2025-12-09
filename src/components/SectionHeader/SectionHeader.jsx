import FadeInElement from '../FadeInElement/FadeInElement';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ header, children }) => {
  return (
    <section className={`container ${styles.sectionContainer}`}>
      <FadeInElement>
        <h2 className={styles.header}>{header}</h2>
        <hr className='headerLine' />
        {children}
      </FadeInElement>
    </section>
  );
};

export default SectionHeader;
