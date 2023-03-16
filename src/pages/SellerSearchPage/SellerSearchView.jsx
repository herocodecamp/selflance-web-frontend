import React from 'react';
import SeSearchFilter from '../../components/SellerSearchComponent/SeSearchFilter';
import SeSearchShow from '../../components/SellerSearchComponent/SeSearchShow';

const SellerSearchView = () => {
  return (
    <div>
    <div className='flex flex-grow w-full'>
      <SeSearchFilter />
      <SeSearchShow />
    </div>
    </div>
  );
};

export default SellerSearchView;