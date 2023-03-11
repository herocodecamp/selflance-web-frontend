import React from 'react'

const StepperView = ({current='posted'}) => {
  return (
    <div className='hidden lg:block'>
        <ol className="flex items-center w-full gap-16 text-gray-400 font-medium text-center bg-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <li className={`relative flex items-center px-8 py-3 cursor-pointer ${current ==='posted' ? "bg-[#00538F] text-white rounded-lg" : "" }`}>
                Posted Jobs
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs scale-75 text-black bg-white border-2 border-white rounded-full top-2 right-2 dark:border-gray-900">5</div>
            </li>
            <li className={`relative flex items-center cursor-pointer px-8 py-3 ${current ==='running' ? "bg-[#00538F] text-white rounded-lg" : "" }`}>
               
                Running Post
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs scale-75 text-gray-100 bg-gray-500 rounded-full top-2 right-2 dark:border-gray-900">20</div>
                
            </li>
            <li className={`relative flex items-center cursor-pointer px-8 py-3 ${current ==='completed' ? "bg-[#00538F] text-white rounded-lg" : "" }`}>
                Completed Posts
            </li>

            <li className={`relative flex items-center cursor-pointer px-8 py-3 ${current ==='response' ? "bg-[#00538F] text-white rounded-lg" : "" }`}>
                Job Posted Response
            </li>

        </ol>

    </div>
  )
}

export default StepperView