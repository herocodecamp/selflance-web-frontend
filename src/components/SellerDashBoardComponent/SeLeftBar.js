import React, { useState } from 'react';
import { AiFillFileText, AiOutlineFileDone, AiOutlineHome, AiOutlinePlusCircle, AiOutlineShop } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { BsCheckSquare } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { RxDashboard } from 'react-icons/rx'
import { MdAppSettingsAlt } from 'react-icons/md';
import { useParams, Link } from 'react-router-dom';

const SeLeftBar = () => {

  const [active, setActive] = useState(1)

  const params = useParams()

  const handleActive = (activeId) => {
    setActive(activeId)
  }

  const handleActiveClass = (activeId) => {
    let classes = 'space-x-6 font-semibold flex hover:cursor-pointer items-center flex-grow'

    if (activeId === active) {
      classes +=' text-[#00538F] '
    }
    return classes;
  }

  return (
    <div className='lg:px-8 px-4 py-8 hidden sm:block'>

      <div className='border border-[
      #D1D1D1] sm:w-[150px] md:w-[200px] lg:w-[247px] bg-[#ffff] rounded-lg p-6 lg:h-[833px]'>

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
            className={handleActiveClass(4)}><AiOutlinePlusCircle className='text-xl text-[#92929D]' /> <span className='leading-4 font-medium text-sm'><Link to={`/${params.userID}/gig/create`}>Create workplace</Link></span></li>

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
            className={handleActiveClass(8)}><AiOutlineClockCircle className='text-xl text-[#92929D]' /> <span className='leading-4 font-medium text-sm'><Link to={`/users/${params.userID}/profile`}>Profile</Link></span></li>

          <li
            onClick={() => handleActive(9)}
            className={handleActiveClass(9)}><FiSettings className='text-xl text-[#92929D]' /> <span className='leading-4 font-medium text-sm'><Link to={`/settings/${params.userID}`}>Settings</Link></span></li>


        </ul>
      </div>


    </div>
  );
};

export default SeLeftBar;