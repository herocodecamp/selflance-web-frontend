import React from 'react';
import { FcManager } from 'react-icons/fc'
import banner1 from '../../Assets/svg/banner1.svg'
import DCategories from './DCategories';

const Banner = () => {
  return (
    <div className='py-8 w-full pr-6'>
      <div className='flex h-[271px] relative bg-[#FFE0C0]'>
        <div className='bg-[#F6F6F6] space-y-4 p-8 w-2/4 lg:w-2/5 z-10 rounded-r-full'>
          <h2 className='text-[#00538F] font-bold text-xl lg:text-4xl lg:leading-10 leading-6'>0% of <span className='text-[#D57635]'>Buyer</span> commission</h2>
          <h4 className='font-bold text-base leading-6 flex space-x-2 items-center'> <FcManager className='text-[v] w-[30px]' /> 24/7 Costumer Support</h4>
          <p className='font-medium text-base leading-4 text-[#999999]'>English, Arabic, Hindi, Urdu, Bengali</p>
          <button className='bg-[#00538F] text-white leading-4 text-base px-4 rounded-lg py-2'>post a request</button>
        </div>

        <div className=' rounded-lg w-2/4 lg:w-3/5 '>
          <img src={banner1} className="lg:w-[300px] sm:w-[250px] w-[150px] absolute lg:right-16 right-8 bottom-2" alt="" />
        </div>
      </div>

      {/* dashboard catagories Details */}

      <DCategories />

    </div>
  );
};

export default Banner;