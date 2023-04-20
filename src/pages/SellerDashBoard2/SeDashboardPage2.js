import React from 'react';
import SeDashboardview2 from './SeDashboardview2';
import { useLocation } from 'react-router-dom';

const SeDashboardPage2 = () => {
    const location = useLocation()


  return (
    location.state.joData && (
    <div>
      <SeDashboardview2 jobData= {location.state.joData}/>
    </div>)
  );
};

export default SeDashboardPage2;