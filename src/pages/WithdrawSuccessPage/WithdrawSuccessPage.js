import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdNotificationsNone } from 'react-icons/md';
import checkSuccess from '../../Assets/success-image.svg'

const WithdrawSuccessPage = () => {
  return (
    <div className="sm:p-12 p-2">
      <div className='flex justify-between items-center border-b-2 border-[#D1D1D1] pb-6'>
        <div className='flex space-x-10 items-center'>
          <span><BiArrowBack className='text-[#000000] text-2xl' /></span>
          <h3 className='text-[#00538F] text-xl font-bold'>Success</h3>
        </div>
        <div className='flex space-x-10 items-center'>
          <span><MdNotificationsNone className='text-[#00538F] text-2xl' /> </span>
          <span><BsThreeDotsVertical className='text-[#121F3E]  text-2xl' /></span>
        </div>
      </div>
      <div className='py-12 space-y-6 w-11/12 sm:w-1/2 mx-auto'>
        <div>
          <img src={checkSuccess} className="w-[250px] mx-auto" alt="" />
        </div>

        <div className='pt-6 sm:w-[400px] mx-auto space-y-4 sm:space-y-6'>
          <h3 className='font-bold text-xl text-center text-[#121F3E] lg:text-2xl'>Withdraw Complete!</h3>
          <p className='text-[#8E8E8E] text-center'>You will be notified further for this job
            <span className='text-[#121F3E] ml-2'>Thankyou!</span> </p>
        
          <div className='space-y-3 pt-6'>
            <button className='bg-[#00538F] text-white font-bold rounded-md px-4 py-2 lg:px-6 lg:py-2 w-full mx-auto'>Browse more jobs</button>
            <button className='border-2 border-[#FF3B30] text-[#FF3B30] font-bold rounded-md px-4 py-2 lg:px-6 lg:py-2 w-full mx-auto'>Back to dashboard</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default WithdrawSuccessPage;