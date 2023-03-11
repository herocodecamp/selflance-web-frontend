import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import seller1 from '../../Assets/profileImage.png'
import seller2 from '../../Assets/profileImage.png'
import seller3 from '../../Assets/profileImage.png'
import seller4 from '../../Assets/profileImage.png'
import seller5 from '../../Assets/profileImage.png'
import seller6 from '../../Assets/profileImage.png'
import seller7 from '../../Assets/profileImage.png'


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
  return (
    <div className='pt-6'>
      <h2 className='text-[#000000] font-semibold text-base leading-4 py-6'>Recommended Sellers</h2>

      <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-2.5'>
        {
          RecommendSeller.slice(0, 6).map(seller => {
            return (

              <div className='shadow-md rounded-lg bg-[#ffffff]'>
                <div>
                  <img src={seller.image} className="max-h-[250px] w-full" alt="img" />
                </div>
                <div className='py-4 px-2 space-y-2'>
                  <p className='font-semibold text-base text-[#121F3E] leading-4'>{seller.name}</p>

                  <p className='flex items-center space-x-2'>
                    <AiFillStar className=' text-[#FFB33E] font-semibold ' /> <span className='text-xl text-[#121F3E] font-semibold '>5.0</span> <span className='text-gray-300 font-sm '>(520 Review)</span>
                  </p>

                  <p className='text-[#121F3E] leading-4 '>{seller.level}</p>
                </div>


              </div>

            )
          })
        }
      </div>
      <div>

      </div>
    </div>
  );
};

export default Recommended;