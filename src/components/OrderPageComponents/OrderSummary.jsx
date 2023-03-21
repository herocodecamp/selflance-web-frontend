import React from "react";

const OrderSummary = () => {
   return(
      <div className="my-10 mx-auto shadow-md border rounded-xl text-2xl md:text-4xl px-5 sm:px-10 md:px-16 lg:px-20 py-5 sm:py-8 md:py-12">
         <h2 className="mb-5 sm:mb-7 md:mb-10">Order Summary</h2>
         <div className="space-y-2 sm:space-y-3 md:space-y-7 text-lg md:text-3xl">
            <p className="text-slate-500">Subtotal
               <span className="float-right">$30</span>
            </p>
            <p>Total
               <span className="float-right">$30</span>
            </p>
            <p className="text-slate-400">Delivery Date
               <span className="float-right">Thursday, 14 July 2023</span>
            </p>
         </div>
      </div>
   )
}
export default OrderSummary;