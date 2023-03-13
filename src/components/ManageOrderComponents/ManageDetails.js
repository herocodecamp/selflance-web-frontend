import React from 'react';
import { TfiWrite } from 'react-icons/tfi'
import { BsCalendarDate } from 'react-icons/bs'
import { BiDollarCircle } from 'react-icons/bi'
import { BsAlarm } from 'react-icons/bs'

const ManageDetails = ({ manage }) => {
  return (
    <div className='space-y-4 pt-6'>
      <div className='flex items-center justify-between'>
        <p>Count down</p>
        <p className='text-xl font-bold'>Day : <span className='text-xl text-[#D57635]'>03</span> : : Hours : <span className='text-xl text-[#00538F]'>24</span> : : Minutes : <span className='text-xl text-[#00538F]'>30</span></p>
      </div>
      <div className='sm:flex flex-grow  border border-solid border-gray-300 shadow-lg bg-[#FFFFFF] p-4 space-x-6 relative'>
        <div>
          <img src={manage.image} className="sm:w-[361px] w-full h-[300px] justify-center items-center sm:h-[371px] rounded-lg" alt="img" />
        </div>

        <div className='space-y-6'>

          <div className='flex'>
            <div className='flex space-x-2 items-center'>
              <img src={manage.profile} className="sm:w-[58px] w-[38px] h-[38px] mt-2 sm:h-[58px] rounded-full" alt="" />
              <h4>{manage.name}</h4>
            </div>


            <div>
              {/* use Conditionally */}
              {/* <button className='bg-[#D57635] border border-[#D57635] py-1 px-4 rounded text-white absolute right-6 top-6'>In progress</button> */}

              <button className='bg-[#27AE60] border border-[#27AE60] sm:px-4 px-2 py-1 rounded text-white absolute right-6 top-6 truncate'>In progress</button>

            </div>
          </div>


          <h4 className='text-[#00538F] font-bold sm:text-2xl'>{manage.title}</h4>


          <p className='flex space-x-4'><TfiWrite className='w-[28px] h-[26px]' /> <span className='text-[#979797] sm:text-xl font-bold'>Write a note</span></p>

          <p className='flex space-x-4'><BsCalendarDate className='w-[28px] h-[26px] text-[#979797] ' /> <span className='text-[#D57635] sm:text-xl font-bold'>{manage.time}</span></p>

          <p className='flex space-x-4'><BiDollarCircle className='w-[28px] h-[26px] text-[#979797]' /> <span className='text-[#D57635] sm:text-xl font-bold'>$ {manage.price}</span></p>

          <div className='flex space-x-12'>
            {/* use Conditionally */}

            {/* <button className='bg-[#F4F4F4] sm:p-4 p-2 font-bold text-sm border border-[#D1D1D1] truncate text-black rounded'>waiting for requirement</button> */}

            <button className='bg-[#27AE60] lg:px-6 px-4  py-1 lg:font-bold font-semibold text-sm border border-[#27AE60] text-white rounded truncate'>requirement send</button>

            <button className='bg-[#00538F] flex items-center px-4 lg:px-6 sm:px-4 lg:font-bold font-semibold text-sm border border-[#00538F] text-white rounded truncate'><BsAlarm className='w-[16px] h-[16px] mr-4' /> <span> add alarm for notification</span></button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ManageDetails;