import React from 'react'

const PricePickerView = ({name='', onChange=null, onBlur=null, value=''}) => {
  return (
    <div className="flex text-2xl">
        <span className="inline-flex items-center cursor-pointer rounded-l-md p-4 text-sm border border-r-0">
            +
        </span>
        <div className='flex items-center justify-center'>
            <span className='border-t border-b py-4'>$</span>
            <input type="text" className="rounded-none border-l-0 text-2xl border-r-0 border-gray-300 text-gray-900 block px-0 py-4 w-20 " placeholder="5" value={value} name={name} onChange={onChange} onBlur={onBlur} />
        </div>
        
        <span className="inline-flex items-center cursor-pointer p-4 text-sm border border-l-0 rounded-r-md">
            -
        </span>
        <p className='inline-flex items-center'>/hr</p>
        
    </div>
  )
}

export default PricePickerView