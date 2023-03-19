import React from "react";
import HistoryBackButtonView from "../../components/HistoryBackButton/HistoryBackButtonView";
import OrderPageBanner from '../../components/OrderPageComponents/OrderPageBanner';
import OrderDetails from '../../components/OrderPageComponents/OrderDetails';
import OrderSummary from '../../components/OrderPageComponents/OrderSummary';
import Button from '../../components/OrderPageComponents/CommonButton';
import Footer from "../../components/Footer/Footer";



const OrderPage = () => {
   return (
      <>
        <div>
          <HistoryBackButtonView text="Order"/>
          
          <OrderPageBanner/>
    
          <OrderDetails/>
    
          <OrderSummary/>
    
          <Button text="Continue" className="block mb-4 mx-auto bg-primary rounded-md text-base text-white py-7 px-32 hover:ring-2 hover:underline"/>
        </div>
        <Footer/>
      </>
    );
};
 
export default OrderPage;