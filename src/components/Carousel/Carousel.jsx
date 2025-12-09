import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import styles from './Carousel.module.css';

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

// based on max-width (1200) minus section padding (48*2) and container padding (16*2)
const BASE_WIDTH = 1070;
const ARROW_WIDTH = 64;
const BASE_ITEM_WIDTH = BASE_WIDTH - ARROW_WIDTH * 2;
const BASE_ITEM_OFFSET = BASE_ITEM_WIDTH + GAP;

export default function Carousel({
  items,
  autoplay = true,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true,
}) {
  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const [containerWidth, setContainerWidth] = useState(BASE_WIDTH);
  const [itemWidth, setItemWidth] = useState(BASE_ITEM_WIDTH);
  const [trackItemOffset, setItemOffset] = useState(BASE_ITEM_OFFSET);

  const containerRef = useRef(null);

  const isTouchEnabled = () => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  useEffect(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setContainerWidth(entry.contentRect.width);
          isTouchEnabled() || containerWidth <= 670 // width of container when viewport width is 800
            ? setItemWidth(containerWidth)
            : setItemWidth(containerWidth - ARROW_WIDTH * 2);
          setItemOffset(itemWidth + GAP);
        }
      });

      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [containerWidth, itemWidth, trackItemOffset]);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  const nextPhoto = () => {
    if (loop) {
      currentIndex === items.length - 1
        ? setCurrentIndex(0)
        : setCurrentIndex(currentIndex + 1);
    } else {
      currentIndex === items.length - 1
        ? null
        : setCurrentIndex(currentIndex + 1);
    }
  };

  const previousPhoto = () => {
    if (loop) {
      currentIndex === 0
        ? setCurrentIndex(items.length - 1)
        : setCurrentIndex(currentIndex - 1);
    } else {
      currentIndex === 0 ? null : setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div ref={containerRef} className={styles.carouselContainer}>
      <div className={styles.carouselTrackContainer}>
        <button className={styles.button} onClick={previousPhoto}>
          <FaChevronLeft className={styles.arrow} />
        </button>
        <motion.div
          className={styles.carouselTrack}
          drag='x'
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${
              currentIndex * trackItemOffset + itemWidth / 2
            }px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationComplete={handleAnimationComplete}
        >
          {carouselItems.map((item, index) => {
            const range = [
              -(index + 1) * trackItemOffset,
              -index * trackItemOffset,
              -(index - 1) * trackItemOffset,
            ];
            const outputRange = [90, 0, -90];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotateY = useTransform(x, range, outputRange, {
              clamp: false,
            });
            return (
              <motion.div
                key={index}
                className={styles.carouselItem}
                style={{
                  width: itemWidth,
                  height: '100%',
                  rotateY: rotateY,
                }}
                transition={effectiveTransition}
              >
                <img src={item.image} alt={item.alt} width={itemWidth} />
              </motion.div>
            );
          })}
        </motion.div>
        <button className={styles.button} onClick={nextPhoto}>
          <FaChevronRight className={styles.arrow} />
        </button>
      </div>

      <div className={styles.carouselIndicatorsContainer}>
        <div className={styles.carouselIndicators}>
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`${styles.carouselIndicator} ${
                currentIndex % items.length === index
                  ? styles.active
                  : styles.inactive
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
