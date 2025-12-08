import styles from './IconBulletList.module.css';
import IconBullet from '../IconBullet/IconBullet';
import FadeInElement from '../FadeInElement/FadeInElement';

const IconBulletList = ({ bullets }) => {
  return (
    <section className={styles.bulletList}>
      <FadeInElement>
        {bullets.map(({ image, bulletName, bulletInfo }) => (
          <IconBullet
            key={bulletName}
            image={image}
            bulletName={bulletName}
            bulletInfo={bulletInfo}
          />
        ))}
      </FadeInElement>
    </section>
  );
};

export default IconBulletList;
