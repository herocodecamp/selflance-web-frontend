import React, { useState } from 'react'
import Control from '../../common/Control/Control'
import {MdOutlineSpeed, MdOutlineFileUpload} from 'react-icons/md'
import { BsTags, BsPaypal } from 'react-icons/bs'
import {FaCreditCard} from 'react-icons/fa'
import PricePicker from '../../common/PricePicker';
import { ValidateSchema } from './PostJobSchema'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { jobPostActions } from '../../store/JobPostSlice'



const paymentMethod = ['card','paypal','razorPay']

const PostJobView = () => {
    
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const userDetailId = useSelector(state=>state.UserData.data._id)

   const [hourlybudget,setHourlyBudget]= useState(true);

   const initialValues = {
    title: "",
    category: "",
    duration: "",
    experience: "",
    language: "",
    hourlyFrom: 0,
    hourlyTo: 0,
    description: "",
    terms: false,
    jobFiles:'',
    budgetRate: 0,
    paymentMethod: paymentMethod[0]

}

    const projectBudget=[];
    const hourlyBudget=[];
      
    const { values, handleBlur, handleChange, handleSubmit, setFieldValue, errors, touched } =
        useFormik({
        initialValues,
        validationSchema: ValidateSchema,
        validateOnChange: true,
        validateOnBlur: false,
    
        onSubmit: (values, action) => {
            
            if(values.budgetRate>0)
            {
                const obj=  {
                    budgetType: 'Project',
                    budgetRate: values.budgetRate
                }
                 projectBudget.push(obj)

                values.projectBudget = projectBudget;
                delete values.budgetRate;
                delete values.hourlyFrom;
                delete values.hourlyTo;
            }
            else
            {
                const obj2 = {
                    budgetType: 'Hourly',
                    hourlyFrom: values.hourlyFrom,
                    hourlyTo: values.hourlyTo,
                }
                hourlyBudget.push(obj2)

                values.hourlyBudget = hourlyBudget

                delete values.budgetRate;
                delete values.hourlyFrom;
                delete values.hourlyTo;
            }
            
            values.userDetail = userDetailId
            console.log(values)

            dispatch(jobPostActions.jobData({values}))

            navigate('/job_post/new/review')
            action.resetForm();
        },
        });
    
    console.log("errors", errors);

    return ( 
        <div className='min-h-screen md:p-16 m-5'>
            <Control title='Post a Job'/>
            <div className='mt-10'>
                <form onSubmit={handleSubmit} >
                    <div className='grid md:grid-cols-2 gap-4'>
                        <label className="block">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Job Title</span>
                            <input type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'id='title' name='title' onBlur={handleBlur} onChange={handleChange} value={values.title} />    
                        </label>
                        <label className="block">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Select the Category</span>
                            <select type="text" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here' id='category' name='category' onChange={handleChange}  value={values.category}>
                                <option>Choose related category</option>
                                <option>Programming</option>
                                <option>Graphic Designer</option>
                                <option>Voice Over</option>
                            </select>
                        </label>
                    </div>
                    <div className='grid md:grid-cols-2 gap-4'>
                    <label className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Project Takes Time</span>
                            <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here' id='duration' name='duration' onChange={handleChange} onSubmit={handleSubmit} value={values.duration} >
                                <option>Select time period according to your project length</option>
                                <option>1 Day</option>
                                <option>3 Days</option>
                                <option>More than 3 Days</option>
                            </select>
                        </label>
                        <label className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Experience Level</span>
                            <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here' id='experience' name='experience' onChange={handleChange}  value={values.experience} >
                                <option>Select level according to your project complexity</option>
                                <option>Level 1</option>
                                <option>Level 2</option>
                                <option>Level 3</option>
                            </select>
                        </label>
                    </div>
                    <div className='grid md:grid-cols-2 gap-4'>
                    <label className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Select Seller Language</span>
                            <select type="text" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here' id='language' name='language' onChange={handleChange}  value={values.language}>
                                <option>Choose related language</option>
                                <option>English</option>
                                <option>Urdu</option>
                                <option>Hindi</option>
                                <option>Bengali</option>
                                <option>French</option>
                                <option>German</option>
                            </select>
                        </label>
                        
                    </div>
                    <div className='grid lg:grid-cols-2 gap-4'>
                    <label className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Budget</span>
                            <div className='mt-6'>    
                                <button type="button" onClick={()=>setHourlyBudget(true)} className={hourlybudget ? "text-white bg-[#DD730A] hover:bg-[#DD530A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-8 py-4 text-center text-sm inline-flex items-center mr-2 " : "border text-gray-400 shadow  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 text-center inline-flex items-center "}>
                                Hourly Budget
                                <MdOutlineSpeed  size={'1.5em'} className="ml-2 -mr-2"/>
                                </button>
                                <button type="button" onClick={()=>setHourlyBudget(false)} className={hourlybudget ? "border text-gray-400 shadow  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 text-center inline-flex items-center" : "text-white bg-[#DD730A] hover:bg-[#DD530A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-8 py-4 text-center text-sm inline-flex items-center ml-5 "}>
                                    Project Payment
                                    <BsTags size={'1.5em'} className={hourlybudget? "text-[#DD730A] ml-2 -mr-2" : "text-white ml-2 -mr-2"}/>
                                </button>

                            </div>
                        </label>
                        
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="block mt-12">
                        {
                            hourlybudget ? <> <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Set Hourly Rate</span>
                            <div className='mt-6 grid grid-cols-2 gap-2 text-gray-500'>
                                <div className=''>
                                        <p className='ml-3'>From</p>
                                        <input className='w-1/2  rounded-md text-center text-lg border-[2px] h-14' onChange={handleChange} onBlur={handleBlur} id='hourlyFrom' name='hourlyFrom' value={values.hourlyFrom} /> /hr
                                </div>
                                <div>
                                        <p className='ml-3'>To</p>
                                        <input className='w-1/2  rounded-md text-center text-lg border-[2px] h-14' onChange={handleChange} onBlur={handleBlur} name='hourlyTo' value={values.hourlyTo} /> /hr
                                </div>
                                
                            </div> </> : 
                            <>
                                <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Set Project Rate</span>

                                <input type="text" className="peer mt-1 text-gray-500 block w-1/2 px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write payment here'id='budgetRate' name='budgetRate' onBlur={handleBlur} onChange={handleChange} value={values.budgetRate} /> 

                            </>
                        }
                        
                    </div>
                        
                    </div>

                    <div className='grid grid-cols-1 gap-4'>
                        <div className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Job Description in Details</span>
                            <textarea id="description" className="mt-6 block p-5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows='20' placeholder="Write your thoughts here..." name='description' onChange={handleChange}  value={values.description} ></textarea>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <div className="block mt-12">
                            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Upload Documents</span>
                            <label htmlFor="jobFiles" className="mt-6 flex flex-col justify-center w-full h-20 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex justify-between items-center mx-4">
                                    <p className=" text-sm text-gray-400 dark:text-gray-400">Upload File</p>
                                    <p className=" text-gray-400 dark:text-gray-400"><MdOutlineFileUpload size={'1.5em'}/></p>
                                </div>
                                <input id="jobFiles" type="file" name="jobFiles" className="hidden" onChange={(e) =>
                                                                                setFieldValue('jobFiles', e.currentTarget.files[0])}  />
        
                            </label>
                            <p className='text-right mt-3 text-gray-400'>File Size is Max: 150MB</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1'>
                        <div className="block mt-12 ">
                            <span className="block w-full text-[#00538F] font-medium text-2xl pl-3">Select Payment Method</span>
                            <ul className="mt-6 lg:gap-0 items-center lg:flex-row flex-col justify-between gap-6 text-lg text-gray-900 bg-white border-gray-200 rounded-lg flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="border w-full shadow rounded-full border-gray-200 dark:border-gray-600">
                                    <label htmlFor="card" className="flex items-center gap-6 justify-between hover:cursor-pointer">
                                        <span  className="flex items-center gap-3 p-1 text-gray-900 dark:text-gray-300">
                                            <span className='bg-[#eab681] p-3 rounded-full'><FaCreditCard className='text-[#DD730A]' size={'2em'}/></span>
                                            Credit or Debit Card 
                                        </span>
                                        <input id="card" type="radio" checked={values.paymentMethod === paymentMethod[0] ? true: false} name="card" className="h-4 mr-3 text-[#DD730A] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={()=>{
                                            setFieldValue('paymentMethod',paymentMethod[0])
                                        }}/>
                                    </label>
                                </li>
                                <li className="ml-2 border w-full shadow rounded-full border-gray-200 dark:border-gray-600">
                                    <label htmlFor="paypal" className="flex items-center gap-6 justify-between hover:cursor-pointer">
                                        <span  className="flex items-center gap-3 p-1 text-gray-900 dark:text-gray-300">
                                            <span className='bg-[#a3ceff] p-3 rounded-full'><BsPaypal className='text-[#1e2a6b]' size={'2em'}/></span>
                                            Paypal 
                                        </span>
                                        <input id="paypal" type="radio" value="" checked={values.paymentMethod === paymentMethod[1] ? true: false} name="paypal" className="h-4 mr-3 text-[#DD730A] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={()=>{
                                            setFieldValue('paymentMethod',paymentMethod[1])}} />
                                    </label>
                                </li>
                                <li className=" ml-2 border w-full shadow rounded-full border-gray-200 dark:border-gray-600">
                                    <label htmlFor="razorPay" className="flex items-center gap-6 justify-between hover:cursor-pointer">
                                        <span  className="flex items-center gap-3 p-1 text-gray-900 dark:text-gray-300">
                                            <span className='bg-[#a3ceff] p-3 rounded-full'><BsPaypal className='text-[#1e2a6b]' size={'2em'}/></span>
                                            Razorpay 
                                        </span>
                                        <input id="razorPay" type="radio" value="" checked={values.paymentMethod === paymentMethod[2] ? true: false} name="razorPay" className="h-4 mr-3 text-[#DD730A] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={()=>{
                                            setFieldValue('paymentMethod',paymentMethod[2])}} />
                                    </label>
                                </li>                    
                            </ul>
                            
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className="block mt-12">
                                <div className="flex items-center">
                                    <div className="flex items-center h-5">
                                        {/* <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/> */}
                                        <input id="terms" type="checkbox" name='terms' onChange={handleChange}  value={values.terms} className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    </div>
                                    <div className="ml-5 text-sm"  >
                                        
                                        <label  htmlFor="terms" className=" text-2xl text-gray-400 dark:text-gray-300" > 5% Advance Payment for security and safety. I've accepted this term & condition</label>
                                        
                                        
                                        {/* <label htmlFor="helper-checkbox" className=" text-2xl text-gray-400 dark:text-gray-300">5% Advance Payment for security and safety. I've accepted this term & condition</label> */}
                                    </div>
                                </div>

                        </div>
                        
                    </div>
                    <div className='grid lg:grid-cols-2 gap-4'>
                        <div className="col-end-3 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                            <button type="submit" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center ">
                             Review Job
                            
                            </button>
                            <button type="button" className="border text-gray-400 shadow hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg ;f text-center items-center w-full ">
                                <Link to="/job_posts">Back</Link>
                                
                            </button>
                        </div>
                        
                    </div>
                </div>
            </form>
        </div>

        </div>
    )
}
export default PostJobView