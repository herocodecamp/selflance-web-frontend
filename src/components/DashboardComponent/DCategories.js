import React from 'react';
import { AiOutlineLaptop } from 'react-icons/ai'
import { MdGraphicEq } from 'react-icons/md'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { TfiWrite } from 'react-icons/tfi'
import { BsCode } from 'react-icons/bs'
import { SiGnusocial } from 'react-icons/si'
import { FaBusinessTime } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'


const DCategories = () => {
  return (
    <div className='pt-4 hidden sm:block'>
      <h2 className='text-[#121F3E] py-4 leading-8 text-xl font-sem
      '>Categories</h2>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

        <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center bg-[#F5F5F5] border border-[#DFDFDF] rounded-lg  sm:px-2 sm:py-2 px-1 py-1 lg:px-4 lg:py-4'>
          <span className='bg-[#FF7A00] w-[40px] h-[40px] rounded-full '><AiOutlineLaptop className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Digital Marketing</p>
        </li>

        <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg lg:px-4 sm:px-2 sm:py-2 px-1 py-1  lg:py-4'>
          <span className='bg-[#00538F] w-[40px] h-[40px] rounded-full'><MdGraphicEq className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Graphic Design</p>
        </li>

        <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg lg:px-4 sm:px-2 sm:py-2 px-1 py-1  lg:py-4'>
          <span className='bg-[#144BD6] w-[40px] h-[40px] rounded-full'><AiOutlineVideoCameraAdd className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Video editing</p>
        </li>

        <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg lg:px-4 sm:px-2 sm:py-2 px-1 py-1  lg:py-4'>
          <span className='bg-[#FF3B30] w-[40px] h-[40px] rounded-full'><FaBusinessTime className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Business</p>
        </li>

        <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center  bg-[#ffff] border border-[#DFDFDF] rounded-lg lg: px- sm:px-2 sm:py-2 px-1 py-1 4lg: py-4'>
          <span className='bg-[#7E5BFF] w-[40px] h-[40px] rounded-full'><TfiWrite className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Writing</p>
        </li>

        <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center  bg-[#ffff] border border-[#DFDFDF] rounded-lg lg: px- sm:px-2 sm:py-2 px-1 py-1 4lg: py-4'>
          <span className='bg-[#06AEF3] w-[40px] h-[40px] rounded-full'><BsCode className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Programming</p>
        </li>

        <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center  bg-[#ffff] border border-[#DFDFDF] rounded-lg lg: px- sm:px-2 sm:py-2 px-1 py-1 lg:py-4'>
          <span className='bg-[#F2C94C] w-[40px] h-[40px] rounded-full'><SiGnusocial className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Social media</p>
        </li>

        <li className='hover:bg-[#F5F5F5] hover:cursor-pointer  flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg lg:px-4 sm:px-2 sm:py-2 px-1 py-1 lg:py-4 '>
          <span className='bg-[#6FCF97] w-[40px] h-[40px] rounded-full'><GiArtificialIntelligence className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>AI Services</p>
        </li>

      </ul>
    </div>
  );
};

export default DCategories;