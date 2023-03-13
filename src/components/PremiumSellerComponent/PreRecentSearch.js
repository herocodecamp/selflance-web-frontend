import React from 'react';
import image1 from '../../Assets/blog-1a.png'
import image2 from '../../Assets/blog-1a.png'
import image3 from '../../Assets/blog-1a.png'
import image4 from '../../Assets/blog-1a.png'
import PreGigDetails from './PreGigDetails';


const recentSearch = [
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
]

const PreRecentSearch = () => {
  return (
    <div className='p-12 bg-[#F5F5F5] hidden sm:block'>
      <h2 className='text-[#000000] font-bold text-3xl px-12'>Your most recent browsing history</h2>
      <div className='grid sm:grid-cols-4 gap-5 py-4'>
        {
          recentSearch?.map(gig => <PreGigDetails
            key={gig._id}
            gig={gig}
          ></PreGigDetails>)
        }
      </div>
    </div>
  );
};

export default PreRecentSearch;