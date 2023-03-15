import React from 'react';
import SeBanner from '../../components/SellerDashBoardComponent/SeBanner';
import SeLeftBar from '../../components/SellerDashBoardComponent/SeLeftBar';

const SeDashboardView = () => {
  return (
    <div>
      <div className='flex flex-grow space-x-6'>
      <SeLeftBar />
      <SeBanner />
      </div>
 
    </div>
  );
};

export default SeDashboardView;