import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import seller1 from '../../Assets/recommend-seller/seller-1.png'
import seller2 from '../../Assets/recommend-seller/seller-2.png'
import seller3 from '../../Assets/recommend-seller/seller-3.png'
import seller4 from '../../Assets/recommend-seller/seller-4.png'
import seller5 from '../../Assets/recommend-seller/seller-5.png'
import seller6 from '../../Assets/recommend-seller/seller-6.png'
import seller7 from '../../Assets/recommend-seller/seller-7.png'


const RecommendSeller = [
  {
    _id: 1,
    image: seller1,
    name: "William Liam",
    level: "Seller Level - 2",
  },
  {
    _id: 2,
    image: seller2,
    name: "William Liam",
    level: "Seller Level - 2",
  },
  {
    _id: 3,
    image: seller3,
    name: "William Liam",
    level: "Seller Level - 2",
  },
  {
    _id: 4,
    image: seller4,
    name: "William Liam",
    level: "Seller Level - 2",
  },
  {
    _id: 5,
    image: seller5,
    name: "William Liam",
    level: "Seller Level - 2",
  },
  {
    _id: 6,
    image: seller6,
    name: "William Liam",
    level: "Seller Level - 2",
  },
  {
    _id: 7,
    image: seller7,
    name: "William Liam",
    level: "Seller Level - 2",
  }
]


const Recommended = () => {
  const [selectNumber, setSelectNumber] = useState(4)

  const handleSeeMore = () => {
    setSelectNumber(selectNumber + 6)
  }

  return (
    <div className='pt-6 relative'>
      <h2 className='text-[#000000] font-semibold text-base leading-4 py-6'>Recommended Sellers</h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5'>

        {
          RecommendSeller.slice(0, 6).map(seller => {
            return (

              <div className='shadow-md hidden sm:block rounded-lg bg-[#ffffff]'>
                <div>
                  <img src={seller.image} className=" w-full mx-auto" alt="img" />
                </div>
                <div className='py-4 px-2 space-y-2'>
                  <p className='font-semibold text-xs sm:text-base text-[#121F3E] sm:leading-2 truncate'>{seller.name}</p>

                  <p className='flex items-center space-x-2 truncate'>
                    <AiFillStar className=' text-[#FFB33E] sm:font-semibold ' /> <span className='text-xl text-[#121F3E] sm:font-semibold '>5.0</span> <span className='text-gray-300 sm:font-sm '>(520 Review)</span>
                  </p>

                  <p className='text-[#121F3E] text-xs sm:leading-2 truncate'>{seller.level}</p>
                </div>
              </div>

            )
          })
        }


        {RecommendSeller.slice(0, selectNumber).map(seller => {
          return (

            <div className='shadow-md sm:hidden rounded-lg bg-[#ffffff]'>
              <div>
                <img src={seller.image} className=" w-full mx-auto" alt="img" />
              </div>
              <div className='py-4 px-2 space-y-2'>
                <p className='font-semibold text-xs sm:text-base text-[#121F3E] sm:leading-2 truncate'>{seller.name}</p>

                <p className='flex items-center space-x-2 truncate'>
                  <AiFillStar className=' text-[#FFB33E] sm:font-semibold ' /> <span className='text-xl text-[#121F3E] sm:font-semibold '>5.0</span> <span className='text-gray-300 sm:font-sm '>(520 Review)</span>
                </p>

                <p className='text-[#121F3E] text-xs sm:leading-2 truncate'>{seller.level}</p>
              </div>
            </div>

          )
        })}

      </div>
      <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute right-2 mt-2 sm:hidden'>
        <button onClick={handleSeeMore}>see more</button>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Recommended;