import React from 'react'
import { BsFileTextFill } from 'react-icons/bs'
import { ImPencil } from 'react-icons/im'
import Control from '../../common/Control/Control'
import Stepper from '../../common/Stepper'
import seller from '../../Assets/image.png'
import { Link } from 'react-router-dom'

const JobDetailView = () => {
  return (
    <div className='min-h-screen md:p-16 p-4 m-5'>
        <Control title='Job Detail by Seller' />
        <div className="mt-10 text-gray-400">
            <div className="mt-12 flex flex-col md:flex-row justify-between">
                <div className='flex items-center'>
                    <img src={seller} alt="seller" className='rounded-full w-20 h-20' />
                    <h2 className='text-3xl text-black font-medium'>William Liam <span className='text-xl text-gray-500 font-normal'>(Level - 1)</span></h2>
                </div>
                
                <div className='flex gap-2 items-center font-medium underline text-[#00538F] text-2xl cursor-pointer'>Cover Letter</div>
            </div>
            <div className="mt-12 flex justify-between">
                <h2 className='text-4xl uppercase text-black font-medium'>UI UX Designer</h2>
                <div className='flex gap-2 items-center text-3xl cursor-pointer'><ImPencil/>Edit</div>
            </div>
            <div className="mt-6 font-medium">
                <p className='mt-4'> Worldwide</p>
                <p className='mt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
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
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-6 gap-16 w-full items-center'>
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Category</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>UI/UX DESIGNER</p>
                  </div>
                </div>
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Project takes time</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>Less than 1 Month</p>
                  </div>
                </div>
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Experience Level</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>Level 1 Seller</p>
                  </div>
                </div>
              
  
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Service Price</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>$20</p>
                  </div>
                </div>
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Status</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>Pending</p>
                  </div>
                </div>
                <div className="flex flex-col dark:text-white ">
                  <div className='flex flex-col items-center sm:items-start'>
                    <div className="flex items-center gap-6">
                      <div className="flex w-4 h-4 bg-[#DD730A] rounded-full mr-1.5"></div>
                      <h5>Date</h5>
                    </div>
                    <p className='ml-12 text-sm mt-3'>24 June 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-12">
                <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 shadow text-lg font-medium rounded-lg py-3 px-8 lg:py-6 lg:px-24 text-center">
                    <Link to="/inbox/sellername">Chat</Link>
                </button>
                <button type="button" className="text-white bg-[#DD730A] hover:bg-[#bd6308] focus:ring-4 focus:outline-none focus:ring-blue-300 shadow text-lg font-medium rounded-lg py-3 px-8 lg:py-6 lg:px-24 text-center">
                   <Link to="/buyer/orders">Accept</Link> 
                </button>
            </div>

        </div>
    </div>
  )
}

export default JobDetailView