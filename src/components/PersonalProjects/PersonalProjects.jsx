import { useState } from 'react';
import img_personal_1 from '../../assets/images/aboutMe/aboutme-personal-1.jpg';
import img_personal_2 from '../../assets/images/aboutMe/aboutme-personal-2.jpeg';
import img_personal_3 from '../../assets/images/aboutMe/aboutme-personal-3.jpeg';
import img_personal_4 from '../../assets/images/aboutMe/aboutme-personal-4.jpeg';
import img_personal_5 from '../../assets/images/aboutMe/aboutme-personal-5.jpeg';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './PersonalProjects.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PersonalProjects = () => {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const images = [
    img_personal_1,
    img_personal_2,
    img_personal_3,
    img_personal_4,
    img_personal_5,
  ];

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
    setImageToShow('');
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <SectionHeader header='Personal Projects'>
      <p className={styles.description}>
        At the core of it all, I just love to make things. My hobbies are a
        constant source of inspiration and joy. One of my favourites is
        illustrating little storybooks for my nieces. This is a tradition that
        started as a 2nd-birthday gift and has now turned into a full-on ritual.
        I've made them birthday books, first-day-of-school books, and even
        turned our wild imagination-game adventures into stories. Some pages are
        in the grid below.
        <br />
        <br />I also love woodworking. I've built plenty of pieces… some came
        out great, others... more “character-building,” but every single one
        taught me something. The images below show some of my personal work,
        take a look around!
      </p>
      <div className={styles.images}>
        <img
          className={`${styles.spanRows} ${styles.item1}`}
          src={images[0]}
          alt="Hand-drawn children's book for Sara's niece."
          onClick={() => showImage(images[0])}
        />
        <img
          className={`${styles.item2}`}
          src={images[1]}
          alt='Custom monitor stand with drawer made of walnut and cherry by Sara.'
          onClick={() => showImage(images[1])}
        />
        <img
          className={`${styles.item3}`}
          src={images[2]}
          alt='Custom media unit made of pine by Sara.'
          onClick={() => showImage(images[2])}
        />
        <img
          className={`${styles.spanRows} ${styles.item4}`}
          src={images[3]}
          alt='iPad showing thumbnails of drawings Sara has done.'
          onClick={() => showImage(images[3])}
        />
        <img
          className={`${styles.spanRows} ${styles.item5}`}
          src={images[4]}
          alt='Custom Closet Unit with drawers and shelves made by Sara.'
          onClick={() => showImage(images[4])}
        />
      </div>
      {lightboxDisplay ? (
        <div className={styles.LightBox} onClick={hideLightBox}>
          <button className={styles.button} onClick={showPrev}>
            <FaChevronLeft className={styles.arrow} />
          </button>
          <img className={styles.LightBoxImage} src={imageToShow} />
          <button className={styles.button} onClick={showNext}>
            <FaChevronRight className={styles.arrow} />
          </button>
        </div>
      ) : (
        ''
      )}
    </SectionHeader>
  );
};

export default PersonalProjects;
