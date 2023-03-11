import React from "react";

const OrderSummary = () => {
   return(
      <div className="container w-[1300px] h-[480px] my-20 mx-auto shadow-lg border border-slate-200 rounded-3xl text-5xl px-28 py-12">
         <h2 className="mb-20">Order Summary</h2>
         <div className="space-y-12">
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