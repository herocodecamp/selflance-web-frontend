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

const PreMutuals = () => {
  return (
    <>
      {friends.length > 0 && (
        <div className="flex items-center relative ">
          <div className='max-w-[20px] flex'>
            {friends.slice(0, 3).map((url) => (
              <img
                key={url._id}
                src={url.image}
                alt="clients"
                className="w-full  rounded-full border-2 border-white"
                title='clients'
              />
            ))}
          </div>
          <div className="absolute left-12 flex items-center justify-center">
            <div className="bg-gray-300 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
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
          <div className='flex items-center space-x-2 lg:space-x-1 absolute right-1'>
            <AiFillStar className='text-[#59AED5] font-semibold ' /> <span className='text-[#121F3E] font-semibold '>5.0</span> <span className='text-gray-300 font-semibold '>(520)</span>
          </div>
        </div>
      )}
    </>

  );
};

export default PreMutuals;