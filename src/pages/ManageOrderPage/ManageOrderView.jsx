import React from 'react';
import ManageNav from '../../components/ManageOrderComponents/ManageNav';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'

const ManageOrderView = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-between'>
        <h2 className='sm:text-2xl text-xl font-bold'>Manage Orders</h2>
        <div className='flex space-x-4'>
          <MdNotificationsNone className='text-[#00538F] text-2xl sm:4xl'/>
          <BsThreeDotsVertical className='text-2xl sm:4xl'/>
        </div>
      </div>
      <ManageNav />
    </div>
  );
};

export default ManageOrderView;