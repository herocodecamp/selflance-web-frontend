import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import HeaderImage from "../../Assets/Header.png";
const HeaderView = () => {
  return (
    <div className="bg-primary ">
      <div className="max-w-[1400px] mx-auto px-3">
        <ul
          className="header-menu text-white grid grid-cols-2 md:grid-cols-4 lg:flex 
        justify-items-center justify-between  gap-y-2 lg:gap-y-0 text-sm py-5"
        >
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Graphic Designing</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Digital Marketing</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Writing & Translation</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Video & Animation</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Programming & Tech</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Business</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Social Media</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Ai Services</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
        </ul>

        <div className="flex  md:flex-row flex-col items-center justify-between  py-16">
          <div className="left-side md:order-1 order-2 text-white">
            <p className="md:text-7xl text-5xl  lg:font-extrabold font-semibold pb-2">
              Find or Sell
            </p>
            <p className="md:text-7xl text-5xl  lg:font-extrabold font-semibold pb-2">
              Quality Services
            </p>
            <p className="md:text-7xl text-5xl  lg:font-extrabold font-semibold pb-10">
              with Ease
            </p>
            <p className="pb-12">
              Connect with Top Talent or Showcase Your Skills on <br /> Our
              Freelance Platform.
            </p>

            <div className="md:mb-8 mb-3 bg-white py-1 lg:py-2  rounded-md flex justify-between items-center ">
              <input
                className="bg-white  lg:py-3 text-black focus:ring-0 outline-none border-none"
                type="text"
              />
              <button
                className="bg-[#DD730A] whitespace-nowrap hidden px-2 py-1.5 md:flex mr-3 lg:py-2.5 lg:px-4 rounded-md
            "
              >
                Explore Now
              </button>
            </div>
            <button
                className="bg-[#DD730A] whitespace-nowrap px-1.5 py-2 mb-4 md:hidden rounded-md
            "
              >
                Explore Now
              </button>
            <p className="font-medium">
              Popular Search :{" "}
              <span className="font-normal pl-1 text-gray-200">
                Software Developer, Ux Designer,Marketer
              </span>{" "}
            </p>
          </div>
          <div className="max-w-lg md:order-2 order-1">
            <img src={HeaderImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderView;
