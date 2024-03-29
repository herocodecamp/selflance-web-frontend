import React, { useEffect, useState } from "react";
import Card from "../../Assets/Card.png";
import HistoryBackButton from "../../components/HistoryBackButton/";
import CommonButton from "../../components/OrderPageComponents/CommonButton";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage2Data } from "../../store/GetSellerOfferSlice";

const AddNewCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (event) => {
    event.preventDefault();
    const eventInfo = event.target;
    const paymentInfo = {
      cardNumber: eventInfo.cardNumber.value,
      firstName: eventInfo.firstName.value,
      lastName: eventInfo.lastName.value,
      date: eventInfo.date.value,
      cvv: eventInfo.cvv.value,
    };

    dispatch(setPage2Data(paymentInfo));

    navigate("/order_process");
  };

  return (
    <>
      <div className="w-[90%] md:w-[80] mx-auto shadow-md">
        <HistoryBackButton text="Add New Card" />
        <form onSubmit={handleNavigate}>
          <div className="shadow-lg border border-slate-200 rounded-3xl p-1 sm:p-2 md:p-5 lg:p-8 m-3 space-y-2">
            <img src={Card} alt="Card" className="mb-4 md:mb-10 m-auto" />
            <div className="justify-center items-center py-1">
              <label className="relative">
                <input
                  type="number"
                  name="cardNumber"
                  className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-3 px-4  addNewCardInput"
                />

                <span className="text-xl text-opacity-80 absolute left-5 -top-1 transition duration-200 input-text">
                  Card Number
                </span>
              </label>
            </div>

            <div className="sm:flex-none md:flex">
              <div className="justify-center items-center py-1 sm:w-full lg:w-[50%]">
                <label className="relative">
                  <input
                    type="text"
                    name="firstName"
                    className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-3 px-4  addNewCardInput"
                  />

                  <span className="text-xl text-opacity-80 absolute left-5 -top-1 transition duration-200 input-text">
                    First Name
                  </span>
                </label>
              </div>
              <div className="justify-center items-center py-1 md:ml-6 sm:w-full lg:w-[50%]">
                <label className="relative">
                  <input
                    type="text"
                    name="lastName"
                    className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-3 px-4  addNewCardInput"
                  />

                  <span className="text-xl text-opacity-80 absolute left-5 -top-1 transition duration-200 input-text">
                    Last Name
                  </span>
                </label>
              </div>
            </div>

            <div className="sm:flex-none md:flex">
              <div className="justify-center items-center py-1 sm:w-full lg:w-[50%]">
                <label className="relative">
                  <input
                    type="number"
                    name="date"
                    className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-3 px-4  addNewCardInput"
                  />

                  <span className="text-xl text-opacity-80 absolute left-5 -top-1 transition duration-200 input-text">
                    MM/YY
                  </span>
                </label>
              </div>
              <div className="justify-center items-center py-1 md:ml-6 sm:w-full lg:w-[50%]">
                <label className="relative">
                  <input
                    type="number"
                    name="cvv"
                    className="bg-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-slate-400 transition duration-200 w-full py-3 px-4  addNewCardInput"
                  />

                  <span className="text-xl text-opacity-80 absolute left-5 -top-1 transition duration-200 input-text">
                    CVV
                  </span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="block mb-4 mx-auto bg-primary rounded-md text-base text-white py-5 sm:py-7 md:my-10 px-6 sm:px-32 hover:ring-2 hover:underline"
          >
            Pay Now ($35.50)
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default AddNewCard;
