import React from "react";
import CheckImage from "../../Assets/checked.png";
import CreditOrDebit from "../../Assets/CreditOrDebit.png";
import Paypal from "../../Assets/Paypal.png";
import Razorpay from "../../Assets/Razorpay.png";

import { FaCheck } from "react-icons/fa";


const OrderDetails = () => {
   return(
      <div className="container w-[1300px] my-20 mx-auto space-x-10 flex">
         {/* Order Details Start */}
         <div className="w-[50%] shadow-lg border ml-3 border-slate-200 rounded-2xl py-8 px-[54px]">
            <h3 className="text-3xl mb-8">Order Details</h3>

            <ul className="space-y-4 overflow-hidden text-slate-500">
               <li className="">Delivery days 
                  <span className="float-right">2Days</span>
               </li>
               <li>Revisions 
                  <span className="float-right">Unlimited</span>
               </li>
               <li>3 Page/Screen
                  <img src={CheckImage} alt="check" className="float-right" />
               </li>
               <li>Responsive design
                  <img src={CheckImage} alt="check" className="float-right" />
               </li>
               <li>Source file
                  <img src={CheckImage} alt="check" className="float-right" />
               </li>
            </ul>
         </div>
         {/* Order Details End */}

         {/* Order Details Start */}
         <div className="w-[45%] shadow-lg border border-slate-200 rounded-2xl py-8 px-[54px] ml-10">
            <h3 className="text-3xl mb-8">Payment Method</h3>
            <ul className="space-y-4 overflow-hidden text-slate-500">
               <li className="group">
                  <img src={CreditOrDebit} alt="card" />
                  <span className="">Credit or Debit Card</span>
                  <input type="radio" name="check" checked />
               </li>
            </ul>
         </div>
         {/* Order Details End */}
      </div>
   )
}
export default OrderDetails;