import BlogPost from "./LandingPageComponents/BlogPost";
import Carousel from "./LandingPageComponents/Carousel";
import Customers from "./LandingPageComponents/Customers";
import Data from "./LandingPageComponents/Data";
import DesignFooter from "./LandingPageComponents/DesignFooter";
import Footer from "./common/Footer";
import ManageCommunity from "./LandingPageComponents/ManageCommunity";
import NavBar from "./common/NavBar";
import OurClients from "./LandingPageComponents/OurClients";
import Pixelgrade from "./LandingPageComponents/Pixelgrade";

export default function Home() {
  return (
    <main>
      <Carousel />
      <OurClients />
      <ManageCommunity />
      <Pixelgrade />
      <Data />
      <DesignFooter />
      <Customers />
      {/* <BlogPost /> */}
      <Footer />
    </main>
  );
}
