import React from 'react'
import { BsCameraFill } from 'react-icons/bs'
import {BiVideoPlus} from 'react-icons/bi'

const Photos = ({handleStep}) => {
  return (
    <div>
        <h2>Add Images for portfolio <span>(Min. 3)</span></h2>
        <div className='flex flex-wrap' >


        </div>
        <div className='grid grid-cols-1 gap-4 mt-12'>
        <span className="block w-full text-2xl font-medium">Add Images for portfolio</span>
            <div className="flex flex-wrap gap-8">
                
                <label htmlFor="input-file" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex justify-center items-center mx-4">
                        <p className=" text-gray-400 dark:text-gray-400"><BsCameraFill size={'2em'}/></p>
                    </div>
                    <input id="input-file" type="file" className="hidden" multiple />

                </label>
                <label htmlFor="input-file" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex justify-center items-center mx-4">
                        <p className=" text-gray-400 dark:text-gray-400"><BsCameraFill size={'2em'}/></p>
                    </div>
                    <input id="input-file" type="file" className="hidden" multiple />

                </label>
                <label htmlFor="input-file" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex justify-center items-center mx-4">
                        <p className=" text-gray-400 dark:text-gray-400"><BsCameraFill size={'2em'}/></p>
                    </div>
                    <input id="input-file" type="file" className="hidden" multiple />

                </label>
                <label htmlFor="input-file" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex justify-center items-center mx-4">
                        <p className=" text-gray-400 dark:text-gray-400"><BsCameraFill size={'2em'}/></p>
                    </div>
                    <input id="input-file" type="file" className="hidden" multiple />

                </label>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-12'>
        <span className="block w-full text-2xl font-medium">Add Video for portfolio</span>
            <div className="flex flex-wrap gap-8">
                
                <label htmlFor="input-file" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex justify-center items-center mx-4">
                        <p className=" text-gray-400 dark:text-gray-400"><BiVideoPlus size={'2em'}/></p>
                    </div>
                    <input id="input-file" type="file" className="hidden" multiple />

                </label>
            </div>
        </div>
        <div className='grid lg:grid-cols-4 gap-4'>
            <div className="col-end-5 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center " onClick={() => handleStep(4)}  >
                Continue
                
                </button>

            </div>
            
        </div>
    </div>
  )
}

export default Photos