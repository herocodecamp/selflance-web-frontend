import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdNotificationsNone } from 'react-icons/md';
import sellerProfile from '../../Assets/seller_profile(10).png'

const sellerInfo = {
  _id: 1,
  image: sellerProfile,
  name: 'Suksima',
  country: 'Bangladesh',
  level: 'Seller Level 1',
  rating: 70,
  personalBalance: 5000.32,
  last_month_earning: 2000.25,
  average_selling: 500.32,
  active_order: 5,
  seller_standard: [
    {
      title: 'Response Rate',
      percent: 70,
      increase: `increase ${15}%`
    },
    {
      title: 'Order Completion',
      percent: 70,
      increase: `increase ${15}%`
    },
    {
      title: 'Order Cancelation',
      percent: 70,
      increase: `decrease ${15}%`
    },
    {
      title: 'Order Completion',
      percent: 70,
      increase: `increase ${15}%`
    },

  ]

}

const SePrDashboardTopBar = () => {
  return (
    <div className='px-12 w-full'>
      <div className='flex justify-between items-center border-b-2 border-[#D1D1D1] pb-6'>
        <div className='flex space-x-10 items-center'>
          <span><BiArrowBack className='text-[#000000] text-2xl' /></span>
          <h3 className='text-[#00538F] text-xl font-bold'>Job</h3>
        </div>
        <div className='flex space-x-10 items-center'>
          <span><MdNotificationsNone className='text-[#00538F] text-2xl' /> </span>
          <span><BsThreeDotsVertical className='text-[#121F3E]  text-2xl' /></span>
        </div>
      </div>
      <div>
        <img src={ } alt="" />
      </div>
    </div>
  );
};

export default SePrDashboardTopBar;