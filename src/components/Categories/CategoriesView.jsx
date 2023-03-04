import React from "react";
import { categories } from "../../utils/mockData";

const CategoriesView = () => {
  return (
    <div >
      <div className="max-w-[1400px] mx-auto my-20 px-2">
        <div className="lg:flex justify-between text-center space-y-3 lg:space-y-0 lg:text-left items-center">
          <p className="md;text-5xl text-4xl font-bold">Explore Jobs by <br /> Category   </p>
          <p className="text-sm text-gray-500">We have a growing number of Jobs posted by buyers, so that <br /> you can sell your services with ease</p>

        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 my-12 gap-5 md:gap-8 lg:gap-4 xl:gap-8">

          {categories.map(data =><>
          <div className="shadow flex px-5 gap-x-2.5  py-4 rounded-md  border ">
            <div className={`w-[24px] mt-[6px] h-[24px] rounded-md bg-green-300 `}></div>
           <div>
           <p className="text-[21px] lg:text-base pb-1 xl:text-[21px] font-semibold">{data.name}</p>
           <p className="text-gray-500">{data.job} jobs</p>
           </div>
          </div>
          </>)}

        </div>
      </div>
    </div>
  );
};

export default CategoriesView;
