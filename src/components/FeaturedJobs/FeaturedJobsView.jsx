import React from "react";
import { jobs } from "../../utils/mockData";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";
const FeaturedJobsView = () => {
  return (
    <div className="max-w-[1400px] mx-auto my-28">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold">Featured Jobs</h1>
        <button className="bg-[#00538F]/10 font-medium text-sm text-[#00538F] rounded-md px-4 py-3">
          View All Jobs
        </button>
      </div>
      <p className="mt-4 mb-[86px] text-gray-500 text-base">
        Recent jobs and postings on the platform
      </p>

      <div className="grid grid-cols-3 gap-x-10 gap-y-6 ">
        {jobs.map((data) => (
          <>
            <div className="border bg-white shadow rounded-lg px-8 py-7 my-2">
              <small className="flex gap-x-2 pb-6 text-gray-500 items-center">
                <IoLocationOutline size={18} />
                <span>{data.location}</span>
              </small>
              <h3 className="font-bold text-2xl pb-2">{data.title}</h3>
              <p>
                <span className="text-gray-500 ">By </span>
                <span className="text-[#00538F] font-medium">
                  {data.author}.
                </span>
              </p>

              <div className="flex justify-between items-center pt-7">
                <p className="flex items-center gap-x-2">
                  <AiOutlineCalendar size={18} />
                  <span className="text-gray-500 text-sm ">{data.date}</span>
                </p>

                <button
                  className="bg-[#DD730A] py-2.5 px-4 text-white font-medium text-sm rounded-md
            "
                >
                  Apply Now
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobsView;
