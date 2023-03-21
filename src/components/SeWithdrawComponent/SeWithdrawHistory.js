import React from 'react';

const payments = [
  {
    _id: 1,
    date: "24 Jun 2023",
    amount: 5000.00
  },
  {
    _id: 2,
    date: "24 Jun 2023",
    amount: 5000.00
  },
  {
    _id: 3,
    date: "24 Jun 2023",
    amount: 5000.00
  },
  {
    _id: 4,
    date: "24 Jun 2023",
    amount: 5000.00
  },
]

const SeWithdrawHistory = () => {
  return (
    <div className='py-6'>
      <h2 className='text-[#121F3E] text-xl sm:text-2xl font-bold leading-8'>History</h2>

      <div className='pt-6 grid grid-cols-1 gap-4'>
        {
          payments?.map(payment => {
            return (
              <>
                <div className='flex items-center justify-between bg-[#FFFFFF] rounded-lg drop-shadow-md px-6 py-4'>
                  <div>
                    <h3 className='text-[#121F3E] text-base font-semibold lg:text-xl lg:font-bold leading-6'>Get payment</h3>
                    <p className='text-[#888F9F] text-sm font-semibold'>{payment.date}</p>
                  </div>
                  <h4 className=' lg:text-2xl text-xl text-[#121F3E] font-bold'>${payment.amount}</h4>
                </div>
              </>
            )
          })
        }
      </div>

    </div>
  );
};

export default SeWithdrawHistory;