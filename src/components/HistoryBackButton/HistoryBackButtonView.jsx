import React from "react";
import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";


const HistoryBackButtonView = (props) =>{
   return(
      <div className="my-8 flex">
         <button className="w-[30px] text-lg">
            <FaArrowLeft/>
         </button>
         <label className="w-[100%] text-base sm:text-xl md:text-2xl text-[#00538F]">{props.text}</label>
         <button>
            <FaEllipsisV className="w-[30px] text-lg "/>
         </button>
      </div>
   )
}
export default HistoryBackButtonView;