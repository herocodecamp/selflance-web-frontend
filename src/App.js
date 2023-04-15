import Navbar from "./common/Navbar";
import NavbarLoggedIn from "./common/NavbarLoggedIn";
import Feedback from "./components/Feedback";

import LandingPage from "./pages/LandingPage";
import Blogs from "./pages/Blogs/Blogs";
import SingleBlog from "./pages/SingleBlog";
import SellerProfile from "./pages/SellerProfile";
import ServiceDetails from "./pages/ServiceDetails";
import PrivacyandTerms from "./common/Privacy&Terms/PrivacyandTerms";
import ManageOrder from "./pages/ManageOrderPage";
import SearchPage from "./pages/SearcePage";
import PremiumSellerPage from "./pages/PremiumSellerPage";
import Dashboard from "./pages/DashBoardPage";

import OrderPage from "./pages/OrderPage";
import AddNewCardPage from "./pages/AddNewCardPage";
import OrderProcessingPage from "./pages/OrderProcessingPage/OrderProcessingPage";
import CustomerSupportPage from "./pages/CustomerSupportPage";
import BuyerOrderManagementPage from "./pages/BuyerOrderManagementPage";
import LoginPage from "./pages/LoginPage";
import ConfirmPage from "./pages/ConfirmPage";
import SignUpPage from "./pages/SignUpPage";

// Section
import PostJobPage from "./pages/PostJobPage";
import ReviewJobPage from "./pages/ReviewJobPage";
import JobResponsePage from "./pages/JobResponse";
import JobList from "./pages/JobList";
import JobDetail from "./pages/BuyerJobDetail";
import Messaging from "./components/Messaging";
import BecomeSeller from "./pages/BecomeSeller";
import GuidelinePage from "./pages/Guideline";
import MenuPage from "./pages/Menu";
import SupportPage from "./pages/Support";
import WorkplacePage from "./pages/Workplace";
import VerificationPage from "./pages/Verification";

import Dashboar from "./pages/DashBoardPage";

import OrderProcess from "./pages/orderRequirements/OrderProcess";
import SubmiteRequirement from "./pages/orderRequirements/SubmiteRequirement";
import SubmitRequirement2 from "./pages/orderRequirements/SubmitRequirement2";
import Congratulations from "./pages/orderRequirements/Congratulations";
import SeDashboard from "./pages/SellerDashboard";
import SellerSearchPage from "./pages/SellerSearchPage";
import SeDashboardPage2 from "./pages/SellerDashBoard2";

import OrderScreen from "./components/ManageOrderComponents/OrderScreen";

import SellerApplyPage from "./pages/SellerApplyPage";
import ManageDetails from "./components/ManageOrderComponents/ManageDetails";
import ManageOrderDetails from "./components/ManageOrderComponents/OrderDetails";
import ApplySuccess from "./pages/ApplySuccess/ApplySuccess";
import SeProfileDashboardPage from "./pages/SeProfileDashboard";
// import SellerWithdrawPage from "./pages/SellerWithdraw";
import WithdrawDetailsPage from "./pages/WithdrawdetailsPage";
import WithdrawSuccessPage from "./pages/WithdrawSuccessPage/WithdrawSuccessPage";
import SeCreateOfferPage from "./pages/SellerCreateAnOferr";
import AgreementPage from "./pages/AgreementPage";
// import UploadDeliveryPage from "./pages/UploadDelivery";
import SeWriteReview from "./pages/SeWriteReview/SeWriteReview";
import WorkPlacePage from './pages/Workplace'

import LoginPageView from "./pages/LoginPage";
import SignUpPageView from "./pages/SignUpPage";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import ToasterContainer from "./utils/ToasterContainer";
import JobListPage from "./pages/JobList";



