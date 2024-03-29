import React from 'react'
import PricePickerView from './PricePickerView'

const PricePicker = ({name, onChange, onBlur, value}) => {
  return (
    <PricePickerView onChange={onChange} onBlur={onBlur} name={name} value={value}/>
  )
}

export default PricePicker