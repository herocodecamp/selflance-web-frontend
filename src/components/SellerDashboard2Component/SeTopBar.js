import React from 'react';
import { BiArrowBack } from 'react-icons/bi'
import { MdNotificationsNone } from 'react-icons/md'
import { BsHeart, BsThreeDotsVertical } from 'react-icons/bs'
import sellerAvatar from '../../Assets/seller_profile.png'
import profile2 from '../../Assets/seller_review_avatar_2.png'
import star from '../../Assets/Star-Gold.png'

const result = {
  _id: 3,
  profile: sellerAvatar,
  title: "I Need UI UX Designer",
  description: "If you're looking for delivery men, you may be in need of someone to transport goods, packages......",
  price: '$500',
  level: 'Level 1',
  duration: '1 month',
  applied: 20,
}

const SeTopBar = () => {
  return (
    <div>
      <div className='flex justify-between items-center border-b-2 border-[#D1D1D1] pb-6'>
        <div className='flex space-x-10 items-center'>
          <span><BiArrowBack className='text-[#000000] text-2xl' /></span>
          <h3 className='text-[#00538F] text-xl font-bold'>Job</h3>
        </div>
        <div className='flex space-x-10 items-center'>
          <span><MdNotificationsNone className='text-[#00538F] text-2xl' /> </span>
          <span><BsThreeDotsVertical className='text-[#121F3E]  text-2xl' /></span>
        </div>
      </div>

      <div className='bg-[#FFFFFF] px-8 py-6 space-y-6 rounded-3xl drop-shadow-2xl relative mt-8'>
        <div className='flex space-x-4 items-center'>
          <img src={result.profile} className="w-[54px] h-[54px] rounded-full" alt="" />
          <h3 className='text-base font-bold lg:leading-10 text-[#000000]'>{result.title}</h3>
          <span className='absolute right-2 sm:right-12'><BsHeart className='text-[#B4B4B7] w-[18px] h-[15px] ' /></span>
        </div>
        <div>
          <p className='font-sm sm:leading-6'>{result.description}</p>
        </div>
        <div className=' grid grid-cols-2 lg:grid-cols-3 gap-2'>
          <div className=' px-2 lg:px-4 rounded-lg py-2 space-y-1 w-[100px] sm:w-[150px] lg:w-[213px] h-[77px] border-2 border-[#E3E3E3]'>
            <h4 className='text-[#000000] font-semibold text-base text-center'>{result.price}</h4>
            <p className='text-[#8E8E8E] text-center'>fixed price</p>
          </div>
          <div className=' px-2 lg:px-4 rounded-lg py-2 space-y-1 w-[100px] sm:w-[150px] lg:w-[213px] h-[77px] border-2 border-[#E3E3E3]'>
            <h4 className='text-[#000000] font-semibold sm:text-base text-center'>{result.level}</h4>
            <p className='text-[#8E8E8E] text-center'>Experience</p>
          </div>
          <div className=' px-2 lg:px-4 rounded-lg py-2 space-y-1 w-[100px] sm:w-[150px] lg:w-[213px] h-[77px] border-2 border-[#E3E3E3]'>
            <h4 className='text-[#000000] font-semibold text-base text-center'>{result.duration}</h4>
            <p className='text-[#8E8E8E] text-center'>Duration</p>
          </div>
        </div>
      </div>

      <div className='mt-8 rounded-2xl drop-shadow-lg bg-white px-2 py-2'>
        <div className='flex space-x-6 items-center'>
          <img src={profile2} className="w-[130px] h-[130px] rounded-full" alt="" />

          <div className='space-y-2'>
            <h2 className='text-[#15151E] text-xl font-semibold'>Saiful Islam Sujan</h2>
            <p className='text-[#7A7A7A] font-sm text-sm'>Researcher at Grameenphone</p>
            <div className='flex place-items-center space-x-2'>
              <span>5.0</span>
              <img src={star} className="w-[18px] h-[17px]" alt="" />
              <p>20 Job Posted</p>
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-4 mt-6 '>
        <h2 className='text-xl text-[#15151E] font-bold'>Descriptions</h2>
        <p className='text-[#7A7A7A] leading-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing...There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
      </div>
      <div className='space-y-4 mt-6'>
        <h2 className='text-xl text-[#15151E] font-bold'>Descriptions</h2>
        <p className='text-[#7A7A7A] leading-8'>Must have a bike or Bicycle</p>
      </div>

      <div className='flex justify-center items-center py-4 '>
        <button className='bg-[#00538F] text-white px-8 py-3 text-center rounded-md text-base'>Apply</button>
      </div>

    </div>
  );
};

export default SeTopBar;