import React from "react";
import LoginImage from "../../Assets/login-img.png";
import { BiShow } from "react-icons/bi";
import { FaGoogle, FaFacebook, FaApple, FaGooglePlay } from "react-icons/fa";
import CommonButton from "../../components/OrderPageComponents/CommonButton";


const LoginPageView = () => {
   return(
      <>
         <div className="w-full sm:w-[90%] md:w-[80%] mx-auto flex-none sm:flex m-2 p-2 bg-white">
            {/* Login Image */}
            <div className="sm:w-[40%] md:w-[50%] hidden sm:block">
               <img src={LoginImage} alt="Login image" />
            </div>

            {/* Login From */}
            <div className="w-[95%] mx-auto sm:w-[60%] md:w-[50%]">
               <div className="border border-slate-200 shadow-md p-4 rounded-md">
                  <div className="text-center mb-14">
                     <h1 className="text-3xl font-bold my-2">Login</h1>
                     <span>Let’s build something greater</span>
                  </div>
                  <form action="#" method="post">
                     <div className="my-3">
                        <label htmlFor="username" className="text-sm select-none">E-mail or Username</label>
                        <input id="username" type="text" placeholder="Enter your E-mail or Username" className="w-full bg-[#F5F5F5] border-[#E8E9EA] rounded mt-1 focus:border-none"/>
                     </div>
                     <div className="my-3">
                        <label htmlFor="password" className="text-sm select-none">Password</label>
                        <input id="password" type="Password" placeholder="Enter your Password" className="w-full bg-transparent border-[#E8E9EA] rounded mt-1 focus:border-none z-0"/>
                        <BiShow className="w-[25px] float-right mr-3 -mt-7 text-xl bg-transparent z-50 text-slate-500"/>
                     </div>

                     {/* Login Button */}
                     <CommonButton type="submit" text="Login" className="w-full bg-primary rounded-md p-2 text-white my-3"/>
                  </form>

                  {/* Keep me signed in & Forgot password */}
                  <div className="my-3 flex text-sm space-x-4">
                     <div className="w-[55%] flex items-center space-x-3">
                        <input type="checkbox" checked="checked" id="checkbox" className="focus:border-none rounded"/>
                        <label htmlFor="checkbox" className="select-none">Keep me signed in</label>
                     </div>
                     <a href="#" className="w-[45%] text-right text-[#009EF7]">Forgot Password?</a>
                  </div>

                  {/* Sign up with Google & Facebook */}
                  <div className="w-full sm:w-[95%] md:w-[90%] my-4 mx-auto flex space">
                     <div className="flex items-center space-x-2 py-3 px-3 md:px-5 rounded-md border border-slate-100 shadow mx-auto">
                        <FaGoogle className="text-lg"/>
                        <span className="text-xs">Sign up with Google</span>
                     </div>
                     <div className="flex items-center space-x-2 p-3 rounded-md border border-slate-100 shadow mx-auto">
                        <FaFacebook className="text-lg"/>
                        <span className="text-xs">Sign up with Facebook</span>
                     </div>
                  </div>

                  {/* Don’t have an account? Sign up */}
                  <div className="text-center mt-4 space-x-1">
                     <span className="text-xs">Don’t have an account?</span>
                     <a href="#" className="text-[#009EF7] text-xs">Sign up</a>
                  </div>
               </div>
               
               {/* App Store & Google Play Store */}
               <div className="my-4 flex">
                  <div className="border border-slate-200 shadow-md flex w-[200px] mx-auto rounded-md p-3 items-center space-x-6 bg-[#F5F5F5] mx-1">
                     <FaApple className="text-3xl ml-3"/>
                     <span>App Store</span>
                  </div>
                  <div className="border border-slate-200 shadow-md flex w-[200px] mx-auto rounded-md p-3 items-center space-x-6 bg-[#F5F5F5] mx-1">
                     <FaGooglePlay className="text-3xl ml-3"/>
                     <span>Google Play</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default LoginPageView;