import { Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

const SellerBidDetails = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='py-6'>
      <div className='space-y-4'>
        <h2 className='text-[#15151E] text-xl font-semibold'>Project Bid</h2>

        <div className='bg-[#FFFFFF] drop-shadow-md p-4 space-y-3 rounded-2xl'>
          <div className='flex space-x-4  items-center'>
            <input type="radio" />
            <h3 className='text-[#121F3E]  text-base sm:text-xl'>By Project</h3>
          </div>
          <p className='text-[#8E8E8E] font-sm'>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour...Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
        </div>

        <div>
          <form>
            <div className="space-y-4">

              <div className='sm:flex sm:items-center sm:justify-between space-y-4 sm:space-y-0 space-x-0 sm:space-x-2'>
                <div className='space-y-3'>
                  <label className='block text-base lg:text-xl text-[#121F3E]'>Your Bid</label>
                  <input
                    className='text-[#8E8E8E] border-2 border-[#E3E3E3] px-4 py-2 pr-8 rounded w-11/12 sm:w-[300px] lg:w-[400px] shadow leading-tight'
                    type="text" name="bid"
                    placeholder='$ 90.00'
                  />
                </div>

                <div>
                  <div className="relative space-y-3 w-11/12 sm:w-[300px] lg:w-[400px]">
                    <label className='text-[#121F3E] lg:text-sl text-base'>Duration</label>
                    <select
                      className="block appearance-none w-full bg-white border-2 border-[#E3E3E3]   px-4 py-2 pr-8 rounded shadow leading-tight "
                      value={selectedOption}
                      onChange={handleChange}
                    >
                      <option value="">Choose an option</option>
                      <option value="option1">90 days</option>
                      <option value="option2">30 days</option>
                      <option value="option3">15 days</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 00-1.414 1.414l3.998 3.998a1 1 0 001.414 0l3.998-3.998a1 1 0 000-1.414z"
                        />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>

              <div className='space-y-4'>
                <h2 className='text-[#15151E] lg:text-xl text-base leading-6'>When you can start</h2>
                <div className='sm:flex sm:items-center sm:justify-between space-y-4 sm:space-y-0 space-x-0 sm:space-x-2'>
                  <div>
                    <div className='space-y-3'>
                      <label className='block text-base lg:text-xl text-[#121F3E]'>Time</label>
                      <input
                        className='text-[#8E8E8E] border-2 border-[#E3E3E3] px-4 py-2 pr-8 w-11/12 sm:w-[300px] lg:w-[400px]  rounded shadow leading-tight'
                        type="text" name="time"
                        placeholder='9:00 pm'
                      />
                    </div>
                  </div>

                  <div className='space-y-3'>
                    <label className='block text-base lg:text-xl text-[#121F3E]'>Date</label>
                    <input
                      className='text-[#8E8E8E] border-2 border-[#E3E3E3] px-4 py-2 pr-8 rounded w-11/12 sm:w-[300px] lg:w-[400px]  shadow leading-tight'
                      type="text" name="date"
                      placeholder='22 Mar 2023'
                    />
                  </div>
                </div>
              </div>

            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default SellerBidDetails;