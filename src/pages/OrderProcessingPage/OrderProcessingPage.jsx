import React from "react";
import bg from "../../Assets/Order-processing-bg.png";


const OrderProcessingPage = () => {
   return(
      <>
         <div className="w-[90%] h-[650px] mx-auto rounded-xl border border-black p-2 my-2" >
            <div style={{backgroundImage: `url(${bg})`}} className="w-[300px] h-[300px] rounded-2xl bg-no-repeat">
               <h1>Welcome Order Processing Page</h1>
            </div>
         </div>
      </>
   )
}
export default OrderProcessingPage;