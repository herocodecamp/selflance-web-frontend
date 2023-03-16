import React from 'react';
import { TfiWrite } from 'react-icons/tfi'
import { BsCalendarDate } from 'react-icons/bs'
import { BiDollarCircle } from 'react-icons/bi'
import { BsAlarm } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const ManageDetails = ({ manage }) => {
  return (
    <div class='mt-4'>
      <div class='flex items-center justify-between mb-1 lg:mb-4'>
        <p class="text-[#5E5E5E] text-[10px] md:text-lg">Count Down</p>
        <p class='text-[8px] md:text-xl font-semibold sm:font-bold'>Day : <span class='text-[#D57635]'>03</span> : : Hours : <span class='text-[#00538F]'>24</span> : : Minutes : <span class=' text-[#00538F]'>30</span></p>
      </div>

      <div class='grid grid-cols-5 gap-1 sm:flex-wrap border border-solid border-gray-300 shadow-lg bg-[#FFFFFF] rounded-md lg:rounded-2xl p-2 md:p-4'>
        <div class="sm:col-start-1 col-start-1 col-end-7 sm:col-span-2">
          <img src={manage.image} className="inline sm:h-[250px] lg:h-[100%] w-full sm:w-auto rounded-lg" alt="img" />
        </div>

        <div class='sm:col-start-3 col-start-1 col-end-7 sm:col-span-3 space-y-1 md:space-y-3 lg:space-y-6 ml-1 md:ml-5'>

          <div class='grid grid-cols-2 items-center'>
            <div class='sm:col-start-1 sm:col-span-1'>
              <div class="flex flex-row flex-wrap items-center">
                <img src={manage.profile} class="inline md:w-[58px] w-[20px] h-[20px] mt-2 md:h-[58px] rounded-full" alt="" />
                <h4 class="ml-1 md:ml-3 text-[8px] md:text-base font-semibold text-[#5E5E5E] opacity-80">{manage.name}</h4>
              </div>
            </div>


            <div class='col-start-2 col-span-1 text-right md:mr-5'>
              {/* use Conditionally */}
              {/* <button class='bg-[#D57635] border border-[#D57635] py-1 px-4 rounded text-white absolute right-6 top-6'>In progress</button> */}

              <button class='bg-[#27AE60] w-[60px] md:w-[100px] h-auto border border-[#27AE60]  py-1 rounded text-[5px] md:text-xs text-white'>In Progress</button>

            </div>
          </div>

          <div class="col-span-full">
            
            <h4 className='text-[#00538F] font-bold text-[8px] md:text-base lg:text-2xl'>
            {manage.title}
            </h4>
            


        </div>

        <div class="col-span-full">
          <div class="flex flex-row flex-wrap items-center">
            <TfiWrite className='w-[14px] h-[12px] lg:w-[28px] lg:h-[26px] text-[#979797] opacity-80' />
          
            <p className='text-[#979797] text-[10px] lg:text-base font-bold ml-2 lg:ml-4'>Write a note</p>
          </div>
        </div>
        <div class="col-span-full">
          <div class="flex flex-row flex-wrap items-center">
            <BsCalendarDate className='w-[14px] h-[12px] lg:w-[28px] lg:h-[26px] text-[#979797] opacity-80' />
          
            <p className='text-[10px] lg:text-base font-bold ml-2 lg:ml-4 text-[#D57635]'>{manage.time}</p>
          </div>
        </div>
        <div class="col-span-full">
          <div class="flex flex-row flex-wrap items-center">
            <BiDollarCircle className='w-[14px] h-[12px] lg:w-[28px] lg:h-[26px] text-[#979797] opacity-80' />
          
            <p className='text-[10px] lg:text-base font-bold ml-2 lg:ml-4 text-[#D57635]'>{manage.price}</p>
          </div>
        </div>


          <div class='col-span-full'>
            {/* use Conditionally */}
            <div class="flex flex-row flex-wrap justify-between lg:justify-start lg:gap-5">
              <button className='bg-[#27AE60] lg:px-6 px-4  py-1 lg:font-bold font-semibold text-[5px] lg:text-sm border border-[#27AE60] text-white rounded truncate'>Requirement Send</button>

              <button className='bg-[#00538F] flex items-center px-1 md:px-4 lg:px-6 sm:px-4 lg:font-bold font-semibold text-[5px] lg:text-sm border border-[#00538F] text-white rounded truncate'><BsAlarm className='mr-1 lg:mr-4' /> <span> Add Alarm for Notification</span></button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ManageDetails;