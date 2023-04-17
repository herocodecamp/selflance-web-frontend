import React, { useEffect, useState } from "react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BiArrowBack, BiUpload } from "react-icons/bi";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postMultiplePageData,
  setPage4Data,
} from "../../store/GetSellerOfferSlice";

const SubmitRequirement2 = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const page1Data = useSelector((state) => state.sellerOffer.page1Data);
  const page2Data = useSelector((state) => state.sellerOffer.page2Data);
  const page3Data = useSelector((state) => state.sellerOffer.page3Data);
  const page4Data = useSelector((state) => state.sellerOffer.page4Data);
  const userId = useSelector((state) => state.Auth.userId);

  console.log(
    { page1Data, page2Data, page3Data, page4Data },
    "whole object here"
  );

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  const handleNavigateRequirement = () => {
    if (selectedFile) {
      dispatch(setPage4Data(selectedFile));
      console.log("form data", selectedFile);
    }

    if (page1Data && page2Data && page3Data && page4Data) {
      const data = {
        page1Data,
        page2Data,
        page3Data,
        page4Data,
        userId,
      };
      dispatch(postMultiplePageData(data));
      console.log("whole data here", data);

      navigate("/congratulations");
    } else {
      console.log("data not found");
    }
  };

  return (
    <div className="sm:px-12 px-4 py-4 space-y-4">
      <h2 className="text-[#00538F] sm:xl leading-5 font-bold flex space-x-4 items-center">
        {" "}
        <BiArrowBack className="text-2xl sm:text-4xl text-[#000000] hover:cursor-pointer" />{" "}
        <span>Send Requirement</span>
      </h2>

      <div className="sm:pt-16 pt-6 ">
        <div className="bg-[#FFFFFF] rounded-3xl drop-shadow-lg sm:w-1/2 mx-auto w-full sm:py-8 px-2 sm:px-6 text-center space-y-2 sm:space-y-4 py-4">
          <BiUpload className="text-xl w-1/2 mx-auto sm:text-2xl text-[#00538F]" />
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

          <p className="text-[#696974]">or</p>

          <div {...getRootProps()} className="border-2 border-dashed p-4 ">
            <input {...getInputProps()} />
            <p className="text-[#696974] leading-4 text-base">
              drag a file, photo and document
            </p>
          </div>
        </div>
      </div>

      <div className="sm:p-12 p-4">
        {selectedFile && (
          <div className="flex items-center space-x-6">
            <span className="bg-[#E2EED8] w-[40px] h-[40px] rounded-full">
              <AiOutlineFileProtect className="text-[#00538F] text-2xl w-1/2 mx-auto mt-2" />
            </span>
            <div className="w-full space-y-4">
              <p> file uploading: {selectedFile.name}</p>

              <div className="bg-gray-200 rounded-lg h-6 w-11/12">
                <div className="bg-[#00538F] w-full rounded-lg h-6"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-center">
        <button
          disabled={!selectedFile}
          className={`font-bold text-base ${
            selectedFile ? "bg-[#00538F]" : "bg-[#80A9C7]"
          }  text-white sm:px-4 sm:py-2 px-4 py-2  rounded-lg`}
          onClick={handleNavigateRequirement}
        >
          Submit Requirement
        </button>
      </div>
    </div>
  );
};

export default SubmitRequirement2;
