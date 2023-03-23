import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

const SeCreateOfferTopBar = () => {
  return (
    <div>
      <div className='flex justify-between items-center pb-6'>
        <div className='flex space-x-10 items-center'>
          <span><BiArrowBack className='text-[#000000] text-2xl' /></span>
          <h3 className='text-[#00538F] text-xl font-bold'>Create an Offer</h3>
        </div>
        <div>
     
          <span><BsThreeDotsVertical className='text-[#121F3E]  text-2xl' /></span>
        </div>
      </div>
    </div>
  );
};

export default SeCreateOfferTopBar;