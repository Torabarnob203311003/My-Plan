// components/SignupPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between items-center bg-gray-100'>
      {/* Top wave */}
      <div className='w-full h-32 rounded-b-[50%_30%] bg-gradient-to-b from-[rgba(62,150,238,0.8918)] to-[rgba(39,99,159,0.98)]'></div>

      {/* Signup box */}
      <div className='bg-white shadow-lg rounded-xl p-8 w-96 max-w-[90%] text-center'>
        <h1 className='text-3xl font-bold text-blue-600 mb-6'>Planeer</h1>
        <form className='space-y-4'>
          <input
            type='email'
            placeholder='Email'
            className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E6AA7]'
          />
          <input
            type='tel'
            placeholder='Phone'
            className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E6AA7]'
          />
          <input
            type='password'
            placeholder='Password'
            className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E6AA7]'
          />
          <button
            type='submit'
            className='w-full bg-[#2E6AA7] text-[#FFFFFF] py-3 rounded-lg hover:opacity-90 transition'
          >
            Signup
          </button>
        </form>
        <p className='mt-4 text-sm'>
          Already a Member?{' '}
          <Link to='/' className='text-[#2E6AA7] hover:underline'>
            Login here
          </Link>
        </p>
      </div>

      {/* Bottom wave */}
      <div className='w-full h-32 rounded-t-[50%_30%] bg-gradient-to-t from-[rgba(39,99,159,0.98)] to-[rgba(62,150,238,0.8918)]'></div>
    </div>
  );
};

export default SignupPage;
