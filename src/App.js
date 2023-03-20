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
import SellerProfile from "./pages/SellerProfile";
import ServiceDetails from "./pages/ServiceDetails";
import PrivacyandTerms from "./common/Privacy&Terms/PrivacyandTerms";
import ManageOrder from "./pages/ManageOrderPage";
import SearchPage from "./pages/SearcePage";
import PremiumSellerPage from "./pages/PremiumSellerPage";
import Dashboard from "./pages/DashBoardPage";
import OrderPage  from "./pages/OrderPage";
import AddNewCardPage from "./pages/AddNewCardPage";
import OrderProcessingPage from "./pages/OrderProcessingPage/OrderProcessingPage";
import CustomerSupportPage from "./pages/CustomerSupportPage";
import BuyerOrderManagementPage from "./pages/BuyerOrderManagementPage";


function App() {
  return (
    <>
      <Navbar />

      <OrderPage/>
      {/* <AddNewCardPage/> */}
      {/* <OrderProcessingPage/> */}
      {/* <CustomerSupportPage/> */}
      {/* <BuyerOrderManagementPage/> */}

      {/* <Dashboard /> */}

      {/* <PremiumSellerPage /> */}
      {/* <Header /> */}
      {/* <AboutFee /> */}
      {/* <LandingPage /> */}
      {/* <SearchPage /> */}
      {/* <Blogs /> */}
      {/* <SellerProfile /> */}
      {/* <SingleBlog /> */}

      {/* <PrivacyandTerms title="Privacy Policy" subtitle="At Selflance, we value your privacy. Get all the details in our Privacy Policy. Updated: 27th February, 2023"/> */}
      
    </>
  );
}

export default App;
