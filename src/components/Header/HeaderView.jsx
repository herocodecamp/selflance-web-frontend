import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import HeaderImage from "../../Assets/Header.png";
const HeaderView = () => {
  return (
    <div className="bg-primary ">
      <div className="max-w-[1300px] mx-auto">
        <ul className="header-menu text-white flex justify-between  text-sm py-5">
          <li className="flex items-center gap-x-1.5">
            <span>Graphic Designing</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-1.5">
            <span>Digital Marketing</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-1.5">
            <span>Writing & Translation</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-1.5">
            <span>Video & Animation</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-1.5">
            <span>Programming & Tech</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-1.5">
            <span>Business</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-1.5">
            <span>Social Media</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
          <li className="flex items-center gap-x-1.5">
            <span>Ai Services</span>
            <AiOutlineCaretDown size={10} className="text-white mt-1" />
          </li>
        </ul>

        <div className="flex items-center justify-between  py-16">
          <div className="left-side text-white">
            <p className="text-7xl font-extrabold pb-2">Find or Sell</p>
            <p className="text-7xl font-extrabold pb-2">Quality Services</p>
            <p className="text-7xl font-extrabold pb-10">with Ease</p>
            <p className="pb-12">
              Connect with Top Talent or Showcase Your Skills on <br /> Our
              Freelance Platform.
            </p>

            <div className="mb-8 bg-white py-2  rounded-md flex justify-between items-center ">
              <input
                className="bg-white py-3 text-black focus:ring-0 outline-none border-none"
                type="text"
              />
              <button
                className="bg-[#DD730A] mr-3 py-2.5 px-4 rounded-md
            "
              >
                Explore Now
              </button>
            </div>
            <p className="font-medium">
              Popular Search :{" "}
              <span className="font-normal pl-1 text-gray-200">
                Software Developer, Ux Designer,Marketer
              </span>{" "}
            </p>
          </div>
          <div className="max-w-lg">
            <img src={HeaderImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderView;
