import React from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
const InputField = ({OTP, setOTP}) => {
   return (
      // <input
      //    type="number"
      //    maxLength={1} 
      //    name={props.name}
      //    placeholder={props.placeholder}
      //    className="rounded-md w-10 py-1 text-2xl mr-2 border border-slate-200 my-2 shadow-sm"
      // />
      <div className="mt-4">


      <OTPInput
      // className='shadow bg-red-300'
     
      value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false}  />      </div>
   )
}
export default InputField;