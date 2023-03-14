import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'
import OrderDrawer from '../../components/ManageOrderComponents/OrderDrawer';

const ManageOrderView = () => {
  return (
    <div className=''>
       <OrderDrawer />
      <div className='flex items-center justify-between'>
        <h2 className='text-base md:text-xl font-bold md:mt-10'>Manage Orders</h2>
        <div className='flex space-x-4'>
          <MdNotificationsNone className='text-[#00538F] text-2xl sm:4xl' />
          <BsThreeDotsVertical className='text-2xl sm:4xl' />
        </div>
      </div>
    </div>
  );
};

export default ManageOrderView;