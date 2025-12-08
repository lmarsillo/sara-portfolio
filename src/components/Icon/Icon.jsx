import { useRef, useEffect } from 'react';
import styles from './Icon.module.css';

const Icon = ({ image, alt, wh = '114px', pd = '18px' }) => {
  const domRef = useRef();

  useEffect(() => {
    domRef.current.style.maxWidth = wh;
    domRef.current.style.maxHeight = wh;
    // domRef.current.style.padding = pd;
  }, []);

  return <img ref={domRef} className={styles.icon} src={image} alt={alt} />;
};

export default Icon;
