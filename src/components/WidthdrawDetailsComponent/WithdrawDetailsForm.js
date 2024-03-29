import React, { useState } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import Bkash from "../../Assets/svg/bkash.svg";
import city_bank from "../../Assets/svg/city_bank.svg";
import paypal from "../../Assets/svg/paypal.svg";
import upi from "../../Assets/svg/upi.svg";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const WithdrawDetailsForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  console.log("selectOption", selectedOption);

  const handleWithdrawData = async (event) => {
    event.preventDefault();
    const sort = event.target;

    const withdrawInfo = {
      withdraw_amount: sort.withdraw_amount.value,
      payment_method: selectedOption,
      user: userId,
    };

    const response = await axios.post(
      `http://localhost:8000/api/v1/withdraw/${userId}`,
      withdrawInfo
    );
    event.target.reset();
    if (response.data) {
      navigate("/users/seller/withdraw_success");
    }
  };

  return (
    <div className="pt-12">
      <div className="flex items-center justify-between bg-[#FFFFFF] rounded-lg drop-shadow-md px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="bg-[#00538F] bg-opacity-20 w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <span>
              <MdAccountBalanceWallet className="text-[#00538F] w-[20px] h-[20px]" />
            </span>
          </div>
          <h3 className="text-[#121F3E] text-base font-semibold lg:text-xl lg:font-bold leading-6">
            Available Balance
          </h3>
        </div>
        <h4 className=" lg:text-2xl text-xl text-[#121F3E] font-bold">
          $5000.00
        </h4>
      </div>

      <form onSubmit={handleWithdrawData}>
        <div className="py-6 sm:py-8">
          <div className="space-y-2">
            <label className="text-[#15151E] text-xl lg:text-2xl font-semibold">
              Enter Withdraw Amount
            </label>
            <br />
            <input
              className="border-1 border-[#E3E3E3] bg-[#FFFFFF] bg-opacity-15 focus:ring-0 text-[#000000] font-bold text-center rounded-md drop-shadow-md"
              placeholder="$1,250"
              type="number"
              name="withdraw_amount"
              id=""
            />
          </div>

          <div className="pt-6">
            <label className=" text-[#15151E] text-xl lg:text-2xl font-semibold">
              Withdraw Method
            </label>
            <br />

            <div className="pt-6 grid grid-cols-1 gap-7">
              <div className="flex items-center justify-between px-6 py-4  bg-[#FFFFFF] drop-shadow-lg rounded-full">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#FFEAD1] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <img
                      src={Bkash}
                      className="text-[#00538F] w-[20px] h-[20px]"
                      alt=""
                    />
                  </div>
                  <h2 className="text-xl text-[#121F3E] font-semibold leading-7">
                    Bkash xxx xxx 9462
                  </h2>
                </div>
                <input
                  type="radio"
                  name="bkash"
                  value="bkash"
                  checked={selectedOption === "bkash"}
                  onChange={handleOptionChange}
                />
              </div>

              <div className="flex items-center justify-between px-6 py-4  bg-[#FFFFFF] drop-shadow-lg rounded-full">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#EE6B00] bg-opacity-5 w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <img
                      src={city_bank}
                      className="text-[#00538F] w-[20px] h-[20px]"
                      alt=""
                    />
                  </div>
                  <h2 className="text-xl text-[#121F3E] font-semibold leading-7">
                    City Bank xxx xxx 1873
                  </h2>
                </div>
                <input
                  type="radio"
                  name="city_bank"
                  value="city_bank"
                  checked={selectedOption === "city_bank"}
                  onChange={handleOptionChange}
                />
              </div>

              <div className="flex items-center justify-between px-6 py-4  bg-[#FFFFFF] drop-shadow-lg rounded-full">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#E4F7FF] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <img
                      src={paypal}
                      className="text-[#00538F] w-[20px] h-[20px]"
                      alt=""
                    />
                  </div>
                  <h2 className="text-xl text-[#121F3E] font-semibold leading-7">
                    Paypal xxx xxx 2456
                  </h2>
                </div>
                <input
                  type="radio"
                  name="paypal"
                  value="paypal"
                  checked={selectedOption === "paypal"}
                  onChange={handleOptionChange}
                />
              </div>

              <div className="flex items-center justify-between px-6 py-4  bg-[#FFFFFF] drop-shadow-lg rounded-full">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#7A7A7A] bg-opacity-20 w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <img
                      src={upi}
                      className="text-[#00538F] w-[30px] h-[30px]"
                      alt=""
                    />
                  </div>
                  <h2 className="text-xl text-[#121F3E] font-semibold leading-7">
                    UPI xxx xxx 2456
                  </h2>
                </div>
                <input
                  type="radio"
                  name="upi"
                  value="upi"
                  checked={selectedOption === "upi"}
                  onChange={handleOptionChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={!selectedOption}
            className=" bg-[#00538F] text-white w-[120px] sm:w-[160px] lg:w-[200px] px-6 py-3 font-bold rounded-md disabled:bg-opacity-20"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default WithdrawDetailsForm;
