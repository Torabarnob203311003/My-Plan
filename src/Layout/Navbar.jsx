import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-blue-600 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-lg font-bold'>My Plan</h1>
        <div className='space-x-4'>
          <Link to='/' className='hover:underline'>
            Home
          </Link>
          <Link to='/signup' className='hover:underline'>
            Signup
          </Link>
          <Link to='/signup/form' className='hover:underline'>
            Forms
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
