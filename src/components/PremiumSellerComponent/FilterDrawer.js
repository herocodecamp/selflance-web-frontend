import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const FilterDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const [filters, setFilters] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
    filter4: false,
    filter5: false,
    filter6: false,
    filter7: false,
    filter8: false,
  });

  const [sellerLevel, setSellerLevel] = useState({
    seller1: false,
    seller2: false,
    seller3: false,
    seller4: false,
    seller6: false
  })

  const [sellerLng, setSellerLng] = useState({
    language1: false,
    language2: false,
    language3: false,
    language4: false
  })



  console.log(filters, "filters here")

  const handleFilterChange = (filterName) => {
    setFilters((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };

  const hanldeSellerFilter = (sellerName) => {
    setSellerLevel((prevState) => ({
      ...prevState,
      [sellerName]: !prevState[sellerName],
    }));
  };

  const handleSellerLanguage = (sellerLanguage) => {
    setSellerLng((prevState) => ({
      ...prevState,
      [sellerLanguage]: !prevState[sellerLanguage],
    }));
  };
  return (
    <>
      <button className='absolute top-24 left-4 sm:hidden' onClick={handleToggle}><AiOutlineMenu className='text-2xl' /></button>

      <div
        className={`fixed inset-y-0 bg-[#ffff]  border border-[
          #D1D1D1] left-0  p-8 transition-transform z-10  duration-300 transform ${isOpen ? 'translate-x-0 overflow-y-auto' : '-translate-x-full'
          }`}
      >
        <button className='fixed top-2 right-2' onClick={handleToggle}><RxCross1 className="text-2xl" /></button>

        <div className='rounded-lg w-[400px] '>


          <div className='sm:p-12 p-6'>
            <div>

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
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter1"
                          name="filter1"
                          checked={filters.filter1}
                          onChange={() => handleFilterChange('filter1')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="filter1" className="ml-2 text-gray-700">
                          wordpress
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter2"
                          name="filter2"
                          checked={filters.filter2}
                          onChange={() => handleFilterChange('filter2')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="filter2" className="ml-2 text-gray-700">
                          custom website
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter3"
                          name="filter3"
                          checked={filters.filter3}
                          onChange={() => handleFilterChange('filter3')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="filter3" className="ml-2 text-gray-700">
                          Website Design
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter4"
                          name="filter4"
                          checked={filters.filter4}
                          onChange={() => handleFilterChange('filter4')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="filter4" className="ml-2 text-gray-700">
                          Web App development
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter5"
                          name="filter5"
                          checked={filters.filter5}
                          onChange={() => handleFilterChange('filter5')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="filter5" className="ml-2 text-gray-700">
                          Web programming
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter6"
                          name="filter6"
                          checked={filters.filter6}
                          onChange={() => handleFilterChange('filter6')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="filter6" className="ml-2 text-gray-700">
                          Shopify
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter7"
                          name="filter7"
                          checked={filters.filter7}
                          onChange={() => handleFilterChange('filter7')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="filter7" className="ml-2 text-gray-700">
                          Mobile Apps
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter8"
                          name="filter8"
                          checked={filters.filter8}
                          onChange={() => handleFilterChange('filter8')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="filter8" className="ml-2 text-gray-700">
                          Webflow
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                    </div>
                  </div>
                </div>

                {/* seller level */}


                <div className='border-b border-[#D1D1D1] pb-4'>

                  <div>
                    <h5 className='text-xl pt-4 pl-4 font-bold text-black'>seller level</h5>
                  </div>

                  <div className='py-6 pl-4 pr-2 relative'>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="seller1"
                          name="seller1"
                          checked={sellerLevel.seller1}
                          onChange={() => hanldeSellerFilter('seller1')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="seller1" className="ml-2 text-gray-700">
                          Top Rated Seller
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="seller2"
                          name="seller2"
                          checked={sellerLevel.seller2}
                          onChange={() => hanldeSellerFilter('seller2')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="seller2" className="ml-2 text-gray-700">
                          Level One
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="seller6"
                          name="seller6"
                          checked={sellerLevel.seller6}
                          onChange={() => hanldeSellerFilter('seller6')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="seller6" className="ml-2 text-gray-700">
                          Level two
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="seller3"
                          name="seller3"
                          checked={sellerLevel.seller3}
                          onChange={() => hanldeSellerFilter('seller3')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="seller3" className="ml-2 text-gray-700">
                          Level Three
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="seller4"
                          name="seller4"
                          checked={sellerLevel.seller4}
                          onChange={() => hanldeSellerFilter('seller4')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="seller4" className="ml-2 text-gray-700">
                          New Seller
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>


                    </div>
                  </div>
                </div>

                {/* seller language */}

                <div className='border-b border-[#D1D1D1] pb-4'>

                  <div>
                    <h5 className='text-xl pt-4 pl-4 font-bold text-black'>seller language</h5>
                  </div>

                  <div className='py-6 pl-4 pr-2 relative'>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="language1"
                          name="language1"
                          checked={sellerLng.language1}
                          onChange={() => handleSellerLanguage('language1')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="language1" className="ml-2 text-gray-700">
                          English
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="language2"
                          name="language2"
                          checked={sellerLng.language2}
                          onChange={() => handleSellerLanguage('language2')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="language2" className="ml-2 text-gray-700">
                          hindi
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="language3"
                          name="language3"
                          checked={sellerLng.language3}
                          onChange={() => handleSellerLanguage('language3')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="language3" className="ml-2 text-gray-700">
                          urdu
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="language4"
                          name="language4"
                          checked={sellerLng.language4}
                          onChange={() => handleSellerLanguage('language4')}
                          className="form-checkbox h-5 w-5 text-[#DD730A]"
                        />
                        <label htmlFor="language4" className="ml-2 text-gray-700">
                          Bengali
                        </label>
                        <span className='bg-[#F1F1F5] w-[24px] h-[24px] rounded absolute right-3'>29</span>
                      </div>


                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>

      </div>

    </>
  );
};

export default FilterDrawer;