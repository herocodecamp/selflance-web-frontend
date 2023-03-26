import React, {useState} from 'react'
import BecomeSellerView from './BecomeSellerView'
import ProfessionalInfo from './ProfessionalInfo'
import AccoutSecurity from './AccoutSecurity'
import RadioStepper from './RadioStepper'
import Control from '../../common/Control/Control'

const BecomeSeller = () => {
  const [step, setStep] = useState(1)
  const handleStep = (step) => {
    setStep(step)
  }
  return (
    <div className='min-h-screen md:p-16 m-5'>
      <Control title='Become a Seller'/>
      <RadioStepper step={step} setStep={setStep} handleStep={handleStep} />
      {
        step === 1 ? <BecomeSellerView setStep={setStep} handleStep={handleStep} /> :
        step === 2 ? <ProfessionalInfo setStep={setStep} handleStep={handleStep} /> :
        step === 3 ? <AccoutSecurity setStep={setStep} handleStep={handleStep} />:
        ''
      }
    </div>
  )
}

export default BecomeSeller;