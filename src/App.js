import Navbar from "./common/Navbar";
import Categories from "./components/Categories";
import Header from "./components/Header";
import AboutFee from "./components/AboutFee";
import OurFounder from "./components/OurFounder";
import Feedback from "./components/Feedback";
import SelflanceApp from "./components/SelflanceApp";
import LandingPage from "./pages/LandingPage";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import WheSelflance from "./components/WheSelflance";
import FeaturedJobs from "./components/FeaturedJobs";
import SingleBlog from "./pages/SingleBlog";

import FAQ from "./common/FAQ";

import PrivacyandTerms from "./common/Privacy&Terms/PrivacyandTerms";

function App() {
  return (
    <>
   <Navbar/>

   <PrivacyandTerms title="Privacy Policy" subtitle="At Selflance, we value your privacy. Get all the details in our Privacy Policy. Updated: 27th February, 2023"/>
 
   </>
  );
}

export default App;
