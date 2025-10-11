import React from 'react';
import Hero from './Hero';
import Cards from './Cards';
import FAQ from './FAQ';
import Reviews from './Reviews';
import FeaturesSection from './Features';
import LifePlansHero from './LifePlan';
import Plans from './plans';

const Home = () => {
  return (
    <>
      <Hero />``
      <div className='p-6'>
        <Cards />
        <FeaturesSection/>
        <LifePlansHero/>
        {/* <Plans/> */}
      </div>
      {/* <Reviews/> */}
     
    </>
  );
};

export default Home;