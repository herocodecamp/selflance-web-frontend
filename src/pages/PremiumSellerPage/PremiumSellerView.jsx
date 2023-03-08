import React from 'react';
import PremiumFilter from '../../components/PremiumSellerComponent/PremiumFilter';
import PremiumSearch from '../../components/PremiumSellerComponent/PremiumSearch';


const PremiumSellerView = () => {
  return (
    <div>
      <div className='flex flex-grow w-full'>
        <PremiumFilter />
        <PremiumSearch />
      </div>

    </div>
  );
};

export default PremiumSellerView;