import React from 'react';

const Cards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
      <div className='bg-white p-4 shadow rounded-lg'>
        <h2 className='text-lg font-semibold'>Card 1</h2>
        <p>Content for card 1.</p>
      </div>
      <div className='bg-white p-4 shadow rounded-lg'>
        <h2 className='text-lg font-semibold'>Card 2</h2>
        <p>Content for card 2.</p>
      </div>
      <div className='bg-white p-4 shadow rounded-lg'>
        <h2 className='text-lg font-semibold'>Card 3</h2>
        <p>Content for card 3.</p>
      </div>
    </div>
  );
};

export default Cards;
