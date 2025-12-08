import Icon from '../Icon/Icon';
import styles from './IconBullet.module.css';

const IconBullet = ({ image, bulletName, bulletInfo, mb = 'mb-16' }) => {
  return (
    <article className={`${styles.iconBullet} ${mb}`}>
      <Icon image={image} alt={bulletName} />
      <div className={styles.text}>
        <h5>{bulletName}</h5>
        <p>{bulletInfo}</p>
      </div>
    </article>
  );
};

export default IconBullet;
