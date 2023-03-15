import React, { useState } from 'react';
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

const Orders = {
  active: [
    {
      _id: 1,
      title: 'I will create responsive design for your mobile app',
      image: image1,
      price: 990,
      time: 'Mar 03, 2023',
      name: 'Ahmed',
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
  ],

  completed: [
    {
      _id: 1,
      title: 'I will create responsive design for your mobile app',
      image: image1,
      price: 990,
      time: 'Mar 03, 2023',
      name: 'Ahmed',
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
  ],

  revisions: [
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
  ],
  delivered: [
    {
      _id: 4,
      title: 'I will create responsive design for your mobile app',
      image: image4,
      price: 990,
      time: 'Mar 03, 2023',
      name: 'Daniel',
      profile: profile4
    },
  ],
  cancelled: [
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

}

const nav_el = [
  {
    name: 'Active Orders',
    number: '10'
  },
  {
    name: 'Completed',
    number: '10'
  },
  {
    name: 'In Revision',
    number: '10'
  },
  {
    name: 'Delivered',
    number: '10'
  },
  {
    name: 'Cancelled',
    number: '10'
  },

]

const ManagePost = () => {

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  }

  const getButtonClass = (buttonId) => {
    let classes = " px-4 py-2 rounded text-sm";

    if (buttonId === activeButton) {
      classes += " bg-[#00538F] sm:text-white";
    }

    return classes;
  }



  let data_to_display;
  switch (activeButton) {
    case 0:
      data_to_display = Orders.active;
      break;
    case 1:
      data_to_display = Orders.completed;
      break;
    case 2:
      data_to_display = Orders.revisions;
      break;
    case 3:
      data_to_display = Orders.delivered;
      break;
    case 4:
      data_to_display = Orders.cancelled;
      break;
    default:
      data_to_display = Orders.active;

  }

  return (
    <>
      <div className='bg-[#F4F4F4] sm:flex items-center space-x-4 mt-12 h-black] rounded hidden'>
        {nav_el.map((item, index) => {
          return (
            <button key={index} className={getButtonClass(index)} onClick={() => handleButtonClick(index)}>
              {item.name} <sup className='w-4 h-4 mt-[-5px] rounded-full bg-white text-black '>{item.number}</sup>
            </button>
          )

        })
        }

      </div>
      <div className='my-4 lg:my-12 grid grid-cols-1 gap-1 lg:gap-5'>
        {
          data_to_display?.map((manage) =>
            <ManageDetails
              key={manage._id}
              manage={manage}
            />
          )
        }
      </div>
    </>
  );
};

export default ManagePost;