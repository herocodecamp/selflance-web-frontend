import React from 'react';
import {TfiWrite} from 'react-icons/tfi'
import {BsCalendarDate} from 'react-icons/bs'
import {BiDollarCircle} from 'react-icons/bi'
import {BsAlarm} from 'react-icons/bs'

const ManageDetails = ({ manage }) => {
  return (
    <div className='space-y-4 pt-12'>
      <div className='flex items-center justify-between'>
        <p>Count down</p>
        <p className='text-xl font-bold'>Day : <span className='text-xl text-[#D57635]'>03</span> : : Hours : <span className='text-xl text-[#00538F]'>24</span> : : Minutes : <span className='text-xl text-[#00538F]'>30</span></p>
      </div>
      <div className='sm:flex flex-grow  border border-solid border-gray-300 shadow-lg bg-[#FFFFFF] p-4 space-x-6'>
        <div>
          <img src={manage.image} className="sm:w-[361px] w-full h-[300px] justify-center items-center sm:h-[371px] rounded-lg" alt="img" />
        </div>

        <div className='space-y-6'>
          <div className='flex space-x-2 items-center'>
            <img src={manage.image} className="sm:w-[58px] w-[38px] h-[38px] mt-2 sm:h-[58px] rounded-full" alt="" />
            <h4>Name here</h4>
          </div>

          <h4 className='text-[#00538F] font-bold sm:text-2xl'>{manage.title}</h4>

        
            <p className='flex space-x-4'><TfiWrite className='w-[28px] h-[26px]'/> <span className='text-[#979797] sm:text-xl font-bold'>Write a note</span></p>

            <p className='flex space-x-4'><BsCalendarDate className='w-[28px] h-[26px]'/> <span className='text-[#D57635] sm:text-xl font-bold'>march 3 2023</span></p>

            <p className='flex space-x-4'><BiDollarCircle className='w-[28px] h-[26px]'/> <span className='text-[#D57635] sm:text-xl font-bold'>$900</span></p>

            <div className='flex space-x-6'>
              <button className='bg-[#F4F4F4] p-4 font-bold text-sm border border-[#D1D1D1] text-black rounded'>waiting for requirement</button>

              <button className='bg-[#00538F] flex items-center p-4 font-bold text-sm border border-[#00538F] text-white rounded'><BsAlarm className='w-[16px] h-[16px] mr-4'/> <span> add alarm for notification</span></button>
            </div>
        
        </div>

      </div>

    </div>
  );
};

export default ManageDetails;