import React from "react";
import sellerFee from "../../Assets/Frame 70.png";
import commission from "../../Assets/Frame 71.png";
import TreeImg from "../../Assets/Frame 72.png";

const AboutFeeView = () => {
  return (
    <>
      <div className=" bg-[#00538F]/10 mt-40 mb-20">
        <div className=" mx-auto relative flex items-center  justify-between ">
          <div className="shrink-0 pl-[214px]">
            <h1 className="font-bold text-5xl mb-14 leading-tight">
              Join the Platform that <br /> Respects Your Income
            </h1>
            <div className="flex gap-x-3 mb-10">
              <div className="bg-[#DD730A] flex flex-col justify-center items-center w-[50px] h-[50px] text-white  rounded-full">
                1
              </div>
              <div>
                <p className="font-bold text-[18px] pb-4">
                  0% Commission from buyers
                </p>
                <p className="text-xs font-normal text-gray-500 leading-5">
                  Lorem ipsum dolor sit amet, consectetur giat
                  <br /> adipiscing elit. Tincidunt elementum feu giat
                  <br /> giat interdum tortor, porttitor morbi sed facilisis.
                </p>
              </div>
            </div>
            <div className="flex  gap-x-3 mb-12">
              <div className="bg-[#DD730A] flex flex-col justify-center items-center w-[50px] h-[50px] text-white  rounded-full">
                2
              </div>
              <div>
                <p className="font-bold text-[18px] pb-4">10% seller fee</p>
                <p className="text-xs font-normal text-gray-500 leading-5">
                  Lorem ipsum dolor sit amet, consectetur giat
                  <br /> adipiscing elit. Tincidunt elementum feu giat
                  <br /> giat interdum tortor, porttitor morbi sed facilisis.
                </p>
              </div>
            </div>
            <button className="bg-[#DD730A] py-2.5 px-4 text-white font-medium text-sm rounded-md">
              Apply Now
            </button>
          </div>
          <div className="shrink-0">
            <img className="shrink-0" src={TreeImg} alt="" />
          </div>

          <img
            className="absolute top-3/2 right-[590px]"
            src={commission}
            alt=""
          />
          <img
            className="absolute top-[-115px] right-28"
            src={sellerFee}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutFeeView;
