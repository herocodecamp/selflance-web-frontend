import React, { useEffect, useState } from "react";
import HistoryBackButton from "../../components/HistoryBackButton/";
import OrderPageBanner from "../../components/OrderPageComponents/OrderPageBanner";
import OrderDetails from "../../components/OrderPageComponents/OrderDetails";
import OrderSummary from "../../components/OrderPageComponents/OrderSummary";
import Button from "../../components/OrderPageComponents/CommonButton";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  fetchSellerOffer,
  setPage1Data,
} from "../../store/GetSellerOfferSlice";

const OrderPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const { _id } = useParams();
  const location = useLocation();
  const index = new URLSearchParams(location.search).get("index");
  console.log(index, "index");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sellerOffer = useSelector((state) => state.sellerOffer[_id]);
  console.log("seller Offer", sellerOffer);

  useEffect(() => {
    dispatch(fetchSellerOffer(_id));
    dispatch(setPage1Data(sellerOffer));
  }, [dispatch, _id]);

  const handleNavigate = () => {
    // navigate payment page dynamically
    navigate(`/${paymentMethod}/payment_method`);
  };

 

  return (
    <>
      <div className="w-[95%] sm:w-[90%] md:w-[85%] mx-auto">
        <HistoryBackButton text="Order" />
        <OrderPageBanner />

        <OrderDetails
          index={index}
          sellerOffer={sellerOffer}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />

        <OrderSummary 
        index={index}
        sellerOffer={sellerOffer}
         />

        <button
          className="block mb-4 mx-auto bg-primary rounded-md text-base text-white py-3 sm:py-5 md:py-7 px-10 sm:px-20 md:px-32 hover:ring-2 hover:underline disabled:bg-opacity-20"
          disabled={paymentMethod === ""}
          onClick={() => handleNavigate()}
        >
          Continue
        </button>
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
