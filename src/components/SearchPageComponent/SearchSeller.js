import React from 'react';
import FilterDrawer from '../PremiumSellerComponent/FilterDrawer';
import Pagination from './Pagination';
import SellerGig from './SellerGig';

const SearchSeller = () => {
  return (
    <div className='pt-16 sm:w-4/5 w-full px-4'>
      <div className='space-y-4'>
        <FilterDrawer />
        <h4 className='text-[#121F3E]'>Programming & Tech  Website development</h4>
        <h3 className='text-[#000000] text-2xl leading-9'>Results for "website development"
        </h3>

        <div className='flex justify-between items-center space-x-2'>
          <p className='leading-9 text-[#6A6A6A] tracking-normal'>search result here</p>

          <div className='sm:flex sm:space-x-6'>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute lg:after:top-[8px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="text-[#6A6A6A] leading-9 ml-4">premium freelancer</span>
            </label>


            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute lg:after:top-[8px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="text-[#6A6A6A] leading-9 ml-4">online sellers</span>
            </label>
          </div>
        </div>

        <SellerGig />
      </div>
    </div>
  );
};

export default SearchSeller;