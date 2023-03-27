import React, {useState} from 'react'
import RadioStepper from './RadioStepper'
import Create from './Create'
import Details from './Details'
import Photos from './Photos'
import Summary from './Summary'
import LeftBar from '../../components/SellerLeftBar/LeftBar'

const WorkplacePage = () => {
    const [step, setStep] = useState(1)
    const handleStep = (step) => {
        setStep(step)
    }
  return (
    <div className='flex justify-between'>
        <LeftBar />
        <div className='flex-auto sm:mr-6'>
          <RadioStepper step={step} handleStep={handleStep} />

          {
          step === 1 ? <Create handleStep={handleStep} /> :
          step === 2 ? <Details handleStep={handleStep} /> :
          step === 3 ? <Photos  handleStep={handleStep} /> :
          step === 4 ? <Summary handleStep={handleStep} /> :
          ""
          }
        </div>
    </div>
  )
}

export default WorkplacePage