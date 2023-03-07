import React from 'react';

const SellerGigsDetails = ({ gig }) => {
  return (
    <div>
      <div className='bg-[ #FFFFFF] rounded-lg space-y-2 relative'>
        <div>
          <img src={gig.image} className="rounded w-[296] h-[154] border-2 border-[#FAFAFB]" alt="alt" />
        </div>
        <h2 className='font-poppins  text-[#171725] leading-6 font-semibold'>{gig.title}</h2>

        <div>
          <div className='flex items-center space-x-6'>
            <img className="w-[46px] h-[46px] rounded-full" src={gig.image} alt="img" />
            <p className='text-[#171725] font-semibold leading-6'>john</p>

            <span className='text-[#484848] font-bold text-xl absolute right-4'>$ 20</span>
          </div>
        </div>
        <div class="flex flex-wrap">
          <img class="w-12 h-12 rounded-full" src={gig.image} alt="Friend 1" />

        </div>
      </div>

    </div>
  );
};

export default SellerGigsDetails;