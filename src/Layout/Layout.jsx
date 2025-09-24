import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Navbar />
      <div className='flex-grow p-6'>
        <Cards />
        {children}
      </div>
    </div>
  );
};

export default Layout;
