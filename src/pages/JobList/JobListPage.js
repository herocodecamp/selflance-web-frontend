import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../components/Footer/Footer'
import JobListView from './JobListView'

const JobListPage = () => {
  return (
    <>
        <Navbar/>
        <JobListView/>
        <Footer/>
    </>
  )
}

export default JobListPage