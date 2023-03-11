import React, { useState } from 'react';
import { AiOutlineLaptop, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { BsCode } from 'react-icons/bs';
import { FaBusinessTime } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { MdGraphicEq } from 'react-icons/md';
import { SiGnusocial } from 'react-icons/si';
import { TfiWrite } from 'react-icons/tfi';


const CatagoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative w-full inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          Categories
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
            />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2-2h12v8H4V4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

            <ul className='grid grid-cols-1 gap-5'>

              <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center bg-[#F5F5F5] border border-[#DFDFDF] rounded-lg  sm:px-2 sm:py-2 px-1 py-1 lg:px-4 lg:py-4'>
                <span className='bg-[#FF7A00] w-[30px] h-[30px] rounded-full '><AiOutlineLaptop className='text-white text-xl w-50 mx-auto mt-1' /></span>
                <p className='font-bold text-sm leading-7 text-[#1D263A]'>Digital Marketing</p>
              </li>

              <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg lg:px-4 sm:px-2 sm:py-2 px-1 py-1  lg:py-4'>
                <span className='bg-[#00538F] w-[30px] h-[30px] rounded-full'><MdGraphicEq className='text-white text-xl w-50 mx-auto mt-1' /></span>
                <p className='font-bold text-sm leading-7 text-[#1D263A]'>Graphic Design</p>
              </li>

              <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg lg:px-4 sm:px-2 sm:py-2 px-1 py-1  lg:py-4'>
                <span className='bg-[#144BD6] w-[30px] h-[30px] rounded-full'><AiOutlineVideoCameraAdd className='text-white text-xl w-50 mx-auto mt-1' /></span>
                <p className='font-bold text-sm leading-7 text-[#1D263A]'>Video editing</p>
              </li>

              <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg lg:px-4 sm:px-2 sm:py-2 px-1 py-1  lg:py-4'>
                <span className='bg-[#FF3B30] w-[30px] h-[30px] rounded-full'><FaBusinessTime className='text-white text-xl w-50 mx-auto mt-1' /></span>
                <p className='font-bold text-sm leading-7 text-[#1D263A]'>Business</p>
              </li>

              <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center  bg-[#ffff] border border-[#DFDFDF] rounded-lg px-1  py-1'>
                <span className='bg-[#7E5BFF] w-[30px] h-[30px] rounded-full'><TfiWrite className='text-white text-xl w-50 mx-auto mt-1' /></span>
                <p className='font-bold text-sm leading-7 text-[#1D263A]'>Writing</p>
              </li>

              <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center  bg-[#ffff] border border-[#DFDFDF] rounded-lg  px-1 py-1'>
                <span className='bg-[#06AEF3] w-[30px] h-[30px] rounded-full'><BsCode className='text-white text-xl w-50 mx-auto mt-1' /></span>
                <p className='font-bold text-sm leading-7 text-[#1D263A]'>Programming</p>
              </li>

              <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center  bg-[#ffff] border border-[#DFDFDF] rounded-lg lg: px- sm:px-2 sm:py-2 px-1 py-1 lg:py-4'>
                <span className='bg-[#F2C94C] w-[30px] h-[30px] rounded-full'><SiGnusocial className='text-white text-xl w-50 mx-auto mt-1' /></span>
                <p className='font-bold text-sm leading-7 text-[#1D263A]'>Social media</p>
              </li>

              <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg lg:px-4 sm:px-2 sm:py-2 px-1 py-1 lg:py-4 '>
                <span className='bg-[#6FCF97] w-[30px] h-[30px] rounded-full'><GiArtificialIntelligence className='text-white text-sm w-50 mx-auto mt-1' /></span>
                <p className='font-bold text-sm leading-7 text-[#1D263A]'>AI Services</p>
              </li>

            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatagoriesDropdown;