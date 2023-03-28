import React from 'react'
import Control from '../../common/Control/Control'
import Stepper from '../../common/Stepper'
import { sellerResponse } from '../../utils/mockData';
import {HiOutlineTrash} from 'react-icons/hi'
import seller from '../../Assets/image.png'
import { jobPost } from '../../utils/mockData';
import JobPost from '../../common/JobPost';
import { Link } from 'react-router-dom';



const JobResponseView = () => {

  const JobResponse = ({data}) => {
    return (
      <div className='my-6 border rounded-2xl p-8 shadow'>
        <div className='text-lg flex'>
          
          <div className=''>
            <div className='flex items-center'>
              <img src={seller} alt="seller" className='rounded-full w-20 h-20' />
              <h2 className='text-3xl text-black font-medium'>{data.name} <span className='text-xl text-gray-500 font-normal'>(Level - {data.level})</span></h2>
            </div>
            <p className='mt-3'><Link to="/job_posts/:jobID/details"> {data.response} </Link></p>
            <p className='my-3'><span className='text-2xl font-medium'>Category:</span> {data.categories}</p>
          </div>
          <div className=''>
            <div className='flex gap-3'>  <span className='p-3 bg-[#FFE5E3] text-[#DD730A] flex items-center justify-center rounded-full'><HiOutlineTrash/></span></div>
          </div>
          
        </div>
        <div className='flex justify-between mt-2 md:text-2xl'>
          <span className=" text-gray-800 font-medium text-xl mr-2 ">Budget: <span className='text-[#DD730A]'>{data.budget}</span></span>
          <div className='text-gray-400'>
            Date: {data.date}
          </div>
        </div>
        
        
      </div>
    )
  }
  return (
    <div className='min-h-screen md:p-16  m-5'>
        <Control title='Job Posted Response'/>
        <div className="mt-12">
            <Stepper current='response'/>
            <div>
            <h3 className="mt-8 text-2xl font-medium">
                  Posted Job Request
            </h3>
            <div className="job">
              <JobPost data={jobPost[0]}/>
            </div>
            </div>
            <div>
              <h3 className="mt-8 text-2xl font-medium">
                  Response from Seller
              </h3>
              <div className="jobs">
                  {sellerResponse.map((data) => (
                      <>
                      <JobResponse key={data.key} data={data}/>
                      </>
                  ))}
              </div>
            </div>
        </div>
        



    </div>
  )
}

export default JobResponseView