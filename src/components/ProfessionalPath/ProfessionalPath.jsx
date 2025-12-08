import img_pencil from '../../assets/images/aboutMe/aboutme-pencil.png';
import img_instructional_design from '../../assets/icons/apple-notebook.svg';
import img_ux_design from '../../assets/icons/ruler-triangle.svg';
import img_data_analytics from '../../assets/icons/pie-chart.svg';
import img_instructional_design_sub from '../../assets/icons/graph-increase.svg';
import SectionHeader from '../SectionHeader/SectionHeader';
import Icon from '../Icon/Icon';

import styles from './ProfessionalPath.module.css';

const ProfessionalPath = () => {
  return (
    <SectionHeader header='My Professional Path'>
      <p className={styles.description}>
        I began in biomedical sciences, where I learned to analyze complex
        information and think systematically. From there, I became the go-to
        website lead during my time at TMU, which sparked my interest in making
        digital experiences intuitive. That experience naturally evolved into
        project coordination, where I managed timelines, stakeholders, and
        cross-functional collaboration. Today, I bring all of that together in
        my work as an eLearning and UX designer, Where I combine instructional
        design, product thinking, and data-driven insight to create thoughtful,
        user-centered solutions.
      </p>
      <div className={styles.content}>
        <img src={img_pencil} alt='' />
        <div className={styles.bullets}>
          <article className={styles.bullet}>
            <Icon image={img_instructional_design} alt='' />
            <div className={styles.bulletText}>
              <h4>Instructional Design</h4>
              <p>
                In my instructional design work, I've built and designed over
                100 learning programs for healthcare providers, everything from
                full courses to microlearnings, and both synchronous and
                asynchronous experiences. I focus on making content{' '}
                <em>clear, engaging,</em> and <em>useful.</em>
                <br />
                <br />
              </p>
              <div className={styles.idSubIcon}>
                <Icon
                  image={img_instructional_design_sub}
                  alt=''
                  wh='28px'
                  pd='7px'
                />
                <p>
                  Since I started, we've seen a <em>10% increase </em> in users
                  reporting that the courses fully meet their learning
                  objectives.
                </p>
              </div>
            </div>
          </article>
          <article className={styles.bullet}>
            <Icon image={img_ux_design} alt='' />
            <div className={styles.bulletText}>
              <h4>UX Design</h4>
              <p>
                In addition to designing concepts for my own interest, I have
                built a design system from the ground up for a brand-new product
                and collaborated closely with stakeholders to bring it from
                concept to development. By applying my knowledge of
                instructional design and understanding of learner needs and pain
                points, I infused insights into the product design to make it
                more intuitive and effective.
              </p>
            </div>
          </article>
          <article className={styles.bullet}>
            <Icon image={img_data_analytics} alt='' />
            <div className={styles.bulletText}>
              <h4>Data Analysis</h4>
              <p>
                I'm a strong believer that you manage what you measure. I
                regularly review and analyze large data sets of several thousand
                user entries to understand how learners are interacting with and
                responding to our course content. From these insights, I develop
                best practices, create workflows, and deliver presentations that
                guide decision-making and improve learning outcomes, helping to
                make our courses more effective and successful.
              </p>
            </div>
          </article>
        </div>
      </div>
    </SectionHeader>
  );
};

export default ProfessionalPath;
