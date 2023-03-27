import React from "react";
import Footer from "../../components/Footer/Footer";
import SignUpImage from "../../Assets/signUp-img.png"
import { BiShow } from "react-icons/bi";
import { FaGoogle, FaFacebook, FaApple, FaGooglePlay } from "react-icons/fa";
import CommonButton from "../../components/OrderPageComponents/CommonButton";


const SignUpPageView = () => {
   return(
      <>
         <div className="w-full sm:w-[90%] md:w-[90%] mx-auto flex-none sm:flex m-2 p-2 bg-white">
            {/* Login Image */}
            <div className="sm:w-[40%] md:w-[40%] hidden lg:block mt-16 xl:mt-0">
               <img src={SignUpImage} alt="SignUp image" />
            </div>

            {/* Login From */}
            <div className="w-[95%] mx-auto lg:w-[45%]">
               <div className="border border-slate-200 shadow-md p-4 rounded-md">
                  <div className="text-center mb-14">
                     <h1 className="text-3xl font-bold my-2">Sign Up</h1>
                     <span>Enter details to create your account</span>
                  </div>
                  <form action="#" method="post">
                     <div className="my-3">
                        <label htmlFor="username" className="text-sm select-none">Username</label>
                        <input id="username" type="text" placeholder="Enter your Username" className="w-full bg-[#F5F5F5] border-[#E8E9EA] rounded mt-1 focus:border-none"/>
                     </div>
                     <div className="my-3">
                        <label htmlFor="email" className="text-sm select-none">E-mail</label>
                        <input id="email" type="email" placeholder="Enter your E-mail" className="w-full bg-[#F5F5F5] border-[#E8E9EA] rounded mt-1 focus:border-none"/>
                     </div>
                     <div className="sm:my-3 sm:flex">
                        <div className="my-3 sm:my-0 sm:mr-2">
                           <label htmlFor="password" className="text-sm select-none">Password</label>
                           <input id="password" type="password" placeholder="Enter your Password" className="w-full bg-transparent border-[#E8E9EA] rounded mt-1 focus:border-none z-0"/>
                           <BiShow className="w-[25px] float-right mr-3 -mt-7 text-xl bg-transparent z-50 text-slate-500"/>
                        </div>
                        <div className="my-3 sm:my-0 sm:ml-2">
                           <label htmlFor="confirmPassword" className="text-sm select-none">Confirm Password</label>
                           <input id="confirmPassword" type="password" placeholder="Enter your Password" className="w-full bg-transparent border-[#E8E9EA] rounded mt-1 focus:border-none z-0"/>
                           <BiShow className="w-[25px] float-right mr-3 -mt-7 text-xl bg-transparent z-50 text-slate-500"/>
                        </div>
                     </div>

                     {/* Login Button */}
                     <CommonButton type="submit" text="Sign up" className="w-full bg-primary rounded-md p-2 text-white my-3"/>
                  </form>

                  {/* Sign up with Google & Facebook */}
                  <div className="w-full sm:w-[95%] md:w-[90%] my-3 mx-auto flex">
                     <button className="flex items-center space-x-2 py-3 px-3 md:px-5 rounded-md bg-[#F5F5F5] border border-slate-100 shadow mx-auto">
                        <FaGoogle className="text-xl"/>
                        <span className="text-xs">Sign up with Google</span>
                     </button>
                     <button className="flex items-center space-x-2 p-3 rounded-md bg-[#F5F5F5] border border-slate-100 shadow mx-auto">
                        <FaFacebook className="text-xl"/>
                        <span className="text-xs">Sign up with Facebook</span>
                     </button>
                  </div>

                  {/* Already have an account? Sign in*/}
                  <div className="text-center mt-4 space-x-1">
                     <span className="text-xs">Already have an account?</span>
                     <a href="#" className="text-[#009EF7] text-xs">Sign in</a>
                  </div>
               </div>
               
               {/* App Store & Google Play Store */}
               <div className="my-4 flex">
                  <button className="border border-slate-200 shadow-md flex w-[200px] mx-auto rounded-md p-3 items-center space-x-2 md:space-x-6 bg-[#F5F5F5]">
                     <FaApple className="text-3xl ml-3"/>
                     <span>App Store</span>
                  </button>
                  <button className="border border-slate-200 shadow-md flex w-[200px] mx-auto rounded-md p-3 items-center space-x-2 md:space-x-6 bg-[#F5F5F5]">
                     <FaGooglePlay className="text-3xl ml-3"/>
                     <span>Google Play</span>
                  </button>
               </div>
            </div>
         </div>
         <Footer/>
      </>
   )
}
export default SignUpPageView;