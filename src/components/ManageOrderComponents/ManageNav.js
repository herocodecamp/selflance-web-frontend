import React, { useState } from 'react';


const ManageNav = () => {

  const [activeButton, setActiveButton] = useState(null);

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


  return (
    <div>
      <div className='bg-[#F4F4F4] sm:flex items-center space-x-4 mt-12 h-black] rounded hidden sm:block'>

        <button className={getButtonClass(1)} onClick={() => handleButtonClick(1)}>
          Active Orders <sup className='w-4 h-4 mt-[-5px] rounded-full bg-white text-black '>10</sup>
        </button>

        <button className={getButtonClass(2)} onClick={() => handleButtonClick(2)}>
          Completed <sup className='w-4 h-4 mt-[-5px] rounded-full bg-white text-black '>10</sup>
        </button>

        <button className={getButtonClass(3)} onClick={() => handleButtonClick(3)}>
          In Revision <sup className='w-4 h-4 mt-[-5px] rounded-full bg-white text-black '>10</sup>
        </button>

        <button className={getButtonClass(4)} onClick={() => handleButtonClick(4)}>
          Delivered <sup className='w-4 h-4 mt-[-5px] rounded-full bg-white text-black '>10</sup>
        </button>

        <button className={getButtonClass(5)} onClick={() => handleButtonClick(5)}>
          Cancelled <sup className='w-4 h-4 mt-[-5px] rounded-full bg-white text-black '>10</sup>
        </button>

      </div>
    </div>

  );
};

export default ManageNav;