import React from 'react';
import orderProcess from '../../Assets/svg/order-process.svg'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

const OrderProcess = () => {
const navigate = useNavigate()

  const handleNavigateRequirement = () => {
    navigate('/submit_requirement')
  }
  return (
    <div className='sm:px-12 px-4 sm:py-4'>
      <h2 className='text-[#00538F] sm:xl leading-5 font-bold flex space-x-4 items-center'> <BiArrowBack className='text-xl sm:text-2xl text-[#000000] hover:cursor-pointer' /> <span>Add New Card</span></h2>
      <div className='flex items-center justify-center pt-16 sm:pt-0 sm:h-screen w-full sm:w-1/3 mx-auto text-center'>

        <div className='sm:space-y-3 space-y-6'>
          <img src={orderProcess} className="max-h-[300px] max-w-[200px] sm:max-w-[250px] mx-auto" alt="order" />
          <h2 className='sm:text-xl text-base leading-5 text-[#121F3E] font-bold '>We’re processing your Order</h2>
          <p className='text-[#8E8E8E] font-semibold text-base leading-5'>Stay tuned...</p>
          <div className='text-center'>
        <button
          
          className={'font-bold text-base bg-[#00538F] text-white sm:px-4 sm:py-2 px-4 py-2  rounded-lg'}
          onClick={handleNavigateRequirement}
        >Next</button>
      </div>
        </div>

      </div>
    </div>
  );
};

export default OrderProcess;