import React from 'react';
import GigMutuals from './GigMutuals';
import { Link } from 'react-router-dom';

const SellerGigsDetails = ({ gig }) => {
  return (
    <div>
      <div className='bg-[ #FFFFFF] shadow px-2 py-2 rounded-lg space-y-2 relative'>
        <div>
          <img src={gig.image} className="rounded sm:w-[296] mx-auto sm:h-[154] w-full border-2 border-[#FAFAFB]" alt="alt" />
        </div>
        <h2 className='font-poppins  text-[#171725] leading-6 font-semibold'>
          <Link to="/users/search/:userID/gig-details">{gig.title}</Link></h2>

        <div>
          <div className='flex items-center space-x-6'>
            <img className="w-[46px] h-[46px] rounded-full" src={gig.image} alt="img" />
            <p className='text-[#171725] font-semibold leading-6'>john</p>

            <span className='text-[#484848] font-bold text-xl absolute right-4'>$ 20</span>
          </div>
        </div>
        
        <GigMutuals />

      <button className='w-full mx-auto bg-[#00538F] rounded-lg text-white font-semibold leading-6 py-2'><Link to="/inbox/sellername">chat</Link></button>
      </div>

    </div>
  );
};

export default SellerGigsDetails;