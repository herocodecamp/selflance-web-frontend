import React from 'react'
import LeftBar from '../../components/SellerLeftBar/LeftBar'
import VerificationView from './VerificationView'

const VerificationPage = () => {
  return (
    <div className='flex'>
      <LeftBar/>
      <VerificationView/>
    </div>
  )
}

export default VerificationPage