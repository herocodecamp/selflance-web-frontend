import React from 'react'
import {BsFillBellFill} from 'react-icons/bs'
import {HiOutlineTrash, HiPencil} from 'react-icons/hi'

const JobPost = ({data}) => {
  return (
    <div className='my-6 border rounded-2xl p-8 shadow'>
      <div className='text-lg flex'>
        
        <div className=''>
          <h5 className='text-2xl font-medium'>
            {data.title}
          </h5>
          <p className='mt-3'>{data.description}</p>
          <p className='my-3'><span className='text-2xl font-medium'>Category:</span> {data.category}</p>
        </div>
        <div className=''>
          { data.status === 'Pending'?
            <span className='p-3 h-auto w-auto bg-[#FFE5E3] text-[#DD730A] flex items-center justify-center rounded-full'><BsFillBellFill/></span>
            :
            <div className='flex gap-3'>  <span className='p-3 bg-[#FFE5E3] text-[#DD730A] flex items-center justify-center rounded-full'><HiOutlineTrash/></span>
                <span className='p-3 h-auto w-auto bg-[#E3EDFF] text-[#00538F] flex items-center justify-center rounded-full'><HiPencil/></span>
            </div>
          }
        </div>
        
      </div>
      <div className='flex justify-between mt-1 md:text-2xl'>
        <span className="bg-gray-100 text-gray-800 font-medium mr-2 px-4 py-0.5 rounded-3xl dark:bg-gray-700 dark:text-gray-300">{data.status}</span>
        <div className='text-gray-400'>
          Date: {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(data.createdAt)))}
        </div>
      </div>
      
      
    </div>
  )
}

export default JobPost