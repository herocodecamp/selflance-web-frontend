import React from 'react';
import PremiumFilter from '../../components/PremiumSellerComponent/PremiumFilter';
import PremiumSearch from '../../components/PremiumSellerComponent/PremiumSearch';
import PreRecentSearch from '../../components/PremiumSellerComponent/PreRecentSearch';


const PremiumSellerView = () => {
  return (
    <div>
      <div className='flex flex-grow w-full'>
        <PremiumFilter />
        <PremiumSearch />
      </div>
      <PreRecentSearch />
    </div>
  );
};

export default PremiumSellerView;