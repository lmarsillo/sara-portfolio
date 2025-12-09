import linkedin from '../../assets/icons/linkedin.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <p>SNenada &copy; 2025. All rights reserved.</p>

        <a href='https://linkedin.com/in/sara-nenada/'>
          <img src={linkedin} alt="Go to Sara's LinkedIn Page" />
        </a>
      </footer>
    </>
  );
};

export default Footer;
