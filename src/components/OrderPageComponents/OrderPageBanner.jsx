import React from "react";
import BannerImage from "../../Assets/Order-Banner-bg.png";
import StarGold from "../../Assets/Star-Gold.png";


const OrderPageBanner = () => {
  return (
    <div className="container w-[1300px] h-[480px] my-20 mx-auto flex shadow-lg border border-slate-200 rounded-3xl">
      <img src={BannerImage} alt="banner images" className="w-[480px] h-[480px]"/>
      
      <div className="mt-10 ml-10 space-y-5">
        <h2 className="text-5xl font-medium">Mobile UI UX design or app UI UX design</h2>
        <div className="flex">
          <img src={StarGold} alt="star" className="w-10 h-10 mt-1"/>
          <strong className="text-5xl font-normal ml-3">5.0 <span className="text-slate-500">(520)</span></strong>
        </div>
        <p className="text-slate-500 text-5xl font-normal">Basic: <span className="text-slate-900">$30</span></p>
      </div>
    </div>
  );
};
 
export default OrderPageBanner;