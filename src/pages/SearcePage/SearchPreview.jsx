import React from 'react';
import Filter from '../../components/SearchPageComponent/Filter';
import SearchSeller from '../../components/SearchPageComponent/SearchSeller';

const SearchPreview = () => {
  return (
    <div>
      <div className='flex flex-grow w-full'>
        <Filter />
        <SearchSeller />
      </div>
    </div>
  );
};

export default SearchPreview;