import React from 'react'
import {IoMdCheckboxOutline} from 'react-icons/io'
import {AiOutlinePlus} from 'react-icons/ai';
import { useDispatch } from 'react-redux'
import { createGigActions } from '../../store/CreateGigSlice'


const packageList = ['Summary', 'Price', 'Prototype','Source File', 'Logo', 'No of Pages', 'No. of Revisions', 'Delivery'];

const packageValue = ['summary', 'price', 'prototype','sourceFile', 'logo', 'pages', 'revisions', 'delivery'];

const Details = ({handleStep}) => {

    const dispatch = useDispatch();

    const packages=[]
    const handleSubmit =(e)=>{
        e.preventDefault();
        // const {value,name} = e.target;

        const basicpackage = {
            packageName: 'Basic',
            summary: e.target.summaryBasic.value,
            price: e.target.priceBasic.value,
            prototype: e.target.prototypeBasic.checked,
            sourceFile: e.target.prototypeBasic.checked,
            logo: e.target.logoBasic.checked,
            pages: e.target.pagesBasic.value,
            revisions: e.target.revisionsBasic.value,
            deliveryDuration: e.target.deliveryBasic.value
        }
        packages.push(basicpackage)

        const standardpackage = {
            packageName: 'Standard',
            summary: e.target.summaryStandard.value,
            price: e.target.priceStandard.value,
            prototype: e.target.prototypeStandard.checked,
            sourceFile: e.target.prototypeStandard.checked,
            logo: e.target.logoStandard.checked,
            pages: e.target.pagesStandard.value,
            revisions: e.target.revisionsStandard.value,
            deliveryDuration: e.target.deliveryStandard.value
        }
        packages.push(standardpackage)
        const premiumpackage = {
            packageName: 'Premium',
            summary: e.target.summaryPremium.value,
            price: e.target.pricePremium.value,
            prototype: e.target.prototypePremium.checked,
            sourceFile: e.target.prototypePremium.checked,
            logo: e.target.logoPremium.checked,
            pages: e.target.pagesPremium.value,
            revisions: e.target.revisionsPremium.value,
            deliveryDuration: e.target.deliveryPremium.value
        }

        packages.push(premiumpackage)

       const serviceDescription = e.target.servicedecription.value

        console.log(packages)

        dispatch(createGigActions.gigView2({serviceDescription,packages}))

        handleStep(3)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className='grid md:grid-cols-1 gap-4'>
            <div className="block mt-2">
                <span className="block w-full text-[#00538F] text-2xl font-medium my-5">Describe your service</span>
                <textarea  name="servicedecription" className="mt-6 block p-5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows='10' placeholder="Describe your service..."></textarea>
            </div>
        </div>
        <div className='grid md:grid-cols-1 gap-4'>
        <div className="block mt-12">
            

                <span className="block w-full text-[#00538F] text-2xl font-medium pl-3 my-5">Packages</span>
                
                <div className="relative overflow-x-auto">
                    {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
                        <thead className="text-center text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-white">
                                    Packages
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Basic
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Standard
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Premium
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Summary
                                </th>
                                <td className="px-6 py-4">
                                    I will design 2 App screen including source file + prototype
                                </td>
                                <td className="px-6 py-4">
                                    I will design 4 App screen including source file + prototype
                                </td>
                                <td className="px-6 py-4">
                                    I will design 8 App screen including source file + prototype
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Price
                                </th>
                                <td className="px-6 py-4">
                                    $10
                                </td>
                                <td className="px-6 py-4">
                                    $30
                                </td>
                                <td className="px-6 py-4">
                                    $60
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Prototype
                                </th>
                                <td className="px-6 py-4">
                                    
                                </td>
                                <td className="px-6 py-4">
                                    <IoMdCheckboxOutline className='text-[#00538F] text-xl' />
                                </td>
                                <td className="px-6 py-4">
                                    <IoMdCheckboxOutline className='text-[#00538F] text-xl'/>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Source File
                                </th>
                                <td className="px-6 py-4">
                                    <IoMdCheckboxOutline className='text-[#00538F] text-xl' />
                                </td>
                                <td className="px-6 py-4">
                                    <IoMdCheckboxOutline className='text-[#00538F] text-xl' />
                                </td>
                                <td className="px-6 py-4">
                                    <IoMdCheckboxOutline className='text-[#00538F] text-xl' />
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Logo
                                </th>
                                <td className="px-6 py-4">
                                    
                                </td>
                                <td className="px-6 py-4">
                                    
                                </td>
                                <td className="px-6 py-4">
                                    <IoMdCheckboxOutline className='text-[#00538F] text-xl' />
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    No of Pages
                                </th>
                                <td className="px-6 py-4">
                                    Up to 2
                                </td>
                                <td className="px-6 py-4">
                                    Up to 4
                                </td>
                                <td className="px-6 py-4">
                                    Up to 8
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    No of Revisions
                                </th>
                                <td className="px-6 py-4">
                                    2
                                </td>
                                <td className="px-6 py-4">
                                    Unlimited
                                </td>
                                <td className="px-6 py-4">
                                    Unlimited
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Delivery Time
                                </th>
                                <td className="px-6 py-4">
                                    1 Day
                                </td>
                                <td className="px-6 py-4">
                                    2 Days
                                </td>
                                <td className="px-6 py-4">
                                    3 Days
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="bg-white ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    
                                </th>
                                <td className="px-6 py-4">
                                    <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-2  lg:px-4 lg:py-2 text-center  items-center " onClick={() => handleStep(3)} >
                                        Select
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-2  lg:px-4 lg:py-2 text-center  items-center " onClick={() => handleStep(3)} >
                                        Select
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-2  lg:px-4 lg:py-2 text-center  items-center " onClick={() => handleStep(3)} >
                                        Select
                                    </button>
                                </td>

                            </tr>   
                        </tfoot>
                    </table> */}
                    <div className='grid grid-cols-4 gap-0'>
                        {/* packages */}
                        <div className='col-start-1 col-span-1  border'>
                            <table className="w-full">
                                <thead className='h-12'>
                                    <tr className='border' >
                                <th className='' >Packages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        packageList.map((item,index)=>{
                                            return(
                                                <tr key={index} className='border text-base font-normal'>
                                                    <div className={`ml-10 ${index ===0 ? 'my-6':'my-3'}`}>
                                                    <td >{item}</td>
                                                    </div>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                       
                             </table>

                        </div>

                        {/* Basic Package */}
                        <div className='col-start-2 col-span-1 w-full border'>
                             <table className="w-full">
                                <thead className='h-12'>
                                    <tr className='border' >
                                        
                                <th className='' >Basic</th>
                                
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        packageValue.map((item,index)=>{
                                            
                                                return(
                                                    
                                                        index >=2 && index <=4 ? (<tr key={index} className='border'>
                                                        <div className={`ml-16 lg:ml-28 ${index ===0 ? 'my-6':'my-3'}`}>
                                                        <td >
                                                        <input  type="checkbox"  name={`${item}Basic`} class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-0" />
                                                        </td>
                                                        </div>
                                                    </tr>):(<tr key={index} className='border'>
                                                        <div className={`p-0 w-full ${index ===0 ? 'h-[74px]':'h-[50px]'}`}>
                                                        <td className='' >
                                                        <input type="text" name={`${item}Basic`} class={`p-0 w-full text-xs text-gray-900 bg-transparent border-0   appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer ${index === 0 ?'text-start': 'text-center'}`} placeholder={`Enter ${item}`}  />
                                                        </td>
                                                        </div>
                                                    </tr>)
                                                   
                                                    
                                                )
                                            
                                            
                                        })
                                    }
                                </tbody>
                                       
                             </table>


                        </div>

                        {/* Standard Package */}
                        <div className='col-start-3 col-span-1 w-full border'>

                        <table className="w-full">
                                <thead className='h-12'>
                                    <tr className='border' >
                                        
                                <th className='' >Standard</th>
                                
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        packageValue.map((item,index)=>{
                                            
                                                return(
                                                    
                                                        index >=2 && index <=4 ? (<tr key={index} className='border'>
                                                        <div className={`ml-16 lg:ml-28 ${index ===0 ? 'my-6':'my-3'}`}>
                                                        <td >
                                                        <input  type="checkbox"  name={`${item}Standard`} class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-0" />
                                                        </td>
                                                        </div>
                                                    </tr>):(<tr key={index} className='border'>
                                                        <div className={`p-0 w-full ${index ===0 ? 'h-[74px]':'h-[50px]'}`}>
                                                        <td className='' >
                                                        <input type="text" name={`${item}Standard`} class={`p-0 w-full text-xs text-gray-900 bg-transparent border-0   appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer ${index === 0 ?'text-start': 'text-center'}`} placeholder={`Enter ${item}`} />
                                                        </td>
                                                        </div>
                                                    </tr>)
                                                   
                                                    
                                                )
                                            
                                            
                                        })
                                    }
                                </tbody>
                                       
                             </table>

                        </div>

                        {/* Premium Package */}
                        <div className='col-start-4 col-span-1 w-full border'>

                        <table className="w-full">
                                <thead className='h-12'>
                                    <tr className='border' >
                                        
                                <th className='' >Premium</th>
                                
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        packageValue.map((item,index)=>{
                                            
                                                return(
                                                    
                                                        index >=2 && index <=4 ? (<tr key={index} className='border'>
                                                        <div className={`ml-16 lg:ml-28 ${index ===0 ? 'my-6':'my-3'}`}>
                                                        <td >
                                                        <input  type="checkbox"  name={`${item}Premium`} class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-0" />
                                                        </td>
                                                        </div>
                                                    </tr>):(<tr key={index} className='border'>
                                                        <div className={`p-0 w-full ${index ===0 ? 'h-[74px]':'h-[50px]'}`}>
                                                        <td className='' >
                                                        <input type="text" name={`${item}Premium`} class={`p-0 w-full text-xs text-gray-900 bg-transparent border-0   appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer ${index === 0 ?'text-start': 'text-center'}`} placeholder={`Enter ${item}`}/>
                                                        </td>
                                                        </div>
                                                    </tr>)
                                                   
                                                    
                                                )
                                            
                                            
                                        })
                                    }
                                </tbody>
                                       
                             </table>

                        </div>

                    </div>

                    


                </div>
            </div>
        </div>
        <div className='grid lg:grid-cols-1 gap-4 border my-5 p-5'>
            <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">FAQs</span>
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
            <h2 id="accordion-flush-heading-1">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                <span>Anything question goes here</span>
                <AiOutlinePlus className='text-[#00538F] text-xl' />
                </button>
            </h2>
            <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
            </div>
            <h2 id="accordion-flush-heading-2">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                <span>Anything question goes here</span>
                <AiOutlinePlus className='text-[#00538F] text-xl' />
                </button>
            </h2>
            <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
            </div>
            <h2 id="accordion-flush-heading-3">
                <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                <span>Anything question goes here</span>
                <AiOutlinePlus className='text-[#00538F] text-xl' />
                </button>
            </h2>
            <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                </ul>
                </div>
            </div>
            </div>

        </div>
        <div className='grid lg:grid-cols-1 gap-4'>
            <label className="block">
                <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Add Requirement</span>
                <div className='flex items-center mt-1 text-gray-500 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'>
                <input type="text" className="peer w-full px-3 py-6 border-0 focus:outline-none outline-none" placeholder='Add Question' />
                <AiOutlinePlus className='mr-5 text-2xl' />
                </div>
                
            </label>
        </div>

        <div className='grid lg:grid-cols-4 gap-4'>
            <div className="col-end-5 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                <button type="submit" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center " >
                Continue
                
                </button>

            </div>
            
        </div>
        </form>

    </div>
  )
}

export default Details