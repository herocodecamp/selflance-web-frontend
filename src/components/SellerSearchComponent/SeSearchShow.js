import React, { useState } from 'react';
import SeFilterDrawer from './SeFilterDrawer';
import SeSearchBar from './SeSearchBar';

const options = [
  { value: 'Latest', label: 'Latest' },
  { value: 'top Rated', label: 'Top Rated' },
  { value: 'level one', label: 'level one' },
];

const SeSearchShow = () => {

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='pt-8 sm:w-4/5 w-full px-4'>
      <div className='space-y-4'>
        <SeFilterDrawer />
        <h3 className='text-[#000000] text-2xl leading-9'>Results for "Logo Design"
        </h3>
        <div className='flex justify-between items-center space-x-2'>
          <p className='leading-9 text-[#6A6A6A] tracking-normal'>search result here</p>


          <div className="relative flex items-center">
            <p className='w-full text-[#6A6A6A]'>Sort By: </p>
            <select
              value={selectedOption.value}
              onChange={(e) => {
                const selectedOption = options.find((option) => option.value === e.target.value);
                handleOptionChange(selectedOption);
              }}

              className="appearance-none w-full  px-3 py-2 pr-8 text-[#C2C2C2] focus:ring-0 bg-white rounded-md shadow-sm focus:outline-none"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-[#C2C2C2]" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
              </svg>
            </div>
          </div>
        </div>
        <SeSearchBar />
      </div>
    </div>
  );
};

export default SeSearchShow;