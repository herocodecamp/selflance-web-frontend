import React from 'react';
import image1 from '../../Assets/Active_Gig_1.png'
import image2 from '../../Assets/Active_Gig_2.png'
import image3 from '../../Assets/Active_Gig_3.png'
import image4 from '../../Assets/Active_Gig_4.png'
import image5 from '../../Assets/Active_Gig_1.png'
import image6 from '../../Assets/Active_Gig_1.png'
import image7 from '../../Assets/Active_Gig_1.png'
import image8 from '../../Assets/Active_Gig_1.png'
import image9 from '../../Assets/Active_Gig_1.png'
import SuggestedDetails from './SuggestedDetails';

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


const Suggested = () => {
  return (
    <div className='py-6'>
      <h2 className='text-[##000000] font-bold text-xl leading-4 py-4'>You may like this</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 '>
        {
          Gigs?.slice(0, 3).map(gig => <SuggestedDetails
            key={gig._id}
            gig={gig}
          ></SuggestedDetails>)
        }
      </div>
    </div>
  );
};

export default Suggested;