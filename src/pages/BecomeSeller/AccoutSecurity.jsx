import React from 'react'
import ProgressBar from './ProgressBar'

const AccoutSecurity = () => {
  return (
    <div className='mt-10'>
        <ProgressBar title='Account Security' size={100} />
        <form>
            <div className='grid md:grid-cols-1 gap-4'>
                <label className="block">
                    <h4><span className="w-full text-[#00538F] text-xl font-medium pl-3">E-mail</span> (Private)</h4>
                    <input type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Enter your E-mail'/>    
                </label>
            </div>
            <div className='grid grid-cols-1 gap-4'>
            
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div className="col-end-4 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                        <button type="button" className="text-white bg-[#D57635] hover:bg-[#d36e2a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center ">
                        Verified
                        
                        </button>
                        
                    </div>
                    
                </div>
            </div>
            <div className='grid md:grid-cols-1 gap-4'>
                <label className="block">
                    <h4><span className="w-full text-[#00538F] text-xl font-medium pl-3">Phone Number</span> (Private)</h4>
                    <input type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Enter your Phone Number'/>    
                </label>
            </div>
            <div className='grid grid-cols-1 gap-4'>
            
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div className="col-end-4 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                        <button type="button" className="text-black bg-gray-200 border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center ">
                        Verified
                        
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-center gap-6 mt-12">
                <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 shadow text-lg font-medium rounded-lg py-3 px-8 lg:py-6 lg:px-24 text-center">
                    Continue
                </button>
            </div>
            
        </form>
    </div>

  )
}

export default AccoutSecurity