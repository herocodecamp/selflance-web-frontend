import React, { useState } from 'react';

const SeSearchFilter = ({categories,sellerLevels,languages , languageFilter, setLanguageFilter,
                          experienceFilter,setExperienceFilter, categoryFilter, setCategoryFilter}) => {



  const handleFilterChange = ({ currentTarget: input }) => {
    if (input.checked) {
			const state = [...categoryFilter, input.value];
			setCategoryFilter(state);
		} else {
			const state = categoryFilter.filter((val) => val !== input.value);
			setCategoryFilter(state);
		}

  };

  const hanldeSellerLevel = ({ currentTarget: input }) => {

    if (input.checked) {
			const state = [...experienceFilter, input.value];
			setExperienceFilter(state);
		} else {
			const state = experienceFilter.filter((val) => val !== input.value);
			setExperienceFilter(state);
		}

  };

  const handleSellerLanguage = ({ currentTarget: input }) => {

    if (input.checked) {
			const state = [...languageFilter, input.value];
			setLanguageFilter(state);
		} else {
			const state = languageFilter.filter((val) => val !== input.value);
			setLanguageFilter(state);
		}

  };

  return (
    <div className='lg:p-12 p-6 hidden sm:block'>
      <div className='sm:w-[260px] xl:w-[300px]'>

        <div className=' border border-[#D1D1D1] bg-[#FFFFFF] border-box'>
          <div className='border-b pb-6 pl-4 border-[#D1D1D1]'>
            <h2 className='sm:text-4xl text-xl'>Filters</h2>
          </div>

          {/* category filter */}

          <div className='border-b border-[#D1D1D1] pb-4'>

            <div>
              <h5 className='text-xl pt-4 pl-4 font-bold text-black'>Category</h5>
            </div>

            <div className='py-6 pl-4 pr-2 relative'>
              <div className="flex flex-col gap-4">
                {
                  categories.map((item, index)=>{
                    return(
                      <div className="flex items-center" key={index}>
                            <input
                              type="checkbox"
                             
                              name={item}
                              value={item}
                              onChange={handleFilterChange}
                              className="form-checkbox h-5 w-5 text-[#DD730A]"
                            />
                            <label htmlFor="filter1" className="ml-2 text-gray-700">
                              {item}
                            </label>
                            {/* <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span> */}
                          </div>
                    )
                  })
                }




              </div>
            </div>
          </div>

          {/* seller level */}


          <div className='border-b border-[#D1D1D1] pb-4'>

            <div>
              <h5 className='text-xl pt-4 pl-4 font-bold text-black'>Buyer level</h5>
            </div>

            <div className='py-6 pl-4 pr-2 relative'>
              <div className="flex flex-col gap-4">
                {
                 sellerLevels.map((item,index)=>{
                  return(
                          <div className="flex items-center" key={index}>
                        <input
                        type="checkbox"
                          name={item}
                          value={item}
                          onChange={hanldeSellerLevel}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="seller1" className="ml-2 text-gray-700">
                          {item}
                        </label>
                        {/* <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span> */}
                      </div>
                  )
                 })
                }




              </div>
            </div>
          </div>

          {/* seller language */}

          <div className='border-b border-[#D1D1D1] pb-4'>

            <div>
              <h5 className='text-xl pt-4 pl-4 font-bold text-black'>Buyer language</h5>
            </div>

            <div className='py-6 pl-4 pr-2 relative'>
              <div className="flex flex-col gap-4">
              {
                 languages.map((item,index)=>{
                  return(
                          <div className="flex items-center" key={index}>
                        <input
                        type="checkbox"
                          name={item}
                          value={item}
                          onChange={handleSellerLanguage}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="seller1" className="ml-2 text-gray-700">
                          {item}
                        </label>
                        {/* <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span> */}
                      </div>
                  )
                 })
                }

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default SeSearchFilter;