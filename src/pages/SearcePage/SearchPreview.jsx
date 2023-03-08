import React from 'react';
import Filter from '../../components/SearchPageComponent/Filter';
import RecentSearch from '../../components/SearchPageComponent/RecentSearch';
import SearchSeller from '../../components/SearchPageComponent/SearchSeller';

const SearchPreview = () => {
  return (
    <div>
      <div className='flex flex-grow w-full'>
        <Filter />
        <SearchSeller />
      </div>
      <RecentSearch />
    </div>
  );
};

export default SearchPreview;