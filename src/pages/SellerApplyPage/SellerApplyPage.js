import React from 'react';
import SellerApplyView from './SellerApplyView';
import { useLocation } from 'react-router-dom';

const SellerApplyPage = () => {

  const location = useLocation()
  console.log(location.state.jobData)
  
  return (
    <div>
      <SellerApplyView jobData={location.state.jobData}/>
    </div>
  );
};

export default SellerApplyPage;