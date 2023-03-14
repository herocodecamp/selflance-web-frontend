import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

const OrderDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  }

  const getButtonClass = (buttonId) => {
    let classes = " px-4 py-2 rounded text-sm";

    if (buttonId === activeButton) {
      classes += " bg-[#00538F] text-white";
    }

    return classes;
  }

  return (
    <div>

      <button className='sm:hidden' onClick={handleToggle}><AiOutlineMenu className='text-2xl' /></button>

      <div
        className={`fixed inset-y-0 bg-[#ffff]  border border-[
          #D1D1D1] left-0  p-8 transition-transform z-10  duration-300 transform ${isOpen ? 'translate-x-0 overflow-y-auto' : '-translate-x-full'
          }`}
      >
        <button className='fixed top-2 right-2' onClick={handleToggle}><RxCross1 className="text-2xl" /></button>
     
      <div>
        <div className='space-y-4 rounded grid grid-cols-1 w-full'>

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
    </div>
    </div>
  );
};

export default OrderDrawer;