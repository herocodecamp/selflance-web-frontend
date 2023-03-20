import React from 'react';
import { AiFillFileText, AiOutlineFileDone, AiOutlineHome, AiOutlinePlusCircle, AiOutlineShop } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { BsCheckSquare } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import { MdAppSettingsAlt } from 'react-icons/md';

const SePrDashboardMenu = () => {
  return (
    <div>

      <ul className='bg-[#ffff] w-[44px] sm:w-[66px] space-y-4 mx-auto'>
        <li className='w-[22px] h-[22px] border-l-4 border-[#00538F] pl-4 hover:cursor-pointer' to="/"><RxDashboard className="text-[#92929D]" /></li>
        <li className='w-[22px] h-[22px] pl-4 hover:cursor-pointer' to="/"><AiOutlineMessage className="text-[#92929D]" /></li>
        <li className='w-[22px] h-[22px]  pl-4 hover:cursor-pointer' to="/"><BsCheckSquare className="text-[#92929D]" /></li>
        <li className='w-[22px] h-[22px]  pl-4 hover:cursor-pointer' to="/"><AiOutlineCalendar className="text-[#92929D] hover:cursor-pointer" /></li>
        <li className='w-[22px] h-[22px] pl-4 hover:cursor-pointer' to="/"><AiOutlineClockCircle className="text-[#92929D]" /></li>
        <li className='w-[22px] h-[22px]  pl-4 hover:cursor-pointer' to="/"><FiSettings className="text-[#92929D]" /></li>
      </ul>

    </div>
  );
};

export default SePrDashboardMenu;