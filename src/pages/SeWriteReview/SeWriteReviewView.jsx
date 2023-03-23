import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdNotificationsNone } from 'react-icons/md';
import review_seller from '../../Assets/review_seller.png'
const seller = {
  image: review_seller,
  level: 'Seller Level - 1',
  name: 'William Liam'
}

const SeWriteReviewView = () => {
  return (
    <div>
      <div className='flex justify-between items-center border-b-2 border-[#D1D1D1] pb-6'>
        <div className='flex space-x-10 items-center'>
          <h3 className='text-[#000000] text-xl font-bold'>Write a Review</h3>
        </div>
        <div className='flex space-x-10 items-center'>
          <span><MdNotificationsNone className='text-[#00538F] text-2xl' /> </span>
          <span><BsThreeDotsVertical className='text-[#121F3E]  text-2xl' /></span>
        </div>
      </div>

      <div className='space-y-3 pt-4'>
        <h4 className='text-[#000000] text-xl sm:text-2xl font-bold'>Review your experience</h4>
        <p className='text-base font-bold text-[#5E5E5E]'>How would you rate your overall experience with this seller?</p>
      </div>

      <div className='sm:w-1/2 mx-auto text-center space-y-3 pt-6 sm:pt-10'>
        <img src={seller.image} className="shrink-0 w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[297px] lg:h-[297px] mx-auto rounded-full" alt="" />
        <h4 className='text-xl font-bold text-[#121F3E] w-[200px] md:w-[250px] lg:w-[297px]  mx-auto '>{seller.name}</h4>
        <p className='text-base font-semibold text-[#4F5350] w-[200px]  md:w-[250px] lg:w-[297px]  mx-auto '>{seller.level}</p>

      </div>

    </div>
  );
};

export default SeWriteReviewView;