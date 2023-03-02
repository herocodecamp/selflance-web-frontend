import React from "react";
import { categories } from "../../utils/mockData";

const CategoriesView = () => {
  return (
    <div >
      <div className="max-w-[1300px] mx-auto my-20">
        <div className="flex justify-between items-center">
          <p className="text-5xl font-bold">Explore Jobs by <br /> Category   </p>
          <p className="text-sm text-gray-500">We have a growing number of Jobs posted by buyers, so that <br /> you can sell your services with ease</p>

        </div>
        <div className="grid grid-cols-4 my-16 gap-8">

          {categories.map(data =><>
          <div className="shadow flex px-5 gap-x-2.5  py-4 rounded-md  border ">
            <div className={`w-[24px] mt-2 h-[24px] rounded-md bg-green-300 `}></div>
           <div>
           <p className="text-[21px] font-semibold">{data.name}</p>
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
