import React from 'react';
import { BiArrowBack } from 'react-icons/bi'
import { MdNotificationsNone } from 'react-icons/md'
import { BsHeart, BsThreeDotsVertical } from 'react-icons/bs'
import sellerAvatar from '../../Assets/seller_profile.png'
import profile2 from '../../Assets/seller_review_avatar_2.png'
import star from '../../Assets/Star-Gold.png'
import userSvg from '../../Assets/svg/user.svg'
import { useNavigate } from 'react-router-dom';

// const result = {
//   _id: 3,
//   profile: sellerAvatar,
//   title: "I Need UI UX Designer",
//   description: "If you're looking for delivery men, you may be in need of someone to transport goods, packages......",
//   price: '$500',
//   level: 'Level 1',
//   duration: '1 month',
//   applied: 20,
// }

const SeTopBar = ({result}) => {

  const PF= process.env.REACT_APP_PF;
  
  const navigate= useNavigate()


  const handleApply=(ID, data)=>{
    navigate(`/job/search/${ID}/apply`,{
      state:{
        jobID: ID,
        jobData: data
      }})
  }

  return (
    result && (
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
          <img src={result.userDetail.profileImage ? `${PF}/${result.userDetail.profileImage}`: userSvg} className="w-[54px] h-[54px] rounded-full" alt="" />
          <h3 className='text-base font-bold lg:leading-10 text-[#000000]'>{result.title}</h3>
          <span className='absolute right-2 sm:right-12'><BsHeart className='text-[#B4B4B7] w-[18px] h-[15px] ' /></span>
        </div>
        <div>
          <p className='font-sm sm:leading-6'>{result.description.slice(0,30)}...</p>
        </div>
        <div className=' grid grid-cols-2 lg:grid-cols-3 gap-2'>
        {
          (result.projectBudget.length>0) && (<div className=' px-2 lg:px-4 rounded-lg py-2 space-y-1 w-[100px] sm:w-[150px] lg:w-[213px] h-[77px] border-2 border-[#E3E3E3]'>
          <h4 className='text-[#000000] font-semibold text-base text-center'>${result.projectBudget[0].budgetRate}</h4>
          <p className='text-[#8E8E8E] text-center'>{result.projectBudget[0].budgetType}</p>
        </div>)
        }
        {
          (result.hourlyBudget.length>0) && (<div className=' px-2 lg:px-4 rounded-lg py-2 space-y-1 w-[100px] sm:w-[150px] lg:w-[213px] h-[77px] border-2 border-[#E3E3E3]'>
          <h4 className='text-[#000000] font-semibold text-base text-center'>${result.hourlyBudget[0].hourlyFrom}-${result.hourlyBudget[0].hourlyTo}</h4>
          <p className='text-[#8E8E8E] text-center'>{result.hourlyBudget[0].budgetType}</p>
        </div>)
        }
          <div className=' px-2 lg:px-4 rounded-lg py-2 space-y-1 w-[100px] sm:w-[150px] lg:w-[213px] h-[77px] border-2 border-[#E3E3E3]'>
          <h4 className='text-[#000000] font-semibold sm:text-base text-center'>{result.experience}</h4>
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
          <img src={result.userDetail.profileImage ? `${PF}/${result.userDetail.profileImage}`: userSvg} className="w-[80px] h-[80px] sm:w-[100px] sm:h[100px] lg:w-[130px] lg:h-[130px] rounded-full" alt="" />

          <div className='space-y-2'>
            <h2 className='text-[#15151E] text-base sm:text-xl font-semibold'> {result.userDetail.firstname} {result.userDetail.lastname}</h2>
            <p className='text-[#7A7A7A] font-sm text-sm'>{result.userDetail.occupation}</p>
            <div className='flex place-items-center space-x-2'>
              <span>{result.userDetail.rating}</span>
              <img src={star} className="w-[18px] h-[17px]" alt="" />
              <p>20 Job Posted</p>
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-4 mt-6 '>
        <h2 className='text-xl text-[#15151E] font-bold'>Descriptions</h2>
        <p className='text-[#7A7A7A] sm:leading-8 leading-10'>{result.description}</p>
      </div>
      <div className='space-y-4 mt-6'>
        <h2 className='text-xl text-[#15151E] font-bold'>Descriptions</h2>
        <p className='text-[#7A7A7A] leading-8'>Must have a bike or Bicycle</p>
      </div>

      <div className='flex justify-center items-center py-4 '>
        <button className='bg-[#00538F] text-white px-8 py-3 text-center rounded-md text-base' onClick={()=>handleApply(result._id, result)}>Apply</button>
      </div>

    </div>
    )
    
  );
};

export default SeTopBar;