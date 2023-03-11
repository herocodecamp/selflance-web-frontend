import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { SlOptionsVertical } from "react-icons/sl";

const Control = ({title}) => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex justify-content gap-x-5 items-center'>
        <AiOutlineArrowLeft className='hover:cursor-pointer' size={'2.5em'} />
        <h1 className='text-4xl font-medium'>{title}</h1>
      </div>
      <SlOptionsVertical className='text-gray-600 hover:cursor-pointer' size={'2em'}  />
    </div>
  )
}

export default Control