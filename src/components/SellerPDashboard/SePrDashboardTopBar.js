import { Progress } from 'flowbite-react';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdNotificationsNone } from 'react-icons/md';
import sellerProfile from '../../Assets/seller_profile(10).png'
import starIcon from '../../Assets/Star-Gold.png'

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
      <div className='px-4 py-2 sm:px-8 sm:py-4 bg-[#00538F] drop-shadow-lg rounded-lg space-y-2'>
        <img className='shrink-0 w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[109px] lg:h-[109px] rounded-full' src={sellerInfo.image} alt="" />
        <div className='flex items-center'>

          <div>
            <h4 className='leading-10 text-xl sm:text-2xl lg:text-4xl font-bold text-white'>Hi {sellerInfo.name}</h4>
            <h5 className='leading-10 text-xl sm:text-2xl lg:text-3xl text-white flex items-center space-x-1'> <span>{sellerInfo.country}</span><span className='font-bold text-2xl'>.</span>  <span></span>{sellerInfo.level}</h5>
          </div>

          <div className='bg-[#FFFFFF] rounded-full px-4 py-4 sm:px-6 sm:py-6'>
            <div className='bg-[#F4A14D] bg-opacity-20 w-[34px] h-[34px] rounded-full flex items-center justify-center'>
              <img src={starIcon} className="w-[20px] h-[20px] rounded-full shrink-0" alt="" />
            </div>
            <div>
              <Progress
                progress={sellerInfo.rating}
                size="lg"
                color="blue"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SePrDashboardTopBar;