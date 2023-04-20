import React from 'react';
import SellerApplyDetails from '../../components/SellerApllyComponents/SellerApplyDetails';

const SellerApplyView = ({jobData}) => {
  return (
    <div>
      <SellerApplyDetails result = {jobData}/>
    </div>
  );
};

export default SellerApplyView;