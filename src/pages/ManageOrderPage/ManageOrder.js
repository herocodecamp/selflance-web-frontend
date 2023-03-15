import React from 'react';
import ManagePost from '../../components/ManageOrderComponents/ManagePost';
import ManageOrderView from './ManageOrderView';

const ManageOrder = () => {
  return (
    <div className='mx-4 lg:mx-12'>
      <ManageOrderView />
      <ManagePost />
    </div>
  );
};

export default ManageOrder;