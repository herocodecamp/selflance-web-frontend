import React from 'react'
import { useDispatch } from 'react-redux'
import { createGigActions } from '../../store/CreateGigSlice'

const Create = ({handleStep}) => {

    const dispatch = useDispatch();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const title = e.target.title.value
        const category = e.target.category.value
        const subCategory= e.target.subCategory.value
        const tags= [e.target.tags.value]

        dispatch(createGigActions.gigView1({title,category,subCategory,tags}))

        handleStep(2)
    }

  return (
        <div className='mt-10'>
            <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-1 gap-4'>
                    <label className="block">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Enter Title</span>
                        <input type="text" name="title" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'/>    
                    </label>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Select Category</span>
                        <select type="text" name="category" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option selected> Web Designing</option>
                            <option>Web Development</option>
                            <option>Graphic Designing</option>
                            <option>Data Entry</option>
                        </select>
                    </label>
                    <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Selelct Sub-Category</span>
                        <select type="text" name="subCategory" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option selected>Figma Design</option>
                            <option>React JS</option>
                            <option>Flyers and Poster</option>
                            <option>Data scraping</option>
                        </select>
                    </label>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                <label className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Add tags</span>
                        <select type="text" name="tags" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                            <option selected>tag 1</option>
                            <option>tag 2</option>
                            <option>tag 3</option>
                            <option>tag 4</option>
                            <option>tag 5</option>
                        </select>
                    </label>
                    
                </div>
                <div className='grid lg:grid-cols-4 gap-4'>
                    <div className="col-end-5 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                        <button type="submit" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center "  >
                        Continue
                        
                        </button>

                    </div>
                    
                </div>
                
            </form>
        </div>
  )
}

export default Create