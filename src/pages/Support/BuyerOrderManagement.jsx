import React from 'react'
import Control from '../../common/Control/Control'

const SupportPage2 = () => {
  return (
    <div className='min-h-screen md:p-16 m-5'>
        <Control title='Customer Support'/>
        <div className='mt-10'>
            <h2>Buyer Order Management</h2>
            <form>
                <div className='grid md:grid-cols-1 gap-4'>
                    <label className="block mt-5">
                        <span className="block w-full text-[#00538F] text-2xl font-medium my-5">Title</span>
                        <select type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option>Order</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </label>
                </div>
                    <label className="block mt-5">
                        <span className="block w-full text-[#00538F] text-2xl font-medium my-5">Subtitle </span>
                        <select type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option>Seller not response</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </label>
                <div className='grid md:grid-cols-1 gap-4'>
                    <div className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium my-5">Job Description in Details</span>
                        <textarea id="message" className="mt-6 block p-5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows='20' placeholder="Describe your Issue..."></textarea>
                    </div>
                </div>
                <div className="flex justify-center gap-6 mt-12">
                    <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 shadow text-lg font-medium rounded-lg py-3 px-8 lg:py-6 lg:px-24 text-center">
                        Submit
                    </button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default SupportPage2