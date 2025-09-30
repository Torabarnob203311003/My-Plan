import React from 'react';
import Hero from './Hero';
import Cards from './Cards';
import FAQ from './FAQ';
import Reviews from './Reviews';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='p-6'>
        <Cards />
      </div>
      <Reviews/>
      <FAQ />
    </>
  );
};

export default Home;