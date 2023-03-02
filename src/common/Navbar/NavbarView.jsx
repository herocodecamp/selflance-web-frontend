import React from "react";
import Logo from "../../Assets/logo.png";

const NavbarView = () => {
  return (
    <div className="navbar-container bg-primary py-3">
      <div className="max-w-[1300px] border-b font-medium py-3 border-gray-500 mx-auto flex text-white justify-between items-center">
        <img src={Logo} alt="" />
        <div>
          <ul className="flex items-center gap-x-10  ">
            <li>Home</li>
            <li>Find Freelancer</li>
            <li>Blogs</li>
            <li>Find Work</li>
            <li>Post a Job</li>
            <li>How it Works</li>
          </ul>
        </div>

        <div className="flex items-center font-normal gap-x-8">
          <button className="  ">Login</button>
          <button
            className="bg-[#DD730A] py-2.5 px-4 rounded-md
            "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarView;
