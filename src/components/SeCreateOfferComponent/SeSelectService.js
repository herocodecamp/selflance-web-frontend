import React, { useState } from 'react';
import offer_img from '../../Assets/create_offer_img.png'
import star_gold from '../../Assets/Star-Gold.png'

const SeSelectService = () => {
  const [selectBtn, setSelectBtn] = useState('create_offer')

  const handleSelectButton = (option) => {
    setSelectBtn(option)
  }

  const handleSelectStyle = (option) => {
    let classes = ' rounded-md w-1/2  whitespace-nowrap	text-sm sm:text-xl px-2 sm:px-6 py-2 text-center  '
    if (selectBtn === option) {
      classes += ' text-white bg-[#00538F] '
    } else {
      classes += ' bg-[#F4F4F4] '
    }

    return classes
  }

  return (
    <div className='py-4 px-2 sm:px-4'>
      <ul className='flex items-center'>
        <li
          onClick={() => handleSelectButton('create_offer')}
          className={handleSelectStyle('create_offer')}>Create an offer</li>
        <li
          onClick={() => handleSelectButton('agreement')}
          className={handleSelectStyle('agreement')}>Agreement</li>
      </ul>

      <div className='flex items-center justify-between py-4 px-2'>
        <h3 className='text-[#121F3E] text-xl lg:text-2xl font-semibold'>Select your service</h3>
        <h3 className='text-[#00538F] text-xl lg:text-2xl font-bold'>Change</h3>
      </div>

      <div className='bg-[#FFFFFF] drop-shadow-2xl rounded-lg grid grid-cols-3 space-x-2'>
        <div className='col-span-1'>
          <img src={offer_img} className="rounded-lg w-full h-full" alt="" />
        </div>

        <div className='col-span-2 p-2 space-y-3'>
       <h3 className='text-[#121F3E] text-xl sm:text-2xl lg:text-3xl font-semibold leading-6 sm:leading-10'>Mobile UI UX design or app UI UX design</h3>
       
       <div className='flex items-center space-x-2'>
        <img src={star_gold} className="w-[37px] h-[37px]" alt="" />
        <p className='text-[#121F3E] text-xl sm:text-2xl'>5.0 <span className='text-[#8E8E8E]'>(520)</span></p>
       </div>

       <p className='flex items-center space-x-1'><span className='text-[#8E8E8E] text-xl sm:text-2xl leading-10'> Basic:</span> <span className='text-[#00538F] text-xl sm:text-2xl leading-10'>$30</span></p>
        </div>

      </div>

    </div>
  );
};

export default SeSelectService;