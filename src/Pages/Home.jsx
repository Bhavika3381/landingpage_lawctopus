import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Testimonials from "../Components/Testimonials/Testimonials";
import Courses from "../Components/Courses/Courses";
import Footer from "../Components/Footer/Footer";
import PricingPage from "../Components/PricingPage";
import Opportunities from "../Components/Opportunities/Opportunities";
// import CourseStructure from "../Components/CourseStructure";
import SuccessStories from "../Components/SuccessStories";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Testimonials />
      {/* <CourseStructure /> */}
      <SuccessStories />
      <PricingPage />
      <Opportunities />
      <Footer />
    </>
  );
}

export default Home;