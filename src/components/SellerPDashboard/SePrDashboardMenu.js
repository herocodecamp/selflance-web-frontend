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

      <ul className='bg-[#ffff] w-[66px] space-y-4 mx-auto'>
        <li className='w-[22px] h-[22px] border-l-4 border-[#00538F] pl-4' to="/"><RxDashboard className="text-[#92929D]" /></li>
        <li className='w-[22px] h-[22px] pl-4' to="/"><AiOutlineMessage className="text-[#92929D]" /></li>
        <li className='w-[22px] h-[22px]  pl-4' to="/"><BsCheckSquare className="text-[#92929D]" /></li>
        <li className='w-[22px] h-[22px]  pl-4' to="/"><AiOutlineCalendar className="text-[#92929D]" /></li>
        <li className='w-[22px] h-[22px] pl-4' to="/"><AiOutlineClockCircle className="text-[#92929D]" /></li>
        <li className='w-[22px] h-[22px]  pl-4' to="/"><FiSettings className="text-[#92929D]" /></li>
      </ul>

    </div>
  );
};

export default SePrDashboardMenu;