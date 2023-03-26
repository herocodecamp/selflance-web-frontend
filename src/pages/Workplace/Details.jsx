import React from 'react'

const Details = ({handleStep}) => {
  return (
    <div>
        <div className='grid md:grid-cols-1 gap-4'>
            <div className="block mt-2">
                <span className="block w-full text-[#00538F] text-2xl font-medium my-5">Describe your service</span>
                <textarea id="message" className="mt-6 block p-5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows='20' placeholder="Describe your service..."></textarea>
            </div>
        </div>
        <div className='grid lg:grid-cols-4 gap-4'>
            <div className="col-end-5 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center " onClick={() => handleStep(3)} >
                Continue
                
                </button>

            </div>
            
        </div>

    </div>
  )
}

export default Details