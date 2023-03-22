import React from 'react'

const ProgressBar = ({title, size}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-3 md:items-center my-6'>
        <h1 className='flex w-full text-3xl font-medium'>{title}</h1>
        
        <div className='w-2/6'>
            <p className='text-blue-600'>Complete Rate: {size}%</p>
            <div className=" w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className={`bg-[#D57635] h-2.5 rounded-full ${
                    size === 40 ? 'w-5/12':
                    size === 80 ? 'w-10/12':
                    size === 100 ? 'w-full':
                    ''
                }`}></div>
            </div>
        </div>
                

    </div>
  )
}

export default ProgressBar