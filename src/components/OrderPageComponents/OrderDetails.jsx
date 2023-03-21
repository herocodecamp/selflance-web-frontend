import React from "react";
import CreditOrDebit from "../../Assets/CreditOrDebit.png";
import Paypal from "../../Assets/Paypal.png";
import RazorPay from "../../Assets/RazorPay.png";

import { FaCheck } from "react-icons/fa";


const OrderDetails = () => {
   return(
      <div className="mb-2 flex-none md:flex space-y-3 md:space-y-0 mt-6 md:mt-0">
         {/* Order Details */}
         <div className="w-full md:w-[50%] border rounded-md shadow-md p-4 mr-0 md:mr-2">
            <h3 className="text-2xl md:text-3xl mb-5">Order Details</h3>

            <ul className="space-y-4 overflow-hidden text-slate-500">
               <li>Delivery days 
                  <span className="float-right">2Days</span>
               </li>
               <li>Revisions 
                  <span className="float-right">Unlimited</span>
               </li>
               <li>3 Page/Screen
                  <FaCheck className="inline float-right text-[#00538F] text-xl md:text-2xl"/>
               </li>
               <li>Responsive design
                  <FaCheck className="inline float-right text-[#00538F] text-xl md:text-2xl"/>
               </li>
               <li>Source file
                  <FaCheck className="inline float-right text-[#00538F] text-xl md:text-2xl"/>
               </li>
            </ul>
         </div>

         {/* Payment Method */}
         <div className="w-full md:w-[50%] border rounded-md shadow-md p-4 ml-0 md:ml-2">
            <h3 className="text-2xl md:text-3xl mb-5">Payment Method</h3>

            <div className="space-y-4 text-slate-500">
               <div className="flex items-center border rounded-full">
                  <img src={CreditOrDebit} alt="Credit or debit card image" className="w-[50px] mr-2 md:mr-3"/>
                  <label className="w-[100%]">Credit or Debit Card</label>
                  <input type="radio" name="card" checked  className="mr-3"/>
               </div>
               <div className="flex items-center border rounded-full">
                  <img src={Paypal} alt="Paypal image" className="w-[50px] mr-2 md:mr-3"/>
                  <label className="w-[100%]">Paypal</label>
                  <input type="radio" name="card" className="mr-3"/>
               </div>
               <div className="flex items-center border rounded-full">
                  <img src={RazorPay} alt="Razor pay image" className="w-[50px] mr-2 md:mr-3"/>
                  <label className="w-[100%]">Razor pay</label>
                  <input type="radio" name="card" className="mr-3"/>
               </div>
            </div>
         </div>
      </div>
   )
}
export default OrderDetails;