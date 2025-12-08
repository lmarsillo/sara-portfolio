import FadeInElement from '../FadeInElement/FadeInElement';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ header, children }) => {
  return (
    <section className='container px-48 mb-80'>
      <FadeInElement>
        <h2 className={styles.header}>{header}</h2>
        <hr className='headerLine' />
        {children}
      </FadeInElement>
    </section>
  );
};

export default SectionHeader;
