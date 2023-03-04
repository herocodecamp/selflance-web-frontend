import React, { useState } from "react";
import Logo from "../../Assets/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const NavbarView = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar-container  bg-primary py-3">
      <div className="max-w-[1400px] border-b font-medium py-3 border-gray-500 mx-auto flex text-white justify-between items-center">
        <div className="flex items-center gap-x-1 pl-2">
          {/* mobile bar icons */}
          <span onClick={() => setToggle(!toggle)} className="lg:hidden">
            {toggle ? (
              <AiOutlineClose className="font-bold" size={30} />
            ) : (
              <FaBars size={30} />
            )}
          </span>
          {/* logo */}
          <img src={Logo} alt="" />
        </div>
        {/* desktop menu */}
        <div>
          <ul className="lg:flex hidden items-center gap-x-10  ">
            <li>Home</li>
            <li>Find Freelancer</li>
            <li>Blogs</li>
            <li>Find Work</li>
            <li>Post a Job</li>
            <li>How it Works</li>
          </ul>
        </div>

        <div className="flex px-2 items-center font-normal gap-x-8">
          <button className=" hidden sm:flex ">Login</button>
          <button
            className="bg-[#DD730A] px-1.5 py-1.5 sm:py-2.5 sm:px-4 rounded-md
            "
          >
            Sign Up
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {toggle && (
        <div className=" absolute top-24 py-3 mobile menu lg:hidden w-full bg-white">
          <ul className=" flex flex-col gap-y-3 px-2 ">
            <li className="bg-[#00538F]/80 text-white py-2 px-2 rounded-md">
              Home
            </li>
            <li className=" text-black py-2 px-2 rounded-md">
              Find Freelancer
            </li>
            <li className=" text-black py-2 px-2 rounded-md">Blogs</li>
            <li className=" text-black py-2 px-2 rounded-md">Find Work</li>
            <li className=" text-black py-2 px-2 rounded-md">Post a Job</li>
            <li className=" text-black py-2 px-2 rounded-md">How it Works</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarView;
