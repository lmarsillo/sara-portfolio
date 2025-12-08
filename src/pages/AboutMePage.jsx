import { useLayoutEffect } from 'react';
import Hero from '../components/AboutHero/AboutHero';
import ProfessionalPath from '../components/ProfessionalPath/ProfessionalPath';
import PersonalProjects from '../components/PersonalProjects/PersonalProjects';

const AboutMePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Hero />
      <ProfessionalPath />
      <PersonalProjects />
    </>
  );
};

export default AboutMePage;
