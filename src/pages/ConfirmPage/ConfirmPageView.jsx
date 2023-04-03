import React, { useState } from "react";
import ConfirmImage from "../../Assets/confirm-img.png";
import InputField from "./InputField";
import CommonButton from "../../components/OrderPageComponents/CommonButton";
import Footer from "../../components/Footer/Footer";
import { userVerifyOtp } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { authActions } from "../../store/AuthSlice";


const ConfirmPageView = () =>{
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const {Auth:{userId}} = useSelector((state) => state);
   const[OTP,setOTP] = useState('')
   console.log(OTP)
   const handleSubmit = async (event) =>{
event.preventDefault();
const verify =await userVerifyOtp({otpNumber:OTP,userId});
console.log(verify)

if(verify.status='VERIFIED'){
   const userInfo = {
      email:verify.data.userDetails.email,
      isSeller:verify.data.userDetails.isSeller,
      isVerified:verify.data.userDetails.isVerified,

   }
dispatch(authActions.userRegister({userId:verify.data.userId, userInfo}))
toast.success(`${verify.status}: ${verify.message}`,{id:1})
navigate('/')
}

   }
   return(
      <>

         <div className="w-full h-screen sm:w-[90%] md:w-[80%] mx-auto flex-none  sm:flex md:mt-16 bg-white">
            {/* Confirm image */}
            <div className="hidden sm:block sm:w-[40%]">
               <img src={ConfirmImage} alt="Confirm image"/>
            </div>

            {/* Confirm Area */}
            <form onSubmit={handleSubmit} className="w-[95%] mx-auto sm:w-[50%] md:w-[60%]">
               <div className="flex space-x-1 mr-2 float-right">
                  <p className="text-sm">Already have an account?</p>
                  <a href="#" className="text-[#009EF7] text-sm">Sign in</a>
               </div>
               <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
                  <h2 className="text-4xl font-bold my-8 md:my-16 sm:text-left">Confirm</h2>
                  <div >
                     <p>We’ve the code send to your email-
                        <strong className="block">example@gmail.com</strong>
                     </p>
                  </div>
                  <div className="my-6">
                     <InputField OTP={OTP} setOTP={setOTP} />
                     
                  </div>
                  <div className="w-64 space-x-1 mb-8 md:mb-16">
                     <p className="text-center mb-2 text-md font-bold">00:56</p>
                     <div className="flex space-x-1">
                        <p className="text-sm">Didn’t receive code?</p>
                        <button className="text-[#009EF7] font-medium text-sm">Resend Code</button>
                     </div>
                  </div>
                  <CommonButton type="submit" text="Submit" className="w-[280px] sm:w-full md:w-[70%] bg-primary rounded-md text-white py-1 mb-5"/>
               </div>
            </form>
         </div>
         <Footer/>
      </>
   )
}
export default ConfirmPageView;