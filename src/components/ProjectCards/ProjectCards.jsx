import img_lms_learners from '../../assets/images/elml/elml-hero.png';
import img_lms_admins from '../../assets/images/elma/elma-hero.png';
import img_virtual_visit from '../../assets/images/vvr/vvr-hero.png';
import img_recipe_manager from '../../assets/images/rma/rma-hero.png';
import img_grocery_delivery from '../../assets/images/gda/gda-hero.png';
import img_portfolio from '../../assets/images/pp/pp-hero.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectCards.module.css';

const ProjectCards = () => {
  return (
    <section aria-labelledby='featured-work' className={styles.projects}>
      <div className={`${styles.projectsContainer} container`}>
        <h2 id='featured-work' className={styles.title}>
          Featured Work
        </h2>
        <hr className='headerLine' />
        <div className={styles.cards}>
          <ProjectCard
            image={img_lms_learners}
            title='LMS for Learners'
            subtitle='B2B Learning Product'
            description='One half of a dual-user eLearning system, designed to deliver a seamless and engaging eCME experience for medical professionals.'
            link='/project-elms-learners'
          />
          <ProjectCard
            image={img_lms_admins}
            title='LMS for Admins'
            subtitle='B2B Learning Product'
            description='The companion interface empowering organizations to manage learners, courses, and reporting within the same eLearning ecosystem.'
            link='/project-elms-admins'
          />
          <ProjectCard
            image={img_virtual_visit}
            title='Virtual Visit Redesign'
            subtitle='Page Redesign'
            description='A streamlined redesign of the Completed Visit page, focused on clarity, patient comprehension, and reducing cognitive load in virtual care.'
            link='/project-virtual-visit'
          />
          <ProjectCard
            image={img_recipe_manager}
            title='Recipe Manager App'
            subtitle='Everyday Tool'
            description='A personal design concept for a smart recipe and pantry manager that helps users turn on-hand ingredients into quick, personalized meal ideas.'
            link='/project-recipe-manage-app'
          />
          <ProjectCard
            image={img_grocery_delivery}
            title='Grocery Delivery App'
            subtitle='Everyday Tool'
            description='A personal design concept for a grocery delivery app connected to the recipe manager to help users order missing ingredients fast.'
            link='/project-grocery-delivery-app'
          />
          <ProjectCard
            image={img_portfolio}
            title='Portfolio Redesign'
            subtitle='Personal UX Ecosystem'
            description='A personal portfolio redesign built to showcase my work with sharper structure, stronger narrative, and a more intuitive user experience.'
            link='/project-portfolio'
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
