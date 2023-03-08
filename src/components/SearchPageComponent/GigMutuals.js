import React from 'react';
import mutual from '../../Assets/avatar.png'
import { AiFillStar } from 'react-icons/ai'

const friends = [
  { _id: 1, image: mutual },
  { _id: 2, image: mutual },
  { _id: 3, image: mutual },
  { _id: 4, image: mutual },
  { _id: 5, image: mutual },

];

const GigMutuals = () => {
  return (
    <>
      {friends.length > 0 && (
        <div className="flex items-center relative">
          {friends.slice(0, 3).map((url) => (
            <img
              key={url._id}
              src={url.image}
              alt="clients"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
          <div className="absolute left-20 flex items-center justify-center">
            <div className="bg-gray-300 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={`M12 6v6m0 0v6m0-6h6m-6 0H6`}
                />
              </svg>
            </div>
          </div>
          <span className='text-[#92929D] ml-6'>clients</span>
          <div className='flex items-center space-x-2 lg:space-x-1 absolute right-2 lg:right-1'>
            <AiFillStar className='text-[#FFB33E] font-semibold ' /> <span className='text-[#121F3E] font-semibold '>5.0</span> <span className='text-gray-300 font-semibold '>(520)</span>
          </div>
        </div>
      )}
    </>

  );
};

export default GigMutuals;