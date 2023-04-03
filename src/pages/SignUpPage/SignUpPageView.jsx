import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import SignUpImage from "../../Assets/signup-img.png";
import { BiHide, BiShow } from "react-icons/bi";
import { FaGoogle, FaFacebook, FaApple, FaGooglePlay } from "react-icons/fa";
import CommonButton from "../../components/OrderPageComponents/CommonButton";
import { Link, useNavigate } from "react-router-dom";
import { userSignUp } from "../../api";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthSlice";
import { toast } from "react-hot-toast";

const SignUpPageView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = async (event) => {
   
    event.preventDefault();
    const userName = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    const singUp = await userSignUp({ userName, email, password });
    console.log(singUp)
    if (singUp.status ==='PENDING') {
      dispatch(
        authActions.userRegister({ userId: singUp.data.userId, userInfo: singUp.data })
      );
      navigate('/verifyOtp')
    }else{
      toast.error(`${singUp.status} : ${singUp.massage}`, {id:1})
    }
  };
  return (
    <>
      <div className="w-full mt-20 h-screen sm:w-[90%] justify-center md:w-[90%] mx-auto flex-none sm:flex m-2 p-2 bg-white">
        {/* Login Image */}
        <div className="sm:w-[40%] md:w-[40%] hidden lg:block mt-16 xl:mt-0">
          <img src={SignUpImage} alt="SignUp image" />
        </div>

        {/* Login From */}
        <div className="w-[95%] mx-auto md:w-[50%] lg:w-[40%]">
          <div className="border border-slate-200 shadow-md p-4 rounded-md">
            <div className="text-center mb-14">
              <h1 className="text-3xl font-bold my-2">Sign Up</h1>
              <span>Enter details to create your account</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="username" className="text-sm select-none">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder="Enter your Username"
                  className="w-full bg-[#F5F5F5] border-[#E8E9EA] rounded mt-1 focus:border-none"
                />
              </div>
              <div className="my-3">
                <label htmlFor="email" className="text-sm select-none">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your E-mail"
                  className="w-full bg-[#F5F5F5] border-[#E8E9EA] rounded mt-1 focus:border-none"
                />
              </div>
              <div className="sm:my-3 sm:flex">
                <div className="my-3 sm:my-0 sm:mr-2">
                  <label htmlFor="password" className="text-sm select-none">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={`${showPassword ? "text" : "password"}`}
                      placeholder="Enter your Password"
                      className="w-full bg-transparent border-[#E8E9EA] rounded mt-1 focus:border-none z-0"
                    />
                    {showPassword ? (
                      <BiShow
                        size={30}
                        onClick={() => setShowPassword(false)}
                        className=" cursor-pointer p-1 top-3 right-3 absolute bg-transparent  text-slate-500"
                      />
                    ) : (
                      <BiHide
                        size={30}
                        onClick={() => setShowPassword(true)}
                        className=" cursor-pointer p-1 top-3 right-3 absolute bg-transparent  text-slate-500"
                      />
                    )}
                  </div>
                </div>

                <div className="my-3 sm:my-0 sm:ml-2 relative">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm select-none"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      name="confirmPassword"
                      type={`${showConfirmPassword ? "text" : "password"}`}
                      placeholder="Enter your Password"
                      className="w-full bg-transparent border-[#E8E9EA] rounded mt-1 focus:border-none z-0"
                    />
                    {showConfirmPassword ? (
                      <BiShow
                        size={30}
                        onClick={() => {
                          setShowConfirmPassword(false);
                        }}
                        className=" cursor-pointer p-1 top-3 right-3 absolute bg-transparent  text-slate-500"
                      />
                    ) : (
                      <BiHide
                        size={30}
                        onClick={() => {
                          setShowConfirmPassword(true);
                        }}
                        className=" cursor-pointer p-1 top-3 right-3 absolute bg-transparent  text-slate-500"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <CommonButton
                type="submit"
                text="Sign up"
                className="w-full bg-primary rounded-md  p-2 text-white my-5"
              />
            </form>

            {/* Sign up with Google & Facebook */}
            <div className="w-full sm:w-[95%] md:w-[90%] my-10 mx-auto flex">
              <button className="flex items-center space-x-2 py-3 px-3 md:px-5 rounded-md bg-[#F5F5F5] border border-slate-100 shadow mx-auto">
                <FaGoogle className="text-xl" />
                <span className="text-xs">Sign up with Google</span>
              </button>
              <button className="flex items-center space-x-2 p-3 rounded-md bg-[#F5F5F5] border border-slate-100 shadow mx-auto">
                <FaFacebook className="text-xl" />
                <span className="text-xs">Sign up with Facebook</span>
              </button>
            </div>

            {/* Already have an account? Sign in*/}
            <div className="text-center mt-4 space-x-1">
              <span className="text-xs">Already have an account?</span>
              <Link to="/login" className="text-[#009EF7] text-xs">
                Sign in
              </Link>
            </div>
          </div>

          {/* App Store & Google Play Store */}
          <div className="flex mx-auto md:gap-x-8 mt-8">
            <button className="flex items-center space-x-2 md:space-x-5 rounded-md border border-slate-100 shadow mx-auto py-3 px-2 md:px-8 bg-[#F5F5F5] mr-1">
              <FaApple className="text-xl sm:text-3xl ml-1" />
              <span className="text-sm">App Store</span>
            </button>
            <button className="flex items-center space-x-2 md:space-x-5 rounded-md border border-slate-100 shadow mx-auto py-3 px-2 md:px-8 bg-[#F5F5F5] ml-1">
              <FaGooglePlay className="text-xl sm:text-3xl ml-1" />
              <span className="text-sm">Google Play</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <h1>Welcome to Sign Up Page</h1>
    </>
  );
};
export default SignUpPageView;
