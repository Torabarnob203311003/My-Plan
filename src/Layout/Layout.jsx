import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Hero from './Hero';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Navbar />
      <Hero/>
      <div className='flex-grow p-6'>
        <Cards />
        {children}
      </div>
    </div>
  );
};

export default Layout;
