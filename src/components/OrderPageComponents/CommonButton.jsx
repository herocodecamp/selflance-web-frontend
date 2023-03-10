import React from "react";

const CommonButton = (props) => {
   return(
      <div className="">
         <button className={props.className}>{props.text}</button>
      </div>
   )
}
export default CommonButton;