function App() {
  return (
    <>
      {/* <OrderPage/> */}
      {/* <AddNewCardPage/> */}
      {/* <OrderProcessingPage /> */}
      {/* <CustomerSupportPage/> */}
      {/* <BuyerOrderManagementPage/> */}
      {/* <LoginPage/> */}
      {/* <SignUpPage/> */}
      {/* <ConfirmPage/> */}

      {/* <Dashboard /> */}
      {/* <ServiceDetails /> */}

      {/* <Footer /> */}
      {/* <<<<<<< HEAD */}

      {/* <SubmitRequirement2 /> */}
      {/* <SubmiteRequirement /> */}

      {/* <Congratulations /> */}
      {/* <ManageOrder /> */}
      {/* <ManageOrderDetails /> */}

      {/* {/* <ServiceDetails /> */}
      {/* <ManageOrderDetails /> */}

      {/* <Dashboar /> */}
      {/* <SellerApplyPage /> */}

      {/* <SeDashboardPage2 /> */}

      {/* <SellerApplyPage /> */}
      {/* <SeDashboard /> */}
      {/* <SellerSearchPage /> */}
      {/* <ApplySuccess /> */}
      {/* <SeProfileDashboardPage /> */}

      {/* <SellerWithdrawPage /> */}
      {/* <OrderScreen /> */}
      {/* <WithdrawDetailsPage /> */}
      {/* <WithdrawSuccessPage /> */}

      {/* <SeCreateOfferPage /> */}

      {/* <AgreementPage /> */}

      {/* <AgreementPage /> */}

      {/* <UploadDeliveryPage /> */}
      {/* >>>>>>> d557f8ea6609c88871491270f3b84522c8920f57 */}
      {/* <ManageOrder /> */}
      {/* >>>>>>> 133941fa406d450496b91e82ff2d71cf7f9855f7 */}

      {/* <PremiumSellerPage /> */}
      {/* <Header /> */}
      {/* <AboutFee /> */}
      {/* <LandingPage /> */}
      {/* <SearchPage /> */}
      {/* <Blogs /> */}
      {/* <SellerProfile /> */}
      {/* <SingleBlog /> */}

      {/* <PrivacyandTerms title="Privacy Policy" subtitle="At Selflance, we value your privacy. Get all the details in our Privacy Policy. Updated: 27th February, 2023"/> */}

      {/* Routing */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <NavbarLoggedIn />
        <Routes>
          <Route path="/verifyOtp" element={<ConfirmPage />} />
          <Route path="/" element={<LandingPage />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogID" element={<SingleBlog />} />

          <Route path="/login" element={<LoginPageView />} />
          <Route path="/signup" element={<SignUpPageView />} />

          <Route path="/job_posts" element={<JobList />} />
          <Route path="/job_post/new" element={<PostJobPage />} />
          <Route path="/job_post/new/review" element={<ReviewJobPage />} />
          <Route path="/job_posts/:userID/list" element={<JobListPage />} />
          <Route path="/job_posts/:jobID/details" element={<JobDetail />} />
          <Route path="/inbox/sellername" element={<Messaging />} />

          <Route path="/buyer/orders" element={<ManageOrder />} />

              <Route path="/users/search" element={<SearchPage />} />
              <Route path="/users/search/:gigID/gig-details" element={<ServiceDetails/>} />
              <Route path="/users/:userID/profile" element={<SellerProfile/>} />
              <Route path="/:userID/gig/create" element={<WorkplacePage/>} />

              <Route path="/users/orders" element={<OrderScreen />} />
              <Route path="/users/seller/dashboard" element={<SeDashboard />} />
              <Route path="/users/buyer/dashboard" element={<Dashboard />} />

              <Route path="/become_seller/:userID" element={<BecomeSeller />} />
              <Route path="/settings/:userID" element={<MenuPage />} />
     

          <Route path="/buyer_order_process/:_id" element={<OrderPage />} />

          <Route path="/submit_requirement" element={<SubmiteRequirement />}/>
          <Route path="/submit_requirement2" element={<SubmitRequirement2 />}/>
          <Route path="/congratulations" element={<Congratulations />}/>
          <Route path="/order_process" element={<OrderProcess />}/>
          <Route path="/stripe/payment_method" element={<AddNewCardPage />}/>

          <Route
            path="/seller_create_offer/:offerId"
            element={<SeCreateOfferPage />}
          />

          <Route
            path="/privacy_policy"
            element={
              <PrivacyandTerms
                title="Privacy Policy"
                subtitle="At Selflance, we value your privacy. Get all the details in our Privacy Policy. Updated: 27th February, 2023"
              />
            }
          />
          <Route path="*" element={<><p className=" flex justify-center items-center h-screen text-4xl font-bold">page not found</p></>}/>
        </Routes>
      </BrowserRouter>
      <ToasterContainer />
    </>
  );
}

export default App;
