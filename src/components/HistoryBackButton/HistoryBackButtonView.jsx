import React from "react";
import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HistoryBackButtonView = (props) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="my-8 flex">
      <button className="w-[30px] text-lg" onClick={handleBack}>
        <FaArrowLeft />
      </button>
      <label className="w-[100%] text-base sm:text-xl md:text-2xl text-[#00538F]">
        {props.text}
      </label>
      <button>
        <FaEllipsisV className="w-[30px] text-lg " />
      </button>
    </div>
  );
};
export default HistoryBackButtonView;
