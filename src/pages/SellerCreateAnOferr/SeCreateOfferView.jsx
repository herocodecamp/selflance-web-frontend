import React from 'react';
import SeCreateOfferTopBar from '../../components/SeCreateOfferComponent/SeCreateOfferTopBar';
import SeSelectService from '../../components/SeCreateOfferComponent/SeSelectService';

const SeCreateOfferView = () => {
  return (
    <div className='px-6 py-6 sm:px-12'>
      <SeCreateOfferTopBar />
      <SeSelectService />
    </div>
  );
};

export default SeCreateOfferView;