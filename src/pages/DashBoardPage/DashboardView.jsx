import React from 'react';
import Banner from '../../components/DashboardComponent/Banner';
import LeftBar from '../../components/DashboardComponent/LeftBar';

const DashboardView = () => {
  return (
    <div>
      <div className='flex flex-grow space-x-6 '>
        <LeftBar />
        <Banner />
      </div>
    </div>
  );
};

export default DashboardView;