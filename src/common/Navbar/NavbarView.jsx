import React, { useState } from "react";
import Logo from "../../Assets/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavbarView = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar-container  md:bg-primary py-3">
      <div className="max-w-[1400px] md:border-b font-medium py-3 border-gray-500 mx-auto flex text-white justify-between items-center">
        <div className="flex items-center gap-x-1 pl-2">
          {/* mobile bar icons */}
          <span onClick={() => setToggle(!toggle)} className="lg:hidden">
            {toggle ? (
              <AiOutlineClose className="font-bold text-black" size={30} />
            ) : (
              <FaBars className="text-black" size={30} />
            )}
          </span>
          {/* logo */}
          <img src={Logo} alt="" />
        </div>
        {/* desktop menu */}
        <div>
          <nav>
          <ul className="lg:flex hidden items-center gap-x-10  ">
            <li>
              <Link to='/' > Home </Link>  
            </li>
            <li>
              <Link to="/users/search">Find Freelancer</Link></li>
            <li>
              <Link to="/blogs">Blogs</Link></li>
            <li>
              <Link to="/become_seller">Find Work</Link></li>
            <li>
              <Link to="/job_post/new">Post a Job</Link></li>
            <li>
              <Link to="/privacy_policy">How it Works</Link></li>
          </ul>
          </nav>
        </div>

        <div className="flex px-2 items-center font-normal gap-x-8">
          <button className=" hidden sm:flex "> <Link to="/login">Login</Link> </button>
          <button
            className="bg-[#DD730A] px-1.5 py-1.5 sm:py-2.5 sm:px-4 rounded-md
            "
          >
            <Link to="/signup">Sign Up</Link>
            
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {toggle && (
        <div className=" absolute top-24 py-3 mobile menu lg:hidden z-10 h-full w-2/3 bg-white">
          <ul className=" flex flex-col gap-y-3 px-2 ">
            <li className="bg-[#00538F]/80 text-white py-2 px-2 rounded-md">
               <Link to='/' > Home </Link>
            </li>
            <li className=" text-black py-2 px-2 rounded-md">
            <Link to="/users/search">Find Freelancer</Link>
            </li>
            <li className=" text-black py-2 px-2 rounded-md"><Link to="/blogs">Blogs</Link></li>
            <li className=" text-black py-2 px-2 rounded-md"><Link to="/become_seller">Find Work</Link></li>
            <li className=" text-black py-2 px-2 rounded-md"><Link to="/job_post/new">Post a Job</Link></li>
            <li className=" text-black py-2 px-2 rounded-md"><Link to="/privacy_policy">How it Works</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarView;
