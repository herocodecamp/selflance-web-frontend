import React, { useState } from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlineHome, AiOutlineMenu, AiOutlineMessage } from 'react-icons/ai';
import { BsCheckSquare } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx'

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (

    <>
      <button className='fixed top-20 left-6 md:hidden' onClick={handleToggle}><AiOutlineMenu className='text-2xl' /></button>

      <div
        className={`fixed inset-y-0 bg-[#ffff]  border border-[
          #D1D1D1] left-0 w-64  p-8 transition-transform z-10  duration-300 transform ${isOpen ? 'translate-x-0 overflow-y-auto' : '-translate-x-full'
          }`}
      >
        <button className='fixed top-2 right-2' onClick={handleToggle}><RxCross1 className="text-2xl" /></button>

        <div className='bg-[#ffff] rounded-lg p-6'>

          <ul className='space-y-8'>

            <li className='space-x-6 flex items-center flex-grow'><RxDashboard className='text-xl text-[#92929D]' /> <span className='text-[#00538F] leading-4 font-medium text-sm'>Dashboard</span></li>

            <li className='space-x-6 flex items-center flex-grow'><AiOutlineHome

              className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>Home</span></li>

            <li className='space-x-6 flex items-center flex-grow'><AiOutlineMessage className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>message</span></li>

            <li className='space-x-6 flex items-center flex-grow'><BsCheckSquare className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>post a job</span></li>

            <li className='space-x-6 flex items-center flex-grow'><AiOutlineCalendar className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>orders</span></li>

            <li className='space-x-6 flex items-center flex-grow'><AiOutlineClockCircle className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>profile</span></li>

            <li className='space-x-6 flex items-center flex-grow'><FiSettings className='text-xl text-[#92929D]' /> <span className='text-[#171725] leading-4 font-medium text-sm'>setting</span></li>


          </ul>
        </div>
      </div>

    </>



  );
};

export default Drawer;