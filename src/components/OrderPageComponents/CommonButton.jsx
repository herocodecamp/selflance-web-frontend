import React from "react";

const CommonButton = (props) => {
   return(
      <button className={props.className}>{props.text}</button>
   )
}
export default CommonButton;