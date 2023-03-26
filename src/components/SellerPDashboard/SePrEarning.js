import React from 'react';

const SePrEarning = ({ sellerInfo }) => {
  return (
    <div className='py-6'>
      <h2 className='text-[#121F3E] text-xl font-bold'>Your Earning</h2>
      <div className='pt-6 grid grid-cols-1 sm:grid-cols-2 gap-7'>
        <div className='border-2 border-[#EAEAEA] bg-[#FFFFFF] space-y-2 py-4 px-4 rounded-xl lg:max-w-lg'>
          <h2 className='text-[#00538F] text-xl sm:text-2xl lg:text-4xl font-bold flex items-center space-x-4'><p className='w-[17px] h-[17px] rounded-full bg-[#00538F]'></p> <p>{sellerInfo.personal_balance}</p></h2>
          <p className='text-[#888F9F] text-base sm:text-xl lg:text-2xl'>Personal Balance</p>
        </div>

        <div className='border-2 border-[#EAEAEA] bg-[#FFFFFF] space-y-2 py-4 px-4 rounded-xl lg:max-w-lg'>
          <h2 className='text-[#F4A14D] text-xl sm:text-2xl lg:text-4xl font-bold flex items-center space-x-4'><p className='w-[17px] h-[17px] rounded-full bg-[#F4A14D]'></p> <p>{sellerInfo.last_month_earning}</p></h2>
          <p className='text-[#888F9F] text-base sm:text-xl lg:text-2xl'>Last month earning</p>
        </div>

        <div className='border-2 border-[#EAEAEA] bg-[#FFFFFF] space-y-2 py-4 px-4 rounded-xl lg:max-w-lg'>
          <h2 className='text-[#00538F] text-xl sm:text-2xl lg:text-4xl font-bold flex items-center space-x-4'><p className='w-[17px] h-[17px] rounded-full bg-[#00538F]'></p> <p>{sellerInfo.average_selling}</p></h2>
          <p className='text-[#888F9F] text-base sm:text-xl lg:text-2xl'>Avg. selling price</p>
        </div>

        <div className='border-2 border-[#EAEAEA] bg-[#FFFFFF] space-y-2 py-4 px-4 rounded-xl lg:max-w-lg'>
          <h2 className='text-[#00B012] text-xl sm:text-2xl lg:text-4xl font-bold flex items-center space-x-4'><p className='w-[17px] h-[17px] rounded-full bg-[#00B012]'></p> <p>{sellerInfo.active_order}</p></h2>
          <p className='text-[#888F9F] text-base sm:text-xl lg:text-2xl'>Active Orders</p>
        </div>

      </div>

    </div>
  );
};

export default SePrEarning;