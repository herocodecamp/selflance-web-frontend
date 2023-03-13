import React, { useEffect, useState } from 'react';

import image1 from '../../Assets/Active_Gig_1.png'
import image2 from '../../Assets/Active_Gig_2.png'
import image3 from '../../Assets/Active_Gig_3.png'
import image4 from '../../Assets/Active_Gig_4.png'
import image5 from '../../Assets/Active_Gig_5.png'
import profile1 from '../../Assets/manage-order/profile-1.png'
import profile2 from '../../Assets/manage-order/profile-2.png'
import profile3 from '../../Assets/manage-order/profile-3.png'
import profile4 from '../../Assets/manage-order/profile-4.png'
import profile5 from '../../Assets/manage-order/profile-5.png'
import ManageDetails from './ManageDetails';

const Posts = [
  {
    _id: 1,
    title: 'I will create responsive design for your mobile app',
    image: image1,
    price: 990,
    time: 'Mar 03, 2023',
    nama: 'Ahmed',
    profile: profile1
  },
  {
    _id: 2,
    title: 'I will create video animation for you',
    image: image2,
    price: 990,
    time: 'Mar 03, 2023',
    name: 'Sam Sam',
    profile: profile2
  },
  {
    _id: 3,
    title: 'I will create amazon store for you just in $990 ',
    image: image3,
    price: 990,
    time: 'Mar 03, 2023',
    name: 'Saeed Ali',
    profile: profile3
  },
  {
    _id: 4,
    title: 'I will create responsive design for your mobile app',
    image: image4,
    price: 990,
    time: 'Mar 03, 2023',
    name: 'Daniel',
    profile: profile4
  },
  {
    _id: 5,
    title: 'I will create cartoonic video animation for you',
    image: image5,
    price: 990,
    time: 'Mar 03, 2023',
    name: 'Einstain',
    profile: profile5
  },

]

const ManagePost = () => {

  return (
    <div className='my-12 grid grid-cols-1 gap-5'> 
      {
        Posts?.map((manage) => 
        <ManageDetails
          key={manage._id}
          manage={manage}
        />
        )
      }
    </div>
  );
};

export default ManagePost;