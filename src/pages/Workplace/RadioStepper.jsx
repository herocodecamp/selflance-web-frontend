import React from 'react'

const RadioStepper = ({step, handleStep}) => {
    
  return (
    <div className='mt-10'>
        <ol className="flex items-center w-6/6 mb-4 justify-evenly sm:mb-5">
            <li className="flex items-center flex-col cursor-pointer" onClick={() => {handleStep(1)}} >
                <div className={`relative flex items-center justify-center w-8 h-8 mr-3 text-sm text-white ${step === 1? 'bg-[#00538F]' : 'border-2'} border-[#00538F] rounded-full`}>
                    
                </div>
                <p className='text-xl font-medium text-center'>Create Service</p>
            </li>
            <div className='w-1/6 border-2'></div>
            <li className="flex items-center flex-col cursor-pointer" onClick={() => {handleStep(2)}} >
                <div className={`relative flex items-center justify-center w-8 h-8 mr-3 text-sm text-white ${step === 2? 'bg-[#00538F]' : 'border-2'} border-[#00538F] rounded-full`}>
                </div>
                <p className='text-xl font-medium text-center'>Enter Details</p>
            </li>
            <div className='w-1/6 border-2'></div>
            <li className="flex items-center flex-col cursor-pointer" onClick={() => {handleStep(3)}} >
                <div className={`relative flex items-center justify-center w-8 h-8 mr-3 text-sm text-white ${step === 3? 'bg-[#00538F]' : 'border-2'} border-[#00538F] rounded-full`}>
                </div>
                <p className='text-xl font-medium text-center'>Add Photos</p>
            </li>
            <div className='w-1/6 border-2'></div>
            <li className="flex items-center flex-col cursor-pointer" onClick={() => {handleStep(4)}} >
                <div className={`relative flex items-center justify-center w-8 h-8 mr-3 text-sm text-white ${step === 4? 'bg-[#00538F]' : 'border-2'} border-[#00538F] rounded-full`}>
                </div>
                <p className='text-xl font-medium text-center'>Summary</p>
            </li>
        </ol>
        <div className='flex items-center w-full mb-4 justify-around sm:mb-5'>
            
            
            
        </div>
    </div>
  )
}

export default RadioStepper