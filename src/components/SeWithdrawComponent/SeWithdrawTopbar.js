import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const seller_balance = {
  personal_balance: 5000.32,
  current_month_earning: 19999,
  pending_payment: 150,
};

const SeWithdrawTopbar = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.Auth.userId);

  const handleNavigate = () => {
    navigate(`/users/seller/withdraw_details/${userId}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex justify-between items-center border-b-2 border-[#D1D1D1] pb-6">
        <div className="flex space-x-10 items-center">
          <span>
            <BiArrowBack
              className="text-[#000000] text-2xl hover:cursor-pointer"
              onClick={handleBack}
            />
          </span>
          <h3 className="text-[#00538F] text-xl font-bold">Job</h3>
        </div>
        <div className="flex space-x-10 items-center">
          <span>
            <MdNotificationsNone className="text-[#00538F] text-2xl" />{" "}
          </span>
          <span>
            <BsThreeDotsVertical className="text-[#121F3E]  text-2xl" />
          </span>
        </div>
      </div>

      <div className="py-4 px-2 sm:px-6   my-6 flex items-center justify-between  bg-[#FFFFFF] drop-shadow-2xl rounded-lg ">
        <div className="sm:px-6 sm:py-4 px-4 py-4 sm:space-y-6 space-y-4">
          <div className="space-y-2 w-1/2">
            <h3 className="text-[#00538F] text-xl lg:text-2xl font-bold leading-6 lg:leading-10">
              ${seller_balance.personal_balance}
            </h3>
            <p className="text-[#00538F] font-sm text-base">personal balance</p>
          </div>

          <button
            onClick={handleNavigate}
            className="bg-[#00538F] text-white w-[120px] sm:w-[160px] lg:w-[200px] px-6 py-3 font-bold rounded-md"
          >
            Withdraw
          </button>
        </div>

        <div className="flex items-center w-1/2  justify-between relative">
          <div class="border-[1px]  border-gray-500 h-[150px]"></div>
          <div className=" sm:py-4 px-4 py-4 sm:space-y-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-[#404040] text-xl sm:text-2xl font-bold">
                This month
              </h2>

              <h3 className="text-[#00538F] text-xl lg:text-2xl font-bold leading-6 lg:leading-10">
                ${seller_balance.current_month_earning}
              </h3>
              <p className="text-[#00538F] font-sm text-base">
                personal balance
              </p>
            </div>
            <p className="text-[#000000] text-base sm:text-xl font-sm">
              Pending Payment: ${seller_balance.pending_payment}
            </p>
          </div>
          <div>
            <span className="absolute top-3 right-0 hover:cursor-pointer sm:right-4">
              <AiOutlineCalendar className="text-[#707B81] w-[30px] h-[30px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeWithdrawTopbar;
