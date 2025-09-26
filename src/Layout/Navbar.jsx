import React, { useState, useEffect } from 'react';

// Detail modal for each person
const PersonDetailModal = ({ open, onClose, person }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!person) return null;
  return (
    <div
      className={`fixed inset-0 z-40 flex justify-end transition-all duration-300 ${
        open ? 'visible' : 'invisible'
      }`}
      style={{
        background: open ? 'rgba(0,0,0,0.3)' : 'transparent',
        pointerEvents: open ? 'auto' : 'none',
      }}
      onClick={onClose}
    >
      <div
        className={`bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-full shadow-lg transform transition-all duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col relative`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start p-3 sm:p-4 md:p-5 lg:p-6">
          <div className="flex-1 mr-2 sm:mr-3 md:mr-4">
            <div className="font-semibold text-sm sm:text-base md:text-lg">Person's name 1</div>
            <div className="text-xs sm:text-sm text-gray-500">Designator</div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-700">
              You're connection to "person name"
            </div>
          </div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Person"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl border-4 border-white object-cover"
          />
        </div>
        {/* List */}
        <div className="px-3 sm:px-4 md:px-5 lg:px-6">
          <div className="mb-2">
            <div className="font-medium text-xs sm:text-sm md:text-base">Jessica Alba</div>
            <div className="text-xs text-gray-500">Proxy to</div>
          </div>
          <div className="font-semibold text-sm sm:text-base mt-3 sm:mt-4 mb-1">Recent changes</div>
          <div className="mb-2 text-xs sm:text-sm text-gray-500">Proxy to</div>
          <div className="mb-2 text-xs sm:text-sm text-gray-500">Proxy to</div>
          <div className="mb-2 text-xs sm:text-sm text-gray-500">Proxy to</div>
        </div>
        {/* Button */}
        <div className="mt-auto p-3 sm:p-4 md:p-5 lg:p-6">
          <button
            className="w-full bg-[#4B98D2] text-white py-2 sm:py-3 rounded text-sm sm:text-base"
            onClick={onClose}
          >
            Check up on them
          </button>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-500 bg-black bg-opacity-10 rounded-full p-1 hover:bg-opacity-30 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const statusPeople = [
  {
    name: 'Micheal Jackson',
    role: 'Grantor',
    color: 'bg-yellow-400',
  },
  {
    name: 'Jessica Alba',
    role: 'Proxy',
    color: 'bg-blue-500',
  },
  {
    name: 'Britney Spears',
    role: 'Proxy',
    color: 'bg-green-500',
  },
  {
    name: 'Britney Spears',
    role: 'Proxy',
    color: 'bg-green-500',
  },
];

const StatusModal = ({ open, onClose, onPersonClick }) => {
  return (
    <div
      className={`fixed inset-0 z-30 flex justify-end transition-all duration-300 ${
        open ? 'visible' : 'invisible'
      }`}
      style={{
        background: open ? 'rgba(0,0,0,0.3)' : 'transparent',
        pointerEvents: open ? 'auto' : 'none',
      }}
      onClick={onClose}
    >
      <div
        className={`bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-full shadow-lg transform transition-all duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
        onClick={e => e.stopPropagation()}
      >
        {/* Profile Header */}
        <div className="bg-[#4B98D2] p-3 sm:p-4 md:p-5 lg:p-6 flex items-center space-x-3 sm:space-x-4 rounded-b-2xl">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl border-4 border-white object-cover"
          />
          <div className="flex-1">
            <div className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Lisa Fitzgerald</div>
            <div className="text-white text-xs sm:text-sm md:text-base">Oakland, CA</div>
            <div className="flex items-center mt-1">
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400 mr-2 border border-white"></span>
              <span className="text-xs text-white">Inactive</span>
            </div>
          </div>
        </div>
        {/* Status Section */}
        <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex-1 overflow-y-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">Status</h2>
          <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">Check the status of your loved ones</p>
          <div className="space-y-2">
            {statusPeople.map((person, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b pb-2 cursor-pointer hover:bg-gray-100 rounded transition p-2"
                onClick={() => onPersonClick(person)}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${person.color}`}></span>
                  <div>
                    <div className="font-medium text-xs sm:text-sm md:text-base">{person.name}</div>
                    <div className="text-xs text-gray-500">{person.role}</div>
                  </div>
                </div>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-2 sm:top-3 right-2 sm:right-3 text-white bg-black bg-opacity-30 rounded-full p-1 hover:bg-opacity-60 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isPersonModalOpen, setIsPersonModalOpen] = useState(false);
  const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openStatus = () => setIsStatusOpen(true);
  const closeStatus = () => setIsStatusOpen(false);

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
    setIsPersonModalOpen(true);
  };
  const closePersonModal = () => setIsPersonModalOpen(false);

  return (
    <>
      <nav style={{ background: '#4B98D2' }} className='text-white p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* My Plan Logo - Left */}
          <div className="flex-none">
            <h1 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold'>My Plan</h1>
          </div>

          {/* Nav links - Center - Hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
              <a href='/' className='hover:underline text-sm md:text-base lg:text-lg transition-colors duration-200'>
                Home
              </a>
              <a href='/about' className='hover:underline text-sm md:text-base lg:text-lg transition-colors duration-200'>
                About
              </a>
              <a href='/reviews' className='hover:underline text-sm md:text-base lg:text-lg transition-colors duration-200'>
                Reviews
              </a>
              <a href='/connections' className='hover:underline text-sm md:text-base lg:text-lg transition-colors duration-200'>
                Connections
              </a>
            </div>
          </div>

          {/* Buttons and Avatar - Right */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6">
            {/* Buttons - Hidden on small mobile */}
            <div className="hidden sm:flex items-center space-x-2 md:space-x-3 lg:space-x-4">
              <a
                href='/login'
                className='px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded bg-white text-[#4B98D2] font-semibold hover:bg-blue-100 transition text-xs sm:text-sm md:text-base'
              >
                Log in
              </a>
              <a
                href='/signup'
                className='px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded bg-yellow-400 text-[#4B98D2] font-semibold hover:bg-yellow-300 transition text-xs sm:text-sm md:text-base'
              >
                Sign up
              </a>
            </div>
            
            {/* Avatar with dropdown - Hidden on mobile, shown on tablet and up */}
            <div className='relative hidden md:block'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar p-1'
                onClick={() => setShowAvatarDropdown((prev) => !prev)}
              >
                <div className='w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden'>
                  <img
                    alt='User Avatar'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Desktop Dropdown */}
              {showAvatarDropdown && (
                <div className="absolute right-0 mt-2 w-32 sm:w-36 md:w-40 lg:w-44 bg-white rounded shadow-lg z-50 text-gray-700">
                  <button
                    className="block w-full text-left px-3 md:px-4 py-2 hover:bg-gray-100 text-xs sm:text-sm md:text-base transition-colors duration-200"
                    onClick={() => {
                      setShowAvatarDropdown(false);
                      // Show profile modal or navigate
                    }}
                  >
                    Profile
                  </button>
                  <button
                    className="block w-full text-left px-3 md:px-4 py-2 hover:bg-gray-100 text-xs sm:text-sm md:text-base transition-colors duration-200"
                    onClick={() => {
                      setShowAvatarDropdown(false);
                      openStatus();
                    }}
                  >
                    Status
                  </button>
                  <button
                    className="block w-full text-left px-3 md:px-4 py-2 hover:bg-gray-100 text-xs sm:text-sm md:text-base transition-colors duration-200"
                    onClick={() => {
                      setShowAvatarDropdown(false);
                      // Show settings modal or navigate
                    }}
                  >
                    Settings
                  </button>
                </div>
              )}
            </div>

            {/* Avatar for mobile - Same functionality as desktop */}
            <div className='relative md:hidden'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar p-1'
                onClick={() => setShowAvatarDropdown((prev) => !prev)}
              >
                <div className='w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden'>
                  <img
                    alt='User Avatar'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Mobile Avatar Dropdown */}
              {showAvatarDropdown && (
                <div className="absolute right-0 mt-2 w-32 sm:w-36 bg-white rounded shadow-lg z-50 text-gray-700">
                  <button
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-xs sm:text-sm transition-colors duration-200"
                    onClick={() => {
                      setShowAvatarDropdown(false);
                      // Show profile modal or navigate
                    }}
                  >
                    Profile
                  </button>
                  <button
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-xs sm:text-sm transition-colors duration-200"
                    onClick={() => {
                      setShowAvatarDropdown(false);
                      setIsStatusOpen(true);
                    }}
                  >
                    Status
                  </button>
                  <button
                    className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-xs sm:text-sm transition-colors duration-200"
                    onClick={() => {
                      setShowAvatarDropdown(false);
                      // Show settings modal or navigate
                    }}
                  >
                    Settings
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger menu for smaller screens */}
          <div className='md:hidden ml-2'>
            <button onClick={toggleMenu} className='btn btn-ghost btn-circle p-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 sm:h-6 sm:w-6'
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

        {/* Hamburger menu dropdown for smaller screens */}
        {isMenuOpen && (
          <div className='md:hidden mt-2 sm:mt-3' style={{ background: '#4B98D2' }}>
            <div className="px-2 sm:px-3 pb-3 sm:pb-4">
              <a href='/' className='block py-2 hover:underline text-sm sm:text-base transition-colors duration-200' onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href='/about' className='block py-2 hover:underline text-sm sm:text-base transition-colors duration-200' onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href='/reviews' className='block py-2 hover:underline text-sm sm:text-base transition-colors duration-200' onClick={() => setIsMenuOpen(false)}>
                Reviews
              </a>
              <a href='/connections' className='block py-2 hover:underline text-sm sm:text-base transition-colors duration-200' onClick={() => setIsMenuOpen(false)}>
                Connections
              </a>
              
              {/* Mobile buttons in hamburger menu */}
              <div className="mt-3 sm:mt-4 space-y-2">
                <a
                  href='/login'
                  className='block py-2 px-3 rounded bg-white text-[#4B98D2] font-semibold text-center text-sm sm:text-base transition-colors duration-200 hover:bg-blue-100'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </a>
                <a
                  href='/signup'
                  className='block py-2 px-3 rounded bg-yellow-400 text-[#4B98D2] font-semibold text-center text-sm sm:text-base transition-colors duration-200 hover:bg-yellow-300'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Status modal for all screens */}
      <StatusModal
        open={isStatusOpen}
        onClose={closeStatus}
        onPersonClick={(person) => {
          closeStatus();
          setTimeout(() => handlePersonClick(person), 300); // Wait for modal close animation
        }}
      />
      <PersonDetailModal
        open={isPersonModalOpen}
        onClose={closePersonModal}
        person={selectedPerson}
      />
    </>
  );
};

export default Navbar;