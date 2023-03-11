import React from 'react';
import orderProcess from '../../Assets/svg/order-process.svg'
import { BiArrowBack } from 'react-icons/bi'

const OrderProcess = () => {
  return (
    <div className='px-12 py-4'>
      <h2 className='text-[#00538F] sm:xl leading-5 font-bold flex space-x-4 items-center'> <BiArrowBack className='text-xl sm:text-2xl text-[#000000] hover:cursor-pointer' /> <span>Add New Card</span></h2>
      <div className='flex items-center justify-center h-screen w-1/3 mx-auto text-center'>

        <div className='space-y-3'>
          <img src={orderProcess} alt="order" />
          <h2 className='sm:text-xl text-base leading-5 text-[#121F3E] font-bold '>We’re processing your Order</h2>
          <p className='text-[#8E8E8E] font-semibold text-base leading-5'>Stay tuned...</p>
        </div>

      </div>
    </div>
  );
};

export default OrderProcess;