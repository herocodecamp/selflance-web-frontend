import React from 'react'
import Footer from '../../components/Footer/Footer'
import JobDetailView from './JobDetailView';
import { useParams, useLocation } from 'react-router-dom';

const JobDetail = () => {

  const location = useLocation();


 

  return (

    <>
        
        <JobDetailView respIndex={location.state.responseIndex}/>
        <Footer/>
    </>
  )
}

export default JobDetail