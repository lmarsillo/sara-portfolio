import { useLayoutEffect } from 'react';
import Hero from '../components/HomeHero/HomeHero.jsx';
import CareerStats from '../components/CareerStats/CareerStats.jsx';
import ProjectCards from '../components/ProjectCards/ProjectCards.jsx';

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Hero />
      <CareerStats />
      <ProjectCards />
    </>
  );
};

export default HomePage;
