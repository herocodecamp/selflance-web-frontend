import React from 'react'
import Control from '../../common/Control/Control'
import support from '../../Assets/support.png'
import {SlArrowRight} from 'react-icons/sl'

const SupportView = ({current= 'buyer', handleCurrent}) => {
  return (
    <div className='min-h-screen md:p-16 m-5'>
        <Control title='Customer Support'/>
        <div className='mt-10'>
            <img src={support} alt='support' className='w-1/2 mx-auto'/>
            <div>
                <p>What do you need help with?</p>
                
                <form>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Try, Update my account details" required/>
                    </div>
                </form>
                <div className='hidden lg:block'>
                <ol className="flex items-center w-full text-gray-400 font-medium text-center rounded-lg dark:bg-gray-800 border dark:border-gray-700 my-5">
                    
                    <li className={`relative flex flex-1 items-center cursor-pointer px-8 py-8 ${current === 'buyer' ? "bg-[#00538F] text-white rounded-lg" : "border-3" }`} onClick={() => handleCurrent('buyer')} >
                        Buyer
                    </li>

                    <li className={`relative flex flex-1 items-center cursor-pointer px-8 py-8 ${current === 'seller' ? "bg-[#00538F] text-white rounded-lg" : "" }`} onClick={() => handleCurrent('seller')} >
                        Seller
                    </li>

                </ol>
                <div className="w-full text-gray-900 bg-white border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <div className='flex items-center gap-4'>
                        Buyer Order Management
                        </div>
                        <SlArrowRight/>
                    </button>
                    <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <div className='flex items-center gap-4'>
                        Payments
                        </div>
                        <SlArrowRight/>
                    </button>
                    <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <div className='flex items-center gap-4'>
                        Invoices
                        </div>
                        <SlArrowRight/>
                    </button>
                    <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <div className='flex items-center gap-4'>
                        Business
                        </div>
                        <SlArrowRight/>
                    </button>
                    <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <div className='flex items-center gap-4'>
                        How Selflance works
                        </div>
                        <SlArrowRight/>
                    </button>
                    <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <div className='flex items-center gap-4'>
                        Account Management
                        </div>
                        <SlArrowRight/>
                    </button>
                   
                </div>

            </div>

            </div>
            
        </div>
    </div>
    
  )
}

export default SupportView