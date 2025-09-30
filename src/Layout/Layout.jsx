import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FAQ from './FAQ';

const Layout = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      {/* Navbar appears on all pages */}
      <Navbar />
      
      {/* Main content area - child routes render here */}
      <div className='flex-grow'>
        <Outlet /> {/* AboutUs, Home, Terms, etc. render here */}
      </div>
<FAQ/>
      {/* Footer appears on all pages */}
      <Footer />
    </div>
  );
};

export default Layout;