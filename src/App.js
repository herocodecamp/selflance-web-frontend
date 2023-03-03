import Navbar from "./common/Navbar";
import Categories from "./components/Categories";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <>
   <Navbar/>
   <SingleBlog />
   <Footer />
   </>
  );
}

export default App;
