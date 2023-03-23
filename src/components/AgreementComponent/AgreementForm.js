import React, { useState } from 'react';

const AgreementForm = () => {
  const [isChecked, setIsChecked] = useState(false)
  console.log(isChecked)

  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked)
  }

  const handleAgreement = (event) => {
    event.preventDefault()

    const etValue = event.target;

    const agreementDetails = {
      title: etValue.title.value,
      description: etValue.description.value,
      price: etValue.price.value,
      revision: etValue.revision.value,
      deliver: etValue.deliver.value,
      extra_revision: etValue.extra_revision.value,
      agree: isChecked
    }

    console.log("agreement", agreementDetails)

  }

  return (
    <div className='sm:pt-8 pt-6 px-4 sm:px-6'>
      <form onSubmit={handleAgreement}>

        <div className='space-y-3'>
          <label className='block text-xl sm:text-2xl font-semibold text-[#121F3E]'>Title</label>

          <input
            className=' w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#8E8E8E] text-base sm:text-xl font-semibold px-4 py-2'
            type="text"
            name="title"
            placeholder='Mobile UI Design'
          />
        </div>

        <div className='space-y-3 py-4 sm:py-6 relative'>
          <label className='block text-xl sm:text-2xl font-semibold text-[#121F3E]'>Brief</label>

          <textarea
            className=' w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#8E8E8E] text-base sm:text-xl font-semibold px-4 py-2 resize-none'
            name="description"
            id="" cols="30"
            rows="10"
            placeholder='Buyer says 2 screens of mobile app which is onboarding screens...logo will be provided by buyer and color scheme also... I will give the 2 screens with source figma file...Thank you'
          />

          <span className='text-[#979797] text-sm font-sm absolute right-1 bottom-8'>Max 3000 Words</span>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5'>

          <div className='space-y-3 sm:col-span-1'>
            <label className='block text-xl  font-semibold text-[#121F3E]'>Price</label>

            <input
              className=' w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#8E8E8E] text-base  font-semibold px-4 py-2'
              type="text"
              name="price"
              placeholder='$150'
            />
          </div>

          <div className='space-y-3 sm:col-span-1'>
            <label className='block text-xl  font-semibold text-[#121F3E]'>No of Revisions</label>

            <input
              className=' w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#8E8E8E] text-base  font-semibold px-4 py-2'
              type="text"
              name="revision"
              placeholder='3'
            />
          </div>

          <div className='space-y-3 sm:col-span-1'>
            <label className='block text-xl  font-semibold text-[#121F3E]'>No of Days to Deliver</label>

            <input
              className=' w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#8E8E8E] text-base font-semibold px-4 py-2'
              type="text"
              name="deliver"
              placeholder='3'
            />
          </div>

          <div className='space-y-3 sm:col-span-1'>
            <label className='block text-xl  font-semibold text-[#121F3E]'>Extra Charges for Extra Revision</label>

            <input
              className=' w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#8E8E8E] text-base  font-semibold px-4 py-2'
              type="text"
              name="extra_revision"
              placeholder='$15 per revision'
            />
          </div>
        </div>

        <div className='flex items-center space-x-4 py-6'>
          <input
            checked={isChecked}
            onChange={handleCheckChange}
            className='w-[36px] h-[36px] rounded-md'
            type="checkbox"
            name="agree"
          />
          <p className='text-[#8E8E8E] font-semibold text-xl'>I’ve accepted all the terms & conditions. </p>
        </div>

        <div className='flex items-center justify-end py-4'>
          <button type='submit' className='text-[#00538F] text-xl sm:text-2xl font-semibold underline '>Continue</button>
        </div>

      </form>
    </div>
  );
};

export default AgreementForm;