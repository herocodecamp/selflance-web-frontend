import React from "react";
import HistoryBackButton from "../../components/HistoryBackButton/";
import CommonButton from "../../components/OrderPageComponents/CommonButton";
import Footer from "../../components/Footer/Footer";

const BuyerOrderManagementPage = () => {
   return(
      <>
         <div className="w-[90%] md:w-[80%] my-5 md:my-10 mx-auto">
            <HistoryBackButton text="Customer Support"/>
            <h2 className="font-medium text-lg sm:text-3xl">Buyer Order Management</h2>

            <div className="mt-10">
               {/* Tittle */}
               <div className="my-2 sm:my-5">
                  <label className="pb-3 text-md font-semibold text-[#00538F]">Title</label>
                  <select className="w-full border-slate-200 rounded-md text-slate-500">
                     <option value="order">Order</option>
                     <option value="order">Order 1</option>
                     <option value="order">Order 2</option>
                     <option value="order">Order 3</option>
                  </select>
               </div>
               {/* Subtitle */}
               <div className="my-2 sm:my-5">
                  <label className="pb-3 text-md font-semibold text-[#00538F]">Subtitle</label>
                  <select className="w-full border-slate-200 rounded-md text-slate-500">
                     <option value="order">Seller not response</option>
                     <option value="order">Product not massing</option>
                     <option value="order">Seller not response</option>
                     <option value="order">Product not massing</option>
                  </select>
               </div>
               {/* Describe your Issue */}
               <div className="my-2 sm:my-5">
                  <textarea rows="8" placeholder="Describe your Issue...." className="w-full border-slate-200 rounded-md"></textarea>
               </div>
               <div className="my-2 sm-my-5">
                  {/* Submit Button */}
                  <CommonButton text="Submit" type="submit" className="bg-primary  py-2 px-12 sm:py-3 sm:px-16 text-white rounded-md block mx-auto"/>
               </div>
            </div>
         </div>
         <Footer/>
      </>
   )
}
export default BuyerOrderManagementPage;