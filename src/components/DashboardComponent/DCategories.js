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
    <div className='pt-4'>
      <h2 className='text-[#121F3E] py-4 leading-8 text-xl font-sem
      '>Categories</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

        <div className='flex space-x-2 items-center bg-[#F5F5F5] border border-[#DFDFDF] rounded-lg px-4 py-4'>
          <span className='bg-[#FF7A00] w-[40px] h-[40px] rounded-full '><AiOutlineLaptop className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Digital Marketing</p>
        </div>

        <div className='flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg px-4 py-4'>
          <span className='bg-[#00538F] w-[40px] h-[40px] rounded-full'><MdGraphicEq className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Graphic Design</p>
        </div>

        <div className='flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg px-4 py-4'>
          <span className='bg-[#144BD6] w-[40px] h-[40px] rounded-full'><AiOutlineVideoCameraAdd className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Video editing</p>
        </div>

        <div className='flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg px-4 py-4'>
          <span className='bg-[#FF3B30] w-[40px] h-[40px] rounded-full'><FaBusinessTime className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Business</p>
        </div>

        <div className='flex space-x-2 items-center  bg-[#ffff] border border-[#DFDFDF] rounded-lg px-4 py-4'>
          <span className='bg-[#7E5BFF] w-[40px] h-[40px] rounded-full'><TfiWrite className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Writing</p>
        </div>

        <div className='flex space-x-2 items-center  bg-[#ffff] border border-[#DFDFDF] rounded-lg px-4 py-4'>
          <span className='bg-[#06AEF3] w-[40px] h-[40px] rounded-full'><BsCode className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Programming</p>
        </div>

        <div className='flex space-x-2 items-center  bg-[#ffff] border border-[#DFDFDF] rounded-lg px-4 py-4'>
          <span className='bg-[#F2C94C] w-[40px] h-[40px] rounded-full'><SiGnusocial className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>Social media</p>
        </div>

        <div className='flex space-x-2 items-center bg-[#ffff] border border-[#DFDFDF] rounded-lg px-4 py-4 '>
          <span className='bg-[#6FCF97] w-[40px] h-[40px] rounded-full'><GiArtificialIntelligence className='text-white text-xl w-50 mx-auto mt-2' /></span>
          <p className='font-bold text-xl leading-7 text-[#1D263A]'>AI Services</p>
        </div>



      </div>
    </div>
  );
};

export default DCategories;