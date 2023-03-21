import React from "react";
import Card from "../../Assets/Card.png";
import HistoryBackButton from "../../components/HistoryBackButton/";
import CommonButton from '../../components/OrderPageComponents/CommonButton';
import Footer from "../../components/Footer/Footer";


const AddNewCard = () => {
   return(
      <>
         <div className="sm:w-full md:w-[90%] xl:w-[90%] mx-auto">
            <HistoryBackButton text="Add New Card"/>
            <div className="shadow-lg border border-slate-200 rounded-3xl p-1 sm:p-2 md:p-5 lg:p-8 m-3">
               <img src={Card} alt="Card" className="mb-4 md:mb-12 m-auto"/>

               <div className="justify-center items-center py-2 md:py-5">
                  <label className="relative">
                     <input type="number" className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-3 sm:py-5 px-4 sm:6 text-2xl sm:text-3xl addNewCardInput"/>

                     <span className="text-2xl sm:text-3xl text-opacity-80 absolute left-14 -top-3 transition duration-200 input-text">Card Number</span>
                  </label>
               </div>
               <div className="sm:flex-none md:flex">
                  <div className="justify-center items-center md:mr-6 py-2 md:py-5 sm:w-full lg:w-[48%]">
                     <label className="relative">
                        <input type="text" className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-3 sm:py-5 px-4 sm:6 text-2xl sm:text-3xl addNewCardInput"/>
                        <span className="text-2xl sm:text-3xl text-opacity-80 absolute left-14 -top-3 transition duration-200 input-text">First Name</span>
                     </label>
                  </div>
                  <div className="justify-center items-center py-2 md:py-5 md:ml-6 sm:w-full lg:w-[48%]">
                     <label className="relative">
                        <input type="text" className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-3 sm:py-5 px-4 sm:6 text-2xl sm:text-3xl addNewCardInput"/>
                        <span className="text-2xl sm:text-3xl text-opacity-80 absolute left-14 -top-3 transition duration-200 input-text">Last Name</span>
                     </label>
                  </div>
               </div>
               <div className="sm:flex-none md:flex">
                  <div className="justify-center items-center md:mr-6 py-2 md:py-5 sm:w-full lg:w-[48%]">
                     <label className="relative">
                        <input type="text" className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-3 sm:py-5 px-4 sm:6 text-2xl sm:text-3xl addNewCardInput"/>
                        <span className="text-2xl sm:text-3xl text-opacity-80 absolute left-14 -top-3 transition duration-200 input-text">MM/YY</span>
                     </label>
                  </div>
                  <div className="justify-center items-center py-2 md:py-5 md:ml-6 sm:w-full lg:w-[48%]">
                     <label className="relative">
                        <input type="number" className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-3 sm:py-5 px-4 sm:6 text-2xl sm:text-3xl addNewCardInput"/>
                        <span className="text-2xl sm:text-3xl text-opacity-80 absolute left-14 -top-3 transition duration-200 input-text">CVV</span>
                     </label>
                  </div>
               </div>
            </div>
            <CommonButton text="Pay Now ($35.50)" className="block mb-4 mx-auto bg-primary rounded-md text-base text-white py-5 sm:py-7 md:my-10 px-6 sm:px-32 hover:ring-2 hover:underline"/>
         </div>
         <Footer/>
      </>
   )
}
export default AddNewCard;