import React from "react";
import Facebook from "../../Assets/facebook.png";
import founderImg from "../../Assets/founder.png";
import instagram from "../../Assets/instragram.png";
import Linkedin from "../../Assets/linkdin.png";

const OurFounderView = () => {
  return (
    <div className="max-w-[1400px] mx-auto flex items-center  gap-x-80">
      <div className="">
        <p className="text-5xl font-bold mb-7 ">Meet Our Founder</p>
        <img src={founderImg} alt="" />
      </div>
      <div>
        <h1 className="font-bold text-5xl mb-1">Shanemadar Khan</h1>
        <small className="text-gray-500 ">Founder and CEO of Selflance</small>

        <p className="text-[#696969] mt-4 mb-6 font-medium w-[400px] leading-relaxed text-xl">“
          Any saying of you would come here and here we can say what you
          aredoing and what you are understanding. ,,
        </p>
       
        <span className="flex items-center gap-x-6">
          <img src={Linkedin} alt="" />
          <img src={instagram} alt="" />
          <img src={Facebook} alt="" />
        </span>
      </div>
    </div>
  );
};

export default OurFounderView;
