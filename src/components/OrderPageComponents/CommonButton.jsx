import React from "react";

const CommonButton = (props) => {
   return(
      <button className={props.className} type={props.type}>{props.text}</button>
   )
}
export default CommonButton;