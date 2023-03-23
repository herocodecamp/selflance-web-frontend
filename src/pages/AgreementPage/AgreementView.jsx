import React from 'react';
import AgreementForm from '../../components/AgreementComponent/AgreementForm';
import AgreementTopBar from '../../components/AgreementComponent/AgreementTopBar';

const AgreementView = () => {
  return (
    <div className='sm:px-10 sm:py-6 px-4'>
      <AgreementTopBar />
      <AgreementForm />
    </div>
  );
};

export default AgreementView;