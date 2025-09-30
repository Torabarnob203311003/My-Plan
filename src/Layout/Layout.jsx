import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Hero from './Hero';
import Footer from './Footer';
import FAQ from './FAQ.JSX';
import AboutUs from './AboutUs';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Navbar />
      <Hero/>
      <div className='flex-grow p-6'>
        <Cards />
        {children}

      </div>

      <FAQ/>
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default Layout;
