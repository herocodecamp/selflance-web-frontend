import React from "react";
import BannerImage from "../../Assets/Order-Banner-bg.png";
import { FaStar } from "react-icons/fa";

const OrderPageBanner = ({sellerOffer, index}) => {
  const {title, packages} = sellerOffer
  return (
    <div className="border shadow-md flex-none md:flex rounded-xl md:my-10">
      <img src={BannerImage} alt="banner images" className="w-full md:w-[40%] h-96 md:h-full rounded-t-xl md:rounded-l-xl md:rounded-r-none"/>
      
      <div className="my-2 mx-2 md:mx-3 md:my-4 space-y-2 sm:space-y-4 md:space-y-6 xl:space-y-7">
        <h2 className="text-2xl sm:text-3xl md:text-[2rem] xl:text-5xl font-semibold">{title}</h2>
        <div className="flex text-xl sm:text-2xl md:text-3xl">
          <FaStar className="text-orange-400 mr-2 mt-1 lg:mt-0"/>
          <p className=" font-normal">5.0 <span className="text-slate-500">(520)</span></p>
        </div>
        <p className="text-slate-500 text-xl sm:text-2xl md:text-3xl font-normal">{packages[index].packageName}<span className="text-slate-900">{packages[index].price}</span></p>
      </div>
    </div>
  );
};
export default OrderPageBanner;