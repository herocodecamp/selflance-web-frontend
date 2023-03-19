import React, { useState } from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineFileDone, AiOutlineHome, AiOutlineMenu, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineShop } from 'react-icons/ai';
import { BsCheckSquare } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { MdAppSettingsAlt } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx'
import CatagoriesDropdown from '../DashboardComponent/CatagoriesDropdown';

const SeDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const [active, setActive] = useState(1)

  const handleActive = (activeId) => {
    setActive(activeId)
  }

  const handleActiveClass = (activeId) => {
    let classes = 'space-x-6 font-semibold flex hover:cursor-pointer items-center flex-grow'

    if (activeId === active) {
      classes += ' text-[#00538F] '
    }
    return classes;
  }


  return (

    <>
      <button className='absolute top-20 left-6 sm:hidden' onClick={handleToggle}><AiOutlineMenu className='text-2xl' /></button>

      <div
        className={`fixed inset-y-0 bg-[#ffff]  border border-[
          #D1D1D1] left-0  p-8 transition-transform z-10  duration-300 transform ${isOpen ? 'translate-x-0 overflow-y-auto' : '-translate-x-full'
          }`}
      >
        <button className='fixed top-2 right-2' onClick={handleToggle}><RxCross1 className="text-2xl" /></button>

        <div className='bg-[#ffff] rounded-lg p-6'>

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
        <CatagoriesDropdown />
      </div>

    </>



  );
};

export default SeDrawer;