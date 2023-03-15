import React, { useState } from 'react';
import { AiFillFileText, AiOutlineFileDone, AiOutlineHome, AiOutlinePlusCircle, AiOutlineShop } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { BsCheckSquare } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import { MdAppSettingsAlt } from 'react-icons/md';

const SeLeftBar = () => {

  const [active, setActive] = useState(1)

  const handleActive = (activeId) => {
    setActive(activeId)
  }

  const handleActiveClass = (activeId) => {
    let classes = 'space-x-6 flex hover:cursor-pointer items-center flex-grow'

    if (activeId === active) {
      classes +=' text-[#00538F] '
    }
    return classes;
  }

  return (
    <div className='px-8 py-8 hidden sm:block'>

      <div className='border border-[
      #D1D1D1] w-[150px] sm:w-[247px] bg-[#ffff] rounded-lg p-6 lg:h-[833px]'>

        <ul className='space-y-8'>

          <li
            onClick={() => handleActive(1)}
            className={handleActiveClass(1)}><AiOutlineHome className='text-xl text-[#92929D]' /> <span className='leading-4 font-medium text-sm'>Home</span></li>

          <li
            onClick={() => handleActive(2)}
            className={handleActiveClass(2)}><RxDashboard className='text-xl text-[#92929D]' /> <span className=' leading-4 font-medium text-sm'>Dashboard</span></li>

          <li
            onClick={() => handleActive(3)}
            className={handleActiveClass(3)}><MdAppSettingsAlt className='text-xl text-[#92929D]' /> <span className='leading-4 font-medium text-sm'>ID Verification*</span></li>

          <li
            onClick={() => handleActive(4)}
            className={handleActiveClass(4)}><AiOutlinePlusCircle className='text-xl text-[#92929D]' /> <span className='leading-4 font-medium text-sm'>Create workplace</span></li>

          <li
            onClick={() => handleActive(5)}
            className={handleActiveClass(5)}><AiOutlineMessage className='text-xl text-[#92929D]' /> <span className='leading-4 font-medium text-sm'>Messages</span></li>

          <li
            onClick={() => handleActive(6)}
            className={handleActiveClass(6)}><AiOutlineShop className='text-xl text-[#92929D]' /> <span className='leading-4 font-medium text-sm'>Orders</span></li>

          <li
            onClick={() => handleActive(7)}
            className={handleActiveClass(7)}><AiOutlineFileDone className='text-xl text-[#92929D]' /> <span className=' leading-4 font-medium text-sm'>Guidelines strikes</span></li>

          <li
            onClick={() => handleActive(8)}
            className={handleActiveClass(8)}><AiOutlineClockCircle className='text-xl text-[#92929D]' /> <span className='leading-4 font-medium text-sm'>Profile</span></li>

          <li
            onClick={() => handleActive(9)}
            className={handleActiveClass(9)}><FiSettings className='text-xl text-[#92929D]' /> <span className='leading-4 font-medium text-sm'>Settings</span></li>


        </ul>
      </div>


    </div>
  );
};

export default SeLeftBar;