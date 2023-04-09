import React from 'react'
import ProgressBar from './ProgressBar'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { becomeSellerActions } from '../../store/BecomeSellerSlice';
import { submitUserDetails, } from '../../api';

const AccoutSecurity = () => {

    const dispatch = useDispatch();
    const data = useSelector(state=>state.BecomeSeller);
    console.log(data.profileImage)
    const userInfo = useSelector(state=>state.Auth);
    const params = useParams()
    const navigate = useNavigate();
   
   
    
    const handleSubmit = async(e) =>{
        e.preventDefault()

        const email = e.target.email.value;
        const number = e.target.number.value;

        dispatch(becomeSellerActions.detailsView3({email,number}))

        // reading data from store
       
        



         // creating formData
         const form= new FormData();
    data.firstname && form.append('firstname',data.firstname)
    data.lastname && form.append('lastname',data.lastname)
    data.location && form.append('location',data.location)
    data.about && form.append('about',data.about)  
    data.jobDescription && data.occupation && form.append('occupation',data.occupation)
    data.jobDescription && form.append('jobDescription', data.jobDescription)
    data.education && form.append('education', JSON.stringify(data.education))
    data.hourlyRate && form.append('hourlyRate', data.hourlyRate)
    data.skills && form.append('skills', JSON.stringify(data.skills))
    data.experience && form.append('experience', JSON.stringify(data.experience))
    data.certificates && form.append('certificates', JSON.stringify(data.certificates))
    data.contactNumber && form.append('contactNumber', data.contactNumber)
    data.sellerLanguage && form.append('sellerLanguage', data.sellerLanguage)
    data.languageLevel && form.append('languageLevel', data.languageLevel)
    data.profileImage && form.append('profileImage', data.profileImage)
    // params.userID && form.append('userId',params.userID)

    // viewing formData
    // for (var key of form.entries()) {
    //     console.log(key[0] + ', ' + key[1])
    // }

    const postRequest = await submitUserDetails(form, params.userID);
    console.log("after request", postRequest)
    
    if(postRequest) {navigate(`/settings/${params.userID}`)}
    }





  return (
    <div className='mt-10'>
        <ProgressBar title='Account Security' size={100} />
        <form onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-1 gap-4'>
                <label className="block">
                    <h4><span className="w-full text-[#00538F] text-xl font-medium pl-3">E-mail</span> (Private)</h4>
                    <input type="text" name="email" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Enter your E-mail'/>    
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
                    <input type="text" name="number" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Enter your Phone Number'/>    
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
                <button type="submit" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 shadow text-lg font-medium rounded-lg py-3 px-8 lg:py-6 lg:px-24 text-center">
                    {/* <Link to="/dashboard/:sellerID">Continue</Link> */} Continue
                </button>
            </div>
            
        </form>
    </div>

  )
}

export default AccoutSecurity