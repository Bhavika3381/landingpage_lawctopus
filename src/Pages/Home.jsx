import Hero from "../Components/Hero/Hero";
import Courses from "../Components/Courses/Courses";
import PricingPage from "../Components/PricingPage";
import Opportunities from "../Components/Opportunities/Opportunities";
import SuccessStories from "../Components/SuccessStories";

function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <SuccessStories />
      <PricingPage />
      <Opportunities />
    </>
  );
}

export default Home;