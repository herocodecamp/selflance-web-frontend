import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import congratulation from '../../Assets/svg/congratulation.svg'

const Congratulations = () => {
  return (
    <div className='sm:px-16 py-12 px-4 sm:py-8'>
      <BiArrowBack className='text-xl sm:text-2xl text-[#000000] hover:cursor-pointer' />

      <div className='flex items-center justify-center h-full sm:h-screen w-full sm:w-1/3 mx-auto text-center sm:py-12 px-2'>

        <div className='space-y-3 px-4 text-center'>
          <img src={congratulation} className='max-h-[300px] max-w-[200px] sm:max-w-[250px] mx-auto' alt="order" />
          <h2 className='sm:text-xl text-base sm:leading-5 text-[#121F3E] font-semibold sm:font-bold '>Congratulations!</h2>
          <p className='text-[#8E8E8E] sm:font-semibold text-base leading-5'>Your profile is successfully completed. You can more changes after it's live.</p>

          <button
            className='font-bold text-base sm:w-full  bg-[#00538F] text-white sm:px-8 sm:py-2 px-6 py-2  rounded-lg'
          >Done</button>

        </div>

      </div>
    </div>
  );
};

export default Congratulations;