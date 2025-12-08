import FadeInElement from '../FadeInElement/FadeInElement';
import LightBox from '../LightBox/LightBox';
import styles from './PhotoParagraph.module.css';

const PhotoParagraph = ({ children, image, alt = '' }) => {
  const flexClass = image
    ? `${styles.photoParagraph} ${styles.flex}`
    : styles.photoParagraph;

  return (
    <FadeInElement>
      <article className={flexClass}>
        <div className={styles.text}>{children}</div>
        {image ? <LightBox image={image} alt={alt} /> : ''}
      </article>
    </FadeInElement>
  );
};

export default PhotoParagraph;
