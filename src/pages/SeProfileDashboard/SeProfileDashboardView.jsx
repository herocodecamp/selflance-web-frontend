import React from 'react';
import SePrDashboardMenu from '../../components/SellerPDashboard/SePrDashboardMenu';
import SePrDashboardTopBar from '../../components/SellerPDashboard/SePrDashboardTopBar';

const SeProfileDashboardView = () => {
  return (
    <div>
      <div className='flex py-12 w-full'>
        <SePrDashboardMenu />
        <SePrDashboardTopBar />
      </div>

    </div>
  );
};

export default SeProfileDashboardView;