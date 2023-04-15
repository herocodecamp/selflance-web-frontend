import React from 'react'
import Control from '../../common/Control/Control';
import Stepper from '../../common/Stepper';
import {BsFileTextFill} from 'react-icons/bs';
import {ImPencil} from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { jobCreate } from '../../api';

const ReviewJobView = () => {

  const jobFormData = useSelector(state=>state.JobPost.jobForm)
  const userID = useSelector(state=>state.Auth.userId)
  const navigate = useNavigate()

  console.log(userID)

  const handleSubmit = async()=>{
      const response = await jobCreate(jobFormData,userID);

      console.log(response)

      if(response.statusText === 'OK') {navigate(`/job_posts/${userID}/list`)}
  }
  return (
    <div className='min-h-screen md:p-16 p-4 m-5'>
        <Control title='Review a Job Post' />
        <div className="mt-10 text-gray-400">
            <Stepper current='response'/>
            <div className="mt-12 flex justify-between">
                <h2 className='text-4xl uppercase text-black font-medium'>{jobFormData.title}</h2>
                <div className='flex gap-2 items-center text-3xl cursor-pointer'><ImPencil/>Edit</div>
            </div>
            <div className="mt-6 font-medium">
                <p className='mt-4'> {jobFormData.category}</p>
                <p className='mt-4'>{jobFormData.description}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-16 mt-6">
              <div className="file flex items-center gap-2">
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#E2EED8]">
                  <BsFileTextFill className='text-[#00538F]' size={'1.3em'} />
                </div>
                <div className='flex flex-col justify-center gap-2'>
                  <p>Uploaded file 127837873282</p>
                  <hr className="w-48 h-1 border-0 rounded bg-[#00538F]"/> 
                </div>

              </div>
              <div className="file flex items-center gap-2">
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#E2EED8]">
                  <BsFileTextFill className='text-[#00538F]' size={'1.3em'} />
                </div>
                <div className='flex flex-col justify-center gap-2'>
                  <p>Uploaded file 127837873282</p>
                  <hr className="w-48 h-1 border-0 rounded bg-[#00538F]"/> 
                </div>

              </div>
            </div>
            <div className="mt-12 py-8 border border-gray-300 rounded-md w-full text-gray-500 flex text-2xl font-medium justify-around">
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-6 w-full gap-16 items-center'>
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Category</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>{jobFormData.category}</p>
                  </div>
                </div>
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Project takes time</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>{jobFormData.duration}</p>
                  </div>
                </div>
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Experience Level</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>{jobFormData.experience}</p>
                  </div>
                </div>
              
  
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Budget</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>{jobFormData.hourlyTo}</p>
                  </div>
                </div>
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Payment method</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>Credit Card</p>
                  </div>
                </div>
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Language</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>{jobFormData.language}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-12">
            <button type="button" onClick={()=>{handleSubmit()}} className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 shadow text-lg font-medium rounded-lg py-3 px-8 lg:py-6 lg:px-24 text-center mx-auto items-center ">
                {/* <Link to="/job_posts/response"> Post a Job </Link> */}
                Post a Job
              </button>
            </div>

        </div>
    </div>
  )
}

export default ReviewJobView;