import React from 'react';
import OrderDetails from '../../components/OrderPageComponents/OrderDetails';
import OrderPageBanner from '../../components/OrderPageComponents/OrderPageBanner';
import OrderSummary from '../../components/OrderPageComponents/OrderSummary';
import Button from '../../components/OrderPageComponents/CommonButton';

const OrderPageView = () => {
  return (
    <div>
      
      <OrderPageBanner/>

      <OrderDetails/>

      <OrderSummary/>

      <Button text="Continue" className="block mb-4 mx-auto bg-primary rounded-md text-base text-white py-7 px-32 hover:ring-2 hover:underline"/>
    </div>
  );
};

export default OrderPageView;