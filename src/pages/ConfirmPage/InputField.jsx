import React from "react";

const InputField = (props) => {
   return (
      <input
         type="text" 
         placeholder={props.placeholder}
         className="rounded-md w-10 py-1 text-2xl mr-2 border border-slate-200 my-2 shadow-sm"
      />
   )
}
export default InputField;