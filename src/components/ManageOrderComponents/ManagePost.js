import axios from 'axios';
import React, { useEffect, useState } from 'react';

import image1 from '../../Assets/Active_Gig_1.png'
import image2 from '../../Assets/Active_Gig_2.png'
import image3 from '../../Assets/Active_Gig_3.png'
import image4 from '../../Assets/Active_Gig_4.png'
import image5 from '../../Assets/Active_Gig_5.png'
import ManageDetails from './ManageDetails';

const Posts = [
  {
    _id: 1,
    title: 'I will create responsive design for your mobile app',
    image: image1,
    price: 900
  },
  {
    _id: 2,
    title: 'I will create video animation for you',
    image: image2,
    price: 900
  },
  {
    _id: 3,
    title: 'I will create video animation for you',
    image: image3,
    price: 900
  },
  {
    _id: 4,
    title: 'I will create amazon store for you just in $990',
    image: image4,
    price: 900
  },
  {
    _id: 5,
    title: 'I will create cartoonic video animation for you',
    image: image5,
    price: 900
  },

]

const ManagePost = () => {

  return (
    <div className='my-12 grid grid-cols-1 gap-5'> 
      {
        Posts?.map((manage) => <ManageDetails
          key={manage._id}
          manage={manage}
        />
        )
      }
    </div>
  );
};

export default ManagePost;