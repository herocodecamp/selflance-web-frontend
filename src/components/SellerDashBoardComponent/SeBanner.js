import React from 'react';
import { FcManager } from 'react-icons/fc';
import banner1 from '../../Assets/svg/banner-1.svg'
import DCategories from '../DashboardComponent/DCategories';
import SeDrawer from './SeDrawer';
import SeSearch from './SeSearch';

const SeBanner = () => {
  return (
    <>
      <div className='py-8 w-full pr-6'>
        <SeDrawer />
        <div className='flex sm:justify-between sm:space-x-6 h-[271px] space-y-4 relative bg-[#FFE0C0]'>
          <div className='bg-[#F6F6F6] space-y-4 p-2  lg:space-y-4 sm:p-8 w-full md:w-2/4  rounded-banner'>
            <h2 className='text-[#00538F] font-bold text-sm lg:text-2xl xl:text-4xl xl:leading-10 lg:leading-6'>0% of <span className='text-[#D57635]'>Buyer</span> commission</h2>
            <h4 className='font-bold text-base sm:leading-6 flex space-x-2 items-center'> <FcManager className='text-[#D57635] w-[30px]' /> 24/7 Costumer Support</h4>
            <p className='sm:font-medium sm:text-sm md:text-base sm:leading-4 text-[#999999] text-center'>English, Arabic, Hindi, Urdu, Bengali</p>
            <button className='bg-[#00538F] text-white sm:text-base sm:px-4 px-2 rounded-lg lg:py-2 absolute 
           lg:bottom-4 bottom-1'>post a request</button>
          </div>

          <div className='flex items-center rounded-lg w-full lg:w-3/5'>
            <img src={banner1} className="sm:w-[300px] w-[200px]" alt="" />
          </div>
        </div>
        <DCategories />
        <SeSearch />
      </div>



    </>
  );
};

export default SeBanner;