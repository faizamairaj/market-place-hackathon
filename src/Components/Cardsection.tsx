import React from 'react';
import Image from 'next/image';

const Cardsection = () => {
  return (
    <div>
      <div className='flex flex-col mt-10 justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Browse The Range</h1>
        <p className='text-gray-400 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className='mt-10 flex flex-col md:flex-row gap-5 justify-center items-center'>
        <div>
          <Image src={'/card1-img.png'} alt='card1-img' width={381} height={480} />
          <p className='font-bold text-black mt-3 text-center'>Dining</p>
        </div>

        <div>
          <Image src={'/card2-img.png'} alt='card2-img' width={381} height={480} />
          <p className='font-bold text-black mt-3 text-center'>Living</p>
        </div>

        <div>
          <Image src={'/card3-img.png'} alt='card3-img' width={381} height={480} />
          <p className='font-bold text-black mt-3 text-center'>Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default Cardsection;
