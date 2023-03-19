import React from "react";
import BannerImage from "../../Assets/Order-Banner-bg.png";
import StarGold from "../../Assets/Star-Gold.png";


const OrderPageBanner = () => {
  return (
    <div className="w-[90%] sm:w-[580px] sm:h-[480px] md:w-[85%] mx-auto sm:flex-none md:flex shadow-lg border border-slate-200 rounded sm:rounded-md md:rounded-3xl my-10 pb-5 md:pb-0">
      <img src={BannerImage} alt="banner images" className="w-full h-[350px] sm:w-full md:w-[40%] sm:h-[40%] md:h-full"/>
      
      <div className="mt-10 ml-10 space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">Mobile UI UX design or app UI UX design</h2>
        <div className="flex">
          <img src={StarGold} alt="star" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"/>
         
          <strong className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal ml-3">5.0 <span className="text-slate-500">(520)</span></strong>
        </div>
        <p className="text-slate-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">Basic: <span className="text-slate-900">$30</span></p>
      </div>
    </div>
  );
};
 
export default OrderPageBanner;