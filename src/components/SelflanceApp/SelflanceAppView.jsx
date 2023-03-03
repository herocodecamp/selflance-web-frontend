import React from "react";
import appStore from "../../Assets/App Store.png";
import googlePlay from "../../Assets/Play Store.png";
import mobileImage from "../../Assets/mobile.png";
const SelflanceAppView = () => {
  return (
    <div className="pl-44 flex py-32 gap-x-28">
      <div>
        <h3 className="leading-tight font-bold text-6xl mb-10">
          Never Miss an Opportunity
          <br />
          with the Selflance App
        </h3>
        <p className="text-gray-500 text-[21px] mb-16">
          With our app, you can receive real-time notifications and stay <br />
          connected with clients on-the-go, ensuring that you never <br /> miss an
          opportunity to respond promptly.
        </p>
        <div className="flex gap-x-6">
          <img src={appStore} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
      <div className="shrink-0">
        <img src={mobileImage} alt="" />
      </div>
    </div>
  );
};

export default SelflanceAppView;
