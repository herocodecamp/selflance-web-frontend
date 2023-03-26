import React from 'react';
import SeWithdrawChart from '../../components/SeWithdrawComponent/SeWithdrawChart';
import SeWithdrawHistory from '../../components/SeWithdrawComponent/SeWithdrawHistory';
import SeWithdrawTopbar from '../../components/SeWithdrawComponent/SeWithdrawTopbar';

const SellerWithdrawView = () => {
  return (
    <div className='sm:py-8 py-4 sm:px-12 px-4'>
      <SeWithdrawTopbar />
      <SeWithdrawChart />
      <SeWithdrawHistory />
    </div>
  );
};

export default SellerWithdrawView;