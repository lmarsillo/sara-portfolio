import { useRef, useEffect } from 'react';
import styles from './Icon.module.css';

const Icon = ({ className = '', image, alt, wh = '114px' }) => {
  const domRef = useRef();

  useEffect(() => {
    domRef.current.style.maxWidth = wh;
    domRef.current.style.maxHeight = wh;
  }, []);

  return (
    <img
      ref={domRef}
      className={`${styles.icon} ${className}`}
      src={image}
      alt={alt}
    />
  );
};

export default Icon;
