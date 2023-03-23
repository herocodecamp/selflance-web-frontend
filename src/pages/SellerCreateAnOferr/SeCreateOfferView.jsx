import React from 'react';
import SeCreateOfferForm from '../../components/SeCreateOfferComponent/SeCreateOfferForm';
import SeCreateOfferTopBar from '../../components/SeCreateOfferComponent/SeCreateOfferTopBar';
import SeSelectService from '../../components/SeCreateOfferComponent/SeSelectService';

const SeCreateOfferView = () => {
  return (
    <div className='px-6 py-6 sm:px-12'>
      <SeCreateOfferTopBar />
      <SeSelectService />
      <SeCreateOfferForm />
    </div>
  );
};

export default SeCreateOfferView;