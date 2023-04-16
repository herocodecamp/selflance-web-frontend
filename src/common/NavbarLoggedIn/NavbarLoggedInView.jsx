import React from 'react';

import logo from '../../Assets/Selflance 2-svg.png'
import avatar from '../../Assets/avatar.png'
import {VscBellDot} from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NavbarLoggedInView({setSearch}) {

  const navigate = useNavigate();

  const user = useSelector(state=>state.UserData)


  const handleSubmit = (e)=>{
    e.preventDefault()
    const query = e.target.search.value
    setSearch(query)
    navigate('/users/search')
    // console.log(query)
  }
  return (
    <div className='drop-shadow-md  bg-white'>
      <div className='grid grid-cols-10 mx-5 gap-2 mt-5'>
        <div className='col-start-1 col-span-2 w-[80px] h-auto inline-block'>
          <img src={logo} alt='logo' />
        </div>

        <div className='col-start-3 col-span-5 justify-self-center'>
          
            <form onSubmit={handleSubmit}>   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="w-[500px]"> 
                    <input type="search" id="default-search" name="search" className="w-full rounded-full border-none bg-slate-200" placeholder="Search..." />
                    <button type="submit" ></button>
                </div>
            </form>

        </div>

        {/* <div className='col-start-8 col-span-1 justify-self-end mt-2 text-xl'>
          
        </div> */}

        <div className='col-start-8 col-span-2 justify-self-end '>
          <div className='flex flex-row'>
            <VscBellDot className='text-xl mr-4 mt-3'/>
            <img className="w-10 h-10 rounded-full shadow-md" src={user ? `http://localhost:8000/${user.data.profileImage}`: avatar} alt="Rounded avatar" />
          </div>
        
        

        </div>

        <div className='col-start-10 col-span-1 justify-self-start ml-3 mt-3 text-sm font-semibold'>
               {
                user && user.data.firstname 
               }
        </div>

      </div>


      <div className='mx-5'>
        <ul
          className="header-menu hidden lg:flex text-black grid-cols-2 md:grid-cols-4  
        justify-items-center justify-between  gap-y-2 lg:gap-y-0 text-sm py-5"
        >
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Graphic Designing</span>
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Digital Marketing</span>
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Writing & Translation</span>
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Video & Animation</span>
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Programming & Tech</span>
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Business</span>
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Social Media</span>
          </li>
          <li className="flex items-center gap-x-0.5 md:gap-x-1.5">
            <span>Ai Services</span>
          </li>
        </ul>
        </div>
    </div>
  )
}
