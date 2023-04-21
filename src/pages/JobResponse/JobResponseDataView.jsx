import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import avatar from  "../../Assets/svg/user.svg"
import {HiOutlineTrash} from 'react-icons/hi'


export default function JobResponseDataView({item, ID, index, dataJobs, respIndex}) {
    const navigate = useNavigate()


    const loadCompleteView =()=>{
        navigate(`/job_posts/${ID}/details`,{
          state: {
            jobwithResponse: dataJobs[index],
            responseIndex: respIndex
          }
        })
    }

    const PF= process.env.REACT_APP_PF

  return (
    <div>

        
<div className='my-6 border rounded-2xl p-8 shadow'>
        <div className='text-lg flex'>
          
          <div className=''>
            <div className='flex items-center'>
              <img src={item.sellerDetail.profileImage ? `${PF}/${item.sellerDetail.profileImage}`: avatar} alt="seller" className='rounded-full w-20 h-20' />
              <h2 className='text-3xl text-black font-medium'>{item.sellerDetail.firstname} {item.sellerDetail.lastname}<span className='text-xl text-gray-500 font-normal'>(Level - )</span></h2>
            </div>
            <p className='mt-3'><button onClick={()=>loadCompleteView()}> {item.coverLetter} </button></p>
            <p className='my-3'><span className='text-2xl font-medium'>Category:</span> {dataJobs[index].category}</p>
          </div>
          <div className=''>
            <div className='flex gap-3'>  <span className='p-3 bg-[#FFE5E3] text-[#DD730A] flex items-center justify-center rounded-full'><HiOutlineTrash/></span></div>
          </div>
          
        </div>
        <div className='flex justify-between mt-2 md:text-2xl'>
          <span className=" text-gray-800 font-medium text-xl mr-2 ">Budget: <span className='text-[#DD730A]'>{item.bidPrice}</span></span>
          <div className='text-gray-400'>
            Date:{item.createdAt && new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.createdAt)))}
          </div>
        </div>
        
        
      </div>

    </div>
  )
}
