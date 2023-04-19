import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { BsCheckSquare } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LeftBar = () => {

  const {userId}= useSelector(state=>state.Auth)

  return (
    <div className='px-8 py-8 hidden sm:block'>

      <div className='border border-[#D1D1D1] w-[150px] sm:w-[247px] bg-[#ffff] rounded-lg p-6 lg:h-[833px]'>

        <ul className='space-y-8'>

          <li className='space-x-6 flex items-center flex-grow'><RxDashboard className='text-xl text-[#92929D]' /> <span className='text-[#00538F] leading-4 font-medium text-sm'>Dashboard</span></li>

          <li className='space-x-6 flex items-center flex-grow'><AiOutlineHome className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'><Link to='/'>Home</Link></span></li>

          <li className='space-x-6 flex items-center flex-grow'><AiOutlineMessage className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Message</span></li>

          <li className='space-x-6 flex items-center flex-grow'><BsCheckSquare className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'><Link to='/job_post/new'>Post a job</Link></span></li>

          <li className='space-x-6 flex items-center flex-grow'><AiOutlineCalendar className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Orders</span></li>

          <li className='space-x-6 flex items-center flex-grow'><AiOutlineClockCircle className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'><Link to={`/settings/${userId}`}>Profile</Link></span></li>

          <li className='space-x-6 flex items-center flex-grow'><FiSettings className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'><Link to={`/settings/${userId}`}>setting</Link></span></li>


        </ul>
      </div>


    </div>
  );
};

export default LeftBar;