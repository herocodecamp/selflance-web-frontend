import React from 'react'

const PricePickerView = () => {
  return (
    <div class="flex text-2xl">
        <span class="inline-flex items-center cursor-pointer rounded-l-md p-4 text-sm border border-r-0">
            +
        </span>
        <div className='flex items-center justify-center'>
            <span className='border-t border-b py-4'>$</span>
            <input type="text" class="rounded-none border-l-0 text-2xl border-r-0 border-gray-300 text-gray-900 block px-0 py-4 w-20 " placeholder="5"/>
        </div>
        
        <span class="inline-flex items-center cursor-pointer p-4 text-sm border border-l-0 rounded-r-md">
            -
        </span>
        <p className='inline-flex items-center'>/hr</p>
        
    </div>
  )
}

export default PricePickerView