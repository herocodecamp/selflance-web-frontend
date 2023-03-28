import React from 'react'
import Control from '../../common/Control/Control'
import {MdOutlineSpeed, MdOutlineFileUpload} from 'react-icons/md'
import { BsTags, BsPaypal } from 'react-icons/bs'
import {FaCreditCard} from 'react-icons/fa'
import PricePicker from '../../common/PricePicker'
import { ValidateSchema } from './PostJobSchema'
import { useFormik } from 'formik'
  
const PostJobView = () => {
    const initialValues = {
        title: "",
        category: "",
        duration: "",
        experience: "",
        language: "",
        hourlyFrom: 5,
        hourlyTo: 10,
        description: "",
        terms: true,
    }
    
    const PostJobForm = () => {
      
        const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
          useFormik({
            initialValues,
            validationSchema: ValidateSchema,
            validateOnChange: true,
            validateOnBlur: false,
      
            onSubmit: (values, action) => {
              console.log(values);
              action.resetForm();
            },
          });
      
        console.log("errors", errors);

    return ( 
        <div className='min-h-screen md:p-16 m-5'>
            <Control title='Post a Job'/>
            <div className='mt-10'>
                <form handleSubmit={handleSubmit} >
                    <div className='grid md:grid-cols-2 gap-4'>
                        <label className="block">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Job Title</span>
                            <input type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here' onBlur={handleBlur} onChange={handleChange} value={values.title} />    
                        </label>
                        <label className="block">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Select the Category</span>
                            <select type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here' onChange={handleChange} onSubmit={handleSubmit} value={values.category}>
                                <option>Choose related category</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </label>
                    </div>
                    <div className='grid md:grid-cols-2 gap-4'>
                    <label className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Project Takes Time</span>
                            <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here' onChange={handleChange} onSubmit={handleSubmit} value={values.category} >
                                <option>Select time period according to your project length</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </label>
                        <label className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Experience Level</span>
                            <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here' onChange={handleChange} onSubmit={handleSubmit} value={values.experience} >
                                <option>Select level according to your project complexity</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </label>
                    </div>
                    <div className='grid md:grid-cols-2 gap-4'>
                    <label className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Select Seller Language</span>
                            <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here' onChange={handleChange} onSubmit={handleSubmit} value={values.language}>
                                <option>Choose related language</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </label>
                        
                    </div>
                    <div className='grid lg:grid-cols-2 gap-4'>
                    <label className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Budget</span>
                            <div className='mt-6'>    
                                <button type="button" className="text-white bg-[#DD730A] hover:bg-[#DD530A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-8 py-4 text-center text-sm inline-flex items-center mr-2 ">
                                Hourly Budget
                                <MdOutlineSpeed  size={'1.5em'} className="ml-2 -mr-2"/>
                                </button>
                                <button type="button" className="border text-gray-400 shadow  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 text-center inline-flex items-center ">
                                    Project Payment
                                    <BsTags size={'1.5em'} className="text-[#DD730A] ml-2 -mr-2"/>
                                </button>

                            </div>
                        </label>
                        
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="block mt-12">
                        <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Set Hourly Rate</span>
                        <div className='mt-6 grid grid-cols-2 gap-4 text-gray-500'>
                            <div className=''>
                                    <p className='ml-3'>From</p>
                                    <PricePicker />
                            </div>
                            <div>
                                    <p className='ml-3'>To</p>
                                    <PricePicker />
                            </div>
                            
                        </div>
                    </div>
                        
                    </div>

                    <div className='grid grid-cols-1 gap-4'>
                        <div className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Job Description in Details</span>
                            <textarea id="message" className="mt-6 block p-5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows='20' placeholder="Write your thoughts here..." onChange={handleChange} onSubmit={handleSubmit} value={values.description} ></textarea>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <div className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Upload Documents</span>
                            <label htmlFor="input-file" className="mt-6 flex flex-col justify-center w-full h-20 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex justify-between items-center mx-4">
                                    <p className=" text-sm text-gray-400 dark:text-gray-400">Upload File</p>
                                    <p className=" text-gray-400 dark:text-gray-400"><MdOutlineFileUpload size={'1.5em'}/></p>
                                </div>
                                <input id="input-file" type="file" className="hidden" multiple />
        
                            </label>
                            <p className='text-right mt-3 text-gray-400'>File Size is Max: 150MB</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <div className="block mt-12">
                            <span className="block w-full text-[#00538F] font-medium text-2xl pl-3">Select Payment Method</span>
                            <ul className="mt-6 lg:gap-0 items-center lg:flex-row flex-col justify-between gap-6 text-lg text-gray-900 bg-white border-gray-200 rounded-lg flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="border w-full shadow rounded-full border-gray-200 dark:border-gray-600">
                                    <label htmlFor="horizontal-list-radio-card" className="flex items-center gap-6 justify-between hover:cursor-pointer">
                                        <span  className="flex items-center gap-3 p-1 text-gray-900 dark:text-gray-300">
                                            <span className='bg-[#eab681] p-3 rounded-full'><FaCreditCard className='text-[#DD730A]' size={'2em'}/></span>
                                            Credit or Debit Card 
                                        </span>
                                        <input id="horizontal-list-radio-card" type="radio" value="" name="list-radio" className="h-4 mr-3 text-[#DD730A] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    </label>
                                </li>
                                <li className="border w-full shadow rounded-full border-gray-200 dark:border-gray-600">
                                    <label htmlFor="horizontal-list-radio-paypal" className="flex items-center gap-6 justify-between hover:cursor-pointer">
                                        <span  className="flex items-center gap-3 p-1 text-gray-900 dark:text-gray-300">
                                            <span className='bg-[#a3ceff] p-3 rounded-full'><BsPaypal className='text-[#1e2a6b]' size={'2em'}/></span>
                                            Paypal 
                                        </span>
                                        <input id="horizontal-list-radio-paypal" type="radio" value="" name="list-radio" className="h-4 mr-3 text-[#DD730A] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    </label>
                                </li>
                                <li className="border w-full shadow rounded-full border-gray-200 dark:border-gray-600">
                                    <label htmlFor="horizontal-list-razorpay" className="flex items-center gap-6 justify-between hover:cursor-pointer">
                                        <span  className="flex items-center gap-3 p-1 text-gray-900 dark:text-gray-300">
                                            <span className='bg-[#a3ceff] p-3 rounded-full'><BsPaypal className='text-[#1e2a6b]' size={'2em'}/></span>
                                            Razorpay 
                                        </span>
                                        <input id="horizontal-list-razorpay" type="radio" value="" name="list-radio" className="h-4 mr-3 text-[#DD730A] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    </label>
                                </li>                    
                            </ul>
                            
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className="block mt-12">
                                <div className="flex items-center">
                                    <div className="flex items-center h-5">
                                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    </div>
                                    <div className="ml-5 text-sm" onChange={handleChange} onSubmit={handleSubmit} value={values.terms} >
                                        <label htmlFor="helper-checkbox" className=" text-2xl text-gray-400 dark:text-gray-300">5% Advance Payment for security and safety. I've accepted this term & condition</label>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                        <div className='grid lg:grid-cols-2 gap-4'>
                            <div className="col-end-3 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                                <button type="submit" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center ">
                                Review a Job
                                
                                </button>
                                <button type="button" className="border text-gray-400 shadow hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg ;f text-center items-center w-full ">
                                    Back
                                    
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
}

export default PostJobView