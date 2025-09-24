import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Detail modal for each person
const PersonDetailModal = ({ open, onClose, person }) => {
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
        className={`bg-white w-full max-w-sm h-full shadow-lg transform transition-all duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col relative`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start p-4">
          <div>
            <div className="font-semibold text-base">Person’s name 1</div>
            <div className="text-xs text-gray-500">Designator</div>
            <div className="mt-2 text-xs text-gray-700">
              You’re connection to "person name"
            </div>
          </div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Person"
            className="w-16 h-16 rounded-xl border-4 border-white object-cover"
          />
        </div>
        {/* List */}
        <div className="px-4">
          <div className="mb-2">
            <div className="font-medium text-sm">Jessica Alba</div>
            <div className="text-xs text-gray-500">Proxy to</div>
          </div>
          <div className="font-semibold text-sm mt-4 mb-1">Recent changes</div>
          <div className="mb-2 text-xs text-gray-500">Proxy to</div>
          <div className="mb-2 text-xs text-gray-500">Proxy to</div>
          <div className="mb-2 text-xs text-gray-500">Proxy to</div>
        </div>
        {/* Button */}
        <div className="mt-auto p-4">
          <button
            className="w-full bg-[#4B98D2] text-white py-2 rounded"
            onClick={onClose}
          >
            Check up on them
          </button>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 bg-black bg-opacity-10 rounded-full p-1 hover:bg-opacity-30 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
        className={`bg-white w-full max-w-sm h-full shadow-lg transform transition-all duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
        onClick={e => e.stopPropagation()}
      >
        {/* Profile Header */}
        <div className="bg-[#4B98D2] p-4 flex items-center space-x-4 rounded-b-2xl">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User"
            className="w-16 h-16 rounded-xl border-4 border-white object-cover"
          />
          <div>
            <div className="text-white font-semibold text-lg">Lisa Fitzgerald</div>
            <div className="text-white text-sm">Oakland, CA</div>
            <div className="flex items-center mt-1">
              <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2 border border-white"></span>
              <span className="text-xs text-white">Inactive</span>
            </div>
          </div>
        </div>
        {/* Status Section */}
        <div className="p-4 flex-1 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-1">Status</h2>
          <p className="text-gray-600 mb-4 text-sm">Check the status of your loved ones</p>
          <div className="space-y-2">
            {statusPeople.map((person, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between border-b pb-2 cursor-pointer hover:bg-gray-100 rounded transition"
                onClick={() => onPersonClick(person)}
              >
                <div className="flex items-center space-x-2">
                  <span className={`w-5 h-5 rounded-full ${person.color}`}></span>
                  <div>
                    <div className="font-medium text-sm">{person.name}</div>
                    <div className="text-xs text-gray-500">{person.role}</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white bg-black bg-opacity-30 rounded-full p-1 hover:bg-opacity-60 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
      <nav style={{ background: '#4B98D2' }} className='text-white p-4'>
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

          {/* Avatar with modal trigger */}
          <div className='relative'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
              onClick={openStatus}
            >
              <div className='w-10 h-10 rounded-full overflow-hidden'>
                <img
                  alt='User Avatar'
                  src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                />
              </div>
            </div>
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
          <div className='md:hidden' style={{ background: '#4B98D2' }}>
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
