import styles from './CareerStats.module.css';

const CareerStats = () => {
  return (
    <section className={styles.careerStatsContainer}>
      <div className={`container ${styles.stats}`}>
        <article className={styles.statItem}>
          <h3 className={styles.statHeader}>7+ Years</h3>
          <p className={styles.statText}>Program Design Experience</p>
        </article>
        <article className={styles.statItem}>
          <h3 className={styles.statHeader}>200+</h3>
          <p className={styles.statText}>Instructional Design Reviews</p>
        </article>
        <article className={styles.statItem}>
          <h3 className={styles.statHeader}>100+</h3>
          <p className={styles.statText}>Programs Developed</p>
        </article>
        <article className={styles.statItem}>
          <h3 className={styles.statHeader}>144 hr+</h3>
          <p className={styles.statText}>Leading Product Design Reviews</p>
        </article>
        <article className={styles.statItem}>
          <h3 className={styles.statHeader}>120,000+</h3>
          <p className={styles.statText}>User feedback entries reviewed</p>
        </article>
      </div>
    </section>
  );
};

export default CareerStats;
