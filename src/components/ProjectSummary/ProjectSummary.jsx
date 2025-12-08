import ToolsRoleBox from '../ToolsRoleBox/ToolsRoleBox';
import FadeInElement from '../FadeInElement/FadeInElement';
import styles from './ProjectSummary.module.css';

const ProjectSummary = ({ title, toolsRoleBoxes, image, children }) => {
  return (
    <section className={styles.projectSummary}>
      <FadeInElement>
        <div
          className={`${styles.projectSummaryContainer} container py-80 px-48`}
        >
          <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            {children}
            <div className={styles.toolsRoleBoxes}>
              {toolsRoleBoxes.map(({ boxType, info }) => (
                <ToolsRoleBox key={boxType} type={boxType} description={info} />
              ))}
            </div>
          </div>
          <img className={styles.projectSummaryPhoto} src={image} alt='' />
        </div>
      </FadeInElement>
    </section>
  );
};

export default ProjectSummary;
