import { useState } from 'react';
import styles from './LightBox.module.css';

const LightBox = ({ image, alt = '' }) => {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
    setImageToShow('');
  };

  return (
    <>
      <img
        className={styles.imageCard}
        onClick={() => showImage(image)}
        src={image}
        alt={alt}
      />
      {lightboxDisplay ? (
        <div className={styles.LightBox} onClick={hideLightBox}>
          <img className={styles.LightBoxImage} src={imageToShow} />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default LightBox;
