import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import review_seller from '../../Assets/review_seller.png'

const seller = {
  image: review_seller,
  level: 'Seller Level - 1',
  name: 'William Liam'
}

const SeWriteReviewView = ({ maxStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleFormData = (event) => {
    event.preventDefault()
    const data = {
      description: event.target.description.value,
      rating: rating
    }
    console.log(data)
  }


  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };


  return (
    <div>
      <div className='flex justify-between items-center border-b-2 border-[#D1D1D1] pb-6'>
        <div className='flex space-x-10 items-center'>
          <h3 className='text-[#000000] text-xl font-bold'>Write a Review</h3>
        </div>
        <div className='flex space-x-10 items-center'>
          <span><MdNotificationsNone className='text-[#00538F] text-2xl' /> </span>
          <span><BsThreeDotsVertical className='text-[#121F3E]  text-2xl' /></span>
        </div>
      </div>

      <div className='space-y-3 pt-4'>
        <h4 className='text-[#000000] text-xl sm:text-2xl font-bold'>Review your experience</h4>
        <p className='text-base font-bold text-[#5E5E5E]'>How would you rate your overall experience with this seller?</p>
      </div>

      <div className='sm:w-1/2 mx-auto text-center space-y-3 pt-6 sm:pt-10'>
        <img src={seller.image} className="shrink-0 w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[297px] lg:h-[297px] mx-auto rounded-full" alt="" />
        <h4 className='text-xl font-bold text-[#121F3E] w-[200px] md:w-[250px] lg:w-[297px]  mx-auto '>{seller.name}</h4>
        <p className='text-base font-semibold text-[#4F5350] w-[200px]  md:w-[250px] lg:w-[297px]  mx-auto '>{seller.level}</p>
      </div>

      <div className='sm:py-12 py-8 space-y-4'>
        <h3 className='text-xl sm:text-2xl font-semibold text-[#0C1037]'>Select Rating</h3>

        <div className="flex items-center sm:space-x-4">
          {[...Array(maxStars)].map((_, index) => (
            <FaStar
              key={index}
              className={`h-12 w-12 ${rating > index ? 'text-yellow-400' : 'text-gray-400'
                } cursor-pointer`}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>

        <form onSubmit={handleFormData} className="pt-6">

          <div className='relative'>
            <label>
              <textarea
                className="w-full resize-none 
                 border-[4px] border-[#E3E3E3] text-xl placeholder-[#919699] outline-none focus:ring-0 rounded-lg h-[200px] p-6"
                name="description"
                placeholder='Share your experience...'
              ></textarea>
              <span className='text-[#121F3E] text-base font-semibold mx-6 px-2 absolute left-0 -top-3 z-10'>Write a Comment</span>
            </label>
          </div>

          <div className='flex justify-center items-center sm:mt-8'>
            <button type='submit' className=' bg-[#00538F] text-white w-[120px] sm:w-[160px] lg:w-[200px] px-6 py-3 font-bold rounded-md whitespace-nowrap'>Published Review</button>
          </div>

        </form>
      </div>


    </div>
  );
};

export default SeWriteReviewView;