import { Label, Select, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

const SeCreateOfferForm = () => {
  const [isChecked, setIsChecked] = useState(false)
  console.log(isChecked)

  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSelectValue = (event) => {
    event.preventDefault()
    const selected = {
      description: event.target.description.value,
      deliveryTime: event.target.delivery_time.value,
      revision: event.target.revision.value,
      price: event.target.price.value,
      checked: isChecked,
      expiry: event.target.expiry.value
    }
    console.log("select value", selected)
  }

  return (
    <div className='sm:py-10 py-6'>
      <form onSubmit={handleSelectValue}>
        <div className='space-y-4'>
          <label className='text-[#00538F] text-xl sm:text-2xl font-semibold'>Your Offer</label>
          <br />
          <textarea
            className='resize-none text-[#979797] w-full rounded-md drop-shadow-md border-1 border-[#E3E3E3] px-6 py-4 focus:ring-0'
            placeholder='Describe your offer here.....e.g. deliverables, timelines, and more'
            name="description" cols="30" rows="10"></textarea>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-2.5 py-6'>

          <div id="select" className='sm:col-span-1'>
            <div className="mb-2 block">
              <label className='text-[#00538F] text-xl sm:text-2xl font-semibold'>Delivery Time</label>
            </div>
            <Select
              required={true}
              name="delivery_time"
              className='border border-[#E3E3E3] rounded-md'
            >
              <option>
                2 days
              </option>
              <option>
                3 days
              </option>
              <option>
                7 days
              </option>
              <option>
                15 days
              </option>
            </Select>
          </div>

          <div id="select" className='sm:col-span-1'>
            <div className="mb-2 block">
              <label className='text-[#00538F] text-xl sm:text-2xl font-semibold'>Revision</label>
            </div>
            <Select
              required={true}
              name="revision"
              className='border border-[#E3E3E3] rounded-md'
            >
              <option>
                unlimited
              </option>
              <option>
                3 days
              </option>
              <option>
                7 days
              </option>
              <option>
                15 days
              </option>
            </Select>
          </div>

          <div id="select" className='sm:col-span-1'>
            <div className="mb-2 block">
              <label className='text-[#00538F] text-xl sm:text-2xl font-semibold'>Total price</label>
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              name='price'
              placeholder='$500'
            />
          </div>

          <div id="select" className='sm:col-span-1'>
            <div className="mb-2  block">
              <label className='text-[#00538F] text-xl sm:text-2xl font-semibold'>Additional Option</label>
            </div>
            <Select
              required={true}
              name="additional"
              className='border border-[#E3E3E3] rounded-md'
            >
              <option>
                service option
              </option>
              <option>
                service
              </option>
              <option>
                option
              </option>
              <option>
                service option
              </option>
            </Select>
          </div>

          <div className='col-span-2'>
            <div className="mb-2  block">
              <label className='text-[#00538F] text-xl sm:text-2xl font-semibold'>Offer Setting:</label>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2.5'>
              <div className='sm:col-span-1 py-2 flex items-center justify-between border rounded-md px-4 border-[#E3E3E3]'>
                <p className='bg-[#f9fafb] text-xl font-sm'>Request Requirements</p>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    checked={isChecked}
                    onChange={handleCheckChange}
                    type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div id="select" className='sm:col-span-1'>
                <Select
                  required={true}
                  name="expiry"
                  className='border border-[#E3E3E3] rounded-md'
                >
                  <option>
                    expiry time (optional)
                  </option>
                  <option>
                    20
                  </option>
                  <option>
                    30
                  </option>
                  <option>
                    40
                  </option>
                </Select>
              </div>
            </div>
          </div>

        </div>

        <div className='flex justify-center items-center sm:mt-4'>
          <button type='submit' className=' bg-[#00538F] text-white w-[120px] sm:w-[160px] lg:w-[200px] px-6 py-3 font-bold rounded-md whitespace-nowrap'>Send Offer</button>
        </div>
      </form>
    </div>
  );
};

export default SeCreateOfferForm;