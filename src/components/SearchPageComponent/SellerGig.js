import React, { useState } from 'react';
import image1 from '../../Assets/Active_Gig_1.png'
import image2 from '../../Assets/Active_Gig_2.png'
import image3 from '../../Assets/Active_Gig_3.png'
import image4 from '../../Assets/Active_Gig_4.png'
import image5 from '../../Assets/Active_Gig_1.png'
import image6 from '../../Assets/Active_Gig_1.png'
import image7 from '../../Assets/Active_Gig_1.png'
import image8 from '../../Assets/Active_Gig_1.png'
import image9 from '../../Assets/Active_Gig_1.png'
import SellerGigsDetails from './SellerGigsDetails';

const Gigs = [
  {
    _id: 1,
    title: "I will design and develop fully responsive website",
    image: image1
  },
  {
    _id: 2,
    title: "I will design and develop fully responsive website",
    image: image2
  },
  {
    _id: 3,
    title: "I will design and develop fully responsive website",
    image: image3
  },
  {
    _id: 4,
    title: "I will design and develop fully responsive website",
    image: image4
  },
  {
    _id: 5,
    title: "I will design and develop fully responsive website",
    image: image5
  },
  {
    _id: 6,
    title: "I will design and develop fully responsive website",
    image: image6
  },

  {
    _id: 7,
    title: "I will design and develop fully responsive website",
    image: image7
  },
  {
    _id: 8,
    title: "I will design and develop fully responsive website",
    image: image8
  },
  {
    _id: 9,
    title: "I will design and develop fully responsive website",
    image: image9
  },
]


const SellerGig = () => {
  const [seeMore, setSeeMore] = useState(3)

  const handleSeeMore = () => {
    setSeeMore(seeMore + 3)
  }

  return (
    <div className='relative py-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6 '>



        {

          Gigs?.map(gig => {
            return (
              <div className='sm:block hidden'>
                <SellerGigsDetails
                  key={gig._id}
                  gig={gig}
                ></SellerGigsDetails>
              </div>
            )
          })

        }
        {

          Gigs?.slice(0, seeMore).map(gig => {
            return (
              <div className='sm:hidden block'>
                <SellerGigsDetails
                  key={gig._id}
                  gig={gig}
                ></SellerGigsDetails>
              </div>
            )
          })

        }

      </div>
      <button
        onClick={handleSeeMore}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex absolute right-2 bottom-1 sm:hidden">
        <span>See More</span>
        <svg class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6.293 6.293a1 1 0 011.414 0l3.172 3.172a1 1 0 010 1.414l-3.172 3.172a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default SellerGig;