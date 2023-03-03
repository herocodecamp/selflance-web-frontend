import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { feedback } from '../../utils/mockData';


const FeedbackView = () => {
  return (
    <div div className="bg-[#00538F]/10">
        <div className='max-w-[1400px] mx-auto py-40'>
            <div className='flex justify-between  items-center'>
                <h3 className='leading-tight text-5xl font-bold'>What Customer Say <br/> About Our Services</h3>
                <div className='flex gap-x-4'>
                    <FiChevronLeft className='bg-[#00538F] text-white p-2 rounded-lg' size={45}/>
                    <FiChevronRight className='text-black bg-white p-2 rounded-lg ' size={45}/> 
                </div>
            </div>
            <div className='grid grid-cols-3 gap-x-8 pt-[72px]'>
                {feedback.map(info =><>
                
                <div className='bg-white rounded-lg p-9'>
                    <p className='text-[21px]  min-h-[170px] text-justify'> 
                        {info.comment}
                    </p>
                    <div className='bg-[#E5EEF4] mt-4 rounded-xl flex px-2 gap-x-4 py-2'>
                        <img src={info.img} alt=''/>
                        <div className=''>
                            <h3 className='font-medium text-[21px]'>{info.name}</h3>
                            <p className='text-gray-500 font-normal text-base'>{info.profession}</p>
                        </div>
                    </div>

                </div>
                </>)}
            </div>

        </div>
    </div>
  )
}

export default FeedbackView