import React from "react";
import Card from "../../Assets/Card.png";
import CommonButton from '../../components/OrderPageComponents/CommonButton';


const AddNewCard = () => {
   return(
      <div className="container w-[1300px] mx-auto">
         <div className="shadow-lg border border-slate-200 rounded-3xl bg-white py-16 px-24 my-16">
            <img src={Card} alt="Card" className="w-[1100px] h-[660px] mb-16 m-auto"/>

            <div className="justify-center items-center py-8">
               <label className="relative">
                  <input type="number" className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-11 px-16 text-5xl addNewCardInput"/>
                  <span className="text-5xl text-opacity-80 absolute left-16 -top-8 transition duration-200 input-text">Card Number</span>
               </label>
            </div>
            <div className="flex">
               <div className="justify-center items-center mr-6 py-8 w-[48%]">
                  <label className="relative">
                     <input type="text" className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-11 px-16 text-5xl addNewCardInput"/>
                     <span className="text-5xl text-opacity-80 absolute left-16 -top-8 transition duration-200 input-text">First Name</span>
                  </label>
               </div>
               <div className="justify-center items-center py-8 ml-6 w-[48%]">
                  <label className="relative">
                     <input type="text" className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-11 px-16 text-5xl addNewCardInput"/>
                     <span className="text-5xl text-opacity-80 absolute left-16 -top-8 transition duration-200 input-text">Last Name</span>
                  </label>
               </div>
            </div>
            <div className="flex">
               <div className="justify-center items-center mr-6 py-8 w-[48%]">
                  <label className="relative">
                     <input type="text" className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-11 px-16 text-5xl addNewCardInput"/>
                     <span className="text-5xl text-opacity-80 absolute left-16 -top-8 transition duration-200 input-text">MM/YY</span>
                  </label>
               </div>
               <div className="justify-center items-center py-8 ml-6 w-[48%]">
                  <label className="relative">
                     <input type="number" className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-11 px-16 text-5xl addNewCardInput"/>
                     <span className="text-5xl text-opacity-80 absolute left-16 -top-8 transition duration-200 input-text">CVV</span>
                  </label>
               </div>
            </div>
         </div>
         <CommonButton text="Pay Now ($35.50)" className="block mb-4 mx-auto bg-primary rounded-md text-base text-white py-7 px-32 hover:ring-2 hover:underline"/>
      </div>
   )
}
export default AddNewCard;