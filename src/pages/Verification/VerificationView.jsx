import React from 'react'
import Control from '../../common/Control/Control'
import { FiUpload } from 'react-icons/fi'

const VerificationView = () => {
  return (
    <div className='min-h-screen md:p-16 m-5'>
        <Control title='Upload a proof of your identity'/>
        <div className='mt-10'>
            <form>
                <div className='grid md:grid-cols-2 gap-4'>
                    <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Select Country</span>
                        <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option>America</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </label>
                    <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Document type</span>
                        <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option>Passport</option>
                            <option>Id Card</option>
                            <option>Driving License</option>
                        </select>
                    </label>
                </div>
                <div className='flex'>
                    <label htmlFor="input-file" className="mt-6 flex flex-col justify-center border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col justify-center items-center mx-4 my-10 gap-3 px-6">
                            <FiUpload/>
                            <span className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-6  text-center  w-full items-center ">
                            Upload front side of your document 
                            
                            </span>
                            <span>or</span>
                            <p className='text-center'>Drag a file, photo and document</p>
                        </div>
                        <input id="input-file" type="file" className="hidden" multiple />

                    </label>
                    <label htmlFor="input-file" className="mt-6 flex flex-col justify-center border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col justify-center items-center mx-4 my-10 gap-3 px-6">
                            <FiUpload/>
                            <span type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-6  text-center  w-full items-center ">
                            Upload Back side of your document 
                            
                            </span>
                            <span>or</span>
                            <p className='text-center'>Drag a file, photo and document</p>
                        </div>
                        <input id="input-file" type="file" className="hidden" multiple />

                    </label>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className="block mt-12">
                        <div className="flex items-center">
                            <div className="flex items-center h-5">
                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            </div>
                            <div className="ml-5 text-sm">
                                <label htmlFor="helper-checkbox" className=" text-2xl text-gray-400 dark:text-gray-300">I confirm that I upload valid government issued documents.</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 gap-4'>
                    <div className="col-end-5 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                        <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center ">
                        Submit
                        
                        </button>

                    </div>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default VerificationView