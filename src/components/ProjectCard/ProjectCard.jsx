import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ image, title, subtitle, description, link }) => {
  return (
    <article>
      <Link className={styles.projectCard} to={link}>
        <img src={image} alt='' />
        <h3>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </Link>
    </article>
  );
};

export default ProjectCard;
