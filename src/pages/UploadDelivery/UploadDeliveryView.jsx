import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { BiArrowBack, BiUpload } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdNotificationsNone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const UploadDeliveryView = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleUploadDetails = (event) => {
    event.preventDefault()

    const uploadDetails = {
      description: event.target.description.value,
      image: selectedFile
    }
    console.log("uploadDetails", uploadDetails)
  }

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }

  };

  const handleDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });


  const handleRemove = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
  }

  return (
    <div className='w-11/12 mx-auto py-6'>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-10 items-center'>
          <span><BiArrowBack className='text-[#000000] text-2xl' /></span>
          <h3 className='text-[#00538F] text-xl font-bold'>Upload Delivery</h3>
        </div>
        <div>
          <span><BsThreeDotsVertical className='text-[#121F3E]  text-2xl' /></span>
        </div>
      </div>

      <div className='sm:px-4 py-4'>

        <form onSubmit={handleUploadDetails}>
          <div className='space-y-3 py-4 sm:py-6 relative'>
            <label className='block text-xl sm:text-2xl font-semibold text-[#00538F]'>Your Message</label>

            <textarea
              className=' w-full  border focus:ring-0 border-[#E3E3E3] rounded-md bg-[#FFFFFF] text-[#8E8E8E] text-base sm:text-xl font-semibold px-4 py-2 resize-none'
              name="description"
              id="" cols="30"
              rows="10"
              placeholder='Type your message here.....'
            />

            <span className='text-[#979797] text-sm font-sm absolute right-1 bottom-8'>Max 3000 Words</span>
          </div>

          <div className='sm:pt-16 pt-6 '>
            <div className='bg-[#FFFFFF] rounded-3xl drop-shadow-lg sm:w-1/2 mx-auto w-full sm:py-8 px-2 sm:px-6 text-center space-y-2 sm:space-y-4 py-4'>

              <BiUpload className='text-xl w-1/2 mx-auto sm:text-2xl text-[#00538F]' />
              <div class="relative rounded-md shadow-sm ">
                <input
                  type="file"
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileSelect}
                />
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-[#00538F] text-white hover:text-gray-500 "
                >
                  upload file, photo and document
                </button>

              </div>

              <p className='text-[#696974]'>or</p>

              <div {...getRootProps()} className="border-2 border-dashed p-4 ">
                <input {...getInputProps()} />
                <p className='text-[#696974] leading-4 text-base'>drag a file, photo and document</p>
              </div>
            </div>
          </div>

          <div className='sm:py-12 py-6 space-y-2'>
            <h3 className='text-[#00538F] text-xl font-bold'>Deliver Files</h3>
            {selectedFile && (
              <>
                <div className='flex items-center space-x-6'>
                  <span className='bg-[#E2EED8] w-[40px] h-[40px] rounded-full'><AiOutlineFileProtect className='text-[#00538F] text-2xl w-1/2 mx-auto mt-2' /></span>
                  <div className='w-full space-y-4'>
                    <p> file uploading: {selectedFile.name}
                    </p>

                    <div className='bg-gray-200 rounded-lg h-6 w-11/12'>
                      <div className='bg-[#00538F] w-full rounded-lg h-6'></div>
                    </div>
                  </div>
                </div>

                <div className='py-6 space-y-4'>
                  <h3 className='text-xl sm:2xl font-bold text-[#000000]'>Image</h3>

                  <div className='grid sm:grid-cols-4 grid-cols-2 gap-2.5'>
                    <div className='relative'>
                      <div className='bg-[#00538F] hover:cursor-pointer w-[36px] h-[36px] rounded-full absolute -right-4 -top-4' onClick={handleRemove}>
                        <div className='flex justify-center items-center '>
                          <RxCross2 className='text-xl mt-2 text-white' />
                        </div>
                      </div>

                      {previewUrl && <img src={previewUrl} className="sm:col-span-1 shrink-0 rounded-md" alt="Preview" />}
                    </div>

                  </div>
                </div>
              </>
            )}
          </div>
          <div className='flex justify-center items-center sm:mt-4'>
            <button type='submit' className=' bg-[#00538F] text-white w-[120px] sm:w-[160px] lg:w-[200px] px-6 py-3 font-bold rounded-md whitespace-nowrap'>Send</button>
          </div>

        </form>
      </div>

     

    </div>
  );
};

export default UploadDeliveryView;