import React from 'react'

const Create = ({handleStep}) => {
  return (
        <div className='mt-10'>
            <form>
                <div className='grid md:grid-cols-1 gap-4'>
                    <label className="block">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Enter Title</span>
                        <input type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'/>    
                    </label>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Select Category</span>
                        <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option></option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </label>
                    <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Selelct Sub-Category</span>
                        <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option></option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </label>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Add tags</span>
                        <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option></option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </label>
                    
                </div>
                <div className='grid lg:grid-cols-4 gap-4'>
                    <div className="col-end-5 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                        <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center " onClick={() => handleStep(2)} >
                        Continue
                        
                        </button>

                    </div>
                    
                </div>
                
            </form>
        </div>
  )
}

export default Create