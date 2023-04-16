import React from 'react'
import {SlArrowRight} from 'react-icons/sl'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { SlOptionsVertical } from "react-icons/sl";
import {TiUser} from 'react-icons/ti'
import {MdInsertChart} from 'react-icons/md'
import {BsFillCreditCard2BackFill, BsHeartFill, BsCashStack} from 'react-icons/bs'
import {FaRegAddressCard, FaHeadset, FaUserPlus} from 'react-icons/fa'
import {IoDocumentText, IoWarning, IoLogOut} from 'react-icons/io5'
import profileImg from '../../Assets/msg_profile.png';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/AuthSlice';

const MenuView = () => {
    const params = useParams();
    const navigate = useNavigate();

    const {firstname,lastname,profileImage}= useSelector(state=>state.UserData.data)
    const {isSeller} = useSelector(state=>state.Auth.userInfo)
    console.log(isSeller)
    const dispatch = useDispatch()

    console.log(params)

    const handleSellerMode =()=>{
        var checkbox = document.getElementById('sellermode');

            
            let sellerMode = false
            if(checkbox.checked)
            {
             sellerMode = true;
            
            }
            
            dispatch(authActions.updateSellerMode({sellerMode}))

            
        
    }

  return (
    <div className='min-h-screen md:p-16 m-5'>
        <div className='flex justify-between items-center'>
            <div className='flex justify-content gap-x-5 items-center'>
                <AiOutlineArrowLeft className='hover:cursor-pointer' size={'2.5em'} />
                <div className='md:flex items-center justify-center md:justify-start gap-5 text-2xl m-4'>
                    <div className="relative w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                       <img src={`http://localhost:8000/${profileImage}`} alt='' />
                    </div>
                    <div>
                        <h3 className='font-medium'>{firstname} {lastname}</h3>
                        <p className='text-gray-400'>Deposit Balance: <span className='text-black font-bold' >$500.00</span> </p>
                    </div>
                </div>
            </div>
            <SlOptionsVertical className='text-gray-600 hover:cursor-pointer' size={'2em'}  />
        </div>
        <div className="w-full text-gray-900 bg-white border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4' >
                    <span className='bg-[#E2EED8] p-3 rounded-full'><TiUser className='text-blue-700' size={'1.2em'}/></span>
                  <Link to={`/users/${params.userID}/profile`}>My Profile</Link> 
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-blue-200 p-3 rounded-full'><MdInsertChart className='text-blue-700' size={'1.2em'}/></span>
                         <Link to={isSeller ?`/users/seller/dashboard/${params.userID}`: `/users/buyer/dashboard`}>Dashboard</Link>
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full pl-16 px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-blue-200 p-3 rounded-full'></span>
                Add Deposit
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full pl-16 px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-blue-200 p-3 rounded-full'></span>
                Deposit History
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-[#eab681] p-3 rounded-full'><BsFillCreditCard2BackFill className='text-[#DD730A]' size={'1em'}/></span>
                Deposit
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-[#FFEFE0] p-3 rounded-full'><BsCashStack className='text-[#FF3B30]' size={'1.2em'}/></span>
                Transaction
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-[#E8E1FF] p-3 rounded-full'><BsHeartFill className='text-[#7E5BFF]' size={'1.1em'}/></span>
                Favorite
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-[#D0F1FF] p-3 rounded-full'><IoDocumentText className='text-[#06AEF3]' size={'1.2em'}/></span>
                Report Seller
                </div>
                <SlArrowRight/>
            </button>
            
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-[#D0F1FF] p-3 rounded-full'><TiUser className='text-[#00538F]' size={'1.2em'}/></span>
                Seller Mode
                </div>
                
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id='sellermode' checked={isSeller} className="sr-only peer" onClick={()=>handleSellerMode()}/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-blue-200 p-3 rounded-full'><FaRegAddressCard className='text-[#00538F]' size={'1.2em'}/></span>
                Identity Verification
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-[#FFEFE0] p-3 rounded-full'><FaHeadset className='text-[#DD730A]' size={'1.2em'}/></span>
                Customer Support
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-[#E2EED8] p-3 rounded-full'><FaUserPlus className='text-[#00538F]' size={'1.2em'}/></span>
                Invite Friends
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-blue-200 p-3 rounded-full'><IoWarning className='text-[#00538F]' size={'1.2em'}/></span>
                Help & Support
                </div>
                <SlArrowRight/>
            </button>
            <button type="button" className="relative inline-flex justify-between items-center w-full px-4 py-4 text-2xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <div className='flex items-center gap-4'>
                    <span className='bg-[#FFEFE0] p-3 rounded-full'><IoLogOut className='text-[#DD730A]' size={'1.2em'}/></span>
                Log Out
                </div>
                <SlArrowRight/>
            </button>
        </div>
    </div>

  )
}

export default MenuView