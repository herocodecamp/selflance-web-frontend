import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

const AgreementTopBar = () => {
  return (
    <div>
      <div className='flex justify-between items-center pb-6'>
        <div className='flex space-x-10 items-center'>
          <span><BiArrowBack className='text-[#000000] text-2xl' /></span>

          <h3 className='text-[#00538F] text-xl font-bold'>Cooperation Agreement</h3>
        </div>
        <div>

          <span><BsThreeDotsVertical className='text-[#121F3E]  text-2xl' /></span>
        </div>
      </div>
      <p className='text-base sm:text-xl text-[#D57635] leading-7 pl-6 sm:pl-12'>This is contract confirmation form which is filled by seller.</p>
    </div>
  );
};

export default AgreementTopBar;