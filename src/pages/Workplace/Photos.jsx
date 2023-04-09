import React from 'react'
import { BsCameraFill } from 'react-icons/bs'
import {BiVideoPlus} from 'react-icons/bi'

import { useDispatch, useSelector } from 'react-redux'
import { createGigActions } from '../../store/CreateGigSlice'

import { useParams } from 'react-router-dom'

import { gigCreate } from '../../api';


const Photos = ({handleStep}) => {

    const data = useSelector(state=>state.CreateGig)
    const dispatch = useDispatch()

    const params = useParams()

    console.log("data from the creat gig",data)
    const gigImages =[]

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const image1 = document.getElementsByClassName("gigImage")
        // console.log(image1[0].files[0])
    

        const gigForm = new FormData();

        for (let i=0;i<image1.length; i++)
        {
            if(image1[i].files[0])
            {
                gigImages.push(image1[i].files[0])
                gigForm.append('gigImage',image1[i].files[0]);
            }
            
        }

        dispatch(createGigActions.gigView3({gigImages}))

        data.title && gigForm.append('title',data.title)
        data.category && gigForm.append('category',data.category)
        data.subCategory && gigForm.append('subCategory',data.subCategory)
        data.tags && gigForm.append('tags',JSON.stringify(data.tags))
        data.serviceDescription && gigForm.append('serviceDescription',data.serviceDescription)
        data.packages && gigForm.append('packages',JSON.stringify(data.packages))
        // data.gigImages && gigForm.append('gigImage',data.gigImages)
        data.gigFAQ && gigForm.append('gigFAQ',JSON.stringify(data.gigFAQ))
        data.videos && gigForm.append('videos',data.videos)
        data.gigRequirement && gigForm.append('gigRequirement',JSON.stringify(data.gigRequirement))

        


        for (var key of gigForm.entries()) {
        console.log(key[0] + ', ' + key[1])
            }
        
        const gigPostReq = await gigCreate(gigForm,params.userID)

        console.log("post req response: ", gigPostReq)

        if(gigPostReq.statusText === 'OK'){handleStep(4)}
        
        // 
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h2>Add Images for portfolio <span>(Min. 3)</span></h2>
        <div className='flex flex-wrap' >


        </div>
        <div className='grid grid-cols-1 gap-4 mt-12'>
        <span className="block w-full text-2xl font-medium">Add Images for portfolio</span>
            <div className="flex flex-wrap gap-8">
                
                <label htmlFor="input-image-1" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex justify-center items-center mx-4">
                        <p className=" text-gray-400 dark:text-gray-400"><BsCameraFill size={'2em'}/></p>
                    </div>
                    <input id="input-image-1" type="file" className="hidden gigImage" name="input-image" />

                </label>
                <label htmlFor="input-image-2" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex justify-center items-center mx-4">
                        <p className=" text-gray-400 dark:text-gray-400"><BsCameraFill size={'2em'}/></p>
                    </div>
                    <input id="input-image-2" type="file" className="hidden gigImage" name="input-image" />

                </label>
                <label htmlFor="input-image-3" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex justify-center items-center mx-4">
                        <p className=" text-gray-400 dark:text-gray-400"><BsCameraFill size={'2em'}/></p>
                    </div>
                    <input id="input-image-3" type="file" className="hidden gigImage" name="input-image" />

                </label>
                <label htmlFor="input-image-4" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex justify-center items-center mx-4">
                        <p className=" text-gray-400 dark:text-gray-400"><BsCameraFill size={'2em'}/></p>
                    </div>
                    <input id="input-image-4" type="file" className="hidden gigImage" name="input-image" />

                </label>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-12'>
        <span className="block w-full text-2xl font-medium">Add Video for portfolio</span>
            <div className="flex flex-wrap gap-8">
                
                <label htmlFor="input-file" className="mt-6 flex flex-col justify-center w-60 h-60 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex justify-center items-center mx-4">
                        <p className=" text-gray-400 dark:text-gray-400"><BiVideoPlus size={'2em'}/></p>
                    </div>
                    <input id="input-file" type="file" className="hidden" multiple />

                </label>
            </div>
        </div>
        <div className='grid lg:grid-cols-4 gap-4'>
            <div className="col-end-5 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                <button type="submit" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center "  >
                Publish
                
                </button>

            </div>
            
        </div>
        </form>
    </div>
  )
}

export default Photos