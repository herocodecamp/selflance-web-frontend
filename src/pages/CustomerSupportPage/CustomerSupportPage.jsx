import React from "react";
import HistoryBackButtonView from "../../components/HistoryBackButton/HistoryBackButtonView";
import CommonButton from "../../components/OrderPageComponents/CommonButton";
import customerSupportBg from "../../Assets/customer-support.png";
import { BiSearch, BiChevronRight } from "react-icons/bi";
import Footer from "../../components/Footer/Footer";



const CustomerSupportPage = () => {
   return(
      <>
         {/* Banner Section */}
         <div className="w-full h-full sm:w-[80%] sm:h-[80%]  my-5 mx-auto bg-white">
         <HistoryBackButtonView text="Customer Support"/>
            <img src={customerSupportBg} alt="customer banner images" className="w-[90%] h-[90%] sm:w-[80%] sm:h-[80%] md:h-[70%] mx-auto"/>
         </div>

         {/* What do you need help with me? */}
         <div className="w-[90%] md:w-[80%] my-10 md:my-14 mx-auto">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-medium">What do you need help with me?</h2>
            <div class="relative flex my-4">
               <BiSearch class="absolute left-4 top-3 text-xl md:text-2xl"/>
               <input type="text" placeholder="Try, Update my account details" class="w-full border border-slate-300 pl-12 py-2 rounded-md focus:outline-none md:text-lg"/>
            </div>

            {/* Buyer & Seller Buttons */}
            <div className="border-2 rounded-md my-4">
               <CommonButton text="Buyer" className="w-[50%] bg-primary text-white p-3 rounded-l-md"/>
               <CommonButton text="Seller" className="w-[50%] bg-white text-slate-400 p-3 rounded-r-md"/>
            </div>

            <div className="py-2 sm:py-5">
               <div className="flex my-6 sm:my-10 border-spacing-2">
                  <p className="w-[100%] text-base sm:text-xl font-medium">Buyer Order Management</p>
                  <button>
                     <BiChevronRight className="w-[40px] text-2xl sm:text-3xl text-slate-500"/>
                  </button>
               </div>
               <div className="flex my-6 sm:my-10 border-spacing-2">
                  <p className="w-[100%] text-base sm:text-xl font-medium">Payments</p>
                  <button>
                     <BiChevronRight className="w-[40px] text-2xl sm:text-3xl text-slate-500"/>
                  </button>
               </div>
               <div className="flex my-6 sm:my-10 border-spacing-2">
                  <p className="w-[100%] text-base sm:text-xl font-medium">Invoices</p>
                  <button>
                     <BiChevronRight className="w-[40px] text-2xl sm:text-3xl text-slate-500"/>
                  </button>
               </div>
               <div className="flex my-6 sm:my-10 border-spacing-2">
                  <p className="w-[100%] text-base sm:text-xl font-medium">Business</p>
                  <button>
                     <BiChevronRight className="w-[40px] text-2xl sm:text-3xl text-slate-500"/>
                  </button>
               </div>
               <div className="flex my-6 sm:my-10 border-spacing-2">
                  <p className="w-[100%] text-base sm:text-xl font-medium">How Selflance works</p>
                  <button>
                     <BiChevronRight className="w-[40px] text-2xl sm:text-3xl text-slate-500"/>
                  </button>
               </div>
               <div className="flex my-6 sm:my-10 border-spacing-2">
                  <p className="w-[100%] text-base sm:text-xl font-medium">Account Management</p>
                  <button>
                     <BiChevronRight className="w-[40px] text-2xl sm:text-3xl text-slate-500"/>
                  </button>
               </div>
            </div>
         </div>
         <Footer/>
      </>
   )
}
export default CustomerSupportPage;