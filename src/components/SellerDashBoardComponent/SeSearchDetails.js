import React from 'react';
import { BsHeart } from 'react-icons/bs'
import { FaGreaterThan } from 'react-icons/fa'
import userSvg from '../../Assets/svg/user.svg'

const SeSearchDetails = ({ result }) => {
  return (
    <div className='bg-[#FFFFFF] px-8 py-6 space-y-6 rounded-3xl drop-shadow-2xl relative'>
      <div className='flex space-x-4 items-center'>
        <img src={result.profile} className="w-[54px] h-[54px] rounded-full" alt="" />
        <h3 className='text-base font-bold lg:leading-10 text-[#000000]'>{result.title}</h3>
        <span className='absolute right-2 sm:right-12'><BsHeart className='text-[#B4B4B7] w-[18px] h-[15px] ' /></span>
      </div>
      <div>
        <p className='font-sm sm:leading-6'>{result.description}</p>
      </div>
      <div className=' grid grid-cols-2 lg:grid-cols-3 gap-2'>
        <div className=' px-2 lg:px-4 rounded-lg py-2 space-y-1 w-[100px] sm:w-[150px] lg:w-[213px] h-[77px] border-2 border-[#E3E3E3]'>
          <h4 className='text-[#000000] font-semibold text-base text-center'>{result.price}</h4>
          <p className='text-[#8E8E8E] text-center'>fixed price</p>
        </div>
        <div className=' px-2 lg:px-4 rounded-lg py-2 space-y-1 w-[100px] sm:w-[150px] lg:w-[213px] h-[77px] border-2 border-[#E3E3E3]'>
          <h4 className='text-[#000000] font-semibold sm:text-base text-center'>{result.level}</h4>
          <p className='text-[#8E8E8E] text-center'>Experience</p>
        </div>
        <div className=' px-2 lg:px-4 rounded-lg py-2 space-y-1 w-[100px] sm:w-[150px] lg:w-[213px] h-[77px] border-2 border-[#E3E3E3]'>
          <h4 className='text-[#000000] font-semibold text-base text-center'>{result.duration}</h4>
          <p className='text-[#8E8E8E] text-center'>Duration</p>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center justify-center bg-[#00538F] bg-opacity-20 px-2 lg:px-4 py-2 sm:space-x-4 w-[120px] h-[35px] sm:w-[160px] sm:h-[40px] lg:w-[220px] lg:h-[58px] rounded-md'>
          <img className='w-[22px] h-[22px]' src={userSvg} alt="" />
          <p className='text-[#000000]'>{result.applied} applied</p>
        </div>
        <button className='flex w-[90px] h-[35px] sm:w-[120px] sm:h-[40px] lg:w-[167px] lg:h-[58px] bg-[#00538F] items-center justify-center   rounded-md text-white px-4 py-2'>Apply <FaGreaterThan className='ml-2 mt-2' /></button>
      </div>
    </div>
  );
};

export default SeSearchDetails;