import React from 'react'
import loader from '../../Assets/svg/loader_search.svg'

export default function Loading() {
  return (
    <div className='fixed '>
      <img className='fixed ml-96 mt-16 translate-x-1/2 translate-y-1/2' src={loader} alt="Loading............" />
    </div>
  )
}

