import React, { useEffect, useState } from "react";

const SeStandardMantain = ({ standard }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent < standard.percent
    ) {
      const interval = setInterval(() => {
        setPercent((prevPercent) => prevPercent + 1);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [percent]);

  return (
    <div className="flex items-center px-4 py-4 bg-[#FFFFFF] border-2 border-[#EAEAEA] rounded-xl space-x-6">
      <div className="relative inline-block">
        <div className="overflow-hidden rounded-full w-[94px] h-[94px]">
          <svg
            className="absolute top-0 left-0 transform rotate-90"
            viewBox="0 0 32 32"
          >
            <circle
              className="stroke-current text-transparent"
              strokeWidth="4"
              stroke="#d2d6dc"
              fill="none"
              r="14"
              cx="16"
              cy="16"
            />
            <circle
              className="stroke-current text-green-500"
              strokeWidth="4"
              stroke="#00B012"
              fill="none"
              r="14"
              cx="16"
              cy="16"
              strokeDasharray={`${percent}, 100`}
              strokeLinecap="round"
            />
          </svg>
          <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full">
            <span className="text-2xl font-bold">{`${percent}%`}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[#121F3E] text-xl lg:text-2xl font-bold">{standard.title}</h3>
        <p><span className="text-[#00B012] text-xl leading-6 font-semibold">{standard.increase}</span><span> From previous month</span></p>
      </div>
    </div>
  );
};

export default SeStandardMantain;