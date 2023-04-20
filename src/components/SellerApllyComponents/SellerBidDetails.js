
import { Label, TextInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import { jobResponse } from "../../api/sellerjobresponse";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SellerBidDetails = ({jobID}) => {

  const {_id} = useSelector(state=>state.UserData.data)
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
 
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  var dataToSubmit

  const handleSubmitData = (event) => {
    event.preventDefault();
    const ED = event.target;

    const ApplyData = {
      bidType: isChecked ? 'Project' :'Hourly',
      bidPrice: ED.bid.value,
      bidDuration: ED.duration.value,
      startTime: ED.time.value,
      startDate: ED.date.value,
      coverLetter: ED.description.value,
      files: selectedFile,
    };
    console.log(ApplyData)
    dataToSubmit = ApplyData

    jobResponse(_id,jobID,dataToSubmit).then((resp)=>{
      if(resp && resp.error ) {console.log(resp.error)}
      
      resp.statusText = 'OK' && 
        navigate('/job/search/success')
      
    })

  };


  

  return (
    <div className="py-6 pt-6">
      <div className="">
        <h2 className="text-[#15151E] text-xl py-2 font-semibold">Project Bid</h2>

        <div>
          <form onSubmit={handleSubmitData}>
            <div className="bg-[#FFFFFF] drop-shadow-2xl p-6 space-y-3 rounded-2xl ">
              <div className="flex space-x-4  items-center">
                <input
                  type="radio"
                  checked={isChecked}
                  value={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  name="isChecked"
                />
                <h3 className="text-[#121F3E]  text-base sm:text-xl">
                  By Project
                </h3>
              </div>
              <p className="text-[#8E8E8E] font-sm pr-6 leading-7">
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour...Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour
              </p>
            </div>

            <div>
              <div className="sm:flex sm:items-center sm:justify-between space-y-4 sm:space-y-0 space-x-0 sm:space-x-2 mt-4">
                <div className="space-y-3 mt-4">
                  <label className="block text-base lg:text-xl text-[#121F3E]">
                    Your Bid
                  </label>
                  <input
                    className="text-[#000000] placeholder-[#8E8E8E] border-2 border-[#E3E3E3] px-4 py-4 pr-8 rounded w-11/12 sm:w-[300px] lg:w-[400px] shadow leading-tight"
                    type="text"
                    name="bid"
                    placeholder="$ 90.00"
                  />
                </div>

                <div>
                  <div className="relative space-y-3 w-11/12 sm:w-[300px] lg:w-[400px]">
                    <label className="text-[#121F3E] lg:text-sl text-base">
                      Duration
                    </label>
                    <select
                      className="block appearance-none w-full bg-white border-2 border-[#E3E3E3]   px-4 py-4 pr-8 rounded shadow leading-tight "
                      value={selectedOption}
                      onChange={handleChange}
                      name="duration"
                    >
                      <option value="">Choose an option</option>
                      <option value="option1">90 days</option>
                      <option value="option2">30 days</option>
                      <option value="option3">15 days</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M14.707 7.293a1 1 0 00-1.414 0L10 10.586 6.707 7.293a1 1 0 00-1.414 1.414l3.998 3.998a1 1 0 001.414 0l3.998-3.998a1 1 0 000-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-[#15151E] lg:text-xl text-base leading-6">
                  When you can start
                </h2>
                <div className="sm:flex sm:items-center sm:justify-between space-y-4 sm:space-y-0 space-x-0 sm:space-x-2">
                  <div>
                    <div className="space-y-3">
                      <label className="block text-base lg:text-xl text-[#121F3E]">
                        Time
                      </label>
                      <input
                        className="text-[#000000] placeholder-[#8E8E8E] border-2 border-[#E3E3E3] px-4 py-4 pr-8 w-11/12 sm:w-[300px] lg:w-[400px]  rounded shadow leading-tight"
                        type="text"
                        name="time"
                        placeholder="9:00 pm"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-base lg:text-xl text-[#121F3E]">
                      Date
                    </label>
                    <input
                      className="text-[#000000] placeholder-[#8E8E8E] border-2 border-[#E3E3E3] px-4 py-4 pr-8 rounded w-11/12 sm:w-[300px] lg:w-[400px]  shadow leading-tight"
                      type="text"
                      name="date"
                      placeholder="22 Mar 2023"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-4 sm:mt-6">
                <label className="text-[#15151E] text-base font-bold">
                  Cover Letter
                </label>
                <textarea
                  className="w-11/12 sm:w-full resize-none text-[#000000] placeholder-[#8E8E8E] border-2 border-[#E3E3E3] px-4 py-2 pr-8 rounded  shadow leading-tight"
                  name="description"
                  cols="30"
                  rows="10"
                  placeholder="write your cover letter..."
                ></textarea>
              </div>

              <div className="space-y-4 mt-4">
                <h4 className="text-[#15151E] text-xl font-bold">
                  Add files <span className="text-[#8E8E8E]">(Optional)</span>
                </h4>
                <h4 className="text-[#15151E] text-base font-bold">
                  Upload file,photo and document
                </h4>

                <div class="relative w-11/12 sm:w-full resize-none text-[#8E8E8E] border-2 border-[#E3E3E3] px-4 py-4 pr-8 rounded  shadow leading-tight ">
                  <input
                    type="file"
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileSelect}
                  />
                  <div className="flex justify-between items-center">
                    <p>upload file</p>
                    <span>
                      <BiUpload />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:pt-12 p-4 sm:p-0">
              {selectedFile && (
                <div className="flex items-center space-x-6">
                  <span className="bg-[#E2EED8] w-[40px] h-[40px] rounded-full">
                    <AiOutlineFileProtect className="text-[#00538F] text-2xl w-1/2 mx-auto mt-2" />
                  </span>
                  <div className="w-full space-y-4">
                    <p> file uploading: {selectedFile.name}</p>

                    <div className="bg-[#69B22A] bg-opacity-20 rounded-lg h-6 w-11/12">
                      <div className="bg-[#00538F] w-1/2 rounded-lg h-6"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center sm:pt-6">
              <button
                disabled={!selectedFile}
                className={`font-bold text-base ${
                  selectedFile ? "bg-[#00538F]" : "bg-[#80A9C7]"
                }  text-white sm:px-6 sm:py-2 px-4 py-2  rounded-lg`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerBidDetails;
