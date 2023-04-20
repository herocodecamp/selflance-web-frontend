import React from 'react';
import SeTopBar from '../../components/SellerDashboard2Component/SeTopBar';

const SeDashboardview2 = ({jobData}) => {
  return (
    <div className='py-6 sm:px-12 px-2'>
      <SeTopBar result={jobData}/>
    </div>
  );
};

export default SeDashboardview2;