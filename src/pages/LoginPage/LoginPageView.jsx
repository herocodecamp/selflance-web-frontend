import React from "react";
import LoginImage from "../../Assets/login-img.png";
import { BiShow } from "react-icons/bi";
import { FaGoogle, FaFacebook, FaApple, FaGooglePlay } from "react-icons/fa";
import CommonButton from "../../components/OrderPageComponents/CommonButton";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api";
import { authActions } from "../../store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { userDataActions } from "../../store/UserData";
import { getUserDetails } from "../../api";


const LoginPageView = () => {

   const userInfo = useSelector(state=>state.Auth.userInfo)

   const dispatch = useDispatch();
   const navigate = useNavigate()
   const handleSubmit = async (event) =>{
      event.preventDefault();
      const email = event.target.username.value;
      const password = event.target.password.value;
      console.log(email,password)
      const userLogin = await loginUser({email, password});
      console.log(userLogin)
      if(userLogin.status==='SUCCESS'){
         dispatch(authActions.userLogin({userId:userLogin.data.userId, userInfo:userLogin.data}));
         

         getUserDetails(userLogin.data.userId).then((resp)=>{
            if(resp && resp.error)
            {
                console.log(resp.error)
            }
            else
            { 
               if(resp.data){
                  let user = resp.data
              dispatch(userDataActions.getUserData({user}))
               }
               else{
                  navigate(`/become_seller/${userLogin.data.userId}`)
               }
                  
            }
        })

         userInfo.isSeller ? 
         navigate('/users/seller/dashboard') : navigate('/users/buyer/dashboard')
      }
   }
   return(
      <>
         <div className="w-full h-screen mt-20 sm:w-[90%] md:w-[90%] justify-center mx-auto flex-none sm:flex m-2 p-2 bg-white md:space-x-28">
            {/* Login Image */}
            <div className="md:w-[50%]  lg:mt-0 hidden md:block">
               <img src={LoginImage} alt="Login image"/>
            </div>

            {/* Login From */}
            <div className="w-[95%] mx-auto sm:w-[70%] md:w-[50%] lg:w-[40%]">
               <div className="border border-slate-200 shadow-md p-6 rounded-md">
                  <div className="text-center mb-14">
                     <h1 className="text-3xl font-bold my-2">Login</h1>
                     <span>Let’s build something greater</span>
                  </div>
                  <form onSubmit={handleSubmit}>
                     <div className="my-3">
                        <label htmlFor="username" className="text-sm select-none">E-mail or Username</label>
                        <input name="username" type="text" placeholder="Enter your E-mail or Username" className="w-full bg-[#F5F5F5] border-[#E8E9EA] rounded mt-1 focus:border-none"/>
                     </div>
                     <div className="my-3">
                        <label htmlFor="password" className="text-sm select-none">Password</label>
                        <input name="password" type="Password" placeholder="Enter your Password" className="w-full bg-transparent border-[#E8E9EA] rounded mt-1 focus:border-none z-0"/>
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
                  <div className="w-full lg:w-[90%] my-12 mx-auto flex space-x-1 sm:space-x-2">
                     <button className="flex items-center space-x-2 rounded-md border border-slate-100 shadow mx-auto py-3 px-2 md:px-5">
                        <FaGoogle className="text-lg sm:text-xl"/>
                        <span className="text-xs">Sign up with Google</span>
                     </button>
                     <button className="flex items-center space-x-2 rounded-md border border-slate-100 shadow mx-auto py-3 px-2 md:px-5">
                        <FaFacebook className="text-lg sm:text-xl"/>
                        <span className="text-xs">Sign up with Facebook</span>
                     </button>
                  </div>

                  {/* Don’t have an account? Sign up */}
                  <div className="text-center mt-4 space-x-1">
                     <span className="text-xs">Don’t have an account?</span>
                     <Link to='/signup' className="text-[#009EF7] text-xs">Sign up</Link>
                  </div>
               </div>
               
               {/* App Store & Google Play Store */}
               <div className="flex mx-auto md:gap-x-8 mt-8">
                  <button className="flex items-center space-x-2 md:space-x-5 rounded-md border border-slate-100 shadow mx-auto py-3 px-2 md:px-8 bg-[#F5F5F5] mr-1">
                     <FaApple className="text-xl sm:text-3xl ml-1"/>
                     <span className="text-sm">App Store</span>
                  </button>
                  <button className="flex items-center space-x-2 md:space-x-5 rounded-md border border-slate-100 shadow mx-auto py-3 px-2 md:px-8 bg-[#F5F5F5] ml-1">
                     <FaGooglePlay className="text-xl sm:text-3xl ml-1"/>
                     <span className="text-sm">Google Play</span>
                  </button>
               </div>
            </div>
         </div>
         <Footer/>
      </>
   )
}
export default LoginPageView;