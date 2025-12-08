import resume from '../../assets/sara-nenada-resume.pdf';
import styles from './ResumeButton.module.css';

const ResumeButton = ({ children }) => {
  const selected = (e) => {
    e.currentTarget.classList.add(styles.buttonSelected);
  };

  return (
    <a
      className={styles.button}
      onClick={selected}
      href={resume}
      download='Sara_Nenada_Resume.pdf'
    >
      {children}
    </a>
  );
};

export default ResumeButton;
