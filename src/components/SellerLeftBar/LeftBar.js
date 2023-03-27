import React from 'react';
import { AiOutlineHome, AiOutlineIdcard } from 'react-icons/ai'

import { BsPlusCircle, BsFillFileEarmarkLockFill } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import {BiMessageRoundedDots} from 'react-icons/bi'

const LeftBar = () => {

  return (
    <div className='px-8 py-8 hidden sm:block'>

      <div className='border border-[#D1D1D1] w-[150px] sm:w-[247px] bg-[#ffff] rounded-lg p-6 lg:h-[833px]'>

        <ul className='space-y-8'>
          <li className='space-x-6 flex items-center flex-grow'><AiOutlineHome className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Home</span></li>

          <li className='space-x-6 flex items-center flex-grow'><RxDashboard className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Dashboard</span></li>

          <li className='space-x-6 flex items-center flex-grow'><AiOutlineIdcard className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>ID Verification</span></li>
          
          <li className='space-x-6 flex items-center flex-grow'><BsPlusCircle className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Create Workspace</span></li>

          <li className='space-x-6 flex items-center flex-grow'><BiMessageRoundedDots className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Messages</span></li>

          <li className='space-x-6 flex items-center flex-grow'><AiOutlineCalendar className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Orders</span></li>

          <li className='space-x-6 flex items-center flex-grow'><BsFillFileEarmarkLockFill className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Guideline Strikes</span></li>


          <li className='space-x-6 flex items-center flex-grow'><AiOutlineClockCircle className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Profile</span></li>

          <li className='space-x-6 flex items-center flex-grow'><FiSettings className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Setting</span></li>


        </ul>
      </div>


    </div>
  );
};

export default LeftBar;