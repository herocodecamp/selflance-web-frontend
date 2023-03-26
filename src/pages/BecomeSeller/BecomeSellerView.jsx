import React from 'react';
import {BsCameraFill} from 'react-icons/bs';
import ProgressBar from './ProgressBar';
const BecomeSellerView = ({handleStep}) => {
  return (
    
        
        <div className='mt-10'>
            <ProgressBar title='Personal Info' size={40}/>
            <form>
                <div className='grid md:grid-cols-2 gap-4'>
                    <label className="block">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">First Name</span>
                        <input type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write first name here'/>    
                    </label>
                    <label className="block">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Second Name</span>
                        <input type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write second name here'/>    
                    </label>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Profile Image</span>
                        <label htmlFor="input-file" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-full cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex justify-center items-center mx-4">
                                <p className=" text-gray-400 dark:text-gray-400"><BsCameraFill size={'3.5em'}/></p>
                            </div>
                            <input id="input-file" type="file" className="hidden" multiple />
    
                        </label>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Select Seller Language</span>
                        <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                            <option>Choose related language</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </label>
                    <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Select Level of Language</span>
                        <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option>Basic</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </label>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    
                    <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Hourly</span>
                        <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option>$15</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </label>
                    
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Job Description in Details</span>
                        <textarea id="message" className="mt-6 block p-5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows='20' placeholder="Write your thoughts here..."></textarea>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 gap-4'>
               
                    <div className='grid lg:grid-cols-2 gap-4'>
                        <div className="col-end-4 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                            <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center " onClick={() => {handleStep(2)}}>
                            Continue
                            
                            </button>
                        </div>
                        
                    </div>
                </div>
            </form>
        </div>
  )
}

export default BecomeSellerView