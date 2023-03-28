import React from 'react'
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import WheSelflance from '../../components/WheSelflance';
import FeaturedJobs from '../../components/FeaturedJobs';
import AboutFee from '../../components/AboutFee';
import OurFounder from '../../components/OurFounder';
import SelflanceApp from '../../components/SelflanceApp';
import FAQ from '../../common/FAQ';
import Footer from '../../components/Footer/Footer';


const LandigPageView = () => {
  return (
    <div>
      
      <Header/>
      <Categories />
      <WheSelflance />
      <FeaturedJobs />
      <AboutFee />
      <OurFounder />
      <SelflanceApp />
      <FAQ />
      <Footer />
    </div>
  )
}

export default LandigPageView