import Navbar from "./common/Navbar";
import Categories from "./components/Categories";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import SingleBlog from "./pages/SingleBlog";
import PrivacyandTerms from "./common/Privacy&Terms/PrivacyandTerms";

function App() {
  return (
    <>
   <Navbar/>
   <PrivacyandTerms title="Privacy Policy" subtitle="At Selflance, we value your privacy. Get all the details in our Privacy Policy. Updated: 27th February, 2023"/>
   <Footer />
   </>
  );
}

export default App;
