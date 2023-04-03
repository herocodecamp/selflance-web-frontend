import React, { useState } from "react";
import Logo from "../../Assets/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavbarView = () => {
  const location = useLocation();
  console.log(location);
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
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "bg-[rgba(64,120,194,0.63)]   py-1.5 sm:py-2.5 px-2 md:px-4  rounded-md"
                      : "hidden sm:flex "
                  }
                >
                  {" "}
                  Home{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "bg-[rgba(64,120,194,0.63)]   py-1.5 sm:py-2.5 px-2 md:px-4  rounded-md"
                      : "hidden sm:flex "
                  }
                  to="/users/search"
                >
                  Find Freelancer
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "bg-[rgba(64,120,194,0.63)]   py-1.5 sm:py-2.5 px-2 md:px-4  rounded-md"
                      : "hidden sm:flex "
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "bg-[rgba(64,120,194,0.63)]   py-1.5 sm:py-2.5 px-2 md:px-4  rounded-md"
                      : "hidden sm:flex "
                  }
                  to="/become_seller"
                >
                  Find Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "bg-[rgba(64,120,194,0.63)]   py-1.5 sm:py-2.5 px-2 md:px-4  rounded-md"
                      : "hidden sm:flex "
                  }
                  to="/job_post/new"
                >
                  Post a Job
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "bg-[rgba(64,120,194,0.63)]   py-1.5 sm:py-2.5 px-2 md:px-4  rounded-md"
                      : "hidden sm:flex "
                  }
                  to="/privacy_policy"
                >
                  How it Works
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex px-2 items-center font-normal gap-x-8">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-[#DD730A]   py-1.5 sm:py-2.5  rounded-md"
                : "hidden sm:flex "
            }
          >
            {" "}
            <p className="px-4 sm:px-6">Login</p>
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
              (isActive
                ? "bg-[#DD730A] px-1.5 py-1.5 sm:py-2.5 sm:px-4 rounded-md"
                : "") ||
              (location.pathname === "/" &&
                "bg-[#DD730A] px-1.5 py-1.5 sm:py-2.5 sm:px-4 rounded-md")
            }
            // className="
            // "
          >
            <p>Sign Up</p>
          </NavLink>
        </div>
      </div>
      {/* mobile menu */}
      {toggle && (
        <div className=" absolute top-24 py-3 mobile menu lg:hidden z-10 h-full w-2/3 bg-white">
          <ul className=" flex flex-col gap-y-3 px-2 ">
            <li className="bg-[#00538F]/80 text-white py-2 px-2 rounded-md">
              <Link to="/"> Home </Link>
            </li>
            <li className=" text-black py-2 px-2 rounded-md">
              <Link to="/users/search">Find Freelancer</Link>
            </li>
            <li className=" text-black py-2 px-2 rounded-md">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className=" text-black py-2 px-2 rounded-md">
              <Link to="/become_seller">Find Work</Link>
            </li>
            <li className=" text-black py-2 px-2 rounded-md">
              <Link to="/job_post/new">Post a Job</Link>
            </li>
            <li className=" text-black py-2 px-2 rounded-md">
              <Link to="/privacy_policy">How it Works</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarView;
