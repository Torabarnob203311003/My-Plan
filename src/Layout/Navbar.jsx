import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-blue-600 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <h1 className='text-lg font-bold'>My Plan</h1>

        {/* Links for larger screens */}
        <div className='hidden md:flex space-x-4'>
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

        {/* Avatar with dropdown */}
        <div className='relative'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
            onClick={toggleMenu}
          >
            <div className='w-10 h-10 rounded-full overflow-hidden'>
              <img
                alt='User Avatar'
                src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
              />
            </div>
          </div>
          {isMenuOpen && (
            <ul className='absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10'>
              <li className='p-2 hover:bg-gray-200'>
                <Link to='/profile'>Profile</Link>
              </li>
              <li className='p-2 hover:bg-gray-200'>
                <Link to='/settings'>Settings</Link>
              </li>
              <li className='p-2 hover:bg-gray-200'>
                <Link to='/logout'>Logout</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      {isMenuOpen && (
        <div className='md:hidden bg-blue-600 text-white p-4'>
          <Link to='/' className='block py-2 hover:underline'>
            Home
          </Link>
          <Link to='/signup' className='block py-2 hover:underline'>
            Signup
          </Link>
          <Link to='/signup/form' className='block py-2 hover:underline'>
            Forms
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
