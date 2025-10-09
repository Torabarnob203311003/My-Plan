import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='bg-white shadow-md relative' style={{ borderBottomLeftRadius: '50px' }}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 sm:h-20'>
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" className="sm:w-12 sm:h-12">
                  <circle cx="20" cy="20" r="18" fill="#4A90E2" />
                  <circle cx="20" cy="16" r="6" fill="white" />
                  <path d="M 14 24 L 18 28 L 28 18" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className='text-2xl sm:text-3xl font-bold text-[#4A90E2]'>planeer</span>
            </div>
          </div>

          {/* Desktop Navigation Links and Buttons */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
           <div className='hidden md:flex items-center space-x-6 lg:space-x-8  md:me-28  lg:me-16'>
 <a href='#about' className='text-gray-700 hover:text-[#4A90E2] font-medium text-sm lg:text-base transition-colors duration-200'>
              About
            </a>
            <a href='#reviews' className='text-gray-700 hover:text-[#4A90E2] font-medium text-sm lg:text-base transition-colors duration-200'>
              Reviews
            </a>
            <a href='#plans' className='text-gray-700 hover:text-[#4A90E2] font-medium text-sm lg:text-base transition-colors duration-200'>
              Plans
            </a>

           </div>
            <button className='px-5 lg:px-6 py-2 lg:py-2.5 rounded-md border-2 border-gray-300 text-gray-700 font-semibold hover:border-[#4A90E2] hover:text-[#4A90E2] transition text-sm lg:text-base'>
              Log in
            </button>
            <button className='px-5 lg:px-6 py-2 lg:py-2.5 rounded-md bg-[#FF6B35] text-white font-semibold hover:bg-[#FF5722] transition text-sm lg:text-base'>
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='p-2 rounded-md text-gray-700 hover:bg-gray-100 transition'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden pb-4 border-t border-gray-200 mt-2'>
            <div className="flex flex-col space-y-3 pt-4">
              <a href='#about' className='text-gray-700 hover:text-[#4A90E2] font-medium py-2 px-2 rounded hover:bg-gray-50 transition' onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href='#reviews' className='text-gray-700 hover:text-[#4A90E2] font-medium py-2 px-2 rounded hover:bg-gray-50 transition' onClick={() => setIsMenuOpen(false)}>
                Reviews
              </a>
              <a href='#plans' className='text-gray-700 hover:text-[#4A90E2] font-medium py-2 px-2 rounded hover:bg-gray-50 transition' onClick={() => setIsMenuOpen(false)}>
                Plans
              </a>
              
              <div className="flex flex-col space-y-2 pt-2">
                <button className='py-2.5 px-4 rounded-md border-2 border-gray-300 text-gray-700 font-semibold hover:border-[#4A90E2] hover:text-[#4A90E2] transition' onClick={() => setIsMenuOpen(false)}>
                  Log in
                </button>
                <button className='py-2.5 px-4 rounded-md bg-[#FF6B35] text-white font-semibold hover:bg-[#FF5722] transition' onClick={() => setIsMenuOpen(false)}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;