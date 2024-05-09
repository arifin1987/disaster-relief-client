import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Testimonials from "../Testimonials/Testimonials";
import TopDonation from "../Top Donations/TopDonation";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopDonation />
      <Testimonials />
      <Gallery />
      <AboutUs />
    </div>
  );
};

export default Home;
