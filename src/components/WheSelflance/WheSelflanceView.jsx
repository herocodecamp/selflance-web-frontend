import React from "react";
import chart from "../../Assets/chart.png";
import copy from "../../Assets/copy.png";
import dash from "../../Assets/dash.png";
import HomeImage from "../../Assets/Home.png";
import lock from "../../Assets/locak.png";
import power from "../../Assets/power.png";
import star from "../../Assets/star.png";

const WheSelflanceView = () => {
  return (
    <div className="bg-[#00538F]/10">
      <div className="max-w-[1400px] mx-auto flex items-center  justify-between py-20">
        <div className="shrink-0">
          <h1 className="font-bold text-5xl mb-14">Why Selflance?</h1>
          <div className="flex gap-x-3 mb-10">
            <div className="bg-[#008EFF] flex flex-col justify-center items-center w-[50px] h-[50px] text-white  rounded-full">

            <img className=" " src={copy} alt="" />
            </div>
            <div>
              <p className="font-bold text-[18px] pb-4">0% Commission from buyers</p>
              <p className="text-xs font-normal text-gray-500 leading-5">
                Lorem ipsum dolor sit amet, consectetur giat<br /> adipiscing elit.
                Tincidunt  elementum  feu giat<br /> giat interdum tortor, porttitor morbi sed
                facilisis.
              </p>
            </div>
          </div>
          <div className="flex  gap-x-3 mb-10">
            <div className="bg-[#FABB18] flex flex-col justify-center items-center w-[50px] h-[50px] text-white  rounded-full">

            <img className=" " src={star} alt="" />
            </div>
            <div>
              <p className="font-bold text-[18px] pb-4">10% seller fee</p>
              <p className="text-xs font-normal text-gray-500 leading-5">
                Lorem ipsum dolor sit amet, consectetur giat<br /> adipiscing elit.
                Tincidunt  elementum  feu giat<br /> giat interdum tortor, porttitor morbi sed
                facilisis.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3 mb-10">
            <div className="bg-[#219653] flex flex-col justify-center items-center w-[50px] h-[50px] text-white  rounded-full">

            <img className=" " src={star} alt="" />
            </div>
            <div>
              <p className="font-bold text-[18px] pb-4">24/7 Service</p>
              <p className="text-xs font-normal text-gray-500 leading-5">
                Lorem ipsum dolor sit amet, consectetur giat<br /> adipiscing elit.
                Tincidunt  elementum  feu giat<br /> giat interdum tortor, porttitor morbi sed
                facilisis.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img className="shrink-0" src={HomeImage} alt="" />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto  flex  items-center  justify-between py-20">
      <div className="">
          <img className="" src={HomeImage} alt="" />
        </div>
        <div className="">
          <h1 className="font-bold leading-tight  text-5xl mb-14">
          Access global freelance <br /> talent with ease.
          </h1>

          <div className="grid grid-cols-2 gap-8">
        <div className="">
            <img className="pb-6 w-10 " src={chart} alt="" />
            <h3 className="font-bold text-2xl pb-2">Quality Work</h3>
            <p className=" text-gray-500 text-lg w-[230px]">Your payment isn’t released until you approve the work</p>
        </div>
        <div className="">
            <img className="pb-6 w-10" src={power} alt="" />
            <h3 className="font-bold text-2xl pb-2">Protected Payments</h3>
            <p className=" text-gray-500 text-lg w-[230px]">You ll get quality work from our freelancers</p>
        </div>
        <div className="">
            <img className="pb-6 w-10" src={lock} alt="" />
            <h3 className="font-bold text-2xl pb-2">Quality Work</h3>
            <p className=" text-gray-500 text-lg w-[230px]">You ll get quality work from our freelancers</p>
        </div>
        <div className="">
            <img className="pb-6 w-10" src={dash} alt="" />
            <h3 className="font-bold text-2xl pb-2">Quality Work</h3>
            <p className=" text-gray-500 text-lg w-[230px]">You ll get quality work from our freelancers</p>
        </div>

          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default WheSelflanceView;
