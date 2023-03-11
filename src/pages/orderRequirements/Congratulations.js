import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import congratulation from '../../Assets/svg/congratulations.svg'

const Congratulations = () => {
  return (
    <div className='px-16 py-8'>
      <BiArrowBack className='text-xl sm:text-2xl text-[#000000] hover:cursor-pointer' />

      <div className='flex items-center justify-center h-screen w-1/3 mx-auto text-center py-12'>

        <div className='space-y-3'>
          <img src={congratulation} className='max-h-[300px] mx-auto' alt="order" />
          <h2 className='sm:text-xl text-base leading-5 text-[#121F3E] font-bold '>Congratulations!</h2>
          <p className='text-[#8E8E8E] font-semibold text-base leading-5'>Your profile is successfully completed. You can more changes after it's live.</p>

          <button
            className='font-bold text-base w-full  bg-[#00538F] text-white sm:px-8 sm:py-2 px-6 py-2  rounded-lg'
          >done</button>

        </div>

      </div>
    </div>
  );
};

export default Congratulations;