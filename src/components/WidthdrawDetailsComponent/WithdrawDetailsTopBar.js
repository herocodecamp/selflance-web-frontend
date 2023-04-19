import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdAccountBalanceWallet, MdNotificationsNone } from 'react-icons/md';
import WithdrawDetailsForm from './WithdrawDetailsForm';
import { useNavigate } from 'react-router-dom';

const WithdrawDetailsTopBar = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className='flex justify-between items-center border-b-2 border-[#D1D1D1] pb-6'>
        <div className='flex space-x-10 items-center'>
          <span><BiArrowBack className='text-[#000000] text-2xl hover:cursor-pointer' onClick={handleBack}/></span>
          <h3 className='text-[#00538F] text-xl font-bold'>Withdraw</h3>
        </div>
        <div className='flex space-x-10 items-center'>
          <span><MdNotificationsNone className='text-[#00538F] text-2xl' /> </span>
          <span><BsThreeDotsVertical className='text-[#121F3E]  text-2xl' /></span>
        </div>
      </div>
      <WithdrawDetailsForm />
    </div>
  );
};

export default WithdrawDetailsTopBar;