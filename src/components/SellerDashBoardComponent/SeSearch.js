import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import sellerAvatar from '../../Assets/seller_profile.png'
import SeSearchDetails from './SeSearchDetails';

const searchResult = [
  {
    _id: 1,
    profile: sellerAvatar,
    title: "I Need UI UX Designer",
    description: "If you're looking for delivery men, you may be in need of someone to transport goods, packages......",
    price: '$500',
    level: 'Level 1',
    duration: '1 month',
    applied: 20,
  },
  {
    _id: 2,
    profile: sellerAvatar,
    title: "I Need UI UX Designer",
    description: "If you're looking for delivery men, you may be in need of someone to transport goods, packages......",
    price: '$500',
    level: 'Level 1',
    duration: '1 month',
    applied: 20,
  },
  {
    _id: 3,
    profile: sellerAvatar,
    title: "I Need UI UX Designer",
    description: "If you're looking for delivery men, you may be in need of someone to transport goods, packages......",
    price: '$500',
    level: 'Level 1',
    duration: '1 month',
    applied: 20,
  },
  {
    _id: 4,
    profile: sellerAvatar,
    title: "I Need UI UX Designer",
    description: "If you're looking for delivery men, you may be in need of someone to transport goods, packages......",
    price: '$500',
    level: 'Level 1',
    duration: '1 month',
    applied: 20,
  },
  {
    _id: 5,
    profile: sellerAvatar,
    title: "I Need UI UX Designer",
    description: "If you're looking for delivery men, you may be in need of someone to transport goods, packages......",
    price: '$500',
    level: 'Level 1',
    duration: '1 month',
    applied: 20,
  },
]

const SeSearch = () => {
  const [activeColor, setActiveColor] = useState(1)
  const handleActive = (activeId) => {
    setActiveColor(activeId)
  }
  const handleActiveClass = (activeId) => {
    let classes = " sm:text-xl ml-4 text-base font-semibold  hover:cursor-pointer "
    if (activeColor === activeId) {
      classes += " border-b-2 pb-4 border-[#00538F] text-[#00538F] "
    } else {
      classes += " text-[#828282] pb-4"
    }

    return classes

  }
  return (
    <div className="py-6 ">
      <div className='bg-[#F4F4F4] h-[44px] w-full rounded-lg flex items-center space-x-4 px-2'>
        <span className='pl-2'><FiSearch className='w-[16px] h-[16px] text-[#666666]' /></span>
        <input className='bg-[#F4F4F4] w-full border-none focus:ring-0' type="text" placeholder='Search Job' />
      </div>
      <div className='py-6'>
        <ul className='flex items-center lg:space-x-12 sm:space-x-6 space-x-3 border-b-[1px] border-[#D1D1D1] '>
          <li onClick={() => handleActive(1)} className={handleActiveClass(1)}>Best Matches</li>
          <li onClick={() => handleActive(2)} className={handleActiveClass(2)}>Applied</li>
          <li onClick={() => handleActive(3)} className={handleActiveClass(3)}>Saved</li>
        </ul>
      </div>

      <div className='grid grid-cols-1 gap-8'>
        {
           searchResult?.map(result => <SeSearchDetails
           key={result._id}
           result={result}
           ></SeSearchDetails>)
        }
      </div>

    </div>
  );
};

export default SeSearch;