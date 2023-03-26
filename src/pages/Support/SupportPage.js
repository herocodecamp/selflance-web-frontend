import React, {useState} from 'react'
import SupportView from './SupportView'

const SupportPage = () => {
  const [current, setCurrent] = useState('buyer')
  const handleCurrent = (current) => {
    setCurrent(current)
  }
  return (
    <div>
      <SupportView current={current} handleCurrent={handleCurrent} />
    </div>
  )
}

export default SupportPage