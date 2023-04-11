import React, { useEffect } from "react";
import HistoryBackButton from "../../components/HistoryBackButton/";
import OrderPageBanner from '../../components/OrderPageComponents/OrderPageBanner';
import OrderDetails from '../../components/OrderPageComponents/OrderDetails';
import OrderSummary from '../../components/OrderPageComponents/OrderSummary';
import Button from '../../components/OrderPageComponents/CommonButton';
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSellerOffer } from "../../store/GetSellerOfferSlice";



const OrderPage = () => {
  const { offerId } = useParams();
  console.log('offerId', offerId)
  const dispatch = useDispatch();
  const sellerOffer = useSelector((state) => state.sellerOffer[offerId]);
  console.log("seller Offer", sellerOffer)

  useEffect(() => {
    dispatch(fetchSellerOffer(offerId));
  }, [dispatch, offerId]);

    return (
      <>
        <div className="w-[95%] sm:w-[90%] md:w-[85%] mx-auto">
          <HistoryBackButton text="Order"/>
          <OrderPageBanner/>
    
          <OrderDetails sellerOffer={sellerOffer}/>
    
          <OrderSummary sellerOffer={sellerOffer}/>
    
          <Button text="Continue" className="block mb-4 mx-auto bg-primary rounded-md text-base text-white py-3 sm:py-5 md:py-7 px-10 sm:px-20 md:px-32 hover:ring-2 hover:underline"/>
        </div>
        <Footer/>
      </>
    );
};
 
export default OrderPage;