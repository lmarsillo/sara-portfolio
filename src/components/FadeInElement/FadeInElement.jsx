import { useState, useEffect, useRef } from 'react';
import styles from './FadeInElement.module.css';

const FadeInElement = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeClass = isVisible ? `${styles.isVisible}` : '';

  return (
    <div ref={domRef} className={`${styles.fadeIn} ${fadeClass}`}>
      {children}
    </div>
  );
};

export default FadeInElement;